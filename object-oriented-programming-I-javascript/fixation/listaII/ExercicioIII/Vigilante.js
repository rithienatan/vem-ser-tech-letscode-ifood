/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Terceirizado = require("../ExercicioII/Terceirizado");


//---------- class ----------
class Vigilante extends Terceirizado
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
     * @param {string} empresaParceira
     * @param {number} altura
     * @param {number} peso
     */
    constructor(nome, cpf, idade, dataNascimento, salarioBruto, cargo, empresaParceira,
        altura, peso)
    { 
        super(nome, cpf, idade, dataNascimento, salarioBruto, cargo, empresaParceira); 

        this.altura = altura;
        this.peso = peso;
    }//end constructor()

    /**
     * Vigiar local
     * 
     * @param {string} local 
     */
    VigiarLocal(local)
    { console.log(`${this.nome} está vigiando ${local}!`); }
}//end class


//---------- exports ---------
module.exports = Vigilante;