// Link the firm to Email/Sheet needs to be done
import React, { useEffect, useState } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  // const [formData, setformData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setformData({ ...formData, [name]: value });
  // };

  const handleSubmit = async (e) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyCtiakXcOvZG5GuP-Hy5UFX6afZqXO6p2x6SjRCzYdQdQKzVXB8aVBw4jdWWluXTdV/exec";
    const forms = document.querySelector("form");
    e.preventDefault();
    console.log("Submitted")
    const msg = document.getElementById("msg");
    const formRes = new FormData(forms);
    fetch(scriptURL, {
      method: "POST",
      body: formRes,
    })
      .then((response) => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 3000);
        forms.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  };

  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <section id="contact" className="reveal fade-bottom">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>Mayuresh Lohani</h5>
            <a
              href="mailto:lohanimayuresh2551@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact-option-icon" />
            <h4>LinkedIn</h4>
            <h5>Mayuresh Lohani</h5>
            <a
              href="https://www.linkedin.com/in/mayuresh-lohani-87b28922a/"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsFacebook className="contact-option-icon" />
            <h4>Facebook</h4>
            <h5>Mayuresh Lohani</h5>
            <a
              href="https://www.facebook.com/profile.php?id=100075318804727"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form
          className="form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="Name"
            // onChange={handleChange}
            // value={formData.name}
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="Email"
            // onChange={handleChange}
            // value={formData.email}
            placeholder="Your Email"
            required
          />
          <textarea
            name="Message"
            rows="7"
            // onChange={handleChange}
            // value={formData.message}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <span id="msg"></span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
