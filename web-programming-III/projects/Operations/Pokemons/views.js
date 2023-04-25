//----------- imports ----------
const fs = require("fs");


//----------- Globals ----------
async function ViewsPokemons(params)
{
    let answer = null;

    let file = fs.readFileSync("./Filesystem_temporary/Pokemon.json");
    let fileJson = JSON.parse(file);
    let paramType = params.pokemonId;

    if(paramType === "all")
    { answer = fileJson.pokemons; }
    else
    {
        let idPokemon = parseInt(paramType);
        answer = fileJson.pokemons.find(element => element.id === idPokemon)
    }//end if

    return(answer);
}//end ViewsPokemons()


//----------- exports ----------
module.exports = ViewsPokemons;