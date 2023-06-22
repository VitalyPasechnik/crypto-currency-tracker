import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ICoin } from '../../src/utils/types'
import { Context } from '../../src/app/context/context';

import CryptoCard from './CryptoCard'

type Props = {
  cryptos: ICoin[];
}

const CryptoList: React.FC<Props> = ({ cryptos }) => {
  
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-4 h-500 bg-white-500 w-full p-5">
        <ul className="flex flex-row flex-wrap justify-center gap-4">
         {cryptos.length > 0 && (
            cryptos.map((coin: ICoin) => (
              <CryptoCard key={coin.id} coin={coin} />
            ))
          )}
        </ul>
      </div>
    </>
  )
}

export default CryptoList
