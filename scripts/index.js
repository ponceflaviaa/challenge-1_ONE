var botonCopiar = document.querySelector(".btn-copiar")
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");

var muñeco = document.querySelector(".contenedor-muñeco");
var h3 = document.querySelector(".contenedor-h3");
var h3Atras = document.querySelector(".contenedor-resultado");

var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");



botonEncriptar.onclick = encriptar;
function encriptar() {
  verTexto();
  ocultarAdelante();
  resultado.textContent = encriptarTexto(recuperarTexto());

};


botonDesencriptar.onclick = desencriptar;
function desencriptar() {
  ocultarAdelante();
  verTexto();
  var area = recuperarTexto();
  resultado.textContent = desencriptarTexto(area);
}

botonCopiar.onclick = copiar;
function copiar(){
  navigator.clipboard.writeText(resultado.innerHTML);
  alert("Copiado!");
}

function recuperarTexto() {
  const area = document.querySelector(".area")
  return area.value
}

function ocultarAdelante() {
  muñeco.classList.add("ocultar");
  h3.classList.add("ocultar")
  parrafo.classList.add("ocultar")
}
function verTexto(){
h3Atras.classList.remove("ocultar")
}
 


function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      textoFinal = textoFinal + "ai"
    }
    else if (texto[i] === "e") {
      textoFinal = textoFinal + "enter"
    }
    else if (texto[i] === "i") {
      textoFinal = textoFinal + "imes"
    }
    else if (texto[i] === "o") {
      textoFinal = textoFinal + "ober"
    }
    else if (texto[i] === "u") {
      textoFinal = textoFinal + "ufat"
    }
    else {
      textoFinal = textoFinal + texto[i];
    }

  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      textoFinal = textoFinal + "a"
      i = i + 1; //porque quiero saltear la siguiente iteracion de "ai", solo quiero la a
    }
    else if (texto[i] === "e") {
      textoFinal = textoFinal + "e"
      i = i + 4; // e (nter)4 
    }
    else if (texto[i] === "i") {
      textoFinal = textoFinal + "i"
      i = i + 3; // i (mes)3
    }
    else if (texto[i] === "o") {
      textoFinal = textoFinal + "o"
      i = i + 3; // o ber
    }
    else if (texto[i] === "u") {
      textoFinal = textoFinal + "u"
      i = i + 3; // u fat
    }
    else {
      textoFinal = textoFinal + texto[i];
    }

  }
  return textoFinal;
}