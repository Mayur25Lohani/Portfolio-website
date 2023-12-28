import React, {useEffect} from 'react'
import './about.css'
import ME from '../../assests/image1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {

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
    <section id='about' className='reveal fade-left'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>CGPA</h5>
              <small>8.38</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>POR</h5>
              <small>2 at IIT Kharagpur</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ Projects</small>
            </article>

          </div>

          <p>My name is Mayuresh Lohani, and I am currently a pre-final year undergraduate studying Metallurgical and Materials Engineering at IIT Kharagpur. I am an avid explorer, constantly seeking out new experiences and challenges to expand my horizons. I thrive on discovering my passions and developing my personality, both personally and professionally. With an insatiable curiosity, I am dedicated to fostering personal growth and carving a successful career path as an individual. </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
          
        </div>
      </div>
    </section>
  )
}

export default About