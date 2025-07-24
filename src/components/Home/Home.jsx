import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <>
      <section className='home'>
        <div className=" container vh-100  d-flex align-items-center justify-content-center flex-column ">
          <h1 className=' text-center'>Welcome to Flora</h1>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3" ></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3" ></div>
          </div>
        </div>
      </section>
    </>
  )
}
