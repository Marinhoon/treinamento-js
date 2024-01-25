const resultado = prompt("Qual seu ano de nascimento : \na) 1998 \nb) 2000 \nc) 2002")

const resultadoNumerico = parseFloat(resultado)

switch (resultadoNumerico) {
    case 1 :
        alert("O resultado é '1998' ")
        break
    case 2 :
        alert("O resultado é '2000' ")
        break
    case 3 :
        alert("O resultado é '2002' ")
        break
    default :
    alert("Finalizando...")
}