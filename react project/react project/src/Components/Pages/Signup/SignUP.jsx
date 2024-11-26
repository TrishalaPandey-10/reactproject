import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import "./Signup.css";
import { Link } from "react-router-dom";

let Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [gender, setGender] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!userName) {
            validationErrors.userName = "Username is required";
        }
        if (!email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = "Email address is invalid";
        }
        if (!password) {
            validationErrors.password = "Password is required";
        }
        if (!gender) {
            validationErrors.gender = "Gender is required";
        }
        if (!contactNumber) {
            validationErrors.contactNumber = "Contact number is required";
        } else if (!/^\d+$/.test(contactNumber)) {
            validationErrors.contactNumber = "Contact number is invalid";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Proceed with form submission
            alert("Signup successful!");
        }
    };

    return( 
        <>
        <div className="Form_Text_Container">
          <p className="Form_Text">Already Have an account?
            <Link to="/login" id="login">Login</Link>
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="Form_Container">
            <h2>Sign Up</h2>
            <div className="Fields">
              <div>
                <label htmlFor="userName">Username:</label>
              </div>
              <div>
                <input 
                    type="text" 
                    id="userName" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                {errors.userName && <span className="error">{errors.userName}</span>}
              </div>
            </div>
            <div className="Fields">
              <div>
                <label htmlFor="email">Email:</label>
              </div>
              <div>
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>
            <div className="Fields">
              <div>
                <label htmlFor="password">Password:</label>
              </div>
              <div>
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
            </div>
            <div className="Fields">
              <label id="gender" htmlFor="gender">Gender:</label>
              <input 
                  type="radio" 
                  name="gender" 
                  value="male" 
                  onChange={(e) => setGender(e.target.value)}
                  required
              />
              <label htmlFor="genderMale" id="genderMale">Male</label>
              <input 
                  type="radio" 
                  id="genderFemale" 
                  name="gender" 
                  value="female" 
                  onChange={(e) => setGender(e.target.value)}
                  required
              />
              <label htmlFor="genderFemale">Female</label>
              {errors.gender && <span className="error">{errors.gender}</span>}
            </div>
            <div className="Fields">
              <div>
                <label htmlFor="contactNumber">Contact Number:</label>
              </div>
              <div>
                <input 
                    type="tel" 
                    id="contactNumber" 
                    pattern="[0-9]*" 
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                />
                {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
              </div>
            </div>
            <div className="button_container">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
        <Footer/>
      </>
    )
}

export default Signup;
