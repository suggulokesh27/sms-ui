import React, { useState } from "react";
import "./StudentRegForm.css"
import PhotoUpload from "../../Utils/PhotoUpload";
import { FaImage } from "react-icons/fa6";

const StudentRegForm = ({ formData, handlerChangeInput, isFormValid }) => {
  const [show, setShow] = useState(false);
  let [photoName,setPhotoName] = useState(null);
  const photoModelShow = () => {
    setShow(true);
  }

  const photoModelClose = () => {
    setShow(false);
    console.log("from model")
  }

  const handlePhotoChanged = data => {
    setPhotoName(data)
  }
  return (
    <>
      <fieldset>
        <legend>STUDENT'S DETAILS</legend>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            <div className="col">
              <label htmlFor="firstName" className="form-label">First Name<span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="firstName" name="firstName" value={formData?.firstName} onChange={handlerChangeInput} />
              {isFormValid.firstName !== null && <p className="error-message">{isFormValid.firstName}</p>}
            </div>
            <div className="col">
              <label htmlFor="middleName" className="form-label">Middle Name</label>
              <input type="text" className="form-control" id="middleName" name="middleName" value={formData?.middleName} onChange={handlerChangeInput} />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label">Last Name<span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="lastName" name="lastName" value={formData?.lastName} onChange={handlerChangeInput} />
              {isFormValid.lastName !== null && <p className="error-message">{isFormValid.lastName}</p>}
            </div>
            <div className="col">
              <label htmlFor="birthDate" className="form-label">Date of Birth <span className="text-danger">*</span></label>
              <input type="date" className="form-control" id="birthDate" name="birthDate" value={formData?.birthDate} onChange={handlerChangeInput} />
              {isFormValid.birthDate !== null && <p className="error-message">{isFormValid.birthDate}</p>}
            </div>
            <div className="col">
              <label htmlFor="gender" className="form-label">Gender <span className="text-danger">*</span></label>
              <select className="form-select" id="gender" name="gender" value={formData?.gender} onChange={handlerChangeInput}>
                <option>Please Select Gender</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
              {isFormValid.gender !== null && <p className="error-message">{isFormValid.gender}</p>}
            </div>
            <div className="col">
              <label htmlFor="identityProof" className="form-label">Aadhar Card No. <span className="text-danger">*</span></label>
              <input type="tel" className="form-control" id="identityProof" name="identityProof" value={formData?.identityProof} onChange={handlerChangeInput} />
              {isFormValid.identityProof !== null && <p className="error-message">{isFormValid.identityProof}</p>}
            </div>
            <div className="col">
              <label htmlFor="nationality" className="form-label">Nationality</label>
              <input type="text" className="form-control" id="nationality" name="nationality" value={formData?.nationality} onChange={handlerChangeInput} />
            </div>
            <div className="col">
              <label htmlFor="motherTongue" className="form-label">Mother Tongue</label>
              <input type="text" className="form-control" id="motherTongue" name="motherTongue" value={formData?.motherTongue} onChange={handlerChangeInput} />
            </div>
            <div className="col">
              <label htmlFor="grade" className="form-label">Class <span className="text-danger">*</span></label>
              <select className="form-select" id="grade" name="grade" value={formData?.grade} onChange={handlerChangeInput}>
                <option>Please Select Class</option>
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
                <option>5th</option>
              </select>
              {isFormValid.grade !== null && <p className="error-message">{isFormValid.grade}</p>}
            </div>
            <div className="col">
            {photoName ? <img src={`data:image/jpeg;base64,${photoName.photo}`} alt="photo" width="150px" height="100px" /> :
              <label htmlFor="photo" className="form-label">Photo <span className="text-danger">*</span></label> }
              <button type="button" className="form-control" style={{height:"38px"}} onClick={photoModelShow}>
                <span><FaImage /> </span>{photoName ? photoName.id : "Upload Photo"}
              </button>
            </div>
          </div>
        </div>
      </fieldset>
      <PhotoUpload show={show} handleClose={photoModelClose} photoName = {handlePhotoChanged} />
    </>
  )
}

export default StudentRegForm;







 // const [file, setFile] = useState();
  // const [formData?, setFormData] = useState({
  //   firstName: "",
  //   middleName: "",
  //   lastName: "",
  //   birthDate: "",
  //   gender: "",
  //   identityProof: "",
  //   nationality: "",
  //   motherTongue: "",
  //   address1: "",
  //   address2: "",
  //   city: "",
  //   state: "",
  //   country: "",
  //   pinCode: "",
  //   grade: "",
  //   photo: "",
  //   mobile: ""
  // })

  //  handlerChangeInput = (e) => {
  //   const { name, value, files, type } = e.target;
  //   if (type === "file") {
  //     setFile(URL.createObjectURL(files[0]));
  //   }
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   })

  //   let validation = {};
  //     if(formData?.firstName.trim()){
  //       validation.firstName = "First Name is required."
  //     }
  //     if(formData?.lastName.trim()){
  //       validation.lastName = "Last name is required."
  //     }
  //     if(formData?.birthDate.trim()){
  //       validation.firstName = "birth Date is required."
  //     }
  //     if(formData?.identityProof.trim()){
  //       validation.firstName = "Identity Proof is required."
  //     }
  //     if(formData?.mobile.trim()){
  //       validation.firstName = "Mobile Number is required."
  //     }
  //     if(formData?.gender.trim()){
  //       validation.firstName = "Gender is required."
  //     }
  //    if(Object.keys(validation).length > 0){
  //     setFormValidate(validation);
  //    }else{
  //     console.log(formData)
  //    }
  // }



  // <div className="col">
  //           <label htmlFor="address1" className="form-label">Address 1 <span className="text-danger">*</span></label>
  //           <input type="text" className="form-control " id="address1" name="address1" value={formData?.address1} onChange={handlerChangeInput} />
  //         </div>
  //         <div className="col">
  //           <label htmlFor="address2" className="form-label">Address 2</label>
  //           <input type="text" className="form-control " id="address2" name="address2" value={formData?.address2} onChange={handlerChangeInput} />
  //         </div>
  //         <div className="col">
  //           <label htmlFor="city" className="form-label">City  <span className="text-danger">*</span></label>
  //           <input type="text" className="form-control " id="city" name="city" value={formData?.city} onChange={handlerChangeInput} />
  //         </div>
  //         <div className="col">
  //           <label htmlFor="state" className="form-label">State  <span className="text-danger">*</span></label>
  //           <input type="text" className="form-control " id="state" name="state" value={formData?.state} onChange={handlerChangeInput} />
  //         </div>
  //         <div className="col">
  //           <label htmlFor="country" className="form-label">Country  <span className="text-danger">*</span></label>
  //           <input type="text" className="form-control " id="country" name="country" value={formData?.country} onChange={handlerChangeInput} />
  //         </div>
  //         <div className="col">
  //           <label htmlFor="pinCode" className="form-label">Pin Code  <span className="text-danger">*</span></label>
  //           <input type="text" className="form-control " id="pinCode" name="pinCode" value={formData?.pinCode} onChange={handlerChangeInput} />
  //         </div>
  //         <div className="col">
  //           <label htmlFor="mobile" className="form-label">Phone Number <span className="text-danger">*</span></label>
  //           <input type="tel" className="form-control " id="mobile" name="mobile" value={formData?.mobile} onChange={handlerChangeInput} />
  //         </div>