import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import './HomeData.css';

const HomeData = (props) => {
  const { bookName, author, img, soldCopy, price } = props.demo;
  return (
    <div className="dataStyle">
      <Row xs={1} md={1} className="g-4">
        <Col>
          <Card>
            <Card.Img className="img-container" variant="top" src={img} />
            <Card.Body>
              <Card.Title>{bookName}</Card.Title>
              <Card.Text>
                <h3>Author: {author}</h3>
                <h4>Price: {price}</h4>
                <h5>Copy Sold: {soldCopy}</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomeData;
