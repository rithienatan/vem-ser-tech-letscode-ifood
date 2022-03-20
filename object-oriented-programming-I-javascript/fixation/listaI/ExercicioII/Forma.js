/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- class ----------
class Forma
{
    /**
     * Constructor default
     * 
     * @param {string} tipo 
     */
    constructor(tipo)
    {
        this.tipo = tipo;
    }//end constructor()

    /**
     * Retorna o tipo da forma
     * 
     * @returns {string}
     */
    ObterTipo()
    { return(this.tipo); }
}//end Matheus

//---------- exports ---------
module.exports = Forma;