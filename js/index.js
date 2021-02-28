// Funcion 1.1 Clonado del Elemento de personaje-dummy
for (const persona of totalPersonajes) {
  setTimeout(() => {
    const dummy = document.querySelector(".personaje-dummy");
    const dummyCopia = dummy.cloneNode(true);

    console.log(dummyCopia);

    // Funcion 1.2 Eliminacion de clase

    dummyCopia.classList.remove("personaje-dummy");
    console.log(dummyCopia);

    // Funcion 1.3 Alimentacion del HTML con los personajes

    const imgActor = claseDummy.querySelector("img");
    imgActor.src = `img/${persona.nombre.toLowerCase()}.jpg`;
    imgActor.alt = `${persona.nombre} ${persona.familia}`;
    if (persona.estado === "vivo") {
      estatuto.classList.add("fa-thumbs-up");
      imgActor.classList.remove("personaje-muerto");
    } else {
      estatuto.classList.add("fa-thumbs-down");
      imgActor.classList.add("personaje-muerto");
    }
    if (persona instanceof Rey) {
      const reinado = document.createElement("li");
      reinado.classList.add("reinadoAnual");
      reinado.textContent =
        `Años de reinado: ${persona.tiempoReinado}`;
      claseDummy.querySelector(".personaje-overlay").querySelector(".metadata").append(reinado);
      claseDummy.querySelector(".emoji").textContent = `👑`;
    }

    if (persona instanceof Luchador) {
      const armas = document.createElement("li");
      armas.classList.add("arma");
      armas.textContent = `Arma: ${persona.arma}`
      claseDummy.querySelector(".personaje-overlay").querySelector(".metadata").append(armas);
      const atributo = document.createElement("li");
      atributo.classList.add("destreza");
      atributo.textContent = `Destreza: ${persona.destreza}`;
      claseDummy.querySelector(".personaje-overlay").querySelector(".metadata").append(atributo);
      claseDummy.querySelector(".emoji").textContent = `🗡`;
    }

    if (persona instanceof Escudero) {
      const pelota = document.createElement("li");
      pelota.textContent = `Peloteo: ${persona.pelotismo}`;
      claseDummy.querySelector(".personaje-overlay").querySelector(".metadata").append(pelota);
      const servicio = document.createElement("li");
      servicio.textContent = `Sirve a: ${persona.personajeQueSirve.nombre}`;
      claseDummy.querySelector(".personaje-overlay").querySelector(".metadata").append(servicio);

      claseDummy.querySelector(".emoji").textContent = `🛡`;
    }
    if (persona instanceof Asesor) {
      const asesoramiento = document.createElement("li");
      asesoramiento.textContent = `Asesora a: ${persona.personajeAsesorado.nombre}`;
      claseDummy.querySelector(".personaje-overlay").querySelector(".metadata").append(asesoramiento);
      claseDummy.querySelector(".emoji").textContent = `🎓`;
    }

    document.querySelector(".personajes").append(claseDummy)
  }, 1000 * (totalPersonajes.findIndex((personal) => personal === persona) + 1));
}



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

