
var v_range1 = 1.25
var v_range2 = 1.50
var v_range3 = 1.75
var v_range4 = 2.00

v_consumption  = Number(prompt("Digite o consumo de energia em Kwh "));
console.log(v_consumption)

if (v_consumption <= 300){
	v_bill = v_consumption * v_range1

} else if (v_consumption > 300 && v_consumption <=600) {
	v_bill = v_consumption * v_range2

} else if (v_consumption > 600 && v_consumption <=1000) {	
	v_bill = v_consumption * v_range3

} else if (v_consumption > 1000) {	
	v_bill = v_consumption * v_range4
}
alert("Sua conta de energia elétrica será igual : "+ v_bill)


