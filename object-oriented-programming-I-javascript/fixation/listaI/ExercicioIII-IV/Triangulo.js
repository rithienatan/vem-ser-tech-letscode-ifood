/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Forma = require("../ExercicioII/Forma");


//---------- class ----------
class Triangulo extends Forma
{
    /**
     * Default constructor
     * 
     * @param {string} tipo
     * @param {number} a 
     * @param {number} b 
     * @param {number} c 
     */
    constructor(tipo, a, b, c)
    {
        super(tipo);

        this.a = a;
        this.b = b;
        this.c = c;
    }//end constructor()

    /**
     * Calcula o perímetro do triangulo
     * 
     * @returns {number}
     */
    ObterPerimetro()
    { return(this.a + this.b + this.c); }
}//end class

//---------- exports ---------
module.exports = Triangulo;