import React from 'react';
import "./Search.css"
import StudentRegForm from '../Student/StudentRegForm';
import "../Registration/RegistrationForm.css"

const Search = () => {

  return (
    <div className='formContainer'>

      <StudentRegForm />
      <button type="button" className='nextBtn'>Next</button>
    </div>
  )
}

export default Search;
