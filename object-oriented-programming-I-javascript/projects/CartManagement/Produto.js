/**
 * @author Rithie
 * @author Thatyara
 * @author Wesley
 * @author Flávius
 * 
 * @version 0.1.0
 */
//---------- Imports ---------
const Bebida = require('../ItensManagement/Bebida.js');
const Prato = require('../ItensManagement/Prato.js');


//---------- Class ----------
class Produto
{
    #item;
    #quantidade;

    /**
     * Default constructor
     * 
     * @param {Bebida|Prato} item
     * @param {number} quantidade
     */
    constructor(item, quantidade)
    {
        this.#item = item;
        this.#quantidade = quantidade;
    }//end constructor()

    //---------- get(s) and set(s) ---------
    /**
     * Get Item
     * 
     * @returns {Bebida|Prato}
     */
    getItem()
    { return(this.#item); }

    /**
     * Set Item
     * 
     * @param {Bebida|Prato} item
     */
    setItem(item)
    { this.#item = item; }

    /**
     * Get quantidade
     * 
     * @returns {number}
     */
    getQuantidade()
    { return(this.#quantidade); }
 
    /**
     * Set quantidade
     * 
     * @param {number} quantidade
     */
    setQuantidade(quantidade)
    { this.#quantidade = quantidade; }
}//end class

//---------- exports ----------
module.exports = Produto;