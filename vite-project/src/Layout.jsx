import React from 'react'
import Header from "./component1/Header/Header1"
import Footer from './component1/Footer/Footer1'
import {Outlet} from 'react-router-dom'


function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout