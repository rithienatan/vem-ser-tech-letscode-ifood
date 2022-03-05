/**
 * As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. 
 * Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.  
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
let quantidade = null;


/**--------- Functions ----------**/
/**
 * Verifica se o valor é positivo ou negativo
 * 
 * @param {number} quantidade
 * 
 * @returns {number} Retorna o valor total da compra
 */
const CalculaCompra = (quantidade) => quantidade >= 12 ? quantidade*1 : quantidade*1.3 ;

/**
 * Valida o input dos usuários
 * 
 * @param {number} quantidade
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidUserInput(quantidade)
{
    let answer = true;

    if(quantidade === null || isNaN(quantidade) === true || quantidade < 0)
    { answer = false; }

    return(answer);
}//end ValidUserInput()


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("Entre com a quantidade de maçãs compradas!");
    let infoInputUser = false;

    do
    {
        quantidade = Number(prompt("Quantidade: "));

        if(ValidUserInput(quantidade) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoInputUser = true; }
    } while(infoInputUser === false);

    console.log("Valor da compra: ", CalculaCompra(quantidade));
}//end StaticMain()

//StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};