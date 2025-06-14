import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import "./search.css";
import Rescard from "../../components/rescard/Rescard";
import {SearchOutlined} from "@ant-design/icons";
import {Space, Spin} from "antd";

const Search = () => {
  const [searchRes, setSearchRes] = useState("");
  const [filterRes, setFilterRes] = useState([]);
  const [loading, setLoading] = useState(false);
  const allResData = useSelector(state => state.restslice.restaurant);

  useEffect(() => {
    setTimeout(() => {
      const filterRestaurant = allResData.filter(res =>
        res?.info?.name.toLowerCase().includes(searchRes.toLowerCase())
      );
      setFilterRes(filterRestaurant);
      setLoading(false);
    }, 500);
  }, [searchRes]);

  const handleSearch = e => {
    setSearchRes(e.target.value);
    setLoading(true);
  };

  return (
    <div className="container">
      <div className="search-input-wrapper">
        <input
          type="text"
          value={searchRes}
          className="search-input"
          placeholder="Search for restaurents"
          onChange={e => handleSearch(e)}
        />
        <div className="search-icon">
          <SearchOutlined />
        </div>
      </div>
      {loading && (
        <div className="spin-wrap">
          <Spin size="large" />
        </div>
      )}
      {!loading && searchRes.length > 0 && (
        <div className="res-container">
          {filterRes?.map(res => {
            return <Rescard resdata={res} key={res.info.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
