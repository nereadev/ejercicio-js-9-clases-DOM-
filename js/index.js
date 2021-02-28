// Funcion 1.1 Clonado del Elemento de personaje-dummy

const dummy = document.querySelector(".personaje-dummy");
const dummyCopia = dummy.cloneNode(true);

console.log(dummyCopia);

// Funcion 1.2 Eliminacion de clase

dummyCopia.classList.remove("personaje-dummy");
console.log(dummyCopia);

// Funcion 1.3 Alimentacion del HTML con los personajes

const actoresDePersonajes = (persona, img) => {
  switch (persona) {
    case "joffrey":
      img.src = "img/joffrey.jpg";
      img.alt = "Joffrey con una bata de seda y adornada mas una corona de oro";
      break;
    case "jamie":
      img.src = "img/jamie.jpg";
      img.alt = "Jamie con armadura de hierro, insignia de leon montado en un caballo blanco";
      break;
    case "daenerys":
      img.src = "img/daenerys.jpg";
      img.alt = "Daenerys con una bata color purpura, guantes negros, una capa magenta oscuro";
      break;
    case "tyrion":
      img.src = "img/tyrion.jpg";
      img.alt = "Tyrion hombrecillo de mediana altura prenda oscura de cuero y insignia de un buho";
      break;
    case "bronn":
      img.src = "img/bronn.jpg";
      img.alt = "Bronn con un atuendo de cuero,cabello desarreglado y de edad media-larga";
      break;
    default:
      img.src = "img/no-one.jpg";
      img.alt = "Imagen desconocida";
      break;
  }
};
