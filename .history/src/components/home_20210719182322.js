import React from "react";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
const Home = () => {
  const cardstyle = {
    padding: "30px",
    background: "#ececec",
  };

  return (
    <div style={cardstyle}>
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={true}>KeyBoards</Card>
        </Col>
        <Col span={8}>
          <Card bordered={true}>Headphones</Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
