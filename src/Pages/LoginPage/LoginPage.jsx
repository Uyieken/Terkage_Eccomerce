import React, { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import "./LoginPage.css";
import google from "../../Assets/icons8-google-48.png";
import ErrorModal from "./ErrorModal";
import { login } from "../../business_logic/auth-logic";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("initial");
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const googlelogin = useGoogleLogin({
    onSuccess: async (response) => {
      console.log(response.access_token);
     axios.post("http://127.0.0.1:8000/auth/convert-token/", {
       
         grant_type: "convert_token",
         client_id: "zlqNvlGgwQmaMfV0ntp3q8kFvjbZrOTbzsPREZc4",
         client_secret: "iPqL697JRGZzI3qUW7kQgpMF6C0KILXkLW3NblI1Ny2Doi1ZIdaGyuVCumakRIxAaVgXGQkNkadRCkVWYQt7jPbuNyDid5Ou1Wwd8fszsPDTNhCGWPqxFoOvQXWpwaZB",
         backend: "google-oauth2",
         token: response.access_token,
        //  full_name: "admin"
      
       }).then((response) => {
       console.log(response);
     })
    },
    onError: (error) => console.log('Login Failed:', error),
    
  }
  );

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const validate = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email) && !/^\d+$/.test(email)) {
      errors.email = "Invalid email";
    }

    if (!password) {
      errors.password = "Password Required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const data = await login(email, password);

      if (data) {
        // Do something with the successful login data
        // Maybe update state or navigate to another page
        console.log("login successful");
      } else {
        openModal();
      }
    } else {
      openModal();
    }
  };

  return (
    <div className="cm">
      <div className="forml">
        <div className="header">
          <h1>Log in to your Account</h1>
        </div>
        <div className="googleLogin"
        onClick={googlelogin}>
          <img src={google} alt="googleIcon" /> Log in with Google
        </div>

        <p>Or</p>
        <form onSubmit={handleSubmit}>
          <div className="input-div">
            {/* <label htmlFor="email" className="label">
              Email Address
            </label> */}
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <label htmlFor="password" className="label">
              Password
            </label> */}
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <br />
          <br />
          <button className="buttonl" type="submit">
            Login
          </button>
          <div className="orText">
            <br />
            <p>Don't have an account?</p>
          </div>
          <button className="signup-btnn">Sign up</button>
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
        {/* {modalOpen && <ErrorModal errors={errors} onClose={closeModal} />} */}
      </div>
    </div>
  );
};

export default LoginPage;
