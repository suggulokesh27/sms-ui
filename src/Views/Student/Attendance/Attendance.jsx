import React, { useState, useEffect } from 'react';
import styles from './attendance.module.css'; // Import the CSS module

// Dummy student data categorized by class and section
const studentData = {
  'Class 1': {
    'A': [{ name: 'John Doe' }, { name: 'Jane Smith' }],
    'B': [{ name: 'Sam Wilson' }, { name: 'Lucy Gray' }],
  },
  'Class 2': {
    'A': [{ name: 'Liam Brown' }, { name: 'Olivia Johnson' }],
    'B': [{ name: 'Noah Davis' }, { name: 'Emma White' }],
  },
  // Add more data as needed
};

// Utility function to get the number of days in the current month
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [currentMonthName, setCurrentMonthName] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  useEffect(() => {
    // Get days in the current month and the month name
    const days = getDaysInMonth(currentYear, currentMonth);
    setDaysInMonth(days);

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    setCurrentMonthName(monthNames[currentMonth]);
  }, [currentYear, currentMonth]);

  const handleFilterStudents = () => {
    // Filter students based on selected class and section
    if (selectedClass && selectedSection) {
      const filteredStudents = studentData[selectedClass]?.[selectedSection]?.map(student => ({
        name: student.name,
        days: Array(daysInMonth).fill(false),
      })) || [];
      setStudents(filteredStudents);
    }
  };

  let updateStudent = (name, days) => {
    const updatedStudents = students.map(student =>
      student.name === name ? { ...student, days } : student
    );
    setStudents(updatedStudents);
  };



  const deleteStudent = (name) => {
    const updatedStudents = students.filter(student => student.name !== name);
    setStudents(updatedStudents);
  };

  const deleteAll = () => {
    setStudents([]);
  };


  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <h1 className={styles.header}>Attendance</h1>
        <Form 
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          handleFilterStudents={handleFilterStudents}
          deleteAll={deleteAll}
        />
      </div>
      <div className={styles.tableContainer}>
        <Table
          students={students}
          updateStudent={updateStudent}
          deleteStudent={deleteStudent}
          daysInMonth={daysInMonth}
          currentMonthName={currentMonthName}
        />
      </div>
    </div>
  );
}

const Form = ({ selectedClass, setSelectedClass, selectedSection, setSelectedSection, handleFilterStudents, deleteAll }) => {
  // Define available classes and sections
  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];
  const sections = ['A', 'B', 'C', 'D'];

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilterStudents();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <select
        className={styles.select}
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
      >
        <option value="">Select Class</option>
        {classes.map((classItem, index) => (
          <option key={index} value={classItem}>
            {classItem}
          </option>
        ))}
      </select>

      <select
        className={styles.select}
        value={selectedSection}
        onChange={(e) => setSelectedSection(e.target.value)}
      >
        <option value="">Select Section</option>
        {sections.map((section, index) => (
          <option key={index} value={section}>
            {section}
          </option>
        ))}
      </select>

      <button className={`${styles.button} ${styles.submitButton}`} type="submit">
        Submit
      </button>

      {/* <button className={`${styles.button} ${styles.deleteButton}`} type="button" onClick={deleteAll}>
        Delete All
      </button> */}
      
    </form>
  );
};

const Table = ({ students, updateStudent, deleteStudent, daysInMonth, currentMonthName }) => {
  const handleAttendanceChange = (name, index) => {
    const updatedStudents = students.map(student => {
      if (student.name === name) {
        const updatedDays = student.days.map((day, i) => (i === index ? !day : day));
        updateStudent(name, updatedDays);
      }
      return student;
    });
    console.log(updatedStudents)
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tableHead}>
          <th className={`${styles.th} ${styles.studentName}`} rowSpan={2}>Student Name</th>
          <th className={`${styles.days} ${styles.daysInMonth}`} colSpan={daysInMonth}>
            <span>{currentMonthName}</span>
          </th>
          <th className={`${styles.th} ${styles.attendedCol}`} rowSpan={2}>Days Attended</th>
        </tr>
        <tr>
          {[...Array(daysInMonth)].map((_, i) => (
            <th className={styles.days} key={i}>{i + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.name}>
            <td className={`${styles.th} ${styles.studentName}`}>{student.name}</td>
            {student.days.map((day, i) => (
              <td className={styles.td} key={i}>
                <input
                  type="checkbox"
                  checked={day}
                  onChange={() => handleAttendanceChange(student.name, i)}
                />
              </td>
            ))}
            <td className={`${styles.td} ${styles.attendedCol}`}>
              {student.days.filter(day => day).length}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Attendance;
