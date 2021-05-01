import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tixiiyj",
        "template_qmz9dmc",
        e.target,
        "user_lYYZf8eXa2ptp5RHDm5zg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="container" id="contact_section">
      <h2 className="my-5">
        <span className="line-sec"></span> Contact Me
      </h2>

      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" className="form-control" />
        <label>Name</label>
        <input type="text" name="user_name" className="form-control" />
        <label>Email</label>
        <input type="email" name="user_email" className="form-control" />
        <label>Message</label>
        <textarea name="message" className="form-control" />
        <input
          type="submit"
          value="Send"
          className="my-2 btn btn-primary custom_button_common"
        />
      </form>
    </div>
  );
};

export default Contact;
