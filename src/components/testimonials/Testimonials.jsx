import React from 'react'
import './Testimonials.css'
import DU from '../../assets/du.jpg'
import LU from '../../assets/LU.jpg'
import OCCC from '../../assets/occc.jpg'
import SAFE from '../../assets/safe.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: DU,
    credit: 'Photo by Dom Fou on Unsplash',
    degree: "Masters of Science, Software Development",
    year: "2018",
    concentration: "Advanced Web Solutions and Mobile Development",
    uni: "Denver University - Denver, Colorado"
  },
  {
    avatar: SAFE,
    credit: 'Photo by Parabol on Unsplash',
    degree: "SAFe 5 Scrum Master",
    year: "2020",
    concentration: "Scaling Scrum Methodologies for Lean Enterprises",
    uni: "Scaled Agile"
  },
  {
    avatar: DU,
    credit: 'Photo by Dom Fou on Unsplash',
    degree: "Masters Certificate, Geographic Information Systems",
    year: "2019",
    concentration: "Geographic Information Systems",
    uni: "Denver University - Denver, Colorado"
  },
  {
    avatar: LU,
    credit: 'Photo by Drahomir Posteby-Mach on Unsplash',
    degree: "Bachelor of Science, Business Management Information Systems",
    year: "2015",
    concentration: "Application Development, Graphic Design, and Game Technologies",
    uni: "Liberty University - Lynchburg, Virginia"
  },
  {
    avatar: OCCC,
    credit: 'Photo by Erika Fletcher on Unsplash',
    degree: "Associates in Information Security",
    year: "2012",
    concentration: "Information Security and Networking",
    uni: "Oklahoma City Community College - Oklahoma City, Oklahoma"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Degrees and Certification</h5>
      <h2>Knowledge</h2>
      
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,credit,degree,year,concentration,uni}, index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt={uni} />
                  </div>
                  <small><i>{credit}</i></small>
                <h4 className='client__name'>{degree}</h4>
                <h5 className='client__name'>{uni} - {year}</h5>
                <small className='client__review'>{concentration}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials