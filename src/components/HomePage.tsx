import React, { useContext, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

import { ICoin } from '../../src/utils/types'
import { Context } from '../../src/app/context/context';

import CryptoList from './CryptoList'


const HomePage: React.FC = () => {
  const { coins } = useContext(Context);
  
  const [query, setQuery] = useState('');

  const [cryptos, setCryptos] = useState<ICoin[]>(coins);

  useEffect(() => {
    setCryptos(coins)

    if (query.length > 0) {
      console.log('query exist');
      return setCryptos(coins.filter((coin: ICoin) => coin.name.toLowerCase().includes(query.toLowerCase())));
    } else {
      setCryptos(coins)
    }
  }, [coins, query]);
  
  return (
    <>
      <div className="flex justify-center p-1.5">
        <input type="text" placeholder="Search a coin" value={query} onChange={(e) => setQuery(e.target.value.toLowerCase())} />
      </div>

      {cryptos.length > 0 && (
        <CryptoList cryptos={cryptos} />
      )}
    </>
  )
}

export default HomePage
