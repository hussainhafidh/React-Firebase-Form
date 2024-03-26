import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { getDatabase, ref as dbRef, push, set } from "firebase/database";
import st from "./index.module.css";
// import Img from "../../../components/Image";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAgagffc6oqCeuMVGP6sbQGUlbMBoTZmrs",
  authDomain: "react-firebase-form-3fa63.firebaseapp.com",
  databaseURL: "https://react-firebase-form-3fa63-default-rtdb.firebaseio.com",
  projectId: "react-firebase-form-3fa63",
  storageBucket: "react-firebase-form-3fa63.appspot.com",
  messagingSenderId: "300363451421",
  appId: "1:300363451421:web:b76ec44acc5dcd2fff0af4",
  measurementId: "G-RCBL9Z9CJ5"
};

// Initialize Firebase
const app3 = initializeApp(firebaseConfig);
const database3 = getDatabase(app3);
const imgstorage = getStorage(app3);

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const contactRef = dbRef(database3, "contacts");
    const newContactRef = push(contactRef);
    set(newContactRef, {
      name,
      email,
      phoneNumber,
      // company,
      message,
    });

    setSent(true);
    setName("");
    setEmail("");
    setPhoneNumber("");
    // setCompany("");
    setMessage("");
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className={st.contentContainer}>
      <div className={st.mainCont}>
        {!sent ? (
          <div className={st.modalContainer}>
            <div className={st.fdiv}>
              <h2 className={st.h11}>Connect With Us</h2>
              {/* <Img src="./cross.png" onClick={handleClose}></Img> */}
            </div>
            <h2 className={st.h22}>"Got ideas? We're ready to listen!"</h2>
            <br />
            <form onSubmit={handleSubmit} className={st.form}>
              <label>
                Name*
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className={st.inputField}
                  required
                  autocomplete="off"
                />
              </label>

              {/* <label>
                Profession
                <input
                  type="text"
                  name="company"
                  onChange={(e) => setCompany(e.target.value)}
                  className={st.inputField}
                  required
                />
              </label> */}
              <br />
              <br />
              <label>
                Email*
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={st.inputField}
                  required
                  autocomplete="off"
                />
              </label>
              <br />
              <br />
              <label>
                Phone Number*
                <PhoneInput
                  className={st.inputField}
                  id={st.phinpt}
                  placeholder="Enter phone number"
                  autocomplete="off"
                  defaultCountry="US"
                  value={phoneNumber}
                  required
                  onChange={(value) => setPhoneNumber(value)}
                />
              </label>
              <br />
              <br />
              <label>
                Message
                <textarea
                  type="text"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  className={st.inputField}
                  id={st.txtArea}
                  required
                />
              </label>

              <br />
              <br />
              {/* <div className="SubBtn"> */}
              <div style={{display:"flex", justifyContent: "center"}}>
                <button type="submit" className={st.submitButton}>
                  Send message
                </button>
              </div>
            </form>
          </div>
        ) : (
          // <h1 className={st.h111}>Our Team will contact you shortly</h1>
          <div className={st.tTemp}>
            <h1>THANK YOU!</h1>
            {/* <Img src="./msg.png"></Img> */}
            <p>
              Your message has been saved <br /> we will connect with you soon!!
            </p>
            <button onClick={handleClose}>Continue</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
