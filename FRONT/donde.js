// Lista de lugares para sugerir
const lugares = [
  { nombre: "Playa", imagen: "IMG/playa.jpeg" },
  { nombre: "Montaña", imagen: "IMG/montaña.jpg" },
  { nombre: "Ciudad", imagen: "IMG/ciudad.jpg" },
  { nombre: "Bosque", imagen: "bosque.jpg" },
  { nombre: "Cine", imagen: "IMG/cine.webp" }
];

let currentIndex = 0;

const lugarCard = document.getElementById("lugar-card");
const lugarNombre = document.getElementById("lugar-nombre");
const lugarImagen = document.getElementById("lugar-imagen");
const resultado = document.getElementById("resultado");

// Cargar primer lugar
function cargarLugar(index) {
  const lugar = lugares[index];
  if (!lugar) {
    lugarNombre.textContent = "No hay más lugares para elegir en tu lista :(";
    lugarImagen.src = "";
    lugarImagen.alt = "";
    return;
  }

  lugarNombre.textContent = lugar.nombre;
  lugarImagen.src = lugar.imagen;
  lugarImagen.alt = lugar.nombre;
  resultado.textContent = "";
}

// Función swipe
function swipe(respuesta) {
  const lugar = lugares[currentIndex];
  if (!lugar) return;

  let mensaje = "";

  if (respuesta === "si") {
    mensaje = `Posible plan de hoy :) ${lugar.nombre}! `;
  } else {
    mensaje = `Mejor otro dia  ${lugar.nombre}. `;
  }

  resultado.textContent = mensaje;

  // Pasar al siguiente lugar después de 1.5 segundos
  setTimeout(() => {
    currentIndex++;
    resultado.textContent = "";
    cargarLugar(currentIndex);
  }, 500);
}

// Iniciar juego
cargarLugar(currentIndex);