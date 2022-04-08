
v_previous_price = 0
v_current_price=0

v_previous_price = Number(prompt("Digite o preço anterior: "));
v_current_price = Number(prompt("Digite o preço atual: "));



alert("Os preços promocionais são: ")
alert("Preço anterior: R$"+v_previous_price)
alert("Preço atual com desconto de 10%: R$"+v_current_price*.90)
alert("Média do preço atual e do preço anterior com desconto de 10%: R$"+((v_previous_price+v_current_price)/2)*.90)




