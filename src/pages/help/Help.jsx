import React from "react";
import {Tabs} from "antd";
import {FaqAccordian, LegalAccordian} from "../../components";

const Help = () => {
  const onChange = key => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Help & Faq`,
      children: <FaqAccordian />,
    },
    {
      key: "2",
      label: `Legal`,
      children: <LegalAccordian />,
    },
  ];
  return (
    <div className="container">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default Help;
