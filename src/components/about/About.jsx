import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import abt from "@/assets/immio.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Bright Mind Story' subtitle='Our Journey and Teaching Approach' />

            <p>At Bright Mind Tuition, we are dedicated to shaping the future of students through personalized learning experiences. Our story began with a 
              simple yet powerful vision: to provide high-quality education that is accessible, effective, and engaging. With a passion for 
              teaching and a commitment to student success, we have grown into a trusted hub for learners of all ages.</p>

            <p>Our approach is rooted in understanding the unique needs of each student. We use innovative teaching methods and tailor our lessons 
              to ensure that every individual reaches their full potential. Whether it's preparing for exams, improving understanding in core 
              subjects, or developing lifelong skills, we are here to guide students every step of the way.</p>

              <p>At Bright Mind Tuition, we believe that learning should be an exciting journey, and we strive to create an environment that 
                encourages curiosity, fosters critical thinking, and helps students build confidence. Join us and experience a transformative 
                approach to education that empowers students to unlock their brightest future.</p>


          </div>
          <div className='right row'>
            <img src={abt} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
