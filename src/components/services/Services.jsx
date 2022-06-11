import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Personal websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge base resource centers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Part management systems</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Focus on minimal design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Converting older applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create and structure databases</p>
            </li>
          </ul>
        </article>
        {/*END OF Web Development */}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Minimal graphic design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Reporting application creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Dashboard application creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI/UX design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video editing</p>
            </li>
          </ul>
        </article>
        {/*END OF Content Creation */}

        <article className='service'>
          <div className="service__head">
            <h3>Project Management</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Scrum Master for agile development team</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Product Owner for agile development team</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Project Planning</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Stakeholder interactions</p>
            </li>
          </ul>
        </article>
        {/*END OF Project Management */}
      </div>
    </section>
  )
}

export default Services