v_pollution_index=0
v_continue='s'

while (v_continue=="s"){

	// Lendo o Índice de Poluição
	v_pollution_index = Number(prompt("Digite o Índice de Poluição da Empresa: " + v_name_company));

	while (v_pollution_index < 0 || v_pollution_index > 10){
		v_pollution_index = Number(prompt("O Índice de Poluição deve estar entre 0 e 1: "));
	}
	// Classificando a Empresa e emitindo parecer
	if (v_pollution_index >= 0.3 && v_pollution_index < 0.4){
		alert( " Intimamos as Empresas do 1º Grupo a SUSPENDEREM suas atividades")
	} else if (v_pollution_index >= 0.4 && v_pollution_index < 0.5) {
		alert( " Intimamos as Empresas do 1º e 2º Grupo a SUSPENDEREM suas atividades")
	} else if (v_pollution_index >= 0.4 && v_pollution_index < 0.5) {
		alert( " Notificamos as Empresas de todos os Grupos a PARALISAREM suas atividades")
	} else {
		alert( " Empresas estão dentro dos parâmetros de poluição estabelecidos. Bom trabalho!")
	}
	// Verificando se devemos continuar
	v_continue = prompt("Digite 's' para continuar ou 'n' para encerrar: ");
	while (v_continue !== 's' && v_continue !== 'n'){
		v_continue = prompt("Favor informar 's' ou 'n': ");
	}
	if (v_continue == 'n'){
		alert( " Rotina Encerrada pelo Usuário ")
		break
	}
}
