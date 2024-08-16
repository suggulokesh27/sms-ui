import React, { useEffect, useState } from 'react';
import StudentRegForm from '../Student/StudentRegForm';
import './RegistrationForm.css';
import ParentDetailsForm from '../Parent/ParentDetailsForm';
import HealthInfoForm from '../Student/HealthInfoForm';
import postApi from "../../Api/postApi";
import { checkAndRemoveExpiredToken } from '../../Utils/checkAndRemoveExpiredToken';
import axios from 'axios';

const SampleForm = ({ formSubmit }) => {
  const [step, setStep] = useState(1);
  const [fileURL, setFileUrl] = useState();
  const [file, setFile] = useState(null);


  const [studentForm, setStudentForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    identityProof: "",
    nationality: "",
    motherTongue: "",
    // address1: "",
    // address2: "",
    // city: "",
    // state: "",
    // country: "",
    // pinCode: "",
    grade: "",
    photo: "",
    // mobile: ""
  })
  //Parent State...
  const [parentForm, setParentForm] = useState({
    fatherName: "",
    fatherDOB: "",
    motherDOB: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    fatherAadhar: "",
    motherAadhar: "",
    motherQulification: "",
    fatherQulification: ""

  })

  const [address, setAddress] = useState({
    presentAddress1: "",
    presentAddress2: "",
    permanentAddress1: "",
    permanentAddress2: "",
    city: "",
    PermanentCity: "",
    PermanentState: "",
    PermanentCountry: "",
    PermanentPinCode: "",
    state: "",
    country: "",
    pinCode: "",
    sameAddress: false
  })

  const [healthForm, setHealthForm] = useState({
    bloodGroup: "",
    mentalStable: "",
    allergies: "",
    physicalActivities: "",
    surgeries: "",
    chronicIllnesses: "",
    medicalRestrictions: "",
    vaccinations: "",
    medicalAwareOf: ""
  })
  const [isFormValid, setIsFormValid] = useState({})
  const [isParentFormValid, setParentIsFormValid] = useState({})
  const [isHealthFormValid, setIsHealthFormValid] = useState({})


  const handleStudentChanged = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      const fileUrl = URL.createObjectURL(files[0]);
      setFileUrl(fileUrl);
      setFile(files[0]);
    } else {
      setStudentForm(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
    setIsFormValid({
      ...isFormValid,
      [name]: ""
    })
  };

  const handleParentInputChange = (e) => {
    const { name, value } = e.target;
    setParentForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setParentIsFormValid({
      ...isParentFormValid,
      [name]: ""
    })
  };

  const handleSameAddressChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setAddress(prevState => ({
      ...prevState,
      [name]: newValue
    }))
  };

  const handleHealthInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setHealthForm((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
    setIsHealthFormValid({
      ...isHealthFormValid,
      [name]: ""
    })
  };


  const nextStep = (index) => {
    console.log(index)


    if (index === 1) {
      let validation = {};

      if (!studentForm.firstName.match(/^[A-Za-z]{3,15}$/)) {
        validation.firstName = "First Name must be alphabet only.";
      }
      if (!studentForm.lastName.trim() || !studentForm.lastName.match(/^[A-Za-z]{3,15}$/)) {
        validation.lastName = "Last Name is required and must be alphabet only.";
      }
      if (!studentForm.birthDate.trim()) {
        validation.birthDate = "Birth Date is required before today.";
      }
      if (!studentForm.identityProof.trim() || !studentForm.identityProof.match(/^\d{12}$/)) {
        validation.identityProof = "Identity Proof is required length is 12.";
      }
      if (!studentForm.gender.trim()) {
        validation.gender = "Gender is required.";
      }
      if (Object.keys(validation).length > 0) {
        setIsFormValid(validation)
        console.log("error", validation);
      } else {
        console.log("student", studentForm)
        setStep((prevStep) => prevStep + 1);
      }

    }


    if (index === 2) {

      let isParentValid = {};

      if (!parentForm.fatherName.trim()) {
        isParentValid.fatherName = "Father Name is Required..!"
      }
      if (!parentForm.fatherAadhar.trim()) {
        isParentValid.fatherAadhar = "Father Aadhar Card number is Required..!"
      }
      if (!parentForm.motherName.trim()) {
        isParentValid.motherName = "Mother Name is Required..!"
      }
      if (!parentForm.motherAadhar.trim()) {
        isParentValid.motherAadhar = "Mother Aadhar card number is Required..!"
      }
      if (Object.keys(isParentValid).length > 0) {
        setParentIsFormValid(isParentValid);
        console.log("parent form valid failed", isParentFormValid);
      } else {
        setStep(prevStep => prevStep + 1)
        console.log("parent", parentForm)
      }

    }

  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isHealthValid = {}
    if (!healthForm.bloodGroup.trim()) {
      isHealthValid.bloodGroup = "Blood Group is required..!"
    }
    if (Object.keys(isHealthValid).length > 0) {
      setIsHealthFormValid(isHealthValid);
      console.log("healt form is not vaild", isHealthFormValid);
    } else {
      const registrationForm = new FormData();
      registrationForm.append("photo",file)
      registrationForm.append("studentRegistration",JSON.stringify(studentForm))
      formSubmit(registrationForm)
      console.log(registrationForm.get("student"))
      // console.log("student", studentForm)
      // console.log("parent", parentForm)
      // console.log("health", healthForm)
    }
  };

  const renderStep = () => {

    switch (step) {
      case 1:
        return (
          <div className='formContainer'>
            {/* <h2>Student's Information</h2> */}

            <StudentRegForm
              handlerChangeInput={handleStudentChanged}
              formData={studentForm}
              file={fileURL}
              isFormValid={isFormValid} />

            <div className='btn'>
              <button type="button" style={{ cursor: "not-allowed" }} className='nextBtn'>Previous</button>
              <button type="button" onClick={() => nextStep(step)} className='nextBtn'>Next</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='formContainer'>
            {/* <h2>Parent's Information</h2> */}

            <ParentDetailsForm
              handlerChangeInput={handleParentInputChange}
              handleSameAddressChange={handleSameAddressChange}
              formData={parentForm}
              addressForm={address}
              isParentFormValid={isParentFormValid}
            />

            <div className='btn2'>
              <button type="button" onClick={prevStep} className='nextBtn'>Previous</button>
              <button type="button" onClick={() => nextStep(step)} className='nextBtn'>Next</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='formContainer'>
            {/* <h2> Health Information</h2> */}

            <HealthInfoForm
              handlerChangeInput={handleHealthInputChange}
              formData={healthForm}
              isHealthFormValid={isHealthFormValid}
            />

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
  const [registrationForm, setRegistration] = useState(null);
  const tokenFormLocalStorage = localStorage.getItem("token");

  const formSubmit = async(data) => {
    console.log(data, "registration component...");

    try {
      const response = await axios.post('http://localhost:8081/api/v1/students/register', data, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      });
      console.log('Photo saved successfully:', response.data);
      // onSuccess(response.data.id)
  } catch (error) {
      console.error('Error saving photo:', error);
  }
    setRegistration(data)
  };

  // useEffect(() => {

  //   const headers = {
  //     // 'Authorization': `Bearer ${tokenFormLocalStorage}`
  //     'Content-Type': 'multipart/form-data',
  //   }

  //   try {
  //     const fetchData = async () => {
  //       const res = await postApi("v1/students/register", headers, registrationForm);
  //       console.log(res.data)
  //     }
  //     fetchData();

  //   } catch (err) {
  //     console.log(err)
  //   }

  //   const interVals = setInterval(checkAndRemoveExpiredToken, 30000);
  //   return () => clearInterval(interVals);

  // }, [])
  return (
      <SampleForm formSubmit={formSubmit} />
  );
};

export default RegistrationForm;
