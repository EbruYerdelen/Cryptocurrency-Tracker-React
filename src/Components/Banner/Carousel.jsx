import axios from "axios";
import React from "react";
import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/api";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [trending, setTrending] = React.useState([]);
  const { currency } = CryptoState();

  const fetchTrendingcoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  React.useEffect(() => {
    fetchTrendingcoins();
  }, [currency]);



  const items = trending.map((eachCoin) => {
    return (
      <Link className="carousel-coin" to={`/coins/${eachCoin.id}`}>
        <img 
          src={eachCoin?.image}
          alt={eachCoin.name}
          style={{marginBottom: 10, height: 100}}
          
        />
      </Link>
    )
  })


  const responsive = {
    0: {
    item: 2
    },
    512: {
      item: 4
    }
}



  return (
    <div className="carousel-cont">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
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
