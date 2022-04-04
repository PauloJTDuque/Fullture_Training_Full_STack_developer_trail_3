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