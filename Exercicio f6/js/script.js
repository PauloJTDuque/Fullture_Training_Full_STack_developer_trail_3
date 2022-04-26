v_weight = 1
v_height = 0
v_count = 0
v_average = 0
v_greatest_height = 0
v_shorter_height = 0
v_indice = 0

let a_height = new Array()
let a_weight = new Array()

while (v_weight!=0){
	
	// Lendo a altura
	v_height = Number(prompt("Digite a Altura em cm: "));

	while (v_height < 0 ){
		v_height = Number(prompt("A altura não pode ser negativa"));
	}

	// Lendo o Peso
	v_weight = Number(prompt("Digite o peso: "));
	
	while (v_weight < 0 ){
		v_weight = Number(prompt("O peso não pode ser negativo "));
	}
	if (v_weight == 0){
		alert( " Rotina Encerrada pelo Usuário ")
		break
	}
	console.log(v_weight)

	a_height.push([v_height])
	a_weight.push([v_weight])

	console.log(a_weight[0], a_weight[1])
}


//Calculando a média dos pesos informados
v_weight = 0
for (let i = 0; i < a_weight.length; i++){                  // ?????????????????????????????????
	v_weight =  v_weight + a_weight[i]
	v_count = v_count + 1
	console.log(a_weight)
	console.log(v_weight, v_count)
}
v_average = v_weight / v_count
v_greatest_height = Math.max(...a_height);
v_shorter_height = Math.min(...a_height);

alert("A média dos pesos informados é "+ v_average)
alert("	A maior altura informada é " + v_greatest_height )
alert("	A menor altura informada é " + v_shorter_height )

alert( " Fim do Programa ")	