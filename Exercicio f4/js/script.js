v_first_avaliation = 0
v_second_avaliation = 0
v_continue = 's'
v_name_students=""

while (v_continue=="s"){
	
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
	
	// Calculando e apresentando a media

	var v_average =(v_first_avaliation + v_second_avaliation)/2

	alert( " O Aluno "+v_name_students+" alcançou a média de: "+v_average)

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

