const participantes = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe un nombre.");
    return;
  }

  if (participantes.includes(nombre)) {
    alert("Este nombre ya fue agregado.");
    input.value = "";
    return;
  }

  participantes.push(nombre);

  const lista = document.getElementById("listaAmigos");
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nombre;
  lista.appendChild(nuevoElemento);

  input.value = "";
}

function sortearAmigo() {
  if (participantes.length < 2) {
    alert("Debes agregar al menos 2 participantes.");
    return;
  }

  const asignaciones = asignarAmigos(participantes);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  participantes.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = `${nombre} → ${asignaciones[nombre]}`;
    resultado.appendChild(li);
  });
}

function asignarAmigos(lista) {
  let copia = [...lista];
  let asignaciones = {};

  do {
    copia = mezclar([...lista]);
  } while (copia.some((nombre, i) => nombre === lista[i]));

  lista.forEach((nombre, i) => {
    asignaciones[nombre] = copia[i];
  });

  return asignaciones;
}

function mezclar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

