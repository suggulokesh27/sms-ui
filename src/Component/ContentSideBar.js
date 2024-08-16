import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContentSidebar.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const ContentSideBar = ({navItems}) => {
  
  const [showItem, setShowItem] = useState(null);
  const [manualInputValue,setManualInputValue] = useState(null);
  const [manualInputData, setManualInputData] = useState(["Student"]);

  const showHandler = (index) => {
    console.log("contehhhh",index)
    setShowItem(index === showItem ? null : index);
  };

  const handleManualInput = (e) => {
    e.preventDefault();
    setManualInputData(preData => [...preData,manualInputValue]);
    setManualInputValue("");
  }

  return (
    <ul className="sidedetails-ul">
      {navItems?.map((item, index) => (
        <div key={index}>
          <li onClick={() => showHandler(index)}>
            {item.name} {showItem === index ? <FaMinus /> : <FaPlus />}
          </li>
          {showItem === index && item.items && (
            <ul>
              {item.items.map((subItem, subIndex) => (
                  <Link key={subIndex} to={subItem.to}>
                  {subItem.name}
                  </Link>
              ))}
            </ul>
          )}
        </div>
      ))}

        <ul>
        <li><Link to={"services"}>Default Services</Link></li>
        <li><Link to={"manualservices"}>Manual Services</Link></li>
        </ul>
    </ul>
  );
};

export default ContentSideBar;



{/* <div className="serviceContainer">
        <h4 className="text-center mb-3">User Types</h4>
        <div className="defaultServices"> 
          <li> Default Services  <FaPlus /></li>
          <ul>
            <li>student</li>
            <li>Teacher</li>
          </ul>
        </div>
        <div className="manualServices">
          <li> Enter Manually<FaPlus /></li>
              <ul>
                <form className="manualForm" onSubmit={handleManualInput}> 
                  <input type="text" placeholder="Add Service Type" required value={manualInputValue} onChange={(e) => setManualInputValue(e.target.value)} />
                  <button type="submit">Add</button>
                </form>

                {manualInputData.map((data,index) => (<li key={index}>{data}</li>))}
              </ul>
        </div>
      </div> */}

