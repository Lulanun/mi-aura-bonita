import { Card, CardSubtitle } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
  const sinStock = prod.stock === 0
  return (
      <Card key={prod.id} style={{ width: '18rem', borderRadius: '16px', border: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
      <Card.Img variant="top" src={prod.img} style={{ filter: sinStock ? 'grayscale(60%)' : 'none' }}/>
      <Card.Body style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Card.Title style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0' }}>{prod.name}</Card.Title>
        <CardSubtitle style={{ color: '#888', fontSize: '0.9rem', fontWeight: '400' }}>{prod.shortDescription}</CardSubtitle>
        <Card.Subtitle style={{ color: 'rgb(255, 177, 125)', fontWeight: '700', fontSize: '1rem' }}>${prod.price}</Card.Subtitle>
        <Button 
          as={Link} 
          to={`/item/${prod.id}`} 
          className="btn-naranja"
          style={{ marginTop: '8px' }}>
          {sinStock ? 'Sin stock' : 'Ver Más'}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Item