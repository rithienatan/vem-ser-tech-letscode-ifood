//----------- imports ----------
const fs = require("fs");


//----------- Globals ----------
async function CatchPokemon(params)
{
    const fileParty = fs.readFileSync("./Filesystem_temporary/Party.json");
    const filePokemon = fs.readFileSync("./Filesystem_temporary/Pokemon.json");

    let filePartyJson = JSON.parse(fileParty);
    const filePokemonJson = JSON.parse(filePokemon);

    const pokemon = filePokemonJson.pokemons.find(element => element.id == params.pokemonId);

    filePartyJson.parties.forEach((element) => {
        if(element.id == params.treinadorId)
        { element.pokemons.push(pokemon); }
    });

    fs.writeFileSync("./Filesystem_temporary/Party.json", JSON.stringify(filePartyJson));

    return(pokemon);
}//end CatchPokemon()


//----------- exports ----------
module.exports = CatchPokemon;