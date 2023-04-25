//----------- imports ----------
const fs = require("fs");


//----------- Globals ----------
async function UpdatePokemons(params, body)
{
    let file = fs.readFileSync("./Filesystem_temporary/Pokemon.json");
    let fileJson = JSON.parse(file);
    let id = parseInt(params.pokemonId);

    const pokemon = fileJson.pokemons.find(element => element.id === id);
    const index = fileJson.pokemons.findIndex(element => element.id === id);

    fileJson.pokemons[index] = {
        "id": pokemon.id,
        ...body
    };

    fs.writeFileSync("./Filesystem_temporary/Pokemon.json", JSON.stringify(fileJson));

    return(fileJson.pokemons[index]);
}//end UpdatePokemons()


//----------- exports ----------
module.exports = UpdatePokemons;