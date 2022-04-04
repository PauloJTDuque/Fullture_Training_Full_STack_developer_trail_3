
var v_average = 0

v_first_note = Number(prompt("Digite a primeira nota: "));
v_second_note = Number(prompt("Digite a segunda nota: "));

v_average=(v_first_note + v_second_note) / 2
console.log(v_average);

if(v_average > 6){
	alert("Aprovado");
}else{
	alert("Reprovado");
}
