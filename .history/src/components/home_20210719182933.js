import React from "react";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
const Home = () => {
  const cardstyle = {
    flex: 1,
    padding: "30px",
    background: "#ececec",
    justifyContent: "center",
  };

  return (
    <div style={cardstyle}>
      <Row gutter={16}>
        <Col span={8}>
          <Card>KeyBoards</Card>
        </Col>
        <Col span={8}>
          <Card>Headphones</Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
