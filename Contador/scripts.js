 function alarma() {
    let nummero= +document.querySelector('#segundos').value;
    setTimeout(finalizar, nummero * 1000);
 }

 function finalizar( ){
    
    document.querySelector('#salida').textContent = 'on';
    let audio = document.querySelector('#audioAlarma');
    audio.play();
 }

 function reinicio() {
    location.reload()

 }