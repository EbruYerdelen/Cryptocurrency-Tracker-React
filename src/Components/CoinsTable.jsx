import React from 'react'
import { CryptoState } from '../CryptoContext';
import { CoinList } from '../config/api';
import axios from 'axios';
import numberWithCommas from '../utils/NumberWithComas';
import { Link } from 'react-router-dom';

const CoinsTable = () => {
  const [coinList, setCoinList] = React.useState([]);
  const { currency, symbol } = CryptoState();

  React.useEffect(() => {
    const fetchCoinList = async () => {
      const { data } = await axios.get(CoinList(currency))
      setCoinList(data)
    };
    fetchCoinList();
    
  }, [currency]);

  console.log(coinList);


  const coins = coinList.slice(95).map((coinsInList) => {
    return (
      <Link
        className="each-coin-list"
        to={`/coins/${coinsInList.id}`}
        key={coinsInList.id}
      >
        <tr>
          <td>{coinsInList?.name}</td>
          <td>
            {symbol}{" "}
            {numberWithCommas(Number(coinsInList?.current_price.toFixed(2)))}
          </td>
          <td
            className={
              coinsInList?.price_change_percentage_24h >= 0
                ? "profit"
                : "loss"
            }
          >
            {coinsInList?.price_change_percentage_24h >= 0 && "+"}
            {coinsInList?.price_change_percentage_24h?.toFixed(2)}%
          </td>
          <td>{coinsInList?.market_cap}</td>
        </tr>
      </Link>
    );
  })


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        {coins}
      </table>
    </div>
  );
}

export default CoinsTable
