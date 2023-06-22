import React from 'react'
import { Link } from 'react-router-dom'
// import CoinSearch from './CoinSearch'
import { Button, Menu, Typography, Avatar } from 'antd'

function Navbar() {
  return (
    <div className="h-50 bg-gray-500 p-5 flex flex-row justify-between flex-wrap ">
      <Link className="p-2 text-white" to="/">
        <h1 className="text-white uppercase p-2">Crypto Tracker</h1>
      </Link>
      
      <div className="flex flex-row justify-between">
        <Link className="p-2 text-white" to="/">Home</Link>
        {/* <Link className="p-2 text-white" to="/cryptocurrencies">Cryptocurrencies</Link> */}
        {/* <Link className="p-2 text-white" to="/CryptoDetails">CryptoDetails</Link> */}
        <Link className="p-2 text-white" to="/favoriteList">Favorites list</Link>
      </div>
      
      <div className="p-2 flex flex-row gap-5 justify-items-center">
        <Avatar src={'https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg'} />
        {/* <CoinSearch /> */}
      </div>
    </div>
  )
}

export default Navbar
