function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
} 
let numeroAleatorio = generarNumeroAleatorio();
  
console.log(numeroAleatorio);

let inputNumber= document.getElementById("inputNumber");
let guessButton= document.getElementById("guessButton");
let restartButton= document.getElementById("restartButton");
let message= document.getElementById("message")
let attempts= document.getElementById("attempts")

let contador= 0;

function guess(){
    let selectedNumber= parseInt(inputNumber.value);
    contador++;

    if (selectedNumber === numeroAleatorio){
        message.innerHTML= "¡Acertaste!";
        guessButton.disabled= true;
        inputNumber.disabled= true;
    } else if(selectedNumber < numeroAleatorio){
        message.innerHTML= "¡Muy bajo! Intenta de nuevo";
    } else{
        message.innerHTML= "¡Muy alto! Intenta de nuevo";
    }

    attempts.innerHTML= `Número de intentos: ${contador}`;
}

function restart(){
    numeroAleatorio = generarNumeroAleatorio();
    console.log(numeroAleatorio);
    contador= 0;
    message.innerHTML= "";
    attempts.innerHTML= "Número de intentos: 0";
    guessButton.disabled= false;
    inputNumber.disabled= false;
    inputNumber.value= "";
}

guessButton.addEventListener("click", guess);
restartButton.addEventListener("click", restart);