

var v_current_inv = Number(prompt("Digite o estoque atual: "));
var v_max_inv = Number(prompt("Digite o estoque máximo: "));
var v_min_inv = Number(prompt("Digite o estoque mínimo: "));

v_ave_inv = (v_max_inv + v_min_inv)/2;

if (v_current_inv >= v_ave_inv){
	alert("Não efetuar compra !")
} else {
	alert("Efetuar compra !")
}


