import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const data = [
  {
    id: 1, 
    image: IMG2,
    title: ' Multiple USPS Internal Applications',
    description: 'The largest applications I work closely with are: Critical Spare Parts - Part management software, Topeka Parts - defect and contact tracking for maintenance, Custodial Workloading - Application for cleaning every postal site nationwide, Dashboard X - Interal dashboard for plant managers and executives to see how each machine/site/district/region is performing, MPETAT - Software used to calculate how many technicians each site needs based on current machines and which of their technicians need training.'
  },
  {
    id: 2, 
    image: IMG1,
    title: 'Art Gallery',
    description: 'Simple, minimalistic template that can be used to showcase artwork. Responsive web page that focuses on showing art for a artist.'
  },
  {
    id: 3, 
    image: IMG3,
    title: 'Internal Employee Resource Center',
    description: 'Completely overhauled the inplace system with a responsive portal that utilized Bootstrap 4. Also streamlined many php functions and SQL tables on to make them more efficient and allow more pertinent data to be stored and displayed.'
  },
  {
    id: 4, 
    image: IMG2,
    title: 'Conference Department Portal',
    description: 'Another internal resource project. This was a solo project that was a new creation to replace their paper record keeping setup at the time.'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Largest Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,description}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
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