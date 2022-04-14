// 2.	Uma revendedora de carros usados paga a seus funcionários vendedores
//  um salário fixo por mês, mais uma comissão também fixa para cada carro vendido
//  e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que 
// leia o número de carros por ele vendidos, o valor total de suas vendas, 
// o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva 
// o salário final do vendedor


let carros = [30000, 50000, 40000, 10000, 20000]
let numeroCarros = 0
let valorTotalVendas = 50000
let salarioFixo = 2000
let valorComissaoPorCarro = 0
let valorcomissaoTotalVendas = 0.05
let salarioFInal = 0

const COMISSAO_FIXA_CARRO= 0.2
const COMISSAO_TOTAL_VENDAS = 0.05

for (let i=0; i < carros.length; i++){
	valorComissaoPorCarro = (carros[i] * COMISSAO_FIXA_CARRO) + valorComissaoPorCarro 
	valorTotalVendas =valorTotalVendas + carros[i]
	console.log("Valor Comissão por Carro ", valorComissaoPorCarro)
	console.log("Valor Total Vendas ", valorTotalVendas)

}

valorcomissaoTotalVendas = valorTotalVendas * COMISSAO_TOTAL_VENDAS

console.log("Valor Comissão Total Vendas ", valorcomissaoTotalVendas)

salarioFInal = salarioFixo + valorComissaoPorCarro + valorcomissaoTotalVendas

console.log(salarioFInal)


