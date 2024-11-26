import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import "./Login.css";

let Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};
        
        if (!userName) {
            validationErrors.userName = "Username is required";
        }
        if (!password) {
            validationErrors.password = "Password is required";
        }
        
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Proceed with form submission
            alert("Login successful!");
        }
    };

    return( 
        <>
        <form onSubmit={handleSubmit}>
            <div className="Login_Container">
                <h2 className="heading">Login</h2>
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
                <div className="button_container">
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
        <Footer/>
        </>
    )
}

export default Login;
