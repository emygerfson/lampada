const ligar = document.getElementById('ligar');
const desligar = document.getElementById('Desligar');
const lampada = document.getElementById('lampada');

function ligarLampada(){
    lampada.src = "imagem/lampada-acesa.png";
    
}
function desligarLampada(){
    lampada.src = "imagem/lampada-apagada.png";
}

ligar.addEventListener('click', ligarLampada);
desligar.addEventListener('click', desligarLampada);