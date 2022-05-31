


// para manipular los aciertos y los errores
var aciertos = 0;
var errores = 0; 

// iniciamos con el array que manejaremos
var listaPalabras = [
"TIGRE",
"CAMELLO",
"VACA",
"ABEJA",
"LEOPARDO",
"HIPOPOTAMO",
"CANCREJO",
"ZORRO",
"CACAHUATE",
"SUPERMAN",
"BATMAN",
"LUCIERNAGA",
"FRONTEND",
"FULLSTACK",
"GITHUB",
"JAVASCRIPT",
];

const nuevaPalabra = document.querySelector("#nuevaPalabra");
const agregarPalabra = document.querySelector("#save");
var imagen = document.querySelector("#imagen");
var resultados = document.querySelector("#resultado");



function agregaPalabra(){
    listaPalabras = [];
    listaPalabras.push(nuevaPalabra.value)
    console.log(nuevaPalabra.value);
    console.log(listaPalabras);
    nuevaPalabra.value = '';
    document.getElementById("palabra").innerHTML = listaPalabras;
}

/*---------------------------------------------------------------------*/
/*la segunda parte el la lojica del juego*/
 var texto; // esta variable global se usara varias veces

function randomWords(num_min, num_max){
    var rangoPalbras = num_max - num_min;
    var wordsRandom = Math.floor(Math.random()*rangoPalbras) + num_min;
    return wordsRandom;
}

function iniciar(evento){
 imagen.src = `images/img0.png`
  aciertos = 0;
  errores = 0; 
  var palabraSecreta = document.getElementById("palabra");
  palabraSecreta.innerHTML = "";
  
  var words = listaPalabras.length; 
  var valorRandon = randomWords( 0, words)

  texto = listaPalabras[valorRandon]// palabra a adivinar 
  var cant_letras = texto.length;

  for(var i = 0; i < botonera.length; i++){
    botonera[i].disabled = false;
  }

for(var i = 0; i < cant_letras; i++){
var span = document.createElement('span');
palabraSecreta.appendChild(span);

  }
  console.log(palabraSecreta);
  resultados.innerHTML = "";

}

// vamos a darle interacion a las letras
var botonera = document.querySelectorAll("#board button")
for(var i = 0; i < botonera.length; i++){
  botonera[i].addEventListener("click",clickLetras)
}



function clickLetras(event){
var spans = document.querySelectorAll("#palabra span");

var btnClikeado = event.target; // es decir saber que boton llama a la funcion
btnClikeado.disabled = true;
var letra = btnClikeado.innerHTML.toUpperCase(); // esto trera la letra que tenga el boton
var palabras = texto.toUpperCase();

var acerto = true;
for( var i = 0; i < palabras.length; i++){
  if(letra == palabras[i]){ 
   spans[i].innerHTML = letra;
   aciertos++;
   acerto = false; 
   }    
}

if(acerto == true){  
  errores++;

  var sourceImage = `images/img${errores}.png`;
   imagen.src = sourceImage;
  }


 if(errores == 6){
   var result = document.querySelector("#resultado").innerHTML =
   "PERDISTE... la palabra era: " + texto;  
  gameOver();
 }else if (acerto == texto.length){
  var result = document.querySelector("#resultado").innerHTML =
  " Lo has decifrado... la palabra era";  
  gameOver();

 }
  console.log(texto)
}

// fin del juego
function gameOver(){
  for(var i = 0; i < botonera.length; i++){
    botonera[i].disabled = true;
  }
  var btnPlay = document.querySelector("play");
  /*btnPlay.disabled = false;*/
}


gameOver();



// creando el localstorage local


function lanzar(){
  alert("El juego iniciara... Buena suerte");
}
