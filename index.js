const $ = (selector) => document.querySelector(selector);
const $mensaje = $("#mensaje");
const $encriptar = $("#encriptar");
const $decriptar = $("#decriptar");
const $resultado = $("#resultado");
const $imagenes = $("#imagenes");
const $botones = $("#botones");
const $copiar = $("#copiar");
const $limpiar = $("#limpiar");
const $datos = $("#datos");
const $contenido = $("#contenido");

$datos.style.display = "none";

function encriptar() {
  if ($mensaje.value === "") {
    swal({
      title: "Error",
      text: "Ingresa contenido para encriptar!",
      icon: "error",
      button: "aceptar",
    });
  } else {
    let texto = $mensaje.value;
    texto = texto.replace(/e/gim, "enter");
    texto = texto.replace(/i/gim, "imes");
    texto = texto.replace(/a/gim, "ai");
    texto = texto.replace(/o/gim, "ober");
    texto = texto.replace(/u/gim, "ufat");
    $resultado.innerHTML = texto;
    $datos.style.display = "block";
    $contenido.style.alignItems = "flex-start";
    $imagenes.style.display = "none";
  }
}

function dencriptar() {
  if ($mensaje.value === "") {
    swal({
      title: "Error",
      text: "Ingresa contenido para desencriptar!",
      icon: "error",
      button: "aceptar",
    });
  } else {
    let texto = $mensaje.value;
    texto = texto.replace(/imes/gim, "i");
    texto = texto.replace(/ai/gim, "a");
    texto = texto.replace(/enter/gim, "e");
    texto = texto.replace(/ober/gim, "o");
    texto = texto.replace(/ufat/gim, "u");
    $resultado.innerHTML = texto;
    $datos.style.display = "block";
    $contenido.style.alignItems = "flex-start";
    $imagenes.style.display = "none";
  }
}

function copiar() {
  let texto = $resultado.innerText;
  console.log(texto);
  navigator.clipboard.writeText(texto);
}

function limpiar() {
  $datos.style.display = "none";
  $contenido.style.alignItems = "center";
  $imagenes.style.display = "block";
  $mensaje.value = "";
}
