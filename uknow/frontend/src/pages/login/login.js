//--------- Import libs ---------
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


//--------- Import Styles ---------
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


//--------- Import Custom Styles ---------
import './login.css'


//--------- Function ---------
/**
 * Login Page
 * 
 * @returns {JSX}
 */
export default function Loginpage()
{
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    const checklogin = async () => {
        if(email === "" || email === null || senha === "" || senha === null)
        { alert("Preencha os campos!"); }
        else
        {
            axios.get(`https://uknow-api.web.app/email/${email}/senha/${senha}`)
            .then((res) => {
                sessionStorage.setItem("userInfo", JSON.stringify(res.data.usuario));
                navigate("/dashboard");  
            })
            .catch((e) => {
                alert("Email e senhas incorretos!");      
            });
        }//end if
    };

    return(
        <>
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
                            <Button href="/cadastro" variant="warning">Cadastro</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <main className='login'>
                <aside className='asidelogin'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email} className='forms' type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                            Nunca compartilharemos seu e-mail com mais ninguém.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={senha} className='forms' type="password" placeholder="Password" onChange={(e) => setSenha(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" onClick={() => checklogin()}>
                            Submit
                        </Button>

                        <div className='buttoncadastrar'>
                            <Button href="/cadastro" variant="primary">
                                Cadastrar
                            </Button>
                            <Form.Text className="text-muted">
                                Não possuo cadastro, desejo me cadastrar.
                            </Form.Text>
                        </div>
                    </Form>
                </aside>
            </main>
        </>
    );
}//end Loginpage()