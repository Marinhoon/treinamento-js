const numero = prompt(
    "Olá, eu sou o Robô da Tabuada! \n" +
    "Informe o número que você deseja calcular a tabuada: "
)
let resultado = " "

for (let fator = 1; fator <=9; fator++) {
    resultado += " -> " + numero + " * " + fator + "=" + (numero * fator) +
"\n"
}

alert("Resultado da Tabuada de " + numero + " :\n\n" + resultado)