const veiculo1 = prompt ("Informe o nome do primeiro veiculo:")
const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veiculo:") )

const veiculo2 = prompt ("Iforme o nome do segundo veiculo:")
const velocidade2 = parseFloat(prompt ("Informe a velocidade do segundo veiculo:") )

if (velocidade1 > velocidade2) {
    alert(veiculo1 + "É mais rapido do que" + veiculo2) 
}else if (velocidade2 > velocidade1){
    alert(veiculo2 + "É mais rápido do que" + veiculo1)
}else{
    alert(veiculo1 + " e " + veiculo2 + "Possuem Velocidade iguais.")
}