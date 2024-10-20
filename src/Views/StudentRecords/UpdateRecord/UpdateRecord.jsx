import React, { useState, useEffect } from 'react';
import styles from './UpdateRecord.module.css'; // Importing CSS module

const UpdateRecord = () => {
  const [searchName, setSearchName] = useState('');
  const [newClass, setNewClass] = useState('');
  const [newSection, setNewSection] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allNames, setAllNames] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Mock fetching student names and records, you can replace this with an API call.
    const studentRecords = [
      { name: 'John Doe', class: '10', section: 'A' },
      { name: 'Jane Smith', class: '9', section: 'B' },
      { name: 'Sam Wilson', class: '10', section: 'C' },
      { name: 'Lisa Ray', class: '8', section: 'A' },
    ];
    setRecords(studentRecords);
    setAllNames(studentRecords.map(record => record.name));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const foundRecord = records.find(record => record.name === searchName);
    if (foundRecord) {
      setNewClass(foundRecord.class);
      setNewSection(foundRecord.section);
    } else {
      alert('Record not found');
    }
    console.log(`Searching for ${searchName}`);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Logic for updating the record
    console.log({ searchName, newClass, newSection });
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchName(query);

    if (query.length > 0) {
      const filteredSuggestions = allNames.filter(name =>
        name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const foundRecord = records.find(record => record.name === suggestion);
    if (foundRecord) {
      setNewClass(foundRecord.class);
      setNewSection(foundRecord.section);
    }
    setSearchName(suggestion);
    setSuggestions([]);
  };

  return (
    <div className={styles.updateRecordContainer}>
      <h2 className={styles.title}>Update Student Record</h2>

      <form onSubmit={handleSearch} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Search by Name:</label>
          <input
            type="text"
            className={styles.input}
            value={searchName}
            onChange={handleInputChange}
            placeholder="Enter student name"
          />
          {suggestions.length > 0 && (
            <ul className={styles.suggestionsList}>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className={styles.suggestionItem}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>

      {(searchName && newClass && newSection) && (
        <form onSubmit={handleUpdate} className={styles.updateForm}>
          <h3 className={styles.subTitle}>Update Details for: {searchName}</h3>
          <div className={styles.formGroup}>
            <label className={styles.label}>New Class:</label>
            <input
              type="text"
              className={styles.input}
              value={newClass}
              onChange={(e) => setNewClass(e.target.value)}
              placeholder="Enter new class"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>New Section:</label>
            <input
              type="text"
              className={styles.input}
              value={newSection}
              onChange={(e) => setNewSection(e.target.value)}
              placeholder="Enter new section"
            />
          </div>
          <button type="submit" className={styles.updateButton}>Update Record</button>
        </form>
      )}
    </div>
  );
};

export default UpdateRecord;
