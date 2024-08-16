import React, { useState } from "react";
import './Services.css';

const ManualServices = () => {
  const [permissions, setPermissions] = useState({
    create: { studentService: false, parentService: false, teacher: false },
    read: { studentService: false, parentService: false, teacher: false },
    update: { studentService: false, parentService: false, teacher: false },
    delete: { studentService: false, parentService: false, teacher: false },
  });

  const [newService, setNewService] = useState("");

  const handleCheckboxChange = (action, service) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [action]: {
        ...prevPermissions[action],
        [service]: !prevPermissions[action][service],
      },
    }));
  };

  const handleAddService = () => {
    if (newService.trim() === "") return; // Prevent adding empty service
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      create: { ...prevPermissions.create, [newService]: false },
      read: { ...prevPermissions.read, [newService]: false },
      update: { ...prevPermissions.update, [newService]: false },
      delete: { ...prevPermissions.delete, [newService]: false },
    }));
    setNewService(""); // Clear the input after adding the service
  };

  return (
    <>

      <div className="add-service">
        <h5 >ManualService's</h5>
        <input
          type="text"
          placeholder="Enter new service"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
        />
        <button onClick={handleAddService}>Add</button>
      </div>

      <div className="comparison">
        <table> 
          <thead>
            <tr>
              <th className="tl tl2"></th>
              {["Create", "Read", "Update", "Delete"].map((action, index) => (
                <th key={index} className={`product col-${index + 1}`}>
                  {action}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(permissions.create).map((service, rowIndex) => (
              <tr key={rowIndex} className="compare-row">
                <td className="left-column">
                  {service}
                </td>
                {["create", "read", "update", "delete"].map((action, colIndex) => (
                  <td key={colIndex} className={`col-${colIndex + 1}`}>
                    <input
                      type="checkbox"
                      checked={permissions[action][service]}
                      onChange={() => handleCheckboxChange(action, service)}
                      className="permission-checkbox"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManualServices;
