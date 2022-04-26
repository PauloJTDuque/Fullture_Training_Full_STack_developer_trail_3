v_first_avaliation = 0
v_second_avaliation = 0
v_continue = 's'
v_name_students=""

let notasAlunos = [ ]
v_indice = 0


while (v_continue=="s"){
	
	// Lendo o Nome
	v_name_students = prompt("Digite o nome do estudante: ");

	// Lendo a Primeira Avaliação
	v_first_avaliation = Number(prompt("Digite a nota da Primeira Avaliação: "));

	while (v_first_avaliation < 0 || v_first_avaliation > 10){
		v_first_avaliation = Number(prompt("As Notas das avaliações devem estar entre 0 e 10: "));
	}

	// Lendo a Segunda Avaliação
	v_second_avaliation = Number(prompt("Digite a nota da Segunda Avaliação: "));

	while (v_second_avaliation < 0 || v_second_avaliation > 10){
			v_second_avaliation = Number(prompt("As Notas das avaliações devem estar entre 0 e 10: "));
	}
	notasAlunos.push([v_name_students, v_first_avaliation, v_second_avaliation])

	// Verificando se o professor quer continuar
	v_continue = prompt("Digite 's' para continuar ou 'n' para encerrar: ");
	while (v_continue !== 's' && v_continue !== 'n'){
		v_first_avaliation = prompt("Favor informar 's' ou 'n': ");
	}
	if (v_continue == 'n'){
		alert( " Notas Finalizadas ")
		break
	}
}

for (let i = 0; i < notasAlunos.length; i++){
	let v_average = 0
	v_average = (notasAlunos[i][1] + notasAlunos[i][2]) / 2
	alert(" A média do aluno "+ notasAlunos[i][0] + " é: " + v_average)
}
alert( " Fim do Programa ")	

	

	
	


