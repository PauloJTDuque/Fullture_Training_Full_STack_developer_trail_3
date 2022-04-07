v_name_wine = []
v_price_wine = []
v_type_wine = []

v_name = " "
v_price = 0
v_type = " "

// var v_name = prompt("Digite o nome do Vinho ou digite 'fim' para sair: ");

while (true){
	var v_name = prompt("Digite o nome do Vinho ou digite 'fim' para sair: ");
	if (v_name == "fim"){
		break
	}
	v_name_wine.push(v_name)

	var v_price = prompt("Digite o preço do Vinho: ");

	while (v_price_wine.includes(v_price, 0) == true){
			alert(("Já existe vinho cadastrado com esse preço. Favor informar outro preço"))
			var v_price = prompt("Digite o preço do Vinho: ");
	}
	v_price_wine.push(v_price)

	var v_type = prompt("Digite o tipo do Vinho <T> tinto, <R>Rose e <B>Branco: ")
	while (v_type != "T" && v_type != "R" && v_type != "B" ){
		var v_type = prompt("O tipo do Vinho deve ser igual a <T> tinto, <R>Rose e <B>Branco: ")
	}	
	v_type_wine.push(v_type)
}


alert(v_name_wine)
alert(v_price_wine)
alert(v_type_wine)

v_max_value=[Math.max(...v_price_wine)]
v_indice = v_price_wine.indexOf(String(v_max_value))
alert(v_max_value)
alert(v_indice)


alert("O Vinho mais caro é : "+ v_name_wine[v_indice])
