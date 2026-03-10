function somar() {
    let num
    let num1
    num = parseInt(document.getElementById('1').value)
    num1 = parseInt(document.getElementById('2').value)
    document.getElementById("resultado1").innerText = num + num1
    console.log(num + num1);
};

function subtrair() {
    let num
    let num1
    num = parseInt(document.getElementById('3').value)
    num1 = parseInt(document.getElementById('4').value)
    document.getElementById("resultado2").innerText = num - num1
    console.log(num - num1);
};

function multiplicar() {
    let num
    let num1
    num = parseInt(document.getElementById('5').value)
    num1 = parseInt(document.getElementById('6').value)
    document.getElementById("resultado3").innerText = num * num1
    console.log(num * num1);
};

function area_triangulo() {
    let num
    let num1
    num = parseInt(document.getElementById('7').value)
    num1 = parseInt(document.getElementById('8').value)
    document.getElementById("resultado4").innerText = (num * num1) / 2
    console.log((num * num1) / 2);
};

function area_quadrado() {
    let num
    num = parseInt(document.getElementById('9').value)
    document.getElementById("resultado5").innerText = num * num
    console.log(num * num);
}

function area_retangulo() {
    let num
    let num1
    num = parseInt(document.getElementById('10').value)
    num1 = parseInt(document.getElementById('11').value)
    document.getElementById("resultado6").innerText = (num * num1)
    console.log(num * num1);
}

function area_trapezio() {
    let num
    let num1
    let num2
    num = parseInt(document.getElementById('12').value)
    num1 = parseInt(document.getElementById('13').value)
    num2 = parseInt(document.getElementById('14').value)
    document.getElementById("resultado7").innerText = ((num + num1) * num2) / 2
    console.log(((num + num1) * num2) / 2);
}

function area_losango() {
    let num
    let num1
    num = parseInt(document.getElementById('15').value)
    num1 = parseInt(document.getElementById('16').value)
    document.getElementById("resultado8").innerText = (num * num1) / 2
    console.log((num * num1) / 2);
}

function area_circulo() {
    let num
    let num1 = 3.14
    num = parseInt(document.getElementById('17').value)
    num1 = parseInt(document.getElementById('18').value)
    document.getElementById("resultado9").innerText = (num1*num^2)
}

function area_setorcircular() {
let num
let num1 = 3.14
let num2
num = parseInt(document.getElementById('19').value)
num1 = parseInt(document.getElementById('20').value)
num2 = parseInt(document.getElementById('21').value)
document.getElementById("resultado10").innerText = (num*num1*num2^2)/360
console.log((num*num1*num2^2)/360);
}

function area_coroacircular() {
let num
let num1
let num2 = 3.14
num = parseInt(document.getElementById('22').value)
num1 = parseInt(document.getElementById('23').value)
num2 = parseInt(document.getElementById('24').value)
document.getElementById("resultado11").innerText = (num^2 - num1^2)*num2
console.log((num^2 - num1^2)*num2);
}

function area_elipse() {
let num
let num1
let num2 = 3.14
num = parseInt(document.getElementById('25').value)
num1 = parseInt(document.getElementById('26').value)
num2 = parseInt(document.getElementById('27').value)
document.getElementById("resultado12").innerText = (num*num1*num2)
console.log(num*num1*num2);
}


function area_paralelogramo() {
let num
let num1
num = parseInt(document.getElementById('28').value)
num1 = parseInt(document.getElementById('29').value)
document.getElementById("resultado13").innerText = (num*num1)
console.log(num*num1);
}

function area_poligonoregular() {
let num
let num1
num = parseInt(document.getElementById('30').value)
num1 = parseInt(document.getElementById('31').value)
document.getElementById("resultado14").innerText = (num*num1)
console.log(num*num1);
}