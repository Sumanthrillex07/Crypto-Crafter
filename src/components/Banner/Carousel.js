import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trend, setTrend] = useState([]);
  const { cur, sym } = CryptoState();
  const fetchTrendCoins = async () => {
    const { data } = await axios.get(TrendingCoins());
    setTrend(data);
  };
  useEffect(() => {
    fetchTrendCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const items = trend.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <Link
        className="carouselItem"
        to={`/coin/${coin.id}`}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          color: "var(--body-color)",
        }}
      >
        <img
          src={coin?.image}
          alt={coin.name}
          height="90"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "var(--grn)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500,color:"var(--body_color)" }}>
          $ {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });
  const responsive = {
    0: {
      items: 2,
    },
    512:{
      items:4,
    },
    720: {
      items: 5,
    },
  };

  return (
    <div
      className="carousel"
      style={{
        height: "50%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        // disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;
