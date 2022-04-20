let arrayNotas = [[2,7,5,5],[10,7,4,9],[8,1,9,10],[9,8,7,6],[10,8,9,7]]

for(i=0; i < arrayNotas.length; i++){

	for (j=0; j < arrayNotas[i].length; j++){

		let average = []
		average=average+arrayNotas[i][j]
	}
	average=average/4
	console.log("Media ", average)
}


// v_pos_number=0
// v_neg_number=0

// v_ent_user=prompt("Digite um número diferente de 0:");
// while(v_ent_user == 0){
//     v_ent_user=prompt("O número deve ser diferente de 0:");
// }

// if (v_ent_user > 0){
//     v_pos_number = v_ent_user;
//     alert("Numero Positivo:"+v_pos_number);
// }
// else{
//     v_neg_number = v_ent_user;
//     alert("Numero Negativo:"+v_neg_number);
// }  

var n = prompt("Digite um numero");
var total=n/2;
if(n%2 == 0){
	alert("Par");
}else{
	alert("Impar");
}
alert(total);