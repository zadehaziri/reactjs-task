import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <Navbar variant="dark" className="d-flex justify-content-between px-3" style={{ height: '50px', backgroundColor: '#1F2A44' }}>
      <Container fluid className="p-0">
        {/* Wrap the Navbar.Brand with a Link to navigate to the home page */}
        <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
          <Navbar.Brand style={{ fontSize: '22px' }}>
            Your Notes
          </Navbar.Brand>
        </Link>

        <Button variant="link" className="text-white p-0 text-decoration-none " style={{ fontSize: '14px', lineHeight: '15px' }}>
          X
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
