//---------- Import libs ---------
import React from 'react';
import { useNavigate } from 'react-router';


//---------- Import Styles ---------
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


//--------- Import custom components ---------
import './video-aula.css'


//---------- Pages ----------
/**
 * Page Videopage
 * 
 * @returns {JSX}
 */
export default function Videopage()
{
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <body>
            <header>
                <Navbar className="nav--component" variant="dark" fixed="top" expand="lg">
                    <Container>
                        <>  
                            <Button variant="warning" onClick={handleShow}>
                                Aulas
                            </Button>

                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton className='aside'>
                                    <Offcanvas.Title>Aulas</Offcanvas.Title>
                                </Offcanvas.Header >
                                <Offcanvas.Body className='aside'>
                                    <h1>Video Aulas</h1>
                                    <a href='#' className='linkaula'>Front-End Estático</a>
                                    <a href='#' className='linkaula'>Técnicas de Programação I | NodeJS</a>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </>
                        <Navbar.Brand href="/">
                            <img className="logouser d-inline-block align-top" src='Logoamarelo.png' alt='Logo-amarelo'/>
                            {" "}Uknow
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        
                        <Navbar.Collapse id="basic-navbar-nav">
                            <span className="me-auto"/>
                            <Nav>
                                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link href="/perfilUsuario">Perfil</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main className='pageaula'>
                <div className='aula'>
                    <div className='tela'>
                        <iframe width="100%" height="800" src="https://www.youtube.com/embed/8QvChwfThZo" />
                    </div>
                </div>
                <div className='material'>
                    <div className='text'>
                        <h1>HTML, CSS e NodeJS</h1>
                        <p>Neste curso voçê aprenderá o fino do HTML, CSS, JavaScript e NodeJS.</p>
                    </div>
                </div>
            </main>
        </body>
    );
}//end Videopage()