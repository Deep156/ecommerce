import React from "react";
import { Card, Col, Row } from "antd";
const Home = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={true}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={true}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
