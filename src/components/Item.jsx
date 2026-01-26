
import {  Card, CardSubtitle } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const Item = ({prod}) => {
  const sinStock = prod.stock === 0
  return (
      <Card key={prod.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img}  />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <CardSubtitle>{prod.shortDescription}</CardSubtitle>
        <Card.Subtitle>${prod.price}</Card.Subtitle>
        <Button as={Link} to={`/item/${prod.id}`} variant="dark">
        {sinStock ? 'Sin stock' : 'Ver Más'}</Button>
      </Card.Body>
    </Card>
  )
}

export default Item