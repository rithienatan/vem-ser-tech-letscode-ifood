/**
 * @author Rithie
 * @author Thatyara
 * @author Wesley
 * @author Flavius
 * 
 * @date 01-05-2022
 * 
 * @version 1.0.1
 */
//---------- Imports ----------
const fs = require("fs").promises;
const pokemondb = require("../database/pokemon.json");

//---------- functions ----------
/**
 * Insert new pokemon in database
 * 
 * @param {Object} newpokemon 
 * @returns {Boolean} True for write in file successful or false for not.
 */
function InsertNewPokemon(newpokemon)
{
    let answer = true;

    let aux = pokemondb;
    aux.pokemonLastId = aux.pokemonLastId + 1;
    aux.pokemons.push({
        "id": aux.pokemonLastId,
        ...newpokemon
    });

    fs.writeFile("./database/pokemon.json", JSON.stringify(aux))
    .catch(err => {
        answer = false;
        console.log(err);
    });

    return(answer);
}//end InsertNewPokemon()

/**
 * Update pokemon
 * 
 * @param {Object} pokemon 
 * @returns {Object} Object.result = True for write in file successful or false for not.
 */
function UpdatePokemon(pokemon)
{
    let answer = {
        "result": true,
        "message": `Pokemon ${pokemon.name} has modified!`
    };
    let aux = pokemondb;
    const hasObject = aux.pokemons.find(element => element.name === pokemon.name);

    if(hasObject !== undefined)
    {
        const newArrayPokemon = aux.pokemons.filter(element => {
            if(element.name === pokemon.name)
            {
                if(pokemon.type !== "" && pokemon.type !== null)
                { element.type = pokemon.type; }
    
                if(pokemon.color !== "" && pokemon.color !== null)
                { element.color = pokemon.color; }
    
                if(pokemon.number !== "" && pokemon.number !== null)
                { element.number = pokemon.number; }
    
                return(element);
            }
            else
            { return(element); }
        });
        aux.pokemons = newArrayPokemon;
    
        fs.writeFile("./database/pokemon.json", JSON.stringify(aux))
        .catch(err => {
            answer.result = false;
            answer.message = `Unable to update pokemon ${pokemon.name} in database!`;
            console.log(err);
        });    
    }
    else
    { answer.message = `Unable to find pokemon ${pokemon.name}!`; }

    return(answer);
}//end UpdatePokemon()

/**
 * Delete pokemon from database
 * 
 * @param {Number} pokemon_id
 * @returns {Object} Object.result = true for write in file successful or false for not.
 */
function DeletePokemon(pokemon_id)
{
    let answer = {
        "result": true,
        "message": ""
    };

    let aux = pokemondb;

    if(aux.pokemonLastId === 0)
    { answer.message = "Has not any pokemon in database already!"; }
    else
    {
        const hasPokemon = aux.pokemons.find(element => element.id === pokemon_id);

        if(hasPokemon !== undefined)
        {
            const newArrayPokemons = aux.pokemons.filter(element => {
                if(element.id !== pokemon_id)
                { return(element); }
            });
            aux.pokemons = newArrayPokemons;

            answer.message = `Pokemon ${hasPokemon.name} has deleted!`;
    
            fs.writeFile("./database/pokemon.json", JSON.stringify(aux))
            .catch(err => {
                answer.result = false;
                answer.message = `Unable to delete pokemon ${hasPokemon.name}!`;
                console.log(err);
            });
        }
        else
        { answer.message = `No pokemon with such id ${pokemon_id} exist!`; }
    }//end if

    return(answer);
}//end DeletePokemon()

//---------- Exports ----------
module.exports = {
    pokemondb,
    InsertNewPokemon,
    UpdatePokemon,
    DeletePokemon
};