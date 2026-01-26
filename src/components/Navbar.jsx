import '../css/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'
import CartWidget from './CartWidget'
import logo from '/img/logo.jpeg'

const Navbar = () => {
    return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/"><img src={logo} alt="Mi Aura Bonita" className="logo me-2"/></BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/Velas">Velas</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Sprays">Sprays</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Aromaticos">Aromáticos</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Varios">Varios</Nav.Link>
          </Nav>
          <CartWidget />
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}
export default Navbar
