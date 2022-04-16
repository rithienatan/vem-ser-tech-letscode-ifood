/*----------- Libs and Others ----------*/
import { React } from "react";


/*---------- CSSs ----------*/
import "./PokemonDiscovery.css";
import { Container } from "@mui/material";


/*----------- Component PokemonDiscovery ----------*/
/**
 * Component Pokemon Discovery
 * 
 * @returns {JSX.Element}
 */
export default function PokemonDiscovery()
{
    return(
        <Container>
            <img className="backgroundImg" src="https://images3.alphacoders.com/677/thumb-1920-677583.png" alt="Quem é esse pokemon?" />
        </Container>
    );
}//end PokemonDiscovery()