import React from "react";

const Validator = (props) => {
    const { firstName, lastName, email, password, confirmPassword } = props.state;
    
    const firstNameError = firstName.length < 2 ? "First name must be at least 2 characters." : "";
    const lastNameError = lastName.length < 2 ? "Last name must be at least 2 characters." : "";
    const emailError = email.length < 5 ? "Email must be at least 5 characters." : "";
    const passwordError = password.length < 8 ? "Password must be at least 8 characters." : "";
    const confirmPasswordError = password !== confirmPassword ? "Passwords must match." : "";
    
    return (
        <div>
        <p>{firstNameError}</p>
        <p>{lastNameError}</p>
        <p>{emailError}</p>
        <p>{passwordError}</p>
        <p>{confirmPasswordError}</p>
        </div>
    );
    }