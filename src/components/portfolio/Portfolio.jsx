import React, {useEffect} from 'react'
import './portfolio.css'
import IMG2 from '../../assests/ipl.jpg'
import IMG3 from '../../assests/ir.jpg'
import IMG4 from '../../assests/comp.jpg'
import IMG5 from '../../assests/birc.jpg'
import IMG6 from '../../assests/form.png'
import IMG7 from '../../assests/book.jpg'

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'IPL Win Predictor | Self Project',
    github: 'https://github.com/Mayur25Lohani/iplwinpredictor',
    demo: 'https://ipl-winpredictor.onrender.com/'
  },

  {
    id: 2,
    image: IMG4,
    title: 'COMPOSIT Website | Team Project',
    github: 'https://github.com/Mayur25Lohani/COMPOSIT2023client',
    demo: 'https://composit.in/#/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'FT Portal | Team Project',
    // github: '#',
    demo: 'https://ircell.iitkgp.ac.in/ftp/'
  },

  {
    id: 4,
    image: IMG5,
    title: 'Bootstrap Website | Self Project',
    github: 'https://github.com/Mayur25Lohani/IRC-Bootstrap',
    demo: 'https://mayur25lohani.github.io/IRC-Bootstrap/'
  },

  {
    id: 5,
    image: IMG7,
    title: 'Book Store | Self Project',
    github: 'https://github.com/Mayur25Lohani/Kshitij_Assignment1',
    demo: 'https://mayur25lohani.github.io/Kshitij_Assignment1/'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Form Validation | Self Project',
    github: 'https://github.com/Mayur25Lohani/Form-validation',
    demo: 'https://mayur25lohani.github.io/Form-validation/'
  },

]

const Portfolio = () => {

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
    <section id='portfolio' className='reveal fade-right'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
