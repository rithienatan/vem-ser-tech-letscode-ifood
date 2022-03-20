/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Contratado = require("../ExercicioII/Contratado");


//---------- class ----------
class Vendedor extends Contratado
{
    /**
     * Default constructor
     * 
     * @param {string} nome 
     * @param {string} cpf 
     * @param {number} idade 
     * @param {string} dataNascimento 
     * @param {number} salarioBruto
     * @param {string} cargo
     * @param {string} setor
     * @param {string} sexo
     */
    constructor(nome, cpf, idade, dataNascimento, salarioBruto, cargo, setor, 
        sexo)
    { 
        super(nome, cpf, idade, dataNascimento, salarioBruto, cargo, setor);

        this.sexo = sexo;
    }//end constructor()

    /**
     * Vender produto
     * 
     * @param {string} produto 
     * @param {number} precoProduto 
     */
    VenderProduto(produto, precoProduto)
    { console.log(`Vendo ${produto} a ${precoProduto}`); }
}//end class

//---------- exports ---------
module.exports = Vendedor;