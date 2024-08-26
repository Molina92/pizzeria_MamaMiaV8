import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import FormatearMonto from './FormatearMonto';

export default function CustomNavbar() {

  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">🍕 Home</Nav.Link>
            {token ? (
              <>
                <Nav.Link href="#profile">🔓 Profile</Nav.Link>
                <Nav.Link href="#logout">🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#login">🔐 Login</Nav.Link>
                <Nav.Link href="#register">🔐 Register</Nav.Link>
              </>
            )}
          </Nav>
          <Button variant="primary" >
            🛒 Total: {FormatearMonto(total)}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
