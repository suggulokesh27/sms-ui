import React, { useState } from "react";
import './ParentsDetails.css';

const ParentDetailsForm = () => {
  const [formData, setFormData] = useState({
    fatherName: "",
    fatherDOB: "",
    motherDOB: "",
    fatherOccupation: "",
    fatherContact: "",
    motherName: "",
    motherOccupation: "",
    motherContact: "",
    presentAddress1: "",
    presentAddress2: "",
    permanentAddress1: "",
    permanentAddress2: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
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
        city: formData.city,
        state: formData.state,
        country: formData.country,
        pinCode: formData.pinCode,
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
    <div>
      <fieldset>
        <legend>FATHER'S DETAILS</legend>
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
            <label htmlFor="fatherName" className="form-label">
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


          <div className="col-md-4 mb-3">
            <label htmlFor="fatherAadhar" className="form-label">
              Aadhar Number<span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="fatherAadhar"
              name="fatherAadhar"
              value={formData.fatherAadhar}
              onChange={handlerChangeInput}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="fatherEmail" className="form-label">
              Email id
            </label>
            <input
              type="tel"
              className="form-control"
              id="fatherEmail"
              name="fatherEmail"
              value={formData.fatherEmail}
              onChange={handlerChangeInput}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="fatherQualification" className="form-label">
              Qualification<span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="fatherQualification"
              name="fatherQulification"
              value={formData.fatherQualifiction}
              onChange={handlerChangeInput}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="fatherIncome" className="form-label">
              Annual Income<span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="fatherIncome"
              name="fatherIncome"
              value={formData.fatherincome}
              onChange={handlerChangeInput}
            />
          </div>


        </div>
      </fieldset>
    
      <fieldset>
        <legend>MOTHER'S DETAILS</legend>
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

          <div className="col-md-4 mb-3">
            <label htmlFor="motherAadhar" className="form-label">
              Aadhar Number<span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="motherAadhar"
              name="motherAadhar"
              value={formData.fatherAadhar}
              onChange={handlerChangeInput}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="motherEmail" className="form-label">
              Email id
            </label>
            <input
              type="tel"
              className="form-control"
              id="motherEmail"
              name="motherEmail"
              value={formData.motherEmail}
              onChange={handlerChangeInput}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="motherQualification" className="form-label">
              Qualification<span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="motherQualification"
              name="motherQulification"
              value={formData.motherQualifiction}
              onChange={handlerChangeInput}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="motherIncome" className="form-label">
              Annual Income<span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="motherIncome"
              name="motherIncome"
              value={formData.motherincome}
              onChange={handlerChangeInput}
            />
          </div>

        </div>
      </fieldset>

      <fieldset>
        <legend>COMMUNICATION</legend>
        <fieldset>
          <legend>Present Address</legend>
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
              <label htmlFor="city" className="form-label">
                City<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={formData.city}
                onChange={handlerChangeInput}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="state" className="form-label">
                State<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                value={formData.state}
                onChange={handlerChangeInput}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="country" className="form-label">
                Country<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                value={formData.country}
                onChange={handlerChangeInput}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="pinCode" className="form-label">
                Pin Code<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handlerChangeInput}
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number<span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handlerChangeInput}
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Through<span className="text-danger">*</span>
              </label>
              <div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Call</label>
                </div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Text</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                  <label class="form-check-label" for="inlineCheckbox3">Whatsapp</label>
                </div>
              </div>
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
          <fieldset>
            <legend>Permanent Address</legend>
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
                <label htmlFor="city" className="form-label">
                  City<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handlerChangeInput}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state" className="form-label">
                  State<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handlerChangeInput}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="country" className="form-label">
                  Country<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handlerChangeInput}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pinCode" className="form-label">
                  Pin Code<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pinCode"
                  name="pinCode"
                  value={formData.pinCode}
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