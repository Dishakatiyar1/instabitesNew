import React, { useEffect, useState } from "react";
import "./body.css";
import Rescard from "../rescard/Rescard";
// import { RES_API_URL } from "../../utils/constant";
import RescardSkelton from "../rescardSkelton/RescardSkelton";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../../redux/slices/restslice";
// import { ALL_RESTAURANTS_DATA } from "../../../__mocks__/dataMock";
import { Link } from "react-router-dom";

const Body = () => {
  const [reslist, setReslist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const fetchData = async () => {
    setIsLoading(true);
    const resdata = await fetch(
      "https://raw.githubusercontent.com/Dishakatiyar1/json-data/refs/heads/main/ALL_RESTAURANTS_DATA"
    );
    const resjson = await resdata.json();
    console.log("resjon", resjson);
    setReslist(resjson?.data?.cards[2]?.data?.data?.cards);

    dispatch(setRestaurant(resjson?.data?.cards[2]?.data?.data?.cards));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <RescardSkelton />;
  }

  return reslist?.length === 0 ? (
    <RescardSkelton />
  ) : (
    <div className="body-wrapper">
      <div className="container">
        <div className="res-container">
          {reslist?.map((restaurant) => {
            return <Rescard {...restaurant?.data} key={restaurant?.data?.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
