/* eslint-disable no-loop-func */
for (const persona of totalPersonajes) {
  setTimeout(() => {
    const claseDummy = document.querySelector(".personaje-dummy").cloneNode(true);
    const estatuto = document.createElement("i");
    estatuto.classList.add("fas");

    claseDummy.classList.remove("personaje-dummy");
    claseDummy.querySelector(".nombre").textContent = `${persona.nombre} ${persona.familia}`;
    claseDummy.querySelector(".estado").appendChild(estatuto);
    claseDummy.querySelector(".edad").textContent = `Edad: ${persona.edad}`;
    claseDummy.querySelector(".estado").appendChild(estatuto);
    const imgActor = claseDummy.querySelector("img");
    imgActor.src = `img/${persona.nombre.toLowerCase()}.jpg`;
    imgActor.alt = `${persona.nombre} ${persona.familia}`;
    const botonMuere = claseDummy.querySelector(".muere");

    function vivirMorir() {
      if (persona.estado === "vivo") {
        estatuto.classList.add("fa-thumbs-up");
        imgActor.classList.remove("muerte");
      } else {
        estatuto.classList.add("fa-thumbs-down");
        imgActor.classList.add("muerte");
      }
    }

    vivirMorir();

    if (persona instanceof Rey) {
      const reinado = document.createElement("li");
      reinado.classList.add("reinadoAnual");
      reinado.textContent = `Años que lleva de reinado: ${persona.tiempoReinado}`;
      claseDummy.querySelector(".personaje-overlay").querySelector(".metadata").append(reinado);
      claseDummy.querySelector(".emoji").textContent = "👑";
      botonMuere.addEventListener("click", () => {
        persona.morir();
        vivirMorir();
      });
    }

    if (persona instanceof Luchador) {
      const armas = document.createElement("li");
      armas.classList.add("arma");
      armas.textContent = `Arma: ${persona.arma}`;
      claseDummy.querySelector(".personaje-overlay").querySelector(".metadata").append(armas);
      const atributo = document.createElement("li");
      atributo.classList.add("destreza");
      atributo.textContent = `Destreza: ${persona.destreza}`;
      claseDummy.querySelector(".personaje-overlay").querySelector(".metadata").append(atributo);
      claseDummy.querySelector(".emoji").textContent = "🗡";
      botonMuere.addEventListener("click", () => {
        persona.morir();
        vivirMorir();
      });
    }

    if (persona instanceof Asesor) {
      const asesoramiento = document.createElement("li");
      asesoramiento.textContent = `Asesoro de: ${persona.personajeAsesoro}`;
      claseDummy.querySelector(".personaje-overlay").querySelector(".metadata").append(asesoramiento);
      claseDummy.querySelector(".emoji").textContent = "🎓";
      botonMuere.addEventListener("click", () => {
        persona.morir();
        vivirMorir();
      });
    }

    if (persona instanceof Escudero) {
      const pelota = document.createElement("li");
      pelota.textContent = `Peloteo: ${persona.gradoPelotismo}`;
      claseDummy.querySelector(".personaje-overlay").querySelector(".metadata").append(pelota);
      const servicio = document.createElement("li");
      servicio.textContent = `A servicio de: ${persona.personajeQueSirve}`;
      claseDummy.querySelector(".personaje-overlay").querySelector(".metadata").append(servicio);
      claseDummy.querySelector(".emoji").textContent = "🛡";
      botonMuere.addEventListener("click", () => {
        persona.morir();
        vivirMorir();
      });
    }

    document.querySelector(".personajes").append(claseDummy);
  }, 1000 * (totalPersonajes.findIndex((personal) => personal === persona) + 1));
}
