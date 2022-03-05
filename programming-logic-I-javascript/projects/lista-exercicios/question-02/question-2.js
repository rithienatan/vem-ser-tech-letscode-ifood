/**
 * Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
 * Calcular e escrever o valor do novo salário. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
/**
 * @author Rithie Natan
 * @date 04-03-2022
 * @version 0.1.0
 */
/**--------- Imports ---------**/
const prompt = require('prompt-sync')({sigint: true});


/**--------- Global Variables ---------**/
let salario = null;
let reajuste = null;


/**--------- Functions ----------**/
/**
 * Reajusta o salário do funcionário
 * 
 * @param {number} salario - Salário base
 * @param {number} reajuste - Percentual de reajuste do salário
 * 
 * @returns {number} Novo salário
 */
const SalarioReajuste = (salario, reajuste) => salario + salario*(reajuste/100);

/**
 * Valida o input dos usuários
 * 
 * @param {number} salario - Salário base
 * @param {number} reajuste - Percentual de reajuste do salário
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidUserInput(salario, reajuste)
{
    let answer = true;

    if(salario === null || isNaN(salario) === true || salario < 0 ||
        reajuste === null || isNaN(reajuste) === true || reajuste < 0)
    { answer = false; }

    return(answer);
}//end ValidUserInput()


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("Entre com o salário e o percentual de ajuste do funcionário!");
    let infoInputUser = false;

    do
    {
        salario = Number(prompt("Entre com o salário do funcionário: "));
        reajuste = Number(prompt("Entre com o percentual de reajuste: "));

        if(ValidUserInput(salario, reajuste) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoInputUser = true; }
    } while(infoInputUser === false);

    console.log("O novo salário é: ", SalarioReajuste(salario, reajuste));
}//end StaticMain()

StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};