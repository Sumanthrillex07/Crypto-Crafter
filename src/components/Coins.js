import React, { useState } from "react";
import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";
import Banner from "./Banner/Banner";

import "./Coins.css";
import { Pagination } from "@mui/material";

const Coins = (props) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const handleSearch = () => {
    return props.coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
  return (
    <>
      <Banner />
      <div className="container">
          <div className="search-bar" >
        <form className="search-form"> 
            {/* <label for="exampleInputEmail1">Search Coin</label> */}
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              class="form-control"
              id="exampleInputEmail"
              placeholder="Search Coin"
              className="search"
            />
        </form>
          </div>
        <div>
          <div className="heading">
            <p>#</p>
            <p className="coin-name">Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className="hide-mobile">Volume</p>
            <p className="hide-mobile">Market Cap</p>
          </div>

          {handleSearch()
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((coins) => {
              return (
                <Link
                  to={`/coin/${coins.id}`}
                  element={<Coin />}
                  key={coins.id}
                >
                  <CoinItem coins={coins} />
                </Link>
              );
            })}
          <Pagination
            className="page"
            // classes={{ ul: classes.pagination }}
            count={(handleSearch()?.length / 10).toFixed(0)}
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, 450);
            }}
          />
        </div>
      </div>
    </>
  );
};
// .slice((page-1)*10,(page-1)*10+10)

export default Coins;
