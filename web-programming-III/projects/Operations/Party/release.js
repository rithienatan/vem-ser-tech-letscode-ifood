//----------- imports ----------
const fs = require("fs");


//----------- Globals ----------
async function ReleasePokemon(params)
{
    const fileParty = fs.readFileSync("./Filesystem_temporary/Party.json");

    let filePartyJson = JSON.parse(fileParty);

    const newArray = filePartyJson.parties.filter((element) => {
        if(element.id == params.treinadorId)
        {
            let newArrayPokemons = element.pokemons.filter(pokemon => pokemon.id != params.pokemonId);

            element.pokemons = newArrayPokemons;
        }//end if

        return(element);
    });

    filePartyJson.parties = newArray;

    fs.writeFileSync("./Filesystem_temporary/Party.json", JSON.stringify(filePartyJson));

    return(newArray);
}//end ReleasePokemon()


//----------- exports ----------
module.exports = ReleasePokemon;