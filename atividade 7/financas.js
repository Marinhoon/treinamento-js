let saldo = prompt ("Informe a quantidade de dinheiro inicial: ")
saldo = parseFloat(saldo)
let opcao = " "

do {
    opcao = prompt (
        "Saldo disponivel: R$ " + saldo +
        "\n 1. Adicionar Dinheiro" +
        "\n 2. Remover Dinheiro" +
        "\n 3. Sair"
    )

 switch(opcao) {
    case "1" :
        saldo += parseFloat( prompt("Informe o valor a ser adicionado:") )
        break
    case "2" :
        saldo -= prompt("Informe o valor a ser removido:")
        break
    case "3" :
        alert("Encerrado...")
        break
        default:
        alert("Opção Invalida :( ")
 }   


} while (opcao !== "3")
