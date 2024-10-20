import React, { useState } from 'react';
import styles from './AddRecord.module.css'; // Importing CSS module

const AddRecord = () => {
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [studentSection, setStudentSection] = useState('');
  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for adding the record
    const newRecord = { studentName, studentClass, studentSection };
    setRecords([...records, newRecord]);
    setStudentName(''); // Clear input fields after submission
    setStudentClass('');
    setStudentSection('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.addRecordContainer}>
        <h2 className={styles.title}>Add New Record</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inlineForm}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Student Name:</label>
              <input
                type="text"
                className={styles.input}
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Class:</label>
              <input
                type="text"
                className={styles.input}
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Section:</label>
              <input
                type="text"
                className={styles.input}
                value={studentSection}
                onChange={(e) => setStudentSection(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>Add Record</button>
          </div>
        </form>

        {records.length > 0 && (
          <div className={styles.tableContainer}>
            <h3 className={styles.tableTitle}>Added Records</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Class</th>
                  <th>Section</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={index}>
                    <td>{record.studentName}</td>
                    <td>{record.studentClass}</td>
                    <td>{record.studentSection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddRecord;
