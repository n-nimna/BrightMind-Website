import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Find Classes by Location' 
          subtitle='Explore nearby learning hubs offering expert tutoring services in a variety of subjects.' />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h4>{item.name}</h4>
                  <p>
                    <label>{item.contact}</label>
                   </p>
                  
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
