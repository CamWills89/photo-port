import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    //clear the input fields on the component loading by setting inital state to empty strings
    name: "",
    email: "",
    message: "",
  });
  //determine error messages and handle the error state.
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    //validate email
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    // We use the spread operator, "...formState", so we can retain the other
    // key-value pairs in this object.Without the spread operator,
    // the formState object would be overwritten to only contain the name: value key pair.
    // the name property of target refers to the name attribute of the form element.
    // the name property matches the property names of formState (name, email, and message)
    // and allows us to use [] to create dynamic property names.
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    // console.log("errorMessage", errorMessage);
  }
  //   console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          {/* due to reserved keywords in JS, we replace "for" with "htmlFor" */}
          {/* just as "class" had to be changed to "className" */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          {/* the defaultValue is asigned the intial state, which are empty strings*/}
          {/* This assignment will effectively clear the input fields in the user interface */}
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {/* this is an if statement in JSX, showing only if a validation error is met */}
        {/* && operator is a short circuit, if the first value is true, the 2nd expression is evaluated */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
