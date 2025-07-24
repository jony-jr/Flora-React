import React from 'react'
import "./Card.css"
export default function Card({ pro }) {
  const { cardImg, cardName, cardPrice, id: myId } = pro;
  return (
    <>
      <div className="col-md-4">
        <div className="p-2">
          <div className="card">
            <img src={cardImg} className="card-img-top" alt={cardName} data-bs-toggle="modal" data-bs-target={`#modal-${myId}`} />
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
            <div className="modal-body">
              <img className='img-fluid' src={cardImg}/>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center">
        <img alt="" src={cardImg} />
      </div> */}

    </>
  )
}
