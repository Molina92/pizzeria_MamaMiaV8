import { Container, Navbar, Nav, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FormatearMonto from "./FormatearMonto";

export default function CustomNavbar() {
  const total = 25000;
  const token = false;

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Pizzería Mamma Mia!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavItem>
                {" "}
                <NavLink as={Link} to="/">
                  🍕 Home
                </NavLink>
              </NavItem>
              {token ? (
                <>
                  <NavItem>
                    <NavLink as={Link} to="/profile">
                      🔓 Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink as={Link} to="/logout">
                      🔒 Logout
                    </NavLink>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <NavLink as={Link} to="/login">
                      🔐 Login
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink as={Link} to="/register">
                      🔐 Register
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
            <Button variant="primary"> Total: {FormatearMonto(total)}</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
