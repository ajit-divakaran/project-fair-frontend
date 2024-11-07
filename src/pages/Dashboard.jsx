import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Myproject from "../components/Myproject";
import Profile from "../components/Profile";

const Dashboard = () => {
  return (
    <div>
      <div className="p-4">
        <h3>
          Welcome<span className="ms-2 text-warning">User</span>
        </h3>
      </div>
      <Container>
        <Row className='mt-5'>
          <Col sm={12} md={8}>
            <Myproject />
          </Col>
          <Col sm={12} md={4}>
            <Profile />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
