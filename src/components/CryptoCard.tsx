import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { ICoin } from './../utils/types';
import { Context } from '../../src/app/context/context';

// import millify from 'millify';

type Props = {
  coin: ICoin;
}

const CryptoCard: React.FC<Props> = ({ coin }) => {
  const { favList, toggleFav } = useContext(Context);
  const [cheched, setChecked] = useState(favList.some((fav: ICoin) => fav.id === coin.id));

  const addFavorites = (coin: ICoin) => {
    if (cheched) {
      setChecked(!cheched)
      toggleFav(coin)
    } else {
      setChecked(!cheched)
      toggleFav(coin)
    }
  }

  return (
    <>
      <Link className="" to={`/crypto/${coin.id}`}>
        <div className="flex flex-col flex-wrap gap-5 items-center w-50 border-2 border-gray-100 rounded-xl shadow-2xl p-6">
          <h1>{coin.name}</h1>
          <img src={coin.image} className="w-10 h-10" alt="coin" />
          <p className="">{coin.current_price} $</p>
          <p className="">{(coin.price_change_percentage_24h)} %</p>
          {cheched ?
            (
              <button
                className="w-20 h-10 bg-gray-500 rounded text-s border-solid text-white"
                onClick={() => {
                  addFavorites(coin)
                }}
              >
                follow
              </button>
            ) : (
              <button 
                className="w-20 h-10 bg-blue-500 rounded border-solid text-white"
                onClick={() => {
                  setChecked(!cheched)
                  addFavorites(coin)
                }}
              >
              follow
            </button>
            )
          }
        </div>
      </Link>
    </>
  )
}

export default CryptoCard