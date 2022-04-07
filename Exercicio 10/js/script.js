
const v_int_numbers = [ ];
v_total = 0;
v_average = 0;

for( var i=0; i < 3; i++){
	v_number = Number(prompt("Digite um numero inteiro: "));
	v_int_numbers[i] = v_number;
	v_total = v_total + v_number;
}

v_min =  Math.min(...v_int_numbers)
v_average = v_total / 3

alert("O valor mínimo é: "+ v_min)
alert(" A média é: " + v_average);



