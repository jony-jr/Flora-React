import React from 'react'
import Nav from '../Nav/Nav'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
      <Nav/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </>
  )
}
