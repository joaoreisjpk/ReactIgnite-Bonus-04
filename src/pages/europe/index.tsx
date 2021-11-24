import React from 'react'
import Banner from './Banner'
import Citys from './Citys'
import Header from './Header'
import Main from './Main'

export default function index() {
  return (
    <div>
      <Header />
      <Banner />
      <Main />
      <Citys />
    </div>
  )
}
