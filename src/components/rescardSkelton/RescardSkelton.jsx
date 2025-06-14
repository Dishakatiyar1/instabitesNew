import { Skeleton, Card } from "antd";
import React from "react";

const RescardSkelton = () => {
  const skeltonNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="body-wrapper" data-testid="skelton">
      <div className="container">
        <div className="res-container">
          {skeltonNum.map((item) => {
            return (
              <Card
                key={item}
                style={{ width: 300 }}
                cover={
                  <Skeleton.Image
                    active={true}
                    style={{ width: "300px", height: "160px" }}
                  />
                }
              >
                <Skeleton active={true} />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RescardSkelton;
