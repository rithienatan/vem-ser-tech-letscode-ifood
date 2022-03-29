/**
 * @author Rithie
 * @author Thatyara
 * @author Wesley
 * @author Flávius
 * 
 * @version 0.1.0
 */
//--------- Imports ---------
const Item = require("./Item");


//---------- Class ----------
class Prato extends Item
{
    /**
     * Default constructor
     * 
     * @param {string} nome
     * @param {number} valor 
     */
    constructor(nome, valor)
    { super("Prato", nome, valor); }
}//end class

//---------- exports ----------
module.exports = Prato;