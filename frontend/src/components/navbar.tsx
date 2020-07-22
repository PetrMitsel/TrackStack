import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button , Container} from 'react-bootstrap'

export const MyNavbar: React.FC = () =>{
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" >TrackStack</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search"/>
            <Button variant="dark">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Sign Up</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
