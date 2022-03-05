/**
 * Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
 * Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: 
 * 
 *      mediaFinal = ((n1 * 2) + (n2 * 3) + (n3 * 5))/10
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
let nota1 = null;
let nota2 = null;
let nota3 = null;


/**--------- Functions ----------**/
/**
 * Calcula a média final do aluno
 * 
 * @param {number} nota1 - Nota 1
 * @param {number} nota2 - Nota 2
 * @param {number} nota3 - Nota 3
 * 
 * @returns {number} Média final do aluno
 */
const MediaFinal = (nota1, nota2, nota3) => (nota1*2 + nota2*3 + nota3*5)/10;

/**
 * Valida o input dos usuários
 * 
 * @param {number} nota1 - Nota 1
 * @param {number} nota2 - Nota 2
 * @param {number} nota3 - Nota 3
 * 
 * @returns {boolean} True or False for indicate, info validation
 */
function ValidUserInput(nota1, nota2, nota3)
{
    let answer = true;

    if(nota1 === null || isNaN(nota1) === true || nota1 < 0 ||
        nota2 === null || isNaN(nota2) === true || nota2 < 0 ||
        nota3 === null || isNaN(nota3) === true || nota3 < 0)
    { answer = false; }

    return(answer);
}//end ValidUserInput()


/**--------- Main Program ----------**/
/**
 * Run Program
 */
function StaticMain()
{
    console.log("Entre com as notas do aluno!");
    let infoInputUser = false;

    do
    {
        nota1 = Number(prompt("Nota 1: "));
        nota2 = Number(prompt("Nota 2: "));
        nota3 = Number(prompt("Nota 3: "));

        if(ValidUserInput(nota1, nota2, nota3) === false)
        { console.log("Entrada inválida, digite novamente!\n"); }
        else
        { infoInputUser = true; }
    } while(infoInputUser === false);

    console.log("A média final do aluno é: ", MediaFinal(nota1, nota2, nota3));
}//end StaticMain()

StaticMain();


/**---------- Module Exports ----------**/
module.exports = {
    ValidUserInput
};