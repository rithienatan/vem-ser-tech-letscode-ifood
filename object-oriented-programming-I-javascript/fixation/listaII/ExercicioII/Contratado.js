/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Funcionario = require("../ExercicioI/Funcionario");


//---------- class ----------
class Contratado extends Funcionario
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
     */
    constructor(nome, cpf, idade, dataNascimento, salarioBruto, cargo, setor)
    { 
        super(nome, cpf, idade, dataNascimento, salarioBruto, cargo);

        this.setor = setor;
    }//end constructor()
}//end class

//---------- exports ---------
module.exports = Contratado;