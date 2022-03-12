/**
 * @author Rithie Natan
 * @date 11-03-2022
 * @version 0.1.0
 */
/**--------- Global ---------**/
let historic = [];

let x;
let y;
let z;


/**--------- Operations ---------**/
const soma = (x, y) => x + y;

const subtracao = (x, y) => x - y;

const multiplicacao = (x, y) => x * y;

function divisao(x, y)
{
    let anwser = null;

    if(y === 0)
    { anwser = "Não é possível divisões por 0"; }
    else
    { anwser = x / y; }

    return(anwser);
}//end divisao()

const mod = (x, y) => x % y;

const raizQuadrada = (x) => Math.sqrt(x);

const potenciacao = (x, y) => Math.pow(x, y); 

const seno = (x) => Math.sin(x);

const cosseno = (x) => Math.cos(x);

const pi = () => Math.PI;


/**--------- Functions ---------**/
function SelectOperation()
{
    let optionValue = document.getElementById("optionOperation").value;

    switch(optionValue)
    {
        case '1':
            document.getElementById("double--input").style.display = 'initial';
            document.getElementById("single--input").style.display = 'none';
            break;
        case '2':
            document.getElementById("double--input").style.display = 'initial';
            document.getElementById("single--input").style.display = 'none';
            break;
        case '3':
            document.getElementById("double--input").style.display = 'initial';
            document.getElementById("single--input").style.display = 'none';
            break;
        case '4':
            document.getElementById("double--input").style.display = 'initial';
            document.getElementById("single--input").style.display = 'none';
            break;
        case '5':
            document.getElementById("double--input").style.display = 'initial';
            document.getElementById("single--input").style.display = 'none';
            break;
        case '6':
            document.getElementById("double--input").style.display = 'none';
            document.getElementById("single--input").style.display = 'initial';
            break;
        case '7':
            document.getElementById("double--input").style.display = 'initial';
            document.getElementById("single--input").style.display = 'none';
            break;
        case '8':
            document.getElementById("double--input").style.display = 'none';
            document.getElementById("single--input").style.display = 'initial';
            break;
        case '9':
            document.getElementById("double--input").style.display = 'none';
            document.getElementById("single--input").style.display = 'initial';
            break;
        case '10':
            document.getElementById("double--input").style.display = 'none';
            document.getElementById("single--input").style.display = 'none';
            break;
    }//end switch-case
}//end SelectOperation()

function Limpar()
{ 
    historic = []; 
    document.getElementById("historic").innerHTML = JSON.stringify(historic);
}//end Limpar()


/**--------- Main ---------**/
function Calcular()
{
    let optionValue = document.getElementById("optionOperation").value;

    switch(optionValue)
    {
        case '1':
            x = Number(document.getElementById("numberX").value);
            y = Number(document.getElementById("numberY").value);
            let sum = soma(x, y);

            historic.unshift({
                'x': x,
                'y': y,
                'operador': '+',
                'resultado': sum
            });

            document.getElementById("historic").innerHTML = JSON.stringify(historic);
            alert(soma(x, y));
            break;
        case '2':
            x = Number(document.getElementById("numberX").value);
            y = Number(document.getElementById("numberY").value);
            let sub = subtracao(x, y);

            historic.unshift({
                'x': x,
                'y': y,
                'operador': '-',
                'resultado': sub
            });

            document.getElementById("historic").innerHTML = JSON.stringify(historic);
            alert(subtracao(x, y));
            break;
        case '3':
            x = Number(document.getElementById("numberX").value);
            y = Number(document.getElementById("numberY").value);
            let mult = multiplicacao(x, y);

            historic.unshift({
                'x': x,
                'y': y,
                'operador': '*',
                'resultado': mult
            });

            document.getElementById("historic").innerHTML = JSON.stringify(historic);
            alert(multiplicacao(x, y));
            break;
        case '4':
            x = Number(document.getElementById("numberX").value);
            y = Number(document.getElementById("numberY").value);
            let div = divisao(x, y);

            historic.unshift({
                'x': x,
                'y': y,
                'operador': '/',
                'resultado': div
            });

            document.getElementById("historic").innerHTML = JSON.stringify(historic);
            alert(divisao(x, y));
            break;
        case '5':
            x = Number(document.getElementById("numberX").value);
            y = Number(document.getElementById("numberY").value);
            let rest = mod(x, y);

            historic.unshift({
                'x': x,
                'y': y,
                'operador': '%',
                'resultado': rest
            });

            document.getElementById("historic").innerHTML = JSON.stringify(historic);
            alert(mod(x, y));
            break;
        case '6':
            z = Number(document.getElementById("numberZ").value);
            let raiz = raizQuadrada(z);

            historic.unshift({
                'z': z,
                'operador': 'raiz',
                'resultado': raiz
            });

            document.getElementById("historic").innerHTML = JSON.stringify(historic);
            alert(raizQuadrada(z));
            break;
        case '7':
            x = Number(document.getElementById("numberX").value);
            y = Number(document.getElementById("numberY").value);
            let potencia = potenciacao(x, y);

            historic.unshift({
                'x': x,
                'y': y,
                'operador': '^',
                'resultado': potencia
            });

            document.getElementById("historic").innerHTML = JSON.stringify(historic);
            alert(potenciacao(x, y));
            break;
        case '8':
            z = Number(document.getElementById("numberZ").value);
            let sen = seno(z);

            historic.unshift({
                'z': z,
                'operador': 'seno',
                'resultado': sen
            });

            document.getElementById("historic").innerHTML = JSON.stringify(historic);
            alert(seno(z));
            break;
        case '9':
            z = Number(document.getElementById("numberZ").value);
            let cos = cosseno(z);

            historic.unshift({
                'z': z,
                'operador': 'cosseno',
                'resultado': cos
            });

            document.getElementById("historic").innerHTML = JSON.stringify(historic);
            alert(cosseno(z));
            break;
        case '10':
            historic.unshift({
                'operador': 'PI',
                'resultado': pi()
            });

            document.getElementById("historic").innerHTML = JSON.stringify(historic);
            alert(pi());
            break;
        default:
            alert('Opção não escolhida!');
    }//end switch-case
}//end calcular


/**--------- Exports ---------**/
/*
module.exports = { 

};
*/