/*----------- Libs and Others ----------*/
import { React } from "react";


/*---------- CSSs ----------*/
import "./PokemonLog.css";
import { Container } from "@mui/material";


/*----------- Component PokemonLog ----------*/
/**
 * Component Pokemon Log
 * 
 * @param {string} names
 * 
 * @returns {JSX.Element}
 */
export default function PokemonLog({ names })
{
    return(
        <Container sx={{ color: "#FFEBC6" }}>
            <p className="logText">Pokémon {names}</p>
        </Container>
    );
}//end PokemonLog()