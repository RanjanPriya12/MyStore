import React from 'react';
import products from '../db.json';
import { Row, Col } from 'react-bootstrap';
import { Product } from './Product';

export const Home = () => {
  return (
    <>
    <h1>Latest Product</h1>
    <Row>
        {
    products.product.map(product=>(
        <Col sm={12} md={6} xl={3} key={product.id}>
            <Product product={product}/>
        </Col>
    ))
}
    </Row>
    </>
  )
}
