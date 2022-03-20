/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Contratado = require("../ExercicioII/Contratado");


//---------- class ----------
class Estagiario extends Contratado 
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
     * @param {number} horaEstagioPorDia
     */
    constructor(nome, cpf, idade, dataNascimento, salarioBruto, cargo, setor, 
        horaEstagioPorDia)
    { 
        super(nome, cpf, idade, dataNascimento, salarioBruto, cargo, setor);

        this.horaEstagioPorDia = horaEstagioPorDia;
    }//end constructor()


    /**
     * Bater ponto estagio
     * 
     * @param {string} hora 
     */
    BaterPonto(hora)
    { console.log(`Ponto batido as ${hora} hrs`); }
}//end class

//---------- exports ---------
module.exports = Estagiario;