import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Context } from '../../src/app/context/context';
import { ICoin } from './../utils/types';

import { Card, Row, Col, Input } from 'antd';

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { coins } = useContext(Context);
  const { favList, toggleFav } = useContext(Context);
  const coin = coins.find((i: ICoin) => i.id === coinId);
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
    <div className="flex flex-col">

      <div className="flex flex-row justify-center gap-7 text-center p-2 m-2">
        <h1 className="text-xl text-blue-700">Crypto Details - {coin.name}</h1>
        <img src={coin.image} className="w-10 h-10" alt="coin" />
      </div>

      <div className="flex flex-col flex-wrap gap-5 mx-10 items-center py-5 w-50 border-2 border-gray-100 rounded-xl shadow-2xl p-6m-5">
        <div className="flex flex-col flex-wrap gap-5 items-left px-10 py-5 border-2 border-gray-100 rounded-xl shadow-2xl p-6m-5">
        <p className="">Coin name - {coin.name}</p>
        <p>Coin symbol - {coin.symbol}</p>
        <p className="">Current price in USD - {coin.current_price} $</p>
        <p className="">Changing price during 24h - {coin.price_change_percentage_24h} %</p>

        <p>Min price during 24h - {coin.low_24h}</p>
        <p>Max price during  - {coin.high_24h}</p>
        <p>Total supply {coin.total_supply} $</p>
        <p>Total volume {coin.total_volume} $</p>
        <p>Max supply {coin.max_supply} $</p>
        <p>Circulating supply {coin.circulating_supply} $</p>
{/* 
        <p>ath -{coin.ath}</p>
        <p>ath_change_percentage -{coin.ath_change_percentage}</p>
        <p>ath -{coin.ath}</p>
        <p>ath_change_percentage - {coin.ath_change_percentage}</p>
        <p> ath_date {coin. ath_date}</p>
        <p>atl {coin.atl}</p>
        <p>atl_change_percentage {coin.atl_change_percentage}</p>
        <p>atl_date {coin.atl_date}</p>

        <p>fully_diluted_valuation {coin.fully_diluted_valuation}</p>
        <p> last_updated {coin.last_updated}</p>
        <p>market_cap{coin.market_cap}</p>
        <p>market_cap_change_24h {coin.market_cap_change_24h}</p>
        <p>market_cap_change_percentage_24h {coin.market_cap_change_percentage_24h}</p>
        <p>market_cap_rank {coin.market_cap_rank}</p>
        <p>price_change_24h {coin.price_change_24h}</p>
        <p>roi {coin.roi}</p>
        <p>sparkline_in_7d {coin.sparkline_in_7d}</p>
        <p>price_change_percentage_24h {coin.price_change_percentage_24h}</p> */}


        </div>
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

    </div>
  )
}

export default CryptoDetails