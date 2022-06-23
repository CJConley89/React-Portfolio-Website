import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/ArcGIS_API_Testing.PNG'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
  {
    id: 1, 
    image: IMG4,
    credit: 'Photo by Markus Spiske on Unsplash',
    title: ' Multiple USPS Internal Applications',
    description: 'The largest applications I work closely with are: Critical Spare Parts - Part management software, Topeka Parts - defect and contact tracking for maintenance, Custodial Workloading - Application for cleaning every postal site nationwide, Dashboard X - Interal dashboard for plant managers and executives to see how each machine/site/district/region is performing, MPETAT - Software used to calculate how many technicians each site needs based on current machines and which of their technicians need training.'
  },
  {
    id: 2, 
    image: IMG1,
    credit: 'Photo by Daniel Korpai on Unsplash',
    title: 'ArcGIS API Testing',
    description: 'Showcasing the ArcGIS API to create a map and perform spatial analysis on the geography of the land. '
  },
  {
    id: 3, 
    image: IMG3,
    credit: 'Photo by Karl Pawlowicz on Unsplash',
    title: 'Internal Employee Resource Center',
    description: 'Completely overhauled the inplace system with a responsive portal that utilized Bootstrap 4. Also streamlined many php functions and SQL tables on to make them more efficient and allow more pertinent data to be stored and displayed.'
  },
  {
    id: 4, 
    image: IMG2,
    credit: 'Photo by Ferenc Almasi on Unsplash',
    title: 'Conference Department Portal',
    description: 'This was another interal resource project. The Conference Department Portal was a solo project that was a new creation to replace their paper record keeping setup at the time. Setup a LAMP stack from scratch on new hardware, created digital version of all forms and documents required for the department using HTML, CSS, PHP, JS, jQuery, AJAX, JS, and '
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Largest Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,description,credit}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <small><i>{credit}</i></small>
                <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    {description}
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