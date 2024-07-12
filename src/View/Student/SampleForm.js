import React, { useState } from 'react';
import './RegistrationForm.css';

import StudentRegForm from './StudentRegForm';

const SampleForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentFirstName: '',
    studentLastName: '',
    studentGender: '',
    studentDOB: '',
    studentPhone: '',
    studentAadhar: '',
    studentGrade: '',
    studentEmail: '',
    studentAddress: '',
    fatherName: '',
    fatherContact: '',
    motherName: '',
    motherContact: '',
    healthConditions: '',
    allergies: '',
    emergencyContact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
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
    console.log(formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='formContainer'>
            <h2>Student Information</h2>

              <StudentRegForm />

            <div className='btn'>
              <button type="button" onClick={nextStep} className='nextBtn'>Next</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='formContainer'>
            <h2>Parent Information</h2>
            
            <StudentRegForm />

            <div className='btn2'>
              <button type="button" onClick={prevStep} className='nextBtn'>Previous</button>
              <button type="button" onClick={nextStep} className='nextBtn'>Next</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='formContainer'>
            <h2> Health Information</h2>

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

export default SampleForm;
