/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Estagiario = require('./Estagiario.js');
const Vendedor = require('./Vendedor.js');
const Vigilante = require('./Vigilante.js');


//---------- Runing Program ----------
function StaticMain()
{
    //criar o objeto forma
    let obj = new Estagiario("Rithie", "999.999.999-99", 26, "12-12-1995", 1500, "Dev. FullStack", "TI", 6);

    //prints
    console.log(obj);
    let salario = obj.CalcularSalario(0); 
    console.log(salario);
    console.log(obj.CalcularFerias(salario, 1500));
    obj.BaterPonto("13:45");
    

    console.log('========================');


    //criar o objeto forma
    let obj2 = new Vendedor("Rithie", "999.999.999-99", 26, "12-12-1995", 5000, "Vendedor", "Vendas", "Masculino");

    //prints
    console.log(obj2);
    let salario2 = obj2.CalcularSalario(3000); 
    console.log(salario2);
    console.log(obj2.CalcularFerias(salario2, 1000));
    obj2.VenderProduto("Mouse Pad", 15.99);


    console.log('========================');


    //criar o objeto forma
    let obj3 = new Vigilante("Rithie", "999.999.999-99", 26, "12-12-1995", 5000, "Vigilante", "Security LTDA", 1.80, 90);

    //prints
    console.log(obj3);
    let salario3 = obj3.CalcularSalario(1100); 
    console.log(salario3);
    console.log(obj.CalcularFerias(salario3, 2200));
    obj3.VigiarLocal("Belo Horizonte");
}//end StaticMain()

StaticMain();