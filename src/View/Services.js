import React, { useState } from "react";

import './Services.css'

const PermissionTable = () => {
  const [permissions, setPermissions] = useState({
    create: { studentService: false, parentService: false, teacher: false },
    read: { studentService: false, parentService: false, teacher: false },
    update: { studentService: false, parentService: false, teacher: false },
    delete: { studentService: false, parentService: false, teacher: false },
  });

  const handleCheckboxChange = (action, service) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [action]: {
        ...prevPermissions[action],
        [service]: !prevPermissions[action][service],
      },
    }));
  };

  return (
    <div className="comparison">
      <h5>Default User Service's</h5>
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
          {["studentService", "parentService", "teacher"].map((service, rowIndex) => (
            <tr key={rowIndex} className="compare-row">
              <td className="left-column">
                {service === "studentService"
                  ? "Student Service"
                  : service === "parentService"
                  ? "Parent Service"
                  : "Teacher"}
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
  );
};

export default PermissionTable;
