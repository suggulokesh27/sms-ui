import React from 'react';
import styles from './services.module.css';
import { MdOutlineSettings } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";

const usersData = [
  {
    servicetype: "Student",
    userType: "Normal",
    actiontype: "Add"
  },
  {
    servicetype: "Teacher",
    userType: "Admin",
    actiontype: "Create"
  }
];

const Services = ({ users = usersData }) => {
  return (
    <div className={styles.userTable}>
      <table>
        <thead>
          <tr>
            <th className={styles.tableCheckBox}>
              <input type="checkbox" />
            </th>
            <th>User Type</th>
            <th>Services</th>
            <th>Actions</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className={styles.tableCheckBox}>
                <input type="checkbox" />
              </td>
              <td>
                <div>
                  <span>{user.userType}</span>
                </div>
              </td>
              <td>
                <span
                  className={`${styles.roleBadge} ${styles[user.servicetype.toLowerCase()]}`}
                >
                  {user.servicetype}
                </span>
              </td>
              <td>
                <button className={styles.modifyRoleBtn}>{user.actiontype}</button>
              </td>
              <td>
                <section className={`${styles.icon} ${styles.update}`}>
                  <MdOutlineSettings />
                  <span>Update</span>
                </section>
                <section className={`${styles.icon} ${styles.delete}`}>
                  <FaTrashCan />
                  <span>Delete</span>
                </section>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
