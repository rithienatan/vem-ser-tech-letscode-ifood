/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Triangulo = require('./Triangulo.js');
const prompt = require('prompt-sync')({sigint: true});


//---------- Functions ---------
/**
 * Valid user inputs
 * 
 * @param {string} forma 
 * 
 * @returns {boolean} True for valid, false for not valid
 */
function ValidUserInfo(forma, a, b, c)
{
    let answer = true;

    if((forma !== "Triângulo" && forma !== "Triangulo" && forma !== "triângulo" && forma !== "triangulo") ||
        isNaN(a) || a < 0 || 
        isNaN(b) || b < 0 || 
        isNaN(c) || c < 0)
    { answer = false; }

    return(answer);
}//end ValidUserInfo()


//---------- Runing Program ----------
function StaticMain()
{
    //informações do usuário
    let objForma;
    let a, b, c;

    do
    {
        objForma = prompt('Digite a forma: ');

        console.log('\nDigite os lados do triângulo: \n');
        a = Number(prompt('Lado 1: '));
        b = Number(prompt('Lado 2: '));
        c = Number(prompt('Lado 3: '));

        if(ValidUserInfo(objForma, a, b, c) === false)
        { console.log('Input errado, digite novamente!'); }
    } while(ValidUserInfo(objForma, a, b, c) === false);


    //criar o objeto forma
    let obj = new Triangulo(objForma, a, b, c);

    //prints
    console.log(obj);
    console.log(obj.ObterTipo());
    console.log(obj.ObterPerimetro());
}//end StaticMain()

StaticMain();