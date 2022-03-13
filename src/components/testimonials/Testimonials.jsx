import React from 'react'
import './Testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: "https://www.du.edu/",
    degree: "Masters of Science, Software Development",
    year: "2018",
    concentration: "Advanced Web Solutions and Mobile Development",
    uni: "Denver University - Denver, Colorado"
  },
  {
    avatar: "https://www.scaledagileframework.com/",
    degree: "SAFe 5 Scrum Master",
    year: "2020",
    concentration: "Scaling Scrum Methodologies",
    uni: "Scaled Agile"
  },
  {
    avatar: "https://www.du.edu/",
    degree: "Masters Certificate, Geographic Information Systems",
    year: "2019",
    concentration: "Geographic Information Systems",
    uni: "Denver University - Denver, Colorado"
  },
  {
    avatar: "https://www.liberty.edu/",
    degree: "Bachelor of Science, Business Management Information Systems",
    year: "2015",
    concentration: "Application Development, Graphic Design, and Game Technologies",
    uni: "Liberty University - Lynchburg, Virginia"
  },
  {
    avatar: "https://www.occc.edu/",
    degree: "Associates in Information Security",
    year: "2012",
    concentration: "Information Security and Networking",
    uni: "Oklahoma City Community College - Oklahoma City, Oklahoma"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Knowledge Gained</h5>
      <h2>Degrees and Certification</h2>
      
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,degree,year,concentration,uni}, index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <a href={avatar} target="_blank" rel="noreferrer">
                  <div className="client__avatar">{uni}</div>
                </a>
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