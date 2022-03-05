/**
 * Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário 
 * escrever NÃO É MAIOR QUE 10! 
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
let valor = null;


/**--------- Functions ----------**/
/**
 * Verifica se o valor é maior que 10
 * 
 * @param {number} valor
 * 
 * @returns {string} Diz se é maior que 10 ou não
 */
const VerificarValor = (valor) => valor > 10 ? "É MAIOR QUE 10!" : "NÃO É MAIOR QUE 10!";

/**
 * Valida o input dos usuários
 * 
 * @param {number} valor
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidUserInput(valor)
{
    let answer = true;

    if(valor === null || isNaN(valor) === true)
    { answer = false; }

    return(answer);
}//end ValidUserInput()


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("Entre com um valor!");
    let infoInputUser = false;

    do
    {
        valor = Number(prompt("Valor: "));

        if(ValidUserInput(valor) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoInputUser = true; }
    } while(infoInputUser === false);

    console.log(VerificarValor(valor));
}//end StaticMain()

StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};