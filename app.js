let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
     
   

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento(`p`,`Acertaste el número en ${intentos} ${(intentos === 1)?"vez":"veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        //El usuario no acertó.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        }else{
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto(){
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento(`p`,`ya se sortearon todos los números posibles`);
    }else{
        //Si el numero generado esta incluido en la lista:
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento(`p`,`Indica un número del 1 al ${numeroMaximo} chango`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    condicionesIniciales();
    //Generar el número aleatorio
    //Inicializar el número de intentos
    //Deshabilitar en boton nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled",true);
    
}

condicionesIniciales();

