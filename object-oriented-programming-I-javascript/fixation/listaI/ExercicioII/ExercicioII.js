/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Forma = require('./Forma.js');
const prompt = require('prompt-sync')({sigint: true});


//---------- Functions ---------
/**
 * Valid user inputs
 * 
 * @param {string} forma 
 * @returns {boolean} True for valid, false for not valid
 */
function ValidUserInfo(forma)
{
    let answer = true;

    if(forma !== "Triângulo" && forma !== "Triangulo" && forma !== "triângulo" && forma !== "triangulo" &&
        forma !== "quadrado" && forma !== "circulo")
    { answer = false; }

    return(answer);
}//end ValidUserInfo()


//---------- Runing Program ----------
function StaticMain()
{
    //informações do usuário
    let objForma;

    do
    {
        objForma = prompt('Digite a forma: ');

        if(ValidUserInfo(objForma) === false)
        { console.log('Input errado, digite novamente!'); }
    } while(ValidUserInfo(objForma) === false);


    //criar o objeto forma
    let obj = new Forma(objForma);

    //printa forma
    console.log(obj.ObterTipo());
}//end StaticMain()

StaticMain();