/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Contratado = require('./Contratado.js');
const Terceirizado = require('./Terceirizado.js')


//---------- Runing Program ----------
function StaticMain()
{
    //criar o objeto forma
    let obj = new Contratado("Rithie", "999.999.999-99", 26, "12-12-1995", 5000, "Dev. FullStack", "TI");

    //prints
    console.log(obj);
    let salario = obj.CalcularSalario(2000); 
    console.log(salario);
    console.log(obj.CalcularFerias(salario, 5000));
    

    console.log('========================');


    //criar o objeto forma
    let obj2 = new Terceirizado("Rithie", "999.999.999-99", 26, "12-12-1995", 5000, "Dev. FullStack", "Security LTDA");

    //prints
    console.log(obj2);
    let salario2 = obj2.CalcularSalario(3000); 
    console.log(salario2);
    console.log(obj2.CalcularFerias(salario2, 1000));
}//end StaticMain()

StaticMain();