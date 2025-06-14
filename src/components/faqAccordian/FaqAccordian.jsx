import React from "react";
import "./accordian.css";
import {Collapse} from "antd";

const FaqAccordian = () => {
  const items = [
    {
      key: "1",
      label: "What is Instabites Customer Care Number?",
      children: (
        <p>
          We value our customer’s time and hence moved away from a single
          customer care number to a comprehensive chat-based support system for
          quick and easy resolution. You no longer have to go through the maze
          of an IVRS call support. Just search for your issue in the help
          section on this page and initiate a chat with us. A customer care
          executive will be assigned to you shortly. You can also email us your
          issue on support@instabites.in Note: We value your privacy and your
          information is safe with us. Please do not reveal any personal
          information, bank account number, OTP etc. to another person. A
          Instabites representative will never ask you for these details. Please
          do not reveal these details to fraudsters and imposters claiming to be
          calling on our behalf. Be vigilant and do not entertain phishing calls
          or emails.
        </p>
      ),
    },
    {
      key: "2",
      label: "Can I edit my order?",
      children: (
        <p>
          Your order can be edited before it reaches the restaurant. You could
          contact customer support team via chat or call to do so. Once order is
          placed and restaurant starts preparing your food, you may not edit its
          contents
        </p>
      ),
    },
    {
      key: "3",
      label: "I want to cancel my order",
      children: (
        <p>
          We will do our best to accommodate your request if the order is not
          placed to the restaurant (Customer service number: +91 9876543210).
          Please note that we will have a right to charge a cancellation fee up
          to full order value to compensate our restaurant and delivery partners
          if your order has been confirmed.
        </p>
      ),
    },
    {
      key: "4",
      label: "Will Instabites be accountable for quality/quantity?",
      children: (
        <p>
          Quantity and quality of the food is the restaurants' responsibility.
          However in case of issues with the quality or quantity, kindly submit
          your feedback and we will pass it on to the restaurant.
        </p>
      ),
    },
    {
      key: "5",
      label: "Is there a minimum order value?",
      children: (
        <p>We have no minimum order value and you can order for any amount.</p>
      ),
    },
    {
      key: "6",
      label: "Do you charge for delivery?",
      children: (
        <p>
          Delivery fee varies from city to city and is applicable if order value
          is below a certain amount. Additionally, certain restaurants might
          have fixed delivery fees. Delivery fee (if any) is specified on the
          'Review Order' page.{" "}
        </p>
      ),
    },
  ];
  return <Collapse items={items} defaultActiveKey={["1"]} />;
};

export default FaqAccordian;
