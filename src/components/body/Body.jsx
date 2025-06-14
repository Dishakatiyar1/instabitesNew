import React, { useEffect, useState } from "react";
import "./body.css";
import Rescard from "../rescard/Rescard";
// import { RES_API_URL } from "../../utils/constant";
import RescardSkelton from "../rescardSkelton/RescardSkelton";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../../redux/slices/restslice";
import { ALL_RESTAURANTS_DATA } from "../../../__mocks__/dataMock";
import { Link } from "react-router-dom";

const Body = () => {
  const reslist = ALL_RESTAURANTS_DATA?.data?.cards[2]?.data?.data?.cards;

  const dispatch = useDispatch();

  const fetchData = async () => {
    // const resdata = await fetch(RES_API_URL);
    // const resjson = await resdata.json();
    // setReslist(
    //   resjson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );

    dispatch(
      setRestaurant(ALL_RESTAURANTS_DATA?.data?.cards[2]?.data?.data?.cards)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return reslist?.length === 0 ? (
    <RescardSkelton />
  ) : (
    <div className="body-wrapper">
      <div className="container">
        <div className="res-container">
          {reslist?.map((restaurant) => {
            return <Rescard {...restaurant.data} key={restaurant.data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
