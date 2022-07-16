import React from 'react'
import './PortfolioPersonal.css'
import IMG1 from '../../assets/ArcGIS_API_Testing.PNG'
import IMG2 from '../../assets/travel-blog.png'
import IMG3 from '../../assets/monday-clone.png'

const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'ArcGIS API Testing',
    link: 'https://christopherjconley.com/Side_Projects/ArcGIS.html',
    description: 'Showcasing the ArcGIS API to create a map and perform spatial analysis on the geography of the land. This tests adding a point, line, and polygon to the ArcGIS basemap layer and utilizes the Buffer, Intersect, and Union geometry functions. Buffer is used to create a buffer area around the point by a given amount or to a given distance. Intersect then takes the polygon and sees where it will intersect with the buffer and line. Union combines all of the three into one entity allowing the user to create one area. From this point further diving into the API could be done to calculate area, distance, etc. of the selected region of the map. '
  },
  {
    id: 2, 
    image: IMG2,
    title: 'MERN Stack Blog using Sanity.IO',
    link: 'https://travel-blog-tutorial.herokuapp.com/',
    description: 'Created Blog using Sanity.IO for backend and used Node.js and Next.js for the front end. Built off of a tutorial from Code with Ania Kubów on YouTube.'
  },
  {
    id: 3, 
    image: IMG3,
    title: 'monday like clone',
    link: 'https://monday-clone-tau.vercel.app/',
    description: 'Created a project task management application using React.js, Node.js, Express, and Astra DB. Built off of a tutorial from Code with Ania Kubów on YouTube. Added functionaly to make the display responsive for tables and phones. Properly setup basic secuirty and a proxy to access the Astra DB from Vercel. Planning to come back and add authentication and the ability to login or signup.'
  }
]

const Portfolio = () => {
  return (
    <section id='personalPortfolio'>
      <h5>Fun Projects to Spend Time Honing Skills</h5>
      <h2>Personal Projects</h2>
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