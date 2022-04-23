let arrayNotas = [[2,7,5,5],[10,7,4,9],[8,1,9,10],[9,8,7,6],[10,8,9,7]]

for(i=0; i < arrayNotas.length; i++){

	for (j=0; j < arrayNotas[i].length; j++){

		let average = []
		average=average+arrayNotas[i][j]
	}
	average=average/4
	console.log("Media ", average)
}


var n = prompt("Digite um numero");
var total=n/2;
if(n%2 == 0){
	alert("Par");
}else{
	alert("Impar");
}
alert(total);