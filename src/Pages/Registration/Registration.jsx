import React, { useState, useEffect } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import "./Registration.css";
import google from "../../Assets/icons8-google-48.png";
import ErrorModal from "../LoginPage/ErrorModal";
import { register, axiosInstance } from "../../business_logic/auth-logic";

import { GoogleLogin } from '@react-oauth/google'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode";
import axios  from "axios";


const Registration = () => {
  const [full_name, setFull_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("initial");
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
    

  const signup = useGoogleLogin({
  
    onSuccess: async (response) => {
      // onst decodetoken = jwtDecode(response);
      console.log(getUsername());
      function getUsername() {
        return axiosInstance.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.access_token}`)
          .then((res) => {
            const username = res.data.name;
            // console.log(username);
              setFull_Name(username);
            // setfull_Name(username);
            return username
          })
      }
      
      
      // Perform the POST request after the GET request
      await axiosInstance.post("http://127.0.0.1:8000/auth/convert-token/", {
        "full_name": full_name,// full_name: full_name,
        grant_type: "convert_token",
        client_id: "ZECVBET3yZaaQEuIEBKqXEkbbQmgkbLHRpEnEBxB",
        client_secret: "bB1MSz7U3thg55lZAdFEHLGbbq3BKB18WouD1oeGSDPwUlVVtDvoIhX6OIPrXxfEJWSpvc5mlM7ULZHWKqeey5isAlnnPD5GPpFqfD91Ky8v1MNdVpPixDY4dzQb9vyJ",
        backend: "google-oauth2",
        // backend: "google-identity",
        token: response.access_token,
        
        //  full_name: "admin"
      
      })
        .then((response) => {
          // console.log("POST request successful:", response.data)
          console.log(full_name);
          // Handle the response as needed
                
        })
        .catch((error) => {
          console.error("Error performing POST request:", error);
        });
    }
  });  
          
          
        
        // onError: (error) => console.log('Login Failed:', error),
       
    
    

 
  
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const validate = () => {
    const errors = {};

    if (!full_name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(full_name);    


    if (validate()) {
      const data = await register(full_name, email, password);
      if (data) {
        setRegistrationStatus("success");
      } else {
        setRegistrationStatus("error");
      }
  
      console.log("normal");
      
    } else {
      openModal();
    }
  };

  return (
    <div className="signup-div">
      <div className="form">
        <div className="header">
          <h1>Create an Account</h1>
        </div>
        <div className="googleSignin"
          onClick={(signup)}  
        >
          <img src={google} alt="googleIcon" /> Log in with Google
        </div>

        <br />
        <p>Or sign up using</p>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Full name"
            value={full_name}
            onChange={(e) => setFull_Name(e.target.value)}
          />

          <input
            className="input"
            type="text"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className="input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <br />
          <br />

          <button className="buttons" type="submit">
            Sign up
          </button>
          <br />
          <div className="orText">
            <p>Already have an account?</p>
          </div>

          <button className="signup-btnn">Log in</button>
          {/* <div className="socialLoginButtons">
            <span className="socialLoginButton">
              <AiOutlineGoogle size={30} />
            </span>
            <span className="socialLoginButton">
              <BsFacebook size={25} />
            </span>
            <span className="socialLoginButton">
              <BsTwitter size={25} />
            </span>
          </div> */}
        </form>
        {modalOpen && <ErrorModal errors={errors} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default Registration;
