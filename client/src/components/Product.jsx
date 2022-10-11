import React from 'react';
import { Card } from 'react-bootstrap';
import { Rating } from './Rating';
import { Link } from 'react-router-dom';

export const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`products/${product.id}`}>
            <Card.Img src={product.image_url} variant="top"/>
        </Link>

        <Card.Body>
            <Link to={`product/${product.id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <div className='my-3'>{product.price} Rs.</div>
            </Card.Text>
            <Card.Text as="div">
                <Rating value={product.rating} text={`${product.review} reviews`} />
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
