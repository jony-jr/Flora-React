import React, { useState } from 'react'
import blackFlower from '../../assets/Images/Black_rose.webp'
import blackFlower_noBg from '../../assets/Images/no-bg/1.png'
import redFlower from '../../assets/Images/Red_flowers.webp'
import redFlower_noBg from '../../assets/Images/no-bg/2.png'
import whiteFlower from '../../assets/Images/White_flowers.webp'
import whiteFlower_noBg from '../../assets/Images/no-bg/3.png'
import yellowTulip from '../../assets/Images/yellow-tulips-blue-shopping-bag.webp'
import yellowTulip_noBg from '../../assets/Images/no-bg/4.png'
import binkTulip from '../../assets/Images/tuleb-inside-envelope.webp'
import binkTulip_noBg from '../../assets/Images/no-bg/5.png'
import tulips from '../../assets/Images/tulips-inside-white-pink-bag.webp'
import tulips_noBg from '../../assets/Images/no-bg/6.png'
import Card from '../card/Card'
export default function Portfolio() {
  const [products, setproducts] = useState(
    [
      {
        id:1,
        cardImg: blackFlower,
        cardIco: blackFlower_noBg,
        cardName: 'Black Flower',
        cardPrice: 130,
      },
      {
        id:2,
        cardImg: redFlower,
        cardIco: redFlower_noBg,
        cardName: 'Red Flower',
        cardPrice: 80,
      },
      {
        id:3,
        cardImg: whiteFlower,
        cardIco: whiteFlower_noBg,
        cardName: 'White Flower',
        cardPrice: 110,
      },
      {
        id:4,
        cardImg: yellowTulip,
        cardIco: yellowTulip_noBg,
        cardName: 'Yellow Tulips',
        cardPrice: 115,
      },
      {
        id:5,
        cardImg: binkTulip,
        cardIco: binkTulip_noBg,
        cardName: 'Bink Tulips',
        cardPrice: 70,
      },
      {
        id:6,
        cardImg: tulips,
        cardIco: tulips_noBg,
        cardName: 'Tulips',
        cardPrice: 120,
      },
    ]
  )
  return (
    <>
      <section className='about py-5'>
        <div className="container text-center pt-5 ">
          <h2 className='mt-5 '>Our Flowers</h2>
          <div className="d-flex align-items-center justify-content-center mb-5">
            <div className="line me-3" ></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3" ></div>
          </div>

          <div className="row gy-5">
            {products.map((product, indx) => { return <Card key={product.id} pro={product} /> })}
          </div>
        </div>
      </section>
    </>
  )
}
