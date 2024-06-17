//---------- Import libs ---------
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";


//--------- Import styles ---------
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


//----------- Custom Style Import ---------
import './index.css';
import { FaUserCircle } from 'react-icons/fa'; 
import { BsFillCaretDownFill } from 'react-icons/bs'; 


//---------- AlunoDashboard ---------
/**
 * Aluno Dashboard
 * 
 * @returns {JSX}
 */
export default function AlunoDashboard() 
{
    const navigate = useNavigate();
    const [cursos, setCursos] = useState([]);
    const userInfo = useRef({});

    const ourCursos = async () => {
        const res = await axios.get("https://uknow-api.web.app/getcursos");
        setCursos(res.data.cursos);
    };

    const toPerfil = () => {
        sessionStorage.setItem("userInfo", JSON.stringify(userInfo.current));
        navigate("/perfilUsuario");
    };

    useEffect(() => {
        ourCursos();
        userInfo.current = JSON.parse(sessionStorage.getItem("userInfo"));
    }, []);

    function handleLogoClick(e) {
        e.preventDefault();

        window.location.href='/dashboard';
    }

    return (
        <div className='aluno__dashboard'>
            
            <header>
                <div id='header__item__01' className='header__flex__item'>
                    <img id='user__header__logo' className="logo" src='Logoamarelo.png' alt='Logo-amarelo' onClick={(e) => handleLogoClick(e)} />
                    <span>&nbsp;</span>
                    <span onClick={(e) => handleLogoClick(e)}>UKnow</span>
                </div>

                <div id='header__item__03' className='header__flex__item'>
                    <span></span>
                </div>

                <div id='header__item__04' className='header__flex__item'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <div id='menu__perfil'>
                                <div id='nome__usuario'>
                                    {userInfo.current.nome}
                                </div>
                                <div id='down__icon'>
                                    &nbsp;<BsFillCaretDownFill />
                                </div>
                                <div>
                                    <FaUserCircle id='pic__usuario' className='big__menu__obj'/>
                                </div>
                            </div>    
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/dashboard">Meu Dashboard</Dropdown.Item>
                            <Dropdown.Item onClick={() => toPerfil()}>Meu Perfil</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>                    
                </div>
            </header>

            <main className='dashboard__content'>
                <section id='section__01'>
                    <div id="banner">
                        <h1>Meu Dashboard</h1>
                        <span>Seja bem vindo {userInfo.current.nome}!</span>
                    </div>
                </section>

                <section id='section__02'>
                    <br />
                    <br />
                    <Container>
                        <h3>Cursos adquiridos</h3>
                        <hr />

                        <Row lg={3} md={2} sm={1}>
                            {cursos.map((element) => {
                                return(
                                    <Col style={{ display: "flex", justifyContent: "center"}}>
                                        <Card bg="" style={{ width: '18rem', margin: "0.5em", backgroundColor: "#E1EFE6" }}>
                                            <Card.Img variant="top" src={element.foto} style={{ width: "100%"}} />
                                            <Card.Body >
                                                <Card.Title>{element.nome}</Card.Title>
                                                <Card.Text>
                                                    {element.descricao}
                                                </Card.Text>
                                                <Button onClick={() => navigate("/videoAula")} variant="primary">Assistir Aula</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ); 
                            })}
                        </Row>                       
                    </Container>
                </section>
            </main>
        </div>
    );
} //end Footer()