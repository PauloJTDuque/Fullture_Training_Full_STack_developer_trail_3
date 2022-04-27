
let a_name = new Array()

//Lendo os nomes

for (let i = 0; i < 3; i++){                  
	
	v_name=" "
	
	v_name = prompt("Digite o nome da " + Number(i+1) +"ª pessoa: ");
	
	// while (v_number_ent % 1 != 0 ){
	// 	v_number_ent = Number(prompt("O número deve ser inteiro"));
	// }

	a_name.push([v_name])
}

v_name = prompt("Digite o nome da pessoa a ser procurada: ");

if(a_name.indexOf(v_name)>=0){
  	alert("Achei !!! ");
}else{
	alert("Não achei !!! ");
}
