// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Aries%2C_Blanco_y_Negro%2C_de_Arija%2C_05-03-1904_%28cropped%29.svg/330px-Aries%2C_Blanco_y_Negro%2C_de_Arija%2C_05-03-1904_%28cropped%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tavro%2C_Arija%2C_Blanco_y_Negro%2C_16-04-1904.svg/330px-Tavro%2C_Arija%2C_Blanco_y_Negro%2C_16-04-1904.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Geminis%2C_Blanco_y_Negro%2C_de_Arija%2C_07-05-1904_%28cropped%29.svg/330px-Geminis%2C_Blanco_y_Negro%2C_de_Arija%2C_07-05-1904_%28cropped%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/C%C3%A1ncer%2C_Arija%2C_Blanco_y_Negro%2C_04-06-1904.svg/330px-C%C3%A1ncer%2C_Arija%2C_Blanco_y_Negro%2C_04-06-1904.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Leo%2C_Arija%2C_Blanco_y_Negro%2C_02-07-1904.svg/330px-Leo%2C_Arija%2C_Blanco_y_Negro%2C_02-07-1904.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Virgo%2C_Blanco_y_Negro%2C_de_Arija%2C_06-08-1904_%28cropped%29.svg/330px-Virgo%2C_Blanco_y_Negro%2C_de_Arija%2C_06-08-1904_%28cropped%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Libra%2C_Arija%2C_Blanco_y_Negro%2C_03-09-1904.svg/330px-Libra%2C_Arija%2C_Blanco_y_Negro%2C_03-09-1904.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Escorpio%2C_Blanco_y_Negro%2C_de_Arija%2C_01-10-1904_%28cropped%29.svg/330px-Escorpio%2C_Blanco_y_Negro%2C_de_Arija%2C_01-10-1904_%28cropped%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Sagitario%2C_Arija%2C_Blanco_y_Negro%2C_05-11-1904.svg/330px-Sagitario%2C_Arija%2C_Blanco_y_Negro%2C_05-11-1904.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Capricornio%2C_Arija%2C_Blanco_y_Negro%2C_01-10-1904.svg/330px-Capricornio%2C_Arija%2C_Blanco_y_Negro%2C_01-10-1904.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Acuario%2C_Blanco_y_Negro%2C_de_Arija%2C_02-01-1904_%28cropped%29.svg/330px-Acuario%2C_Blanco_y_Negro%2C_de_Arija%2C_02-01-1904_%28cropped%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Piscis%2C_Arija%2C_Blanco_y_Negro%2C_06-02-1904.svg/330px-Piscis%2C_Arija%2C_Blanco_y_Negro%2C_06-02-1904.svg.png",
];

const titulos = [
  "Aries",
  "Tauro",
  "Géminis",
  "Cáncer",
  "Leo",
  "Virgo",
  "Libra",
  "Escorpio",
  "Sagitario",
  "Capricornio",
  "Acuario",
  "Piscis"
];

const frases = [
  "Un Aries en tu vida te recordará que la paciencia no es su fuerte (ni lo será).",
  "Un Tauro en tu vida te enseñará que el amor también se demuestra con comida.",
  "Un Géminis en tu vida te confundirá… y te encantará confundirte.",
  "Un Cáncer en tu vida te hará sentir amado… y ligeramente vigilado.",
  "Un Leo en tu vida te recordará lo importante que eres… para su público imaginario.",
  "Un Virgo en tu vida reorganizará tu caos, tus ideas y probablemente tu clóset.",
  "Un Libra en tu vida convertirá cada decisión simple en una asamblea emocional.",
  "Un Escorpio en tu vida sabrá todo de ti, incluso lo que no querías saber tú.",
  "Un Sagitario en tu vida te llevará a lugares donde ni tu señal del celular llega.",
  "Un Capricornio en tu vida te enseñará que el romance también se puede agendar.",
  "Un Acuario en tu vida te hablará de teorías conspirativas y te hará creer en ellas.",
  "Un Piscis en tu vida será un poema viviente… hasta que desaparezca sin explicación."
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  const indice = numeroRandom(0, frases.length);

  titulo.innerText = titulos[indice];
  imagen.src = imagenes[indice];
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();