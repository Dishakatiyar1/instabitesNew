import {Collapse, Skeleton} from "antd";
import React from "react";
import "./menuSkelton.css";

const MenuSkelton = () => {
  const items = [
    {
      key: "1",
      label: "Recommended",
      children: <Skeleton active={true} />,
    },
    {
      key: "2",
      label: "Some Items",
      children: <Skeleton active={true} />,
    },
    {
      key: "3",
      label: "Coldrinks",
      children: <Skeleton active={true} />,
    },
  ];
  return (
    <div className="resmenu-container">
      <div className="res-menu-header">
        <div className="res-header-left">
          <Skeleton active={true} />
        </div>
        <div className="res-header-right">
          <Skeleton.Button active={true} />
        </div>
      </div>
      <div className="res-menu-container">
        <Collapse
          defaultActiveKey={["1"]}
          expandIconPosition="end"
          ghost
          items={items}
        />
      </div>
    </div>
  );
};

export default MenuSkelton;
