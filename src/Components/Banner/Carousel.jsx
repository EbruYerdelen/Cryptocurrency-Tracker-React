import axios from "axios";
import React from "react";
import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/api";
import { Link } from "react-router-dom";
import Card from "./Card";
import numberWithCommas from "../../utils/NumberWithComas";







const Carousel = () => {
  const [trending, setTrending] = React.useState([]);
  const { currency ,symbol } = CryptoState();


  console.log(trending);
  React.useEffect(() => {
    const fetchTrendingcoins = async () => {
      const { data }  = await axios.get(TrendingCoins(currency)); //you are extracting data property inside of the object returned by api request
      setTrending(data);
    };
    fetchTrendingcoins();
  }, [currency]);



  const items = trending.slice(1).map((eachCoin) => {
    return (
      <Link
        className="carousel-coin"
        to={`/coins/${eachCoin.id}`}
        key={eachCoin.id}
      >
        <Card alldata={eachCoin} />
      </Link>
    );
  });






  return (
      <div className="carousel-cont">
        <Link to={`/coins/${trending[0]?.id}`} className="first-card-wrap">
          <div className="first-card">
            <img src={trending[0]?.image} className="first-card-image" />
            <div className="first-card-info">
              <p className="first-card-symbol">{trending[0]?.symbol}</p>
            <p className={trending[0]?.price_change_percentage_24h >= 0 ? "first-card-profit":"first-card-loss"}>
                {trending[0]?.price_change_percentage_24h >= 0 && "+"}
                {trending[0]?.price_change_percentage_24h?.toFixed(2)}%
              </p>
              <p className="first-card-value">
                {symbol}{" "}
                {numberWithCommas(Number(trending[0]?.current_price.toFixed(2)))}
              </p>
            </div>
          </div>
        </Link>
          <div className="other-cards">{items}</div>
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

    /*
    if (typeof x === "number" && !isNaN(x)) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      // Handle the case where x is not a valid number
      return "N/A"; // or any other suitable default value
    }
    */