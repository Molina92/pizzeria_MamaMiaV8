import { Container, Navbar, Nav, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormatearMonto from "./FormatearMonto";
import { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";

export default function CustomNavbar() {
  const { total } = useContext(CartContext);
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
            <Link to="/cart" className="btn btn-primary">🛒Total: {FormatearMonto(total)}</Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
