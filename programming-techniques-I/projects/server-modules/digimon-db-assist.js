/**
 * @author Rithie
 * @author Thatyara
 * @author Wesley
 * @author Flavius
 * 
 * @date 01-05-2022
 * 
 * @version 1.0.0
 */
//---------- Imports ----------
const fs = require("fs").promises;
const digimondb = require("../database/digimon.json");

//---------- functions ----------
/**
 * Insert new pokemon in database
 * 
 * @param {Object} newdigimon 
 * @returns {Boolean} True for write in file successful or false for not.
 */
function InsertNewdigimon(newdigimon)
{
    let answer = true;

    let aux = digimondb;
    aux.digimonLastId = aux.digimonLastId + 1;
    aux.digimons.push({
        "id": aux.digimonLastId,
        ...newdigimon
    });

    fs.writeFile("./database/digimon.json", JSON.stringify(aux))
    .catch(err => {
        answer = false;
        console.log(err);
    });

    return(answer);
}//end InsertNewDigimon()

/**
 * Update Digimon
 * 
 * @param {Object} digimon 
 * @returns {Object} Object.result = True for write in file successful or false for not.
 */
function UpdateDigimon(digimon)
{
    let answer = {
        "result": true,
        "message": `Digimon ${digimon.nome} has modified!`
    };
    let aux = digimondb;
    const hasObject = aux.digimons.find(element => element.nome === digimon.nome);

    if(hasObject !== undefined)
    {
        const newArrayDigimon = aux.digimons.filter(element => {
            if(element.nome === digimon.nome)
            {
                if(digimon.tipo !== "" && digimon.tipo !== null)
                { element.tipo = digimon.tipo; }
    
                if(digimon.cor !== "" && digimon.cor !== null)
                { element.cor = digimon.cor; }
    
                if(digimon.atributo !== "" && digimon.atributo !== null)
                { element.atributo = digimon.atributo; }
    
                return(element);
            }
            else
            { return(element); }
        });
        aux.digimons = newArrayDigimon;
    
        fs.writeFile("./database/digimon.json", JSON.stringify(aux))
        .catch(err => {
            answer.result = false;
            answer.message = `Unable to update digimon ${digimon.nome} in database!`;
            console.log(err);
        });    
    }
    else
    { answer.message = `Unable to find digimon ${digimon.nome}!`; }

    return(answer);
}//end UpdateDigimon()

/**
 * Delete digimon from database
 * 
 * @param {Number} digimon_id
 * @returns {Object} Object.result = true for write in file successful or false for not.
 */
function DeleteDigimon(digimon_id)
{
    let answer = {
        "result": true,
        "message": ""
    };

    let aux = digimondb;

    if(aux.digimonLastId === 0)
    { answer.message = "Has not any digimon in database already!"; }
    else
    {
        const hasDigimon = aux.digimons.find(element => element.id === digimon_id);

        if(hasDigimon !== undefined)
        {
            const newArrayDigimons = aux.digimons.filter(element => {
                if(element.id !== digimon_id)
                { return(element); }
            });
            aux.digimons = newArrayDigimons;

            answer.message = `Digimon ${hasDigimon.nome} has deleted!`;
    
            fs.writeFile("./database/digimon.json", JSON.stringify(aux))
            .catch(err => {
                answer.result = false;
                answer.message = `Unable to delete digimon ${digimon.nome}!`;
                console.log(err);
            });
        }
        else
        { answer.message = `No digimon with such id ${digimon_id} exist!`; }
    }//end if

    return(answer);
}//end DeletePokemon()

//---------- Exports ----------
module.exports = {
    digimondb,
    InsertNewdigimon,
    UpdateDigimon,
    DeleteDigimon
};