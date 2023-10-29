import React, { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import "./Registration.css";
import ErrorModal from "../LoginPage/ErrorModal";
import { register } from "../../business_logic/auth-logic";

const Registration = () => {
  const [full_name, setfull_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("initial");
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

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

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      // const registrationData = await register(full_name, email, password);
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
    <div className="container">
      <div className="form">
        <div className="header">
          <h1>LOGO</h1>
          <p>Enter your name, email, and password to register</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            value={full_name}
            onChange={(e) => setfull_Name(e.target.value)}
          />

          <input
            className="input"
            type="text"
            name="email"
            placeholder="Email"
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

          <br />
          <br />

          <button className="button" type="submit">
            Register
          </button>
          <div className="orText">
            <p>Or</p>
            <p>Register using</p>
          </div>
          <div className="socialLoginButtons">
            <span className="socialLoginButton">
              <AiOutlineGoogle size={30} />
            </span>
            <span className="socialLoginButton">
              <BsFacebook size={25} />
            </span>
            <span className="socialLoginButton">
              <BsTwitter size={25} />
            </span>
          </div>
        </form>
        {modalOpen && <ErrorModal errors={errors} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default Registration;
