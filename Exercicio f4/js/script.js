v_first_avaliation = 0
v_second_avaliation = 0
v_continue = 's'
v_name_students=""
// var aux = new Array()
var notasAlunos = new Array()
v_indice = 0
v_average=0

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

	
  	aux.push(v_name_students)
	aux.push(v_first_avaliation)
	aux.push(v_second_avaliation)
	alert(aux)

	notasAlunos[v_indice].push(aux)
	alert(notasAlunos)
	v_indice ++

	// Verificando se o professor quer continuar
	v_continue = prompt("Digite 's' para continuar ou 'n' para encerrar: ");
	while (v_continue !== 's' && v_continue !== 'n'){
		v_first_avaliation = prompt("Favor informar 's' ou 'n': ");
	}
	if (v_continue == 'n'){
		alert( " Rotina Encerrada pelo Usuário ")
		break
	}
}

alert(notasAlunos)

	

	

	
	


