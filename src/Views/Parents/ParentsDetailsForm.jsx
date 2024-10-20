import React, { useState } from "react";
import styles from './parentsDetailsForm.module.css'; // Importing CSS module

const ParentDetailsForm = () => {
  const [formData, setFormData] = useState({
    fatherName: "",
    fatherDOB: "",
    fatherOccupation: "",
    fatherContact: "",
    motherName: "",
    motherDOB: "",
    motherOccupation: "",
    motherContact: "",
    presentAddress1: "",
    presentAddress2: "",
    presentCity: "",
    presentState: "",
    presentCountry: "",
    presentPinCode: "",
    permanentAddress1: "",
    permanentAddress2: "",
    permanentCity: "",
    permanentState: "",
    permanentCountry: "",
    permanentPinCode: "",
    sameAddress: false // Added for handling same address checkbox
  });

  const handlerChangeInput = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSameAddressChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        permanentAddress1: formData.presentAddress1,
        permanentAddress2: formData.presentAddress2,
        permanentCity: formData.presentCity,
        permanentState: formData.presentState,
        permanentCountry: formData.presentCountry,
        permanentPinCode: formData.presentPinCode,
        sameAddress: true
      });
    } else {
      setFormData({
        ...formData,
        sameAddress: false
      });
    }
  };

  return (
    <div className={styles.container}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>FATHER'S DETAILS</legend>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="fatherName" className="form-label">
              Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handlerChangeInput}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="fatherDOB" className="form-label">
              Date Of Birth<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="fatherDOB"
              name="fatherDOB"
              value={formData.fatherDOB}
              onChange={handlerChangeInput}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="fatherOccupation" className="form-label">
              Occupation
            </label>
            <input
              type="text"
              className="form-control"
              id="fatherOccupation"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handlerChangeInput}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="fatherContact" className="form-label">
              Contact Number<span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="fatherContact"
              name="fatherContact"
              value={formData.fatherContact}
              onChange={handlerChangeInput}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>MOTHER'S DETAILS</legend>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="motherName" className="form-label">
              Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="motherName"
              name="motherName"
              value={formData.motherName}
              onChange={handlerChangeInput}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="motherDOB" className="form-label">
              Date Of Birth<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="motherDOB"
              name="motherDOB"
              value={formData.motherDOB}
              onChange={handlerChangeInput}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="motherOccupation" className="form-label">
              Occupation
            </label>
            <input
              type="text"
              className="form-control"
              id="motherOccupation"
              name="motherOccupation"
              value={formData.motherOccupation}
              onChange={handlerChangeInput}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="motherContact" className="form-label">
              Contact Number<span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="motherContact"
              name="motherContact"
              value={formData.motherContact}
              onChange={handlerChangeInput}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>COMMUNICATION</legend>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Present Address</legend>
          <div className="row mb-4">
            <div className="col-md-6 mb-3">
              <label htmlFor="presentAddress1" className="form-label">
                Address Line 1 <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="presentAddress1"
                name="presentAddress1"
                value={formData.presentAddress1}
                onChange={handlerChangeInput}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="presentAddress2" className="form-label">
                Address Line 2
              </label>
              <input
                type="text"
                className="form-control"
                id="presentAddress2"
                name="presentAddress2"
                value={formData.presentAddress2}
                onChange={handlerChangeInput}
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="presentCity" className="form-label">
                City<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="presentCity"
                name="presentCity"
                value={formData.presentCity}
                onChange={handlerChangeInput}
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="presentState" className="form-label">
                State<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="presentState"
                name="presentState"
                value={formData.presentState}
                onChange={handlerChangeInput}
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="presentCountry" className="form-label">
                Country<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="presentCountry"
                name="presentCountry"
                value={formData.presentCountry}
                onChange={handlerChangeInput}
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="presentPinCode" className="form-label">
                Pin Code<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="presentPinCode"
                name="presentPinCode"
                value={formData.presentPinCode}
                onChange={handlerChangeInput}
              />
            </div>
          </div>
        </fieldset>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="sameAddress"
            name="sameAddress"
            checked={formData.sameAddress}
            onChange={handleSameAddressChange}
          />
          <label className="form-check-label" htmlFor="sameAddress">
            Permanent Address same as Present Address
          </label>
        </div>

        {!formData.sameAddress && (
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Permanent Address</legend>
            <div className="row mb-4">
              <div className="col-md-6 mb-3">
                <label htmlFor="permanentAddress1" className="form-label">
                  Address Line 1 <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="permanentAddress1"
                  name="permanentAddress1"
                  value={formData.permanentAddress1}
                  onChange={handlerChangeInput}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="permanentAddress2" className="form-label">
                  Address Line 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="permanentAddress2"
                  name="permanentAddress2"
                  value={formData.permanentAddress2}
                  onChange={handlerChangeInput}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="permanentCity" className="form-label">
                  City<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="permanentCity"
                  name="permanentCity"
                  value={formData.permanentCity}
                  onChange={handlerChangeInput}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="permanentState" className="form-label">
                  State<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="permanentState"
                  name="permanentState"
                  value={formData.permanentState}
                  onChange={handlerChangeInput}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="permanentCountry" className="form-label">
                  Country<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="permanentCountry"
                  name="permanentCountry"
                  value={formData.permanentCountry}
                  onChange={handlerChangeInput}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="permanentPinCode" className="form-label">
                  Pin Code<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="permanentPinCode"
                  name="permanentPinCode"
                  value={formData.permanentPinCode}
                  onChange={handlerChangeInput}
                />
              </div>
            </div>
          </fieldset>
        )}
      </fieldset>
    </div>
  );
};

export default ParentDetailsForm;
