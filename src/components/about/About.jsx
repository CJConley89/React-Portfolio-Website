import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>  
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years</small>  
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2 Organizations</small>
              <small><i><br></br> both serve worldwide customers</i></small>  
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>25+ Projects Completed and Supported</small>  
            </article>

          </div> 

          <p>
            Federal Contactor - Working for ECS Federal on their contract with USPS has given me experience with working on a multitude of applications. These applications range in scope and complexity from  small maintenance apps for our data scientists to our international scale applications that help to keep the Postal Service running. I have a desire to learn new technologies and to determine if they are applicable for my current organization.
          </p> 
          
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>  
      </div>
    </section>
  )
}

export default About