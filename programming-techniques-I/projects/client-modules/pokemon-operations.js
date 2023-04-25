/**
 * @author Rithie
 * @author Thatyara
 * @author Wesley
 * @author Flavius
 * 
 * @date 01-05-2022
 * 
 * @version 0.1.0
 */
//---------- Imports ----------
import axios from "axios";
//const axios = require("axios").default;
//const url = require("url");


//---------- Functions ---------
async function CreatePokemon()
{
    const data = {

    };

    const response = await axios.post("localhost:8000/createpokemon", data);

    console.log(response);

    if(response.status === 200)
    {
        return(alert("Pokemon inserido com sucesso!"));
    }
    else
    {
        return(alert("Error! Could not insert Pokemon in database!"));
    }//end if
}//end CreatePokemon()

async function UpdatePokemon()
{

}//end UpdatePokemon()

async function DeletePokemon()
{
    const data = {
        
    };

    const response = await axios.post("localhost:8000/updatepokemon", data)
}//end DeletePokemon()

async function MostrarPokemons()
{

}//end MostrarPokemons()


//---------- Exports ----------
module.exports = {
    CreatePokemon
};