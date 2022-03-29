/**
 * 
 */
//---------- imports ----------
const Bebida = require('./ItensManagement/Bebida');
const Prato = require('./ItensManagement/Prato');

const Cardapio = require('./MenuManagement/Cardapio');

const Carrinho = require('./CartManagement/Carrinho');
const Produto = require('./CartManagement/Produto');


const Lojista = require('./EntityManagement/Lojista');
const Cliente = require('./EntityManagement/Cliente');
const Entregador = require('./EntityManagement/Entregador');


//---------- Main function ----------
function StaticMain()
{
    //criar Itens
    let cafe = new Bebida("Café", 7.99);
    let cerveja = new Bebida("Cerveja", 10.45);
    let refrigerante = new Bebida("Refrigerante", 11.59);

    let frangoAssado = new Prato("Frango Assado", 20.00);
    let macarraoAB = new Prato("Macarrão a bolonhesa", 15.99);
    let panetone = new Prato("Panetone", 6.99);
    let doceDeLeite = new Prato("Doce de Leite", 3.99);

    /*
    console.log("========== Printar Itens criados ==========\n");
    console.log(`Tipo: ${cafe.getTipo()} | Nome: ${cafe.getNome()} | Valor: ${cafe.getValor()}`);
    console.log(`Tipo: ${cerveja.getTipo()} | Nome: ${cerveja.getNome()} | Valor: ${cerveja.getValor()}`);
    console.log(`Tipo: ${refrigerante.getTipo()} | Nome: ${refrigerante.getNome()} | Valor: ${refrigerante.getValor()}\n`);

    console.log(`Tipo: ${frangoAssado.getTipo()} | Nome: ${frangoAssado.getNome()} | Valor: ${frangoAssado.getValor()}`);
    console.log(`Tipo: ${macarraoAB.getTipo()} | Nome: ${macarraoAB.getNome()} | Valor: ${macarraoAB.getValor()}`);
    console.log(`Tipo: ${panetone.getTipo()} | Nome: ${panetone.getNome()} | Valor: ${panetone.getValor()}`);
    console.log(`Tipo: ${doceDeLeite.getTipo()} | Nome: ${doceDeLeite.getNome()} | Valor: ${doceDeLeite.getValor()}\n`);
    */

    //criando cardapio
    /*
    let cardapio = new Cardapio(1);
    let arrayBebida = [cafe, cerveja, refrigerante];
    let arrayPrato = [frangoAssado, macarraoAB, panetone, doceDeLeite];

    cardapio.setListaBebidas(arrayBebida);
    cardapio.setListaPratos(arrayPrato);

    console.log("========== Printar Cardapio ==========\n");
    console.log("Bebida");
    for(let i = 0; i < cardapio.getListaBebidas().length; i++)
    { console.log(`Nome: ${cardapio.getListaBebidas()[i].getNome()} | Valor: ${cardapio.getListaBebidas()[i].getValor()}`); }
    
    console.log("\n");

    console.log("Prato");
    for(let i = 0; i < cardapio.getListaPratos().length; i++)
    { console.log(`Nome: ${cardapio.getListaPratos()[i].getNome()} | Valor: ${cardapio.getListaPratos()[i].getValor()}`); }
    console.log("\n");
    */


    //criando produto
    let produto = new Produto(cafe, 1);

    /*
    console.log("========== Printar Produto ==========\n");
    console.log(`Nome: ${produto.getItem().getNome()} | Valor: ${produto.getItem().getValor()} | Quantidade: ${produto.getQuantidade()}`);
    console.log("\n");
    */


    //criando carrinho
    //let carrinho = new Carrinho(1);

    let produto1 = new Produto(cerveja, 12);
    let produto2 = new Produto(refrigerante, 2);
    let produto3 = new Produto(frangoAssado, 1);
    let produto4 = new Produto(macarraoAB, 2);
    let produto5 = new Produto(panetone, 5);
    let produto6 = new Produto(doceDeLeite, 8);

    /*
    let arrayCarrinho = [produto, produto1, produto2, produto3, produto4, produto5, produto6];
    carrinho.setListaProdutos(arrayCarrinho);
    */

    /*
    console.log("========== Printar Carrinho ==========\n");
    for(let i = 0; i < carrinho.getListaProdutos().length; i++)
    { console.log(`Nome: ${carrinho.getListaProdutos()[i].getItem().getNome()} | Valor: ${carrinho.getListaProdutos()[i].getItem().getValor()} | Quantidade: ${carrinho.getListaProdutos()[i].getQuantidade()}`); }
    console.log("\n");
    */

    
    //criando lojista
    let lojista = new Lojista("Carlos", "999.999.999-99", "+99 99999-9999", "Buzios", "Geriba", "Rua das Pedras", 99, "Casa");
    
    /*
    lojista.AdicionarItemAoCardapio("Bebida", cafe);
    lojista.AdicionarItemAoCardapio("Bebida", cerveja);
    lojista.AdicionarItemAoCardapio("Bebida", refrigerante);
    lojista.AdicionarItemAoCardapio("Prato", frangoAssado);
    lojista.AdicionarItemAoCardapio("Prato", macarraoAB);
    lojista.AdicionarItemAoCardapio("Prato", panetone);
    lojista.AdicionarItemAoCardapio("Prato", doceDeLeite);
    
    lojista.MostrarCardapio();
    console.log("\n");

    lojista.RemoverItemDoCardapio("XYZ", "Aleatorio");
    console.log("\n");
    lojista.RemoverItemDoCardapio("Bebida", "abc");
    lojista.RemoverItemDoCardapio("Bebida", "Café");
    console.log("\n");

    lojista.RemoverItemDoCardapio("Prato", "xyz");
    lojista.RemoverItemDoCardapio("Prato", "Panetone");
    console.log("\n");

    lojista.MostrarCardapio();
    console.log("\n");

    lojista.AlterarItemDoCardapio("Bebida", "Refrigerante", "Vinho", 35.99);

    lojista.MostrarCardapio();
    console.log("\n");
    */


    //criar cliente
    let cliente = new Cliente("Nova", "999.999.999-99", "+99 99999-9999", "Buzios", "Geriba", "Rua das Pedras", 99, "Casa");
    
    cliente.AdicionarItemNoCarrinho(cafe, 1);
    cliente.AdicionarItemNoCarrinho(cerveja, 12);
    cliente.AdicionarItemNoCarrinho(refrigerante, 2);
    cliente.AdicionarItemNoCarrinho(frangoAssado, 1);
    cliente.AdicionarItemNoCarrinho(macarraoAB, 2);
    cliente.AdicionarItemNoCarrinho(panetone, 5);
    cliente.AdicionarItemNoCarrinho(doceDeLeite, 8);

    /*
    cliente.MostrarCarrinho();
    console.log("\n");

    cliente.RemoverItemNoCarrinho("Cerveja");
    cliente.MostrarCarrinho();
    console.log("\n");

    cliente.AlterarQuantidadeDeItemNoCarrinho("Café", 5);
    cliente.MostrarCarrinho();
    console.log("\n");
    */

    //criar entregador
    let entregador = new Entregador("Lucio Mauro", "999.999.999-99", "+99 99999-9999", "Buzios", "Geriba", "Rua das Pedras", 99, "Casa");

    
    //log de pedidos
    //let clienteRealizaPedido = cliente.RealizarPedido();
    //let lojistaAceitaPedido = lojista.AceitarPedido(clienteRealizaPedido);
    //let lojistaPreparaPedido = lojista.PrepararPedido();

    /* Cancelamento de pedido por parte do cliente
    let clienteCancelarPedido = cliente.CancelarPedido(lojistaPreparaPedido.carrinho.getStatusPedido());
    lojista.UpdateListaPedido(clienteCancelarPedido);
    */
    
    /* Cancelamento de pedido pro parte do lojista
    let lojistaCancelaPedido = lojista.CancelarPedido(1);
    cliente.setCarrinho(lojistaCancelaPedido.carrinho);
    */

    /* Termino do procedimento padrão
    let lojistaTerminaPedido = lojista.TerminarPedido();
    let entregadorColetaPedido = entregador.ColetarPedido(lojistaTerminaPedido);
    entregador.VisualizarPedidos();
    let entregadorEntregaPedido = entregador.EntregarPedido();
    let clienteConfirmarPedido = cliente.ConfirmarEntrega(entregadorEntregaPedido);
    */
}//end StaticMain()

//---------- Run ----------
StaticMain();