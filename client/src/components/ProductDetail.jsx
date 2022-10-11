import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import products from "../db.json";
import { Rating } from "./Rating";

export const ProductDetail = ({ match }) => {
  const { id } = useParams();
  const data = products.product;
  const product = data.find((el) => el.id == id);
  console.log(data, product);
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image_url} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.review} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : {product.price} Rs.</ListGroup.Item>
            <ListGroup.Item>Description : {product.prod_desc}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={2}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price :</Col>
                <Col>
                  <strong>{product.price} Rs.</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status :</Col>
                <Col>
                  {product.count>0?'In Stock':'Out Of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
                
                <Button className="btn-dark btn-block" type='button' disabled={product.count==0}>
                Add To Cart
              </Button>
                
                
              
            </ListGroup.Item>
            
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};
