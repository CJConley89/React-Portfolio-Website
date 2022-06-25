import React from 'react'
import './PortfolioPersonal.css'
import IMG1 from '../../assets/ArcGIS_API_Testing.PNG'
import IMG2 from '../../assets/portfolio2.jpg'

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
    title: 'Internal Employee Resource Center',
    link: 'https://christopherjconley.com/Side_Projects/JS_Candy_Crush/index.html',
    description: 'Javascript project to create a Candy Crush clone. Pure Javascript and CSS used to style page and create minimalist landscape background. Will posibly come back and expand upon this at a later time to add a leader board and connect to a database table to store scores and user names.'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
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