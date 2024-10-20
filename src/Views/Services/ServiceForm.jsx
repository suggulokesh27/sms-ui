import React, { useState } from 'react';
import styles from './services.module.css'
import Services from './Services';

const ServiceForm = () => {

    const [serviceData, setServiceData] = useState([]);
    const [serviceType, setServiceType] = useState(null);
    const [userType, setUserType] = useState(null);
    const [actionType, setActionType] = useState(null);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            servicetype: serviceType,
            userType : userType,
            actiontype: actionType
        }

        setServiceData(prevData => [data, ...prevData]);

        console.log(serviceData);
        setActionType(" ");
        setUserType(" ");
        setServiceType(" ");
    }


  return (
   <div className={styles.container}>
    <div id={styles.servicesForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formData}>
            <label htmlFor="service">Service Type:</label>
            <select 
                id="service" 
                name="service" 
                required
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
            >
                <option selected >Select a service type</option>
                <option value="Student">Student</option>
                <option value="Exam">Exam</option>
                <option value="Teacher">Teacher</option>
                <option value="Attendance">Attendance</option>
                <option value="Record">Record</option>
                <option value="Payment">Payment</option>
                <option value="other">Other</option>
            </select>
        </div>

       <div className={styles.formData}>
        <label htmlFor="user">User Type:</label>
            <input 
            list="userTypes"
            id="user" 
            name="user" 
            required 
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            />
            <datalist id="userTypes">
                <option value="Super Admin" />
                <option value="Admin" />
                <option value="Normal User" />
                <option value="User" />
            </datalist>
       </div>


        <div className={styles.formData}>
            <label htmlFor="actions">Actions:</label>
            <input 
            list="actionTypes" 
            id="actions" 
            name="actions" 
            required 
            value={actionType}
            onChange={(e) => setActionType(e.target.value)}
            />
            <datalist id="actionTypes">
                <option value="Add" />
                <option value="Create" />
                <option value="Delete" />
                <option value="Update" />
            </datalist> <br />
        </div>

        <button type='submit'>Add</button>
      </form>
    </div>

    <Services users = {serviceData}/>
   </div>
  );
}

export default ServiceForm;
