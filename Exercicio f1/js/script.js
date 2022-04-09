
v_car_price=0
v_car_dist=0
v_car_tax=0

v_car_prod = Number(prompt("Informe o custo de fábrica do carro: "));

v_car_dist = (v_car_prod / .72) - v_car_prod

v_car_tax = (v_car_prod + v_car_dist) / .55 - (v_car_prod+v_car_dist)

v_car_total = v_car_prod + v_car_dist + v_car_tax

alert(" Percentual do Distribuidor: " + v_car_dist)
alert(" Impostos: " + v_car_tax)
alert(" Custo  Total: " + v_car_total