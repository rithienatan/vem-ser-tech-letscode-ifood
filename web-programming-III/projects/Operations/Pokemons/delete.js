//----------- imports ----------
const fs = require("fs");


//----------- Globals ----------
async function DeletePokemons(params)
{
    let file = fs.readFileSync("./Filesystem_temporary/Pokemon.json");
    let fileJson = JSON.parse(file);
    let id = parseInt(params.pokemonId);

    const pokemon = fileJson.pokemons.find(element => element.id === id);

    const arrayPokemon = fileJson.pokemons.filter(element => element.id !== id);
    fileJson.pokemons = arrayPokemon;

    fs.writeFileSync("./Filesystem_temporary/Pokemon.json", JSON.stringify(fileJson));

    return(pokemon);
}//end DeletePokemons()


//----------- exports ----------
module.exports = DeletePokemons;