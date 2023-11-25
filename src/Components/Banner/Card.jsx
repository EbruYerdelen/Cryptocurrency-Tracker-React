import React from 'react'
import { numberWithCommas } from './Carousel';
import { CryptoState } from "../../CryptoContext";

const Card = (props) => {
  const { currency, symbol } = CryptoState();


  return (
    <div className="card-cont">
      <img
        src={props.alldata?.image}
        alt={props.alldata?.name}
        className="card-images"
      />
      <div className='info'>
        <p className="coin-symbol">{props.alldata?.symbol}</p>
        <p className="profit">
          {props.alldata?.price_change_percentage_24h >= 0 && "+"}
          {props.alldata?.price_change_percentage_24h?.toFixed(2)}%
        </p>
        <p className="value">
          {symbol} {numberWithCommas(props.alldata?.current_price.toFixed(2))}
        </p>
      </div>
    </div>
  );
}

export default Card
