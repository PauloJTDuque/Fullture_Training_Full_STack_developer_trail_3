v_peso = 1
v_altura = 0
v_count = 0
v_average = 0
v_greatest_height = 0
v_shorter_height = 0
v_indice = 0

let a_altura = new Array()
let a_peso = new Array()

while (v_peso!=0){
	
	// Lendo a altura
	v_altura = Number(prompt("Digite a Altura em cm: "));

	while (v_altura < 0 ){
		v_altura = Number(prompt("A altura não pode ser negativa"));
	}

	// Lendo o Peso
	v_peso = Number(prompt("Digite o peso: "));
	
	while (v_peso < 0 ){
		v_peso = Number(prompt("O peso não pode ser negativo "));
	}
	if (v_peso == 0){
		alert( " Rotina Encerrada pelo Usuário ")
		break
	}
	console.log(v_peso)

	a_altura.push([v_altura])
	a_peso.push([v_peso])

	console.log(a_peso[0], a_peso[1])
}


//Calculando a média dos pesos informados
v_peso = 0
for (let i = 0; i < a_peso.length; i++){                  // ?????????????????????????????????
	v_peso =  v_peso + Number(a_peso[i])
	console.log(v_peso)
	console.log(a_peso)
	
	v_count = v_count + 1
}
v_average = v_peso / v_count
v_greatest_height = Math.max(...a_altura);
v_shorter_height = Math.min(...a_altura);

alert("A média dos pesos informados é "+ v_average)
alert("	A maior altura informada é " + v_greatest_height )
alert("	A menor altura informada é " + v_shorter_height )

alert( " Fim do Programa ")	