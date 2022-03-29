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
class Bebida extends Item
{
    /**
     * Default constructor
     * 
     * @param {string} nome
     * @param {number} valor 
     */
    constructor(nome, valor)
    { super("Bebida", nome, valor); }
}//end class

//---------- exports ----------
module.exports = Bebida;