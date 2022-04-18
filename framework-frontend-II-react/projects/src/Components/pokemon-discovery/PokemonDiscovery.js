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
export default function PokemonDiscovery({ pokemon, palpite })
{
    //document.getElementById(pokemon.id).style.filter = "brightness(1)";
   
    return(
        <Container 
            className="containerPokemonDiscovery"
            disableGutters
            sx={{ margin: 0, width: "100%", height: "70vh" }}
        >
            <img 
                id={pokemon.id} 
                className={palpite ? "pokemonImgShow" : "pokemonImgHide"} 
                src={pokemon.sprite}
            />
        </Container>
    );
}//end PokemonDiscovery()