let v_big_number = 0
let v_smal_number = 0
let v_total_number=0

let a_number = new Array()

//Lendo os números

for (let i = 0; i < 5; i++){                  
	
	let v_number_ent = 0
	
	v_number_ent = Number(prompt("Digite o " + Number(i+1) +"º número inteiro: "));
	
	while (v_number_ent % 1 != 0 ){
		v_number_ent = Number(prompt("O número deve ser inteiro"));
	}
	a_number.push([v_number_ent])
	v_total_number =  v_total_number + v_number_ent
	// v_count = v_count + 1
}

v_big_number = Math.max(...a_number);
v_smal_number = Math.min(...a_number);


alert("A soma dos números informados é: "+ v_total_number)
alert("	O maior número é: " + v_big_number )
alert("	O menor número é: " + v_smal_number )

