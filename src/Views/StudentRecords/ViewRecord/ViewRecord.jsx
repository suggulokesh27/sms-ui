import React, { useState, useEffect } from "react";
import styles from "./ViewRecords.module.css"; // Importing CSS module

const ViewRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Simulating fetching records from API or localStorage
    const fetchedRecords = [
      { name: "John Doe", class: "10", section: "A" },
      { name: "Jane Smith", class: "9", section: "B" },
      { name: "Sam Wilson", class: "11", section: "A" },
      { name: "Lisa Ray", class: "10", section: "C" },
      { name: "Peter Parker", class: "12", section: "B" },
      { name: "Tony Stark", class: "11", section: "C" },
      { name: "Bruce Banner", class: "9", section: "A" },
      { name: "Natasha Romanoff", class: "10", section: "B" },
    ];
    setRecords(fetchedRecords);
  }, []);

  return (
    <div>
      <div className={styles.viewRecordsContainer}>
        <h2 className={styles.title}>View Records</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.header}>Name</th>
              <th className={styles.header} style={{textAlign: "center"}}>Class</th>
              <th className={styles.header} style={{textAlign: "center"}}>Section</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index} className={styles.row}>
                <td className={styles.cell}>{record.name}</td>
                <td className={styles.cell} style={{textAlign: "center"}}>{record.class}</td>
                <td className={styles.cell} style={{textAlign: "center"}}>{record.section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewRecords;
