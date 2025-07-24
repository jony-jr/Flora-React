import React from 'react'
import './About.css'
export default function About() {
  return (
    <>
      <section className='about'>
        <div className="container vh-100  d-flex align-items-center justify-content-center flex-column text-center ">
          <h2 className='mt-5'>Who we are ?</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3" ></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3" ></div>
          </div>
          <div className="">
            <h3 className=' my-3'>We are passionate about flowers and providing the best quality.</h3>
            <div className="d-flex justify-content-center align-items-center">
              <ul className='list-unstyled gap-4'>
              <li className='gap-2  align-items-baseline align-items-md-center'>
                <i className="fa-brands fa-mendeley"></i>
                <p className=''>Our clients trust us.</p>
              </li>
              <li className='gap-2 align-items-baseline align-items-md-center'>
                <i className="fa-brands fa-creative-commons-remix"></i>
                <p className=''>Free Shiping.</p>
              </li>
              <li className='gap-2  align-items-baseline align-items-md-center'>
                <i className="fa-brands fa-pagelines"></i>
                <p className=''>We care about environment.</p>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
