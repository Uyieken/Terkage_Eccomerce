import React, { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import "./LoginPage.css";
import ErrorModal from "./ErrorModal";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("initial");
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
      // Felix, add the login logic here
    } else {
      openModal();
    }
  };

  return (
    <div className="container">
      <div className="form">
        <div className="header">
          <h1>LOGO</h1>
          <p>Type Your email and password to login</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="emailOrPhone"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

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

          <br />
          <br />

          <button className="button" type="submit">
            Continue
          </button>
          <div className="orText">
            <p>Or</p>
            <p>Login using</p>
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

export default LoginPage;
