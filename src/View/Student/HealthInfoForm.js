import React from "react";
import "./HealthInfoForm.css";

const HealthInfoForm = ({ handlerChangeInput, formData, isHealthFormValid }) => {
    return (
        <fieldset>
            <legend>HEALTH DETAILS</legend>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div>
                        <label htmlFor="bloodGroup" className="form-label">Blood Group<span className="text-danger">*</span></label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            id="bloodGroup"
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handlerChangeInput}
                        >
                            <option value="" disabled>Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        {isHealthFormValid.bloodGroup !== null && <p className="error-message">{isHealthFormValid.bloodGroup}</p>}
                    </div>
                    <div className="col">
                        <label htmlFor="allergies" className="form-label">Do you have any allergies?<span className="text-danger">*</span></label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="allergies"
                                id="allergiesYes"
                                value="Yes"
                                checked={formData.allergies === "Yes"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="allergiesYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="allergies"
                                id="allergiesNo"
                                value="No"
                                checked={formData.allergies === "No"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="allergiesNo">No</label>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="mentalStable" className="form-label">Are there any mental health concerns or accommodations we should be aware of?<span className="text-danger">*</span></label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="mentalStable"
                                id="mentalStableYes"
                                value="Yes"
                                checked={formData.mentalStable === "Yes"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="mentalStableYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="mentalStable"
                                id="mentalStableNo"
                                value="No"
                                checked={formData.mentalStable === "No"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="mentalStableNo">No</label>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="physicalActivities" className="form-label">Are there any physical activities or conditions that may affect your participation in certain programs?<span className="text-danger">*</span></label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="physicalActivities"
                                id="physicalActivitiesYes"
                                value="Yes"
                                checked={formData.physicalActivities === "Yes"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="physicalActivitiesYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="physicalActivities"
                                id="physicalActivitiesNo"
                                value="No"
                                checked={formData.physicalActivities === "No"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="physicalActivitiesNo">No</label>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="surgeries" className="form-label">Have you had any surgeries or hospitalizations in the past?<span className="text-danger">*</span></label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="surgeries"
                                id="surgeriesYes"
                                value="Yes"
                                checked={formData.surgeries === "Yes"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="surgeriesYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="surgeries"
                                id="surgeriesNo"
                                value="No"
                                checked={formData.surgeries === "No"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="surgeriesNo">No</label>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="chronicIllnesses" className="form-label">Do you have a history of chronic illnesses or ongoing medical treatments?<span className="text-danger">*</span></label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="chronicIllnesses"
                                id="chronicIllnessesYes"
                                value="Yes"
                                checked={formData.chronicIllnesses === "Yes"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="chronicIllnessesYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="chronicIllnesses"
                                id="chronicIllnessesNo"
                                value="No"
                                checked={formData.chronicIllnesses === "No"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="chronicIllnessesNo">No</label>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="medicalRestrictions" className="form-label">Do you have any specific medical restrictions or requirements?<span className="text-danger">*</span></label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="medicalRestrictions"
                                id="medicalRestrictionsYes"
                                value="Yes"
                                checked={formData.medicalRestrictions === "Yes"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="medicalRestrictionsYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="medicalRestrictions"
                                id="medicalRestrictionsNo"
                                value="No"
                                checked={formData.medicalRestrictions === "No"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="medicalRestrictionsNo">No</label>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="vaccinations" className="form-label">Have you received all required vaccinations?<span className="text-danger">*</span></label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="vaccinations"
                                id="vaccinationsYes"
                                value="Yes"
                                checked={formData.vaccinations === "Yes"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="vaccinationsYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="vaccinations"
                                id="vaccinationsNo"
                                value="No"
                                checked={formData.vaccinations === "No"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="vaccinationsNo">No</label>
                        </div>
                    </div>
                    <div className="col">
                        <label htmlFor="medicalAwareOf" className="form-label">Are there any medical conditions we should be aware of?<span className="text-danger">*</span></label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="medicalAwareOf"
                                id="medicalAwareOfYes"
                                value="Yes"
                                checked={formData.medicalAwareOf === "Yes"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="medicalAwareOfYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="medicalAwareOf"
                                id="medicalAwareOfNo"
                                value="No"
                                checked={formData.medicalAwareOf === "No"}
                                onChange={handlerChangeInput}
                            />
                            <label className="form-check-label" htmlFor="medicalAwareOfNo">No</label>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};

export default HealthInfoForm;
