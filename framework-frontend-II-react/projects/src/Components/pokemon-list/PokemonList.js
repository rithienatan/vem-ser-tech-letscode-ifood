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
 * 
 * @returns {JSX.Element}
 */
export default function PokemonList({ pokemons, isThatPokemon })
{
    /**
     * Palpite do usuário
     * 
     * @param {object} element 
     */
    const palpite = (element) => {
        if(element.name === isThatPokemon.name)
        {  }
        else
        {  }
    };

    return(
        <List>
            {pokemons.map((element, index) => {
                return(
                    <ListItem disablePadding key={index}>
                        <ListItemButton onClick={() => palpite(element)}>
                            <ListItemIcon>
                                <img className="pokemonIcon" src={element.sprite} alt={element.name} />
                            </ListItemIcon>

                            <ListItemText primary={`#${("000" + (index + 1)).slice(-3)} - ${element.name}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}//end PokemonList()