function monstrarResultado(resultado){
    document.getElementById('display').value =resultado;
}
function suma(){
    let numero1=+document.getElementById('num1').value;
    let numero2=+document.getElementById('num2').value;
    monstrarResultado(numero1 + numero2);
}
function resta(){
    let numero1=+document.getElementById('num1').value;
    let numero2=+document.getElementById('num2').value;
    monstrarResultado(numero1 - numero2);
}
function multiplicacion(){
    let numero1=+document.getElementById('num1').value;
    let numero2=+document.getElementById('num2').value;
    monstrarResultado(numero1 * numero2);
}
function division(){
    let numero1=+document.getElementById('num1').value;
    let numero2=+document.getElementById('num2').value;
    monstrarResultado(numero1 / numero2);
}
function raizCuadrada(){
    let numero1 = +document.getElementById('num1').value;
    if (numero1 < 0) {
        monstrarResultado("Error: La raíz cuadrada de un número negativo no es un número real");
    } else {
        monstrarResultado(Math.sqrt(numero1));
    }
}
function potenciacion(){
    let numero1 = +document.getElementById('num1').value;
    let numero2 = +document.getElementById('num2').value;
    if (numero2 % 1 !== 0) {
        monstrarResultado("Error: El exponente debe ser un número entero");
    } else {
        monstrarResultado(Math.pow(numero1, numero2));
    }
}
function c(){
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('display').value = "";
}



