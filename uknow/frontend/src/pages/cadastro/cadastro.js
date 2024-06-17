//--------- Import libs ---------
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


//--------- Import custom components --------
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


//--------- Import styles ---------
import './cadastro.css';


//--------- Function ---------
/**
 * Page Cadastro
 * 
 * @returns {JSX}
 */
export default function Cadastro()
{
    const navigate = useNavigate();
    
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const [cpf, setCpf] = useState("");

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");


    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");


    const Cadastrar = async () => {
        if(email !== "" && email !== null && 
            senha !== "" && senha !== null &&
            email === confirmEmail && senha === confirmSenha)
        {
            const data = {
                "nome": nome,
                "idade": idade,
                "cpf": cpf,
                "email": email,
                "senha": senha
            };

            const res = await axios.post("https://uknow-api.web.app/cadastro", data);

            navigate("/login");
        }
        else
        { alert("Campo de email e senha vazios ou errados!");}
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
                    </Container>
                </Navbar>
            </header>

            <main className='login'>
                <aside className='asidecadastro'>
                    <br />
                    <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control 
                                value={nome} onChange={(e) => setNome(e.target.value)}
                                className='forms' type="text" placeholder="Nome Completo"
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Idade</Form.Label>
                            <Form.Control
                                value={idade} onChange={(e) => setIdade(e.target.value)} 
                                className='forms' type="number" placeholder="Data de Nascimento"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                                value={cpf} onChange={(e) => setCpf(e.target.value)} 
                                className='forms' type="text" placeholder="CPF"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Endereço de Email</Form.Label>
                            <Form.Control 
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                className='forms' type="email" placeholder="Endereço de Email"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Confirmar Email</Form.Label>
                            <Form.Control 
                                value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}
                                className='forms' type="email" placeholder="Confirmar Endereço de Email"
                            />
                        <Form.Text className="text-muted">
                            Nunca compartilharemos seu e-mail com mais ninguém.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control 
                                value={senha} onChange={(e) => setSenha(e.target.value)}
                                className='forms' type="password" placeholder=" Senha"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirmar Senha</Form.Label>
                            <Form.Control
                                value={confirmSenha} onChange={(e) => setConfirmSenha(e.target.value)} 
                                className='forms' type="password" placeholder="Confirmar Senha"
                            />
                        </Form.Group>
                        <Form.Text className="text-muted">
                            Nunca compartilharemos sua senha com mais ninguém.
                        </Form.Text>

                        <br />
                        <br />

                        <Button variant="primary" onClick={() => Cadastrar()}>
                            Submit
                        </Button>
                    </Form>
                </aside>
            </main>
        </>
    );
}//end Cadastro()