//----------- Import libs ----------
import axios from "axios";
import React, { useState, useEffect } from "react";


//----------- Import Styles ---------
import { 
    Col, Row, Button
} from 'react-bootstrap';


//----------- Import Custom Styles ---------
import Cards from './cards';
import './index.css';


//----------- Component ------------
/**
 * Component Cursos
 * 
 * @returns {JSX}
 */
export default function ListaDeCursos()
{
    const [cursos, setCursos] = useState([]);

    const ourCursos = async () => {
        const res = await axios.get("https://uknow-api.web.app/getcursos");
        setCursos(res.data.cursos);
    };

    useEffect(() => {
        ourCursos();
    }, []);

    return (
        <>
            <h1>Veja um pouco de nossos cursos</h1>
            <Row lg={3} md={2} sm={1}>
                {cursos.map((element) => {
                    return(
                        <Col style={{ display: "flex", justifyContent: "center", margin: "0", padding: "0"}}>
                            <Cards curso={element} />
                        </Col> 
                    );
                })}
            </Row>
        </>
    );
}//end ListaDeCursos()