//---------- Import libs ---------
import React from 'react';


//---------- Import Styles ---------
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


//---------- Import Custom Styles ---------
import './index.css';


//---------- Components ----------
/**
 * Header Component
 * 
 * @returns {JSX}
 */
export default function Header()
{
    return(
        <header>
            <Navbar className="nav--component" variant="dark" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img className="logo d-inline-block align-top" src='Logoamarelo.png' alt='Logo-amarelo'/>
                        {" "}Uknow
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <span className="me-auto"/>
                        <Nav>
                            <Nav.Link href="/" >Home</Nav.Link>
                            <Nav.Link href="#sobre">Sobre</Nav.Link>
                            <Nav.Link href="#gamificacao">Gamificação</Nav.Link>
                            <Nav.Link href="#democratizacao">A Democratização</Nav.Link>
                            <Nav.Link href="#knowtoken">KnowToken</Nav.Link>
                            <Nav.Link href="#cursos">Cursos</Nav.Link>
                        </Nav>
                        <Button href="/login" variant="warning">Login</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}//end Header()