import React, {useEffect} from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {

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
    <section id='services' className='reveal fade-left'>
      <h5>What I Learned</h5>
      <h2>My Learnings</h2>

      <div className="container services__container">

        <article className='service'>
          <div className="service__head">
            <h3>COMPOSIT, IIT Kharagpur</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Hosted 50+ students, teachers, and esteemed guests in the Opening Ceremony of India's largest student-run Materials Science Fest.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed COMPOSIT's 28th edition website, attracting 1000+ registrations and providing detailed fest information.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Drafted the problem statement by going through over 5+ research papers and articles for Case Study on Nanosatellites and Cubesats.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Framed over 30+ questions related to various domains and fields for the quiz events Enigma and School Quiz.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>International Relations Cell, IIT Kharagpur</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Redesigned a highly effective Foreign Training Portal that facilitated 220+ students of IIT Kharagpur in securing 58 international Research Projects, resulting in total funding of INR 21.56 M.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managed Foreign Training Panel Discussion for 250+ attendees seeking research internships abroad, featuring 6 experienced seniors.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Organized Europe Semester Away/Exchange Programs Panel for 280+ students, featuring 5 experienced panelists from different IITs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Created a 100+ sponsor database, managed event logistics, conducted university SWOT analysis to boost global reach for IIT Kharagpur.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Extracurricular</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managed the Hult Prize OnCampus Round and pre-Hult preparation sessions overseeing successful execution of the event with 40+ registrations, 16 teams, 5 judges and 50+ audience turnout.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Participated in Coding Ninjas' 'CodeKaze' contest in June 2023 and Kharagpur Data Analytics Society's Data Science Hackathon 2022.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Secured 5th place out of 11 teams in 'Hack-an-Intern' Hackathon organised by 'Kode-in-KGP' in collaboration with 'Density'.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solved Zomato-Uber Eats India acquisition case study for MnAnalyse 2023 Case Competition organised by FEC club, IIT Guwahati.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Finished within the top 15 positions in the Lawn Tennis Open IIT Competition organised at IIT Kharagpur.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services