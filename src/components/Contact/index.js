import React, { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({
    //clear the input fields on the component loading by setting inital state to empty strings
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  function handleChange(e) {
    // We use the spread operator, "...formState", so we can retain the other
    // key-value pairs in this object.Without the spread operator,
    // the formState object would be overwritten to only contain the name: value key pair.
    // the name property of target refers to the name attribute of the form element.
    // the name property matches the property names of formState (name, email, and message)
    // and allows us to use [] to create dynamic property names.
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
