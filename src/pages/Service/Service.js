import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Service.css';

const Service = (props) => {
  const { bookName, author, price, img, soldCopy } = props.book;

  return (
    <div className="serviceStyle">
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
                <Link to='/detail'>Book Detail</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Service;
