/*----------- Libs and Others ----------*/
import { React } from "react";


/*---------- CSSs ----------*/
import "./PokemonList.css";
import { 
    List, ListItem, ListItemButton, ListItemIcon, ListItemText
} from "@mui/material"; 


/*----------- Component PokemonList ----------*/
/**
 * Component Pokemon List
 * 
 * @param {Object[]} pokemons
 * @param {Object} isThatPokemon - Pokemon sort by NumberRNG function
 * @param {Function} rightPalpite - Sets right palpite as a true
 * @param {Function} updateLog
 * 
 * @returns {JSX.Element}
 */
export default function PokemonList({ pokemons, isThatPokemon, rightPalpite, updateLog })
{
    /**
     * Palpite do usuário
     * 
     * @param {object} element 
     */
    const palpite = (element, index) => {
        if(element.name === isThatPokemon.name)
        { rightPalpite(true); updateLog(element.name); }
        else
        { document.getElementById(index).style.display = "none"; }
    };

    return(
        <List
            sx={{ maxHeight: "98.2vh", overflow: "auto", '& ul': { padding: 0 } }}
        >
            {pokemons.map((element, index) => {
                return(
                    <ListItem disablePadding id={index} key={index}>
                        <ListItemButton 
                            sx={{ ":hover": { backgroundColor: "#FFF" } }}
                            onClick={() => palpite(element, index)}
                        >
                            <ListItemIcon sx={{ display: "none" }}>
                                <img className="pokemonIcon" src={element.sprite} alt={element.name} />
                            </ListItemIcon>

                            <ListItemText 
                                sx={{ color: "#FFEBC6" }}
                                primary={`#${("000" + (element.id)).slice(-3)} - ${element.name}`} 
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}//end PokemonList()