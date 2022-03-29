/**
 * @author Rithie
 * @author Thatyara
 * @author Wesley
 * @author Flávius
 * 
 * @version 0.1.0
 */
//---------- Class ----------
class Cardapio
{
    #listaPratos;
    #listaBebidas;

    /**
     * Default constructor
     * 
     * @param {number} id
     */
    constructor(id)
    {
        this.id = id;
        this.#listaPratos = [];
        this.#listaBebidas = [];
    }//end constructor()

    //---------- get(s) and set(s) ---------
    /**
     * Get listaPratos
     * 
     * @returns {array}
     */
    getListaPratos()
    { return(this.#listaPratos); }

    /**
     * Set listaPratos
     * 
     * @param {array} listaPratos
     */
    setListaPratos(listaPratos)
    { this.#listaPratos = listaPratos; }

    /**
     * Get listaBebidas
     * 
     * @returns {array}
     */
    getListaBebidas()
    { return(this.#listaBebidas); }
 
    /**
     * Set listaBebidas
     * 
     * @param {array} listaBebidas
     */
    setListaBebidas(listaBebidas)
    { this.#listaBebidas = listaBebidas; }
}//end class

//---------- exports ----------
module.exports = Cardapio;