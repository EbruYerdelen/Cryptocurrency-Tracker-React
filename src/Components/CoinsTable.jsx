import React from 'react'
import { CryptoState } from '../CryptoContext';
import { CoinList } from '../config/api';
import axios from 'axios';
import numberWithCommas from '../utils/NumberWithComas';
import { useNavigate } from 'react-router-dom';

const CoinsTable = () => {
  const [coinList, setCoinList] = React.useState([]);
  const { currency, symbol } = CryptoState();
  const eachListNavigate = useNavigate();


  function listRedirect(id) {
    eachListNavigate(`/coins/${id}`);
  }

  React.useEffect(() => {
    const fetchCoinList = async () => {
      const { data } = await axios.get(CoinList(currency))
      setCoinList(data)
    };
    fetchCoinList();
    
  }, [currency]);

  console.log(coinList);


  const coins = coinList.slice(0 , 11).map((coinsInList) => {
    return (
      <tr
        className="coin-rows"
        key={coinsInList.id}
        onClick={() => listRedirect(coinsInList?.id)}
      >
        <td className="first-td">
          <div className="first-td-cont">
            <img
              className="table-images"
              src={coinsInList?.image}
              alt="coin-image"
            />{" "}
            <div className="firsttd-name-symbol">
              <div className='firsttd-symbol'>{coinsInList?.symbol}</div>
              <div className='firsttd-name'>{coinsInList?.name}</div>
            </div>
          </div>
        </td>
        <td>
          {symbol}{" "}
          {numberWithCommas(Number(coinsInList?.current_price.toFixed(2)))}
        </td>
        <td
          className={
            coinsInList?.price_change_percentage_24h >= 0
              ? "table-profit"
              : "table-loss"
          }
        >
          {coinsInList?.price_change_percentage_24h >= 0 && "+"}
          {coinsInList?.price_change_percentage_24h?.toFixed(2)}%
        </td>
        <td>{coinsInList?.market_cap}</td>
      </tr>
    );
  })


  return (
    <div className="table-container">
        <table>
          <thead>
            <tr className="head-row">
              <th>Coin</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>{coins}</tbody>
        </table>
    </div>
  );
}

export default CoinsTable

