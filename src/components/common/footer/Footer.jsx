import React from "react"
import { footer } from "../../data/Data"
import logo from '@/assets/logo.png';
import "./footer.css"
//
const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll Help You Achieve Academic Success.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box3'>
            <div className='logo'>
              <img src={logo} alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Subscribe to receive exclusive updates, special offers, tutorials,all delivered straight to your inbox.</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            
            </div>
          </div>

          {footer.map((val) => (
            <div className='box1'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© Nimeshi Dilshara All Right Reserved.</span>
      </div>
    </>
  )
}

export default Footer
