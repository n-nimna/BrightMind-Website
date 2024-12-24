import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Explore Your Learning Journey ' subtitle='Explore top-rated tutor classes in your area, offering personalized learning and expert instructors.' />
          <div className="dic">
                  <button className='btn9'>Study Now</button> 
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
