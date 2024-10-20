import React, { useState } from 'react';
import styles from './registartionform.module.css'; // Import the CSS Module

import StudentRegForm from '../Student/StudentRegistrationForm/StudentRegistrationForm';
import ParentDetailsForm from '../Parents/ParentsDetailsForm';

const SampleForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process formData here
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className={styles.formContainer}>
            <StudentRegForm />
            <div className={styles.btn}>
              <button type="button" onClick={nextStep} className={styles.nextBtn}>Next</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.formContainer}>
            <ParentDetailsForm />
            <div className={styles.btn2}>
              <button type="button" onClick={prevStep} className={styles.nextBtn}>Previous</button>
              <button type="button" onClick={nextStep} className={styles.nextBtn}>Next</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.formContainer}>
            <StudentRegForm />
            <div className={styles.btn2}>
              <button type="button" onClick={prevStep} className={styles.nextBtn}>Previous</button>
              <button type="submit" className={styles.nextBtn}>Submit</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.form}>
      <div className="container-fluid">
        <ul className={`list-unstyled ${styles.multiSteps}`}>
          <li className={step >= 2 ? " "  : styles.isActive }>Student</li>
          <li className={step >= 3 ? " " : styles.isActive }>Parents</li>
          <li className={step >= 4 ? " " : styles.isActive }>Health</li>
        </ul>
      </div>
      <div className={styles.multiStepForm}>
        <form onSubmit={handleSubmit}>
          {renderStep()}
        </form>
      </div>
    </div>
  );
};

const RegistrationForm = () => {
  return (
    <div className={styles.form}>
      <SampleForm />
    </div>
  );
};

export default RegistrationForm;
