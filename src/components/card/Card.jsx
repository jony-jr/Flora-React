import React from 'react'
import "./Card.css"
export default function Card({ pro }) {
  const { cardImg, cardName, cardPrice, cardIco, id: myId } = pro;
  return (
    <>
      <div className="col-md-4">
        <div className="px-5">
          <div className="card">
            <img src={cardImg} className="card-img-top" alt={cardName} data-bs-toggle="modal" data-bs-target={`#modal-${myId}`} />
            <img src={cardIco} className="card-ico" alt={cardName} data-bs-toggle="modal" data-bs-target={`#modal-${myId}`} />
            <div className="card-body">
              <h5 className="card-title">{cardName}</h5>
              <p className="card-text">{cardPrice}$</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div className="modal fade" id={`modal-${myId}`} tabIndex={-1} aria-labelledby={`modalLabel-${myId}`} aria-hidden="true">
        <div className="modal-dialog justify-content-center ">
          <div className="modal-content">
            <div className="modal-body  px-5 py-3 bg-danger-subtle  bg-opacity-10">
              <div className="row gy-4 ">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className=''>
                    <img className='img-fluid rounded-2' src={cardIco} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h3>{cardName}</h3>
                    <p className='my-3 fs-2 text-white fst-italic'>{cardPrice}$</p>
                    <p className='text-start '>We are passionate about flowers and providing the best quality, Your one-stop shop for beautiful flowers.</p>
                     <button className='my-button'>Add to cart</button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
