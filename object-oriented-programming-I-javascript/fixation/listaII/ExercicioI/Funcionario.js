/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- class ----------
class Funcionario
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
     */
    constructor(nome, cpf, idade, dataNascimento, salarioBruto, cargo)
    {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
        this.salarioBruto = salarioBruto;
        this.cargo = cargo;
    }//end constructor()

    /**
     * Calcula o salário do funcionário
     *  
     * @param {number} descontoTotal - Array com todos os descontos 
     * @returns {number}
     */
    CalcularSalario(descontoTotal)
    { return(this.salarioBruto - descontoTotal); }

    /**
     * Calcula a férias do funcionário
     * 
     * @param {number} salario 
     * @param {number} bonusSalario 
     * @returns {number}
     */
    CalcularFerias(salario, bonusSalario)
    { return(salario + bonusSalario); }
}//end class


//---------- exports ---------
module.exports = Funcionario;