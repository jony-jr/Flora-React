import React, { useState } from 'react'
import blackFlower from '../../assets/Images/Black_rose.webp'
import redFlower from '../../assets/Images/Red_flowers.webp'
import whiteFlower from '../../assets/Images/White_flowers.webp'
import yellowTulip from '../../assets/Images/yellow-tulips-blue-shopping-bag.webp'
import binkTulip from '../../assets/Images/tuleb-inside-envelope.webp'
import tulips from '../../assets/Images/tulips-inside-white-pink-bag.webp'
import Card from '../card/Card'
export default function Portfolio() {
  const [products, setproducts] = useState(
    [
      {
        id:1,
        cardImg: blackFlower,
        cardName: 'Black Flower',
        cardPrice: 130,
      },
      {
        id:2,
        cardImg: redFlower,
        cardName: 'Red Flower',
        cardPrice: 80,
      },
      {
        id:3,
        cardImg: whiteFlower,
        cardName: 'White Flower',
        cardPrice: 110,
      },
      {
        id:4,
        cardImg: yellowTulip,
        cardName: 'Yellow Tulips',
        cardPrice: 115,
      },
      {
        id:5,
        cardImg: binkTulip,
        cardName: 'Bink Tulips',
        cardPrice: 70,
      },
      {
        id:6,
        cardImg: tulips,
        cardName: 'Tulips',
        cardPrice: 120,
      },
    ]
  )
  return (
    <>
      <section className='about py-5'>
        <div className="container text-center pt-5 ">
          <h2 className='mt-5'>Our Flowers</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3" ></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3" ></div>
          </div>

          <div className="row gy-4">
            {products.map((product, indx) => { return <Card key={product.id} pro={product} /> })}
          </div>
        </div>
      </section>
    </>
  )
}
