// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value.trim();

  //Para anular espacios adicionales entre palabras, y evitar que se dupliquen nombres en la lista
  nombre = nombre.replace(/\s+/g, " ");

  //no permitir nombres iguales en la lista,convertir los nombres a minusculas para su comparación
  let nombreMinusculas = nombre.toLowerCase();

  if (nombre == "") {
    alert("Agrega un nombre para el sorteo");
  } else if (nombre.length < 2) {
    alert(
      `El nombre "${nombre}" no es valido, debe tener al menos 2 caracteres`
    );
  } else if (amigos.includes(nombreMinusculas)) {
    alert(
      `El nombre "${nombre}" este nombre ya existe, por favor ingrese otro nombre`
    );
  } else {
    amigos.push(nombreMinusculas); //agrega los nombres ingresados en el arreglo en orden uno seguido de otro
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML += `<li>${nombre}</li>`;
    document.getElementById("amigo").value = "";
  }
}

// bloquear la entrada de caracteres numéricos
document.getElementById("amigo").addEventListener("keypress", function (event) {
  if (event.key >= "0" && event.key <= "9") {
    event.preventDefault();
    alert('no se permite ingresar números, por favor ingrese un nombre');
  }
});

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes ingresar al menos 2 amigos");
  } else {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h3>El amigo sorteado es: ${amigoSorteado}</h3>`; //muestra la lista de nombres agregados

    //cuando se realiza el sorteo bloquea los botones, para evitar ingresar mas datos
    document.getElementById("amigo").disabled = true;
    document.querySelector(".button-add").disabled = true;
    document.querySelector(".button-draw").disabled = true;
  }
}

function limpiarCaja() {
  let valorCaja = document.getElementById("amigo");
  valorCaja.value = "";

  // limpia el array de amigos
  amigos = [];

  // limpia la lista de amigos en el HTML
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  // limpia el resultado del sorteo
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  //activa los inputs y buttons
  document.getElementById("amigo").disabled = false;
  document.querySelector(".button-add").disabled = false;
  document.querySelector(".button-draw").disabled = false;
}
