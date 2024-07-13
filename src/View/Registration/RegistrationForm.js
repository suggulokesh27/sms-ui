import React, { useState, useRef } from 'react';
import StudentRegForm from '../Student/StudentRegForm';
import './RegistrationForm.css';
import ParentDetailsForm from '../Parent/ParentDetailsForm';

const SampleForm = () => {
  const [step, setStep] = useState(1);
 

  const handleChange = (e) => {
    
  };

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
          <div className='formContainer'>
            {/* <h2>Student's Information</h2> */}

              <StudentRegForm />

            <div className='btn'>
            <button type="button" style={{cursor:"not-allowed" }} className='nextBtn'>Previous</button>
              <button type="button" onClick={nextStep} className='nextBtn'>Next</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='formContainer'>
            {/* <h2>Parent's Information</h2> */}
            
            <ParentDetailsForm />

            <div className='btn2'>
              <button type="button" onClick={prevStep} className='nextBtn'>Previous</button>
              <button type="button" onClick={nextStep} className='nextBtn'>Next</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='formContainer'>
            {/* <h2> Health Information</h2> */}

            <StudentRegForm />

            <div className='btn2'>
              <button type="button" onClick={prevStep} className='nextBtn'>Previous</button>
              <button type="submit" className='nextBtn'>Submit</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <ul className="list-unstyled multi-steps">
          <li className={step >= 2 ? "" : "is-active"}>Student</li>
          <li className={step >= 3 ? "" : "is-active"}>Parents</li>
          <li className={step >= 4 ? "" : "is-active"}>Health</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        {renderStep()}
      </form>
    </div>
  );
};

const RegistrationForm = () => {
  return (
    <div className='sidebarOutlet'>
      <div className='mainContainer'>
        <div className='mainOutlet'>
          <SampleForm />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
