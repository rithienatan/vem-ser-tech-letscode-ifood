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
const onepiecedb = require("../database/onepiece.json");

//---------- functions ----------
/**
 * Insert new One Piece character in database
 * 
 * @param {Object} newonepiece
 * @returns {Boolean} True for write in file successful or false for not.
 */
function InsertNewOnePiece(newonepiece)
{
    let answer = true;

    let aux = onepiecedb;
    aux.onepieceLastId = aux.onepieceLastId + 1;
    aux.onepieces.push({
        "id": aux.onepieceLastId,
        ...newonepiece
    });

    fs.writeFile("./database/onepiece.json", JSON.stringify(aux))
    .catch(err => {
        answer = false;
        console.log(err);
    });

    return(answer);
}//end InsertNewOnePiece()

/**
 * Update One Piece character
 * 
 * @param {Object} onepiece 
 * @returns {Object} Object.result = True for write in file successful or false for not.
 */
function UpdateOnePiece(onepiece)
{
    let answer = {
        "result": true,
        "message": `One Piece character ${onepiece.name} has modified!`
    };
    let aux = onepiecedb;
    const hasObject = aux.onepieces.find(element => element.name === onepiece.name);

    if(hasObject !== undefined)
    {
        const newArrayOnePiece = aux.onepieces.filter(element => {
            if(element.name === onepiece.name)
            {
                if(onepiece.localOrigem !== "" && onepiece.localOrigem !== null)
                { element.localOrigem = onepiece.localOrigem; }
    
                if(onepiece.apelido !== "" && onepiece.apelido !== null)
                { element.apelido = onepiece.apelido; }
    
                if(onepiece.ocupacao !== "" && onepiece.ocupacao !== null)
                { element.ocupacao = onepiece.ocupacao; }
    
                return(element);
            }
            else
            { return(element); }
        });
        aux.onepieces = newArrayOnePiece;
    
        fs.writeFile("./database/onepiece.json", JSON.stringify(aux))
        .catch(err => {
            answer.result = false;
            answer.message = `Unable to update One Piece character ${onepiece.name} in database!`;
            console.log(err);
        });    
    }
    else
    { answer.message = `Unable to find One Piece character ${pokemon.name}!`; }

    return(answer);
}//end UpdateOnePiece()

/**
 * Delete One Piece character from database
 * 
 * @param {Number} onepiece_id
 * @returns {Object} Object.result = true for write in file successful or false for not.
 */
function DeleteOnePiece(onepiece_id)
{
    let answer = {
        "result": true,
        "message": ""
    };

    let aux = onepiecedb;

    if(aux.onepieceLastId === 0)
    { answer.message = "Has not any One Piece character in database already!"; }
    else
    {
        const hasOnePiece = aux.onepieces.find(element => element.id === onepiece_id);

        if(hasOnePiece !== undefined)
        {
            const newArrayOnePiece = aux.onepieces.filter(element => {
                if(element.id !== onepiece_id)
                { return(element); }
            });
            aux.onepieces = newArrayOnePiece;

            answer.message = `One Piece character ${hasOnePiece.name} has deleted!`;
    
            fs.writeFile("./database/onepiece.json", JSON.stringify(aux))
            .catch(err => {
                answer.result = false;
                answer.message = `Unable to delete pokemon ${hasOnePiece.name}!`;
                console.log(err);
            });
        }
        else
        { answer.message = `No One Piece character with such id ${onepiece_id} exist!`; }
    }//end if

    return(answer);
}//end DeleteOnePiece()

//---------- Exports ----------
module.exports = {
    onepiecedb,
    InsertNewOnePiece,
    UpdateOnePiece,
    DeleteOnePiece
};