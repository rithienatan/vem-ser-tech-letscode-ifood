//----------- imports ----------
const fs = require("fs");


//----------- Globals ----------
async function CreatePokemons(params)
{
    let file = fs.readFileSync("./Filesystem_temporary/Pokemon.json");
    let fileJson = JSON.parse(file);

    const pokemon = {
        "id": fileJson.last_id + 1,
        ...params
    };

    fileJson.pokemons.push(pokemon);
    fileJson.last_id = pokemon.id; 

    fs.writeFileSync("./Filesystem_temporary/Pokemon.json", JSON.stringify(fileJson));

    return(pokemon);
}//end CreatePokemons()


//----------- exports ----------
module.exports = CreatePokemons;