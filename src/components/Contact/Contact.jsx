import React from 'react'
import "./Contact.css"
export default function Contact() {
  return (
    <>
      <section className='contact about'>
        <div className="container vh-100  d-flex align-items-center justify-content-center flex-column text-center ">
          <h2 className='mt-5'>Contact Us!</h2>
          <div className ="d-flex align-items-center justify-content-center mb-3">
            <div className ="line me-3" ></div>
            <i className ="fa-solid fa-star"></i>
            <div className ="line ms-3" ></div>
          </div>
          <form className="w-75">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Name" />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput2" placeholder="Age" />
              <label htmlFor="floatingInput2">Age</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput3" placeholder="Email" />
              <label htmlFor="floatingInput3">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingInput4" placeholder="Password" />
              <label htmlFor="floatingInput4">Password</label>
            </div>
            <button type="button" className="btn btn-outline-danger form-control">Send Message</button>
          </form>
        </div >
      </section >
    </>
  )
}
