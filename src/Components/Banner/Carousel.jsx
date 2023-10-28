import axios from "axios";
import React from "react";
import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/api";
import { Link } from "react-router-dom";
import Card from "./Card";

const Carousel = () => {
  const [trending, setTrending] = React.useState([]);
  const { currency } = CryptoState();

  const fetchTrendingcoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  console.log(trending);
  React.useEffect(() => {
    fetchTrendingcoins();
  }, [currency]);


  const firstRemovedArr = trending.slice(1);
  console.log(firstRemovedArr);
  const items = firstRemovedArr.map((eachCoin) => {
    return (
      <Link className="carousel-coin" to={`/coins/${eachCoin.id}`}>
        <Card key={eachCoin.id} alldata={eachCoin}/>
      </Link>
    )
  })




  return (
    <div className="carousel-cont">
      <div className="first-card">
        <img src={trending[0]?.image} className="first-card-image" />
        <p className="first-card-symbol">{trending[0]?.symbol}</p>
        <p className="first-card-profit">
          {trending[0]?.price_change_percentage_24h >= 0 && "+"}
          {trending[0]?.price_change_percentage_24h?.toFixed(2)}%
        </p>
        <p className="first-card-value"></p>
      </div>
      <div className="other-cards">
        {items}
      </div>
    </div>
  );
};

export default Carousel;

/*React.useEffect(() => {
    const FetchTrendCoins = async () => {
      try {
        const response = await fetch(TrendingCoins(currency));
        const data = await response.json();
        setTrending(data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchTrendCoins();
  }, [currency]);
 */

    /*const responsive = {
      0: {
        item: 2,
      },
      512: {
        item: 4,
      },
    };
   */