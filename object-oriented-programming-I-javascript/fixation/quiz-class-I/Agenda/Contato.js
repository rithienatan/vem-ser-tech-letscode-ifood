/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Classes ---------
class Contato
{
    /**
     * Constructor default
     * 
     * @param {string} nome - Nome contato
     * @param {string} numero - Numero contato
     */
    constructor(nome, numero)
    {
        this.nome = nome;
        this.numero = numero;
    }//end constructor()
}//end class

//---------- exports ----------
module.exports = Contato;