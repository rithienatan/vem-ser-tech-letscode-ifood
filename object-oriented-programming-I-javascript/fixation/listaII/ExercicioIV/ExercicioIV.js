/**
 * @author Rithie
 * @date 03-18-2022
 * @version 0.1.0
 */
//---------- Imports ----------
const Funcionario = require('../ExercicioI/Funcionario.js');

const Contratado = require('../ExercicioII/Contratado.js');
const Terceirizado = require('../ExercicioII/Terceirizado.js');

const Estagiario = require('../ExercicioIII/Estagiario.js');
const Vendedor = require('../ExercicioIII/Vendedor.js');
const Vigilante = require('../ExercicioIII/Vigilante.js');

const prompt = require('prompt-sync')({sigint: true});


//---------- Functions ---------
/**
 * Valid funcionario input
 *  
 * @param {string} nome 
 * @param {string} cpf 
 * @param {number} idade 
 * @param {string} dataNascimento 
 * @param {number} salarioBruto
 * @param {string} cargo
 * @returns {boolean} True for valid, false for not valid
 */
function ValidFuncionarioInputs(nome, cpf, idade, dataNascimento, salarioBruto, cargo)
{
    let answer = true;

    if(nome === null || nome === "" ||
        cpf === null || cpf === "" ||
        isNaN(idade) || idade < 18 ||
        dataNascimento === null || dataNascimento === "" ||
        isNaN(salarioBruto) || salarioBruto < 1200 ||
        cargo === null || cargo === "")
    { answer = false; }

    return(answer);
}//end ValidFuncionarioInputs()

/**
 * Valid funcionario salario input
 * @param {number} salarioBruto
 * @param {number} desc
 * @param {number} bonus 
 * @returns {boolean} True for valid, false for not valid
 */
 function ValidFuncionarioSalario(salarioBruto, desc, bonus)
{
    let answer = true;

    if(isNaN(desc) || desc < 18 ||
        isNaN(bonus) || bonus < 0 || bonus >= salarioBruto)
    { answer = false; }

    return(answer);
}//end ValidFuncionarioSalario()

/**
 * Valid Contratado input
 *  
 * @param {string} setor
 * @returns {boolean} True for valid, false for not valid
 */
function ValidContratadoInputs(setor)
{
    let answer = true;

    if(setor === null || setor === "")
    { answer = false; }

    return(answer);
}//end ValidFuncionarioInputs()

/**
 * Valid Terceirizado input
 *  
 * @param {string} empresaParceira
 * @returns {boolean} True for valid, false for not valid
 */
function ValidTerceirizadoInputs(empresaParceira)
{
    let answer = true;

    if(empresaParceira === null || empresaParceira === "")
    { answer = false; }

    return(answer);
}//end ValidTerceirazadoInputs()

/**
 * Valid Estagiario input
 *  
 * @param {number} horaEstagioPorDia
 * @param {number} ponto
 * @returns {boolean} True for valid, false for not valid
 */
function ValidEstagioInputs(horaEstagioPorDia, ponto)
{
    let answer = true;

    if(isNaN(horaEstagioPorDia) || horaEstagioPorDia < 0 || horaEstagioPorDia > 6 ||
        isNaN(ponto) || ponto < 8 || ponto > 15)
    { answer = false; }

    return(answer);
}//end ValidEstagioInputs()

/**
 * Valid Vendedor input
 *  
 * @param {string} sexo
 * @param {string} produto
 * @param {number} precoProduto
 * @returns {boolean} True for valid, false for not valid
 */
function ValidVendedorInputs(sexo, produto, precoProduto)
{
    let answer = true;

    if(sexo === null || sexo === "" || 
        produto === null || produto === "" ||
        isNaN(precoProduto) || precoProduto <= 0)
    { answer = false; }

    return(answer);
}//end ValidVendedorInputs()

/**
 * Valid Vigilante input
 *  
 * @param {number} altura
 * @param {number} peso
 * @param {string} precoProduto
 * @returns {boolean} True for valid, false for not valid
 */
function ValidVigilanteInputs(altura, peso, local)
{
    let answer = true;

    if(local === null || local === "" || 
        isNaN(altura) || altura < 1.1 || altura > 2.5 ||
        isNaN(peso) || peso < 30 || peso > 250)
    { answer = false; }

    return(answer);
}//end ValidVigilanteInputs()


//---------- Runing Program ----------
function StaticMain()
{
    console.log('=========== Criando um funcionario ==========\n');
    let nome, cpf, idade, dataNascimento, salarioBruto, cargo;

    do
    {
        nome = prompt("Nome: ");
        cpf = prompt("CPF: ");
        idade = Number(prompt("Idade: "));
        dataNascimento = prompt("Data de Nascimento: ");
        salarioBruto = Number(prompt("Salário: "));
        cargo = prompt("Cargo: ");

        if(ValidFuncionarioInputs(nome, cpf, idade, dataNascimento, salarioBruto, cargo) === false)
        { console.log("Input errado, digite novamente!"); }
    } while(ValidFuncionarioInputs(nome, cpf, idade, dataNascimento, salarioBruto, cargo) === false);

    let func = new Funcionario(nome, cpf, idade, dataNascimento, salarioBruto, cargo);
    console.log(func);

    let desc, bonus;

    do
    {
        desc = Number(prompt("Desconto Funcionario: "));
        bonus = Number(prompt("Salario ferias bonus: "));

        if(ValidFuncionarioSalario(salarioBruto, desc, bonus) === false)
        { console.log("Input errado, digite novamente!"); }
    } while(ValidFuncionarioSalario(salarioBruto, desc, bonus) === false);

    let sal = func.CalcularSalario(desc);
    console.log(sal);
    console.log(func.CalcularFerias(sal, bonus));


    console.log('\n=========== Criando um Contratado ==========\n');
    let setor;

    do
    {
        setor = prompt("Setor: ");

        if(ValidContratadoInputs(setor) === false)
        { console.log("Input errado, digite novamente!"); }
    } while(ValidContratadoInputs(setor) === false);

    let contract = new Contratado(nome, cpf, idade, dataNascimento, salarioBruto, cargo, setor);
    console.log(contract);


    console.log('\n=========== Criando um Terceirizado ==========\n');
    let empresaParceira;

    do
    {
        empresaParceira = prompt("Empresa Parceira: ");

        if(ValidTerceirizadoInputs(empresaParceira) === false)
        { console.log("Input errado, digite novamente!"); }
    } while(ValidTerceirizadoInputs(empresaParceira) === false);

    let tercer = new Terceirizado(nome, cpf, idade, dataNascimento, salarioBruto, cargo, empresaParceira);
    console.log(tercer);


    console.log('\n=========== Criando um Estagiario ==========\n');
    let horaEstagioPorDia, ponto;

    do
    {
        horaEstagioPorDia = Number(prompt("Horas estagiadas por dia: "));
        ponto = Number(prompt("Horario de bater ponto: "));

        if(ValidEstagioInputs(horaEstagioPorDia, ponto) === false)
        { console.log("Input errado, digite novamente!"); }
    } while(ValidEstagioInputs(horaEstagioPorDia, ponto) === false);

    let estagiario = new Estagiario(nome, cpf, idade, dataNascimento, salarioBruto, cargo, setor, horaEstagioPorDia);
    console.log(estagiario);
    estagiario.BaterPonto(ponto);


    console.log('\n=========== Criando um Vendedor ==========\n');
    let sexo, produto, precoProduto;

    do
    {
        sexo = prompt("Identidade de gênero: ");
        produto = prompt("Produto a ser vendido: ");
        precoProduto = Number(prompt("Preço do produto: "));

        if(ValidVendedorInputs(sexo, produto, precoProduto) === false)
        { console.log("Input errado, digite novamente!"); }
    } while(ValidVendedorInputs(sexo, produto, precoProduto) === false);

    let vendedor = new Vendedor(nome, cpf, idade, dataNascimento, salarioBruto, cargo, setor, sexo);
    console.log(vendedor);
    vendedor.VenderProduto(produto, precoProduto);


    console.log('\n=========== Criando um Vigilante ==========\n');
    let altura, peso, local;

    do
    {
        altura = Number(prompt("Altura: "));
        peso = Number(prompt("Peso: "));
        local = prompt("Local da Vigia: ");

        if(ValidVigilanteInputs(altura, peso, local) === false)
        { console.log("Input errado, digite novamente!"); }
    } while(ValidVigilanteInputs(altura, peso, local) === false);

    let vigilante = new Vigilante(nome, cpf, idade, dataNascimento, salarioBruto, cargo, empresaParceira, altura, peso);
    console.log(vigilante);
    vigilante.VigiarLocal(local);
}//end StaticMain()

StaticMain();