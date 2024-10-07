const formulario = document.querySelector('form');
const nota1Input = document.querySelector('#nota1');
const porcentaje1Input = document.querySelector('#porcentaje1');
const nota2Input = document.querySelector('#nota2');
const porcentaje2Input = document.querySelector('#porcentaje2');
const nota3Input = document.querySelector('#nota3');
const porcentaje3Input = document.querySelector('#porcentaje3');
const resultadoParrafo = document.querySelector('#resultado');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nota1 = parseFloat(nota1Input.value);
    const porcentaje1 = parseFloat(porcentaje1Input.value) / 100;
    const nota2 = parseFloat(nota2Input.value);
    const porcentaje2 = parseFloat(porcentaje2Input.value) / 100;
    const nota3 = parseFloat(nota3Input.value);
    const porcentaje3 = parseFloat(porcentaje3Input.value) / 100;
    
    const promedio = (nota1 * porcentaje1 + nota2 * porcentaje2 + nota3 * porcentaje3);
    resultadoParrafo.textContent = `El promedio es: ${promedio.toFixed(2)}`;
});

