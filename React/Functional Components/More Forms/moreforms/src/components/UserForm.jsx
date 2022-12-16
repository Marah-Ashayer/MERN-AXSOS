import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [firstnameError, setFirstNameError] = useState("");
    const [lastnameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");
    

    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First Name Must Be At Least 2 Char");
        }
        else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last Name Must Be At Least 5 Char");
        }
        else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email Must Be At Least 2 Char");
        }
        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password Must Be At Least 8 Char");
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if(e.target.value !== password) {
            setConfirmError("Passwords Must Match");
        }
        else {
            setConfirmError("");
        }
    }


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,confirm };
        console.log("Welcome", newUser);
        
    };

    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={handleFirstName } />
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName} />
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email : </label> 
                <input type="text" onChange={handleEmail} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirm} />
                {
                    confirmError ?
                    <p style={{color:'red'}}>{ confirmError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        </>
    );
};
    
export default UserForm;
