import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Authorization() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState("");

  const validityCheck = (fieldName, value) => {
    if (!value) {
      return (
        `${fieldName} is required.`
      );
    }
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  const viwerEntry = async (e) => {
    e.preventDefault();
    try {
      const validation = {};
      validation.name = validityCheck("Name",name);
      validation.email = !email? "Personal Email is required" : validateEmail(email) ? null : "Email is not valid";
  
      setValidationError(validation);
  
      if (Object.values(validation).every((error) => !error)) {
   
        const response = await axios.post("http://localhost:5000/auth/viwerlogin", {name,email});

        console.log(response);
        if(response.data.status === 200) {
          localStorage.setItem("Token",response.data.token);
          navigate('/Resume');
        }
        else {
          message.error(response.data.message || "Please try again later.");
        }
      }
    } catch (error) {
      console.log(error);
      message.error(error.data.message || "Please try again later.");
    }
  }

  console.log(name,email,validationError);
  return (
    <div id="Authorization">
      <div id="viwerForm" className="d-flex flex-column justify-content-center align-items-center h-200">
      <form className="rounded p-10 " encType="multipart/form-data">
        <div className="mb-5">
          <label htmlFor="nameInput" className="form-label">Name</label><span style={{ color: "#c10000ff"}}> *</span>
          <input type="text" className="form-control" id="nameInput" placeholder="Enter Name" value={name} 
            onChange={(e) => {
              const inputValue = e.target.value;
              const nameRegex = /^[a-zA-Z\s]*$/;
              
              if (nameRegex.test(inputValue) || inputValue == "") {
                let value = inputValue.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
                setName(value);
              }
            }} />
          {validationError.name && <span style={{ color: "red" }}>{validationError.name}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email</label><span style={{ color: "#c10000ff"}}> *</span>
          <input type="email" className="form-control" id="emailInput" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {validationError.email && <span style={{ color: "red" }}>{validationError.email}</span>}
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit" onClick={viwerEntry}>Submit</button>
        </div>
      </form>
      </div>

    </div>
  )
}

export default Authorization;