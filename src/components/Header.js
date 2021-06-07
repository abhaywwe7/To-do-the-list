import React from 'react'
import PropTypes from 'prop-types'
import { Nav, Navbar, Container, Form, Button, FormControl } from 'react-bootstrap';

export default function Header(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">{props.title}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">Abouts</Nav.Link>

                    </Nav>
                    {props.searchBar ? <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> : "no search bar"}
                </Container>
            </Navbar>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool
};