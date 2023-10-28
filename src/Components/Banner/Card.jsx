import React from 'react'

const Card = (props) => {
  return (
    <div className="card-cont">
      <img
        src={props.alldata?.image}
        alt={props.alldata?.name}
        className="card-images"
      />
      <p className="coin-symbol">{props.alldata?.symbol}</p>
      <p className="profit">
        {props.alldata?.price_change_percentage_24h >= 0 && "+"}
        {props.alldata?.price_change_percentage_24h?.toFixed(2)}%
      </p>
      <p className="value"></p>
    </div>
  );
}

export default Card
