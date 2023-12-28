// Link the firm to Email/Sheet needs to be done
import React, {useEffect} from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {

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
    <section id = 'contact' className='reveal fade-bottom'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineMail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>lohanimayuresh@gmail.com</h5>
            <a href="mailto:lohanimayuresh2551@gmail.com" target='_blank' rel="noreferrer" >Send a Message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact-option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Mayuresh Lohani</h5>
            <a href="www.linkedin.com/in/mayuresh-lohani-87b28922a" target='_blank' rel="noreferrer" >Send a Message</a>
          </article>

          <article className="contact__option">
            <BsFacebook className='contact-option-icon'/>
            <h4>Facebook</h4>
            <h5>Mayuresh Lohani</h5>
            <a href="https://www.facebook.com/profile.php?id=100075318804727" target='_blank'rel="noreferrer" >Send a Message</a>
          </article>

          {/* <article className="contact__option">
            <BsWhatsapp className='contact-option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7356892392</h5>
            <a href="https://api.whatsapp.com/send?phone=+917356892392" target='_blank' rel="noreferrer">Send a Message</a>
          </article> */}

        </div>

        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact