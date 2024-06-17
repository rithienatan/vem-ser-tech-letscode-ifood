//--------- Import libs ---------
import React, { useState } from "react";


//--------- Import styles ---------
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import logo01 from './images/letscode.jpeg';
import logo02 from './images/ifood.png';

import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'; 


//----------- Custom Style Import ---------
import './index.css';


//---------- Footer ---------
/**
 * Component Footer
 * 
 * @returns {JSX}
 */
export default function Footer() 
{
    const [userEmail, setUserEmail] = useState("");

    const assinar = () => {
        if(userEmail === null || userEmail === "")
        { alert("Campo de email vazio!"); }
        else
        { alert(`Newsletter assinado com o email ${userEmail}`); }
    };

    return (
        <footer className='footer'>
            <Container>
            <Row className='first__row'>
                <Col sm={8}>
                    <h3 className='titulo'>UKnow</h3>
                    <div className='creditos'>Time BlackHat - Let's Code - Hackaton 2022</div>
                    <div className='creditos'>CNPJ 00.000.000/0000-00</div>                
                </Col>
                <Col sm={4}>
                    Nosso projeto
                    <div>
                        <ul>
                            <li className='icon'><a href='https://github.com/rithienatan/uknow'><AiOutlineGithub /></a></li>
                        </ul>                  
                    </div>
                </Col>                        
            </Row>        
            <Row className='second__row'>
                <Col sm={6} md={2}>
                <h6>A UKnow</h6>
                    <div className='paths'>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='#sobre'>Sobre</a></li>
                            <li><a href='#gamificacao'>Gamificação</a></li>
                            <li><a href='#democratizacao'>Democratização</a></li>
                            <li><a href='#knowtoken'>KnowToken</a></li> 
                            <li><a href='#cursos'>Cursos</a></li> 
                        </ul>                  
                    </div>
                </Col>          
                <Col sm={6} md={2}>
                    <h6>Fale Conosco</h6>
                    <div className='paths'>
                        <ul>
                            <li><AiOutlineMail />{" uknow@email.com"}</li>
                            <li><AiOutlinePhone />{" +55 99 99999-9999"}</li>                
                        </ul>                  
                    </div>
                </Col>
                <Col sm={6} md={4}>
                    <h6>Nossos parceiros</h6>
                    <a href='https://www.letscode.com.br/'><img src={logo01} alt="Lets Code"/></a>
                    <span />
                    <a href='https://www.ifood.com.br/'><img src={logo02} alt="iFood" /></a>
                </Col>            
                <Col md={4}>
                    <div className='paths'>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><h6>Assine nossa Newsletter</h6></Form.Label>
                                <div className='newsletter__form'>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUserEmail(e.target.value)} />
                                    <Button variant="primary" onClick={() => assinar()}>
                                        Enviar
                                    </Button>                                
                                </div>                            
                                <Form.Text className="text-muted">
                                    Não compartilharemos seu email com ninguém.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>            
            </Row>
            </Container>
            <br />
        </footer>
    );
}//end Footer()