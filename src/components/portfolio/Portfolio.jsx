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
    credit: 'Photo by Karl Pawlowicz on Unsplash',
    title: ' Multiple USPS Internal Applications',
    link: '',
    description: 'The largest applications I work closely with are: Critical Spare Parts - Part management software, Topeka Parts - defect and contact tracking for maintenance, Custodial Workloading - Application for cleaning every postal site nationwide, Dashboard X - Interal dashboard for people in the field to see how each machine/site/district/region is performing, MPETAT - Software used to calculate how many technicians each site needs based on current machines and which of their technicians need training, and NPA calculations based on the amount of pieces of mail sorted by machines. This gave me greated in depth understanding of the data that we receive from the 10,000s of machines nation-wide and how to calculate at-risk elements, amount of jams and defects, down time, and many other metrics. '
  },
  {
    id: 2, 
    image: IMG1,
    credit: '',
    title: 'ArcGIS API Testing',
    link: '%PUBLIC_URL%/Projects/ArcGIS.html',
    description: 'Showcasing the ArcGIS API to create a map and perform spatial analysis on the geography of the land. This tests adding a point, line, and polygraph to the ArcGIS basemap layer and utilizes the Buffer, Intersect, and Union geometry functions. Buffer is used to create an extra space around the point to allow it to be easier to see for the user. Intersect then takes the polygon and sees where it will intersect with the buffer and line. Union combines all of the three into one entity allowing the user to create one area. From this point further diving into the API could be done to calculate area, distance, etc. of the selected region of the map. '
  },
  {
    id: 3, 
    image: IMG3,
    credit: 'Photo by Karl Pawlowicz on Unsplash',
    title: 'Internal Employee Resource Center',
    link: '',
    description: 'Completely overhauled the inplace system with a responsive portal that utilized Bootstrap 4. The original system was a system of simple HTML pages that displaced help articles, troubleshooting steps, etc. for the support staff. Rewrote the majority of this information in a C.R.U.D. application style so that one front end could populate any article once it was entered into the database. Also streamlined many php functions and SQL tables on to make them more efficient and allow more pertinent data to be stored and displayed.'
  },
  {
    id: 4, 
    image: IMG2,
    credit: 'Photo by Ferenc Almasi on Unsplash',
    title: 'Conference Department Portal',
    link: '',
    description: 'This was another interal resource project. The Conference Department Portal was a solo project that was a new creation to replace their paper record keeping setup at the time. Setup a LAMP stack from scratch on new hardware, created digital version of all forms and documents required for the department using HTML, CSS, PHP, JS, jQuery, AJAX, JS, MySQL, and the Bootstrap 3 framework. This application also implemented the MVC framework, CodeIgniter.'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Largest Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,description,credit,link}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <small><i>{credit}</i></small>
                {link ? (
                  <a href={link} target='_blank' rel="noreferrer"><h3>{title}</h3></a>
                ) : (
                  <h3>{title}</h3>
                )}
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