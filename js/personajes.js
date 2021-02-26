//Crear class madre e hijas
class Personajes {
  nombre;
  familia;
  edad;
  estado;
  serie = "Juego de Tronos";
  constructor(suNombre, suFamilia, suEdad, suEstado) {
    this.nombre = suNombre;
    this.familia = suFamilia;
    this.edad = suEdad;
    this.estado = suEstado;
  }
  morir() {
    this.estado = "muerto";
  }

}
class Rey extends Personajes {
  añosReinado;
  constructor(suNombre, suFamilia, suEdad, suEstado, tiempoReinado) {
    super(suNombre, suFamilia, suEdad, suEstado);
    this.añosReinado = tiempoReinado;
  }
  comunicarse() {
    return "Vais a morir todos";
  }
};
class Luchador extends Personajes {
  arma;
  destreza;
  constructor(suNombre, suFamilia, suEdad, suEstado, suArma, suDestreza) {
    super(suNombre, suFamilia, suEdad, suEstado);
    this.arma = suArma;
    this.nivelDestreza(suDestreza);
  }
  nivelDestreza(nivel) {
    if (nivel <= 10) {
      this.destreza = nivel;
    } else {
      this.destreza = 10;
    }
  }
  comunicarse() {
    return "Primero pego y luego pregunto";
  }
}

class Asesor extends Personajes {
  personajeAsesorado;
  constructor(suNombre, suFamilia, suEdad, suEstado, asesorado) {
    super(suNombre, suFamilia, suEdad, suEstado);
    this.personajeAsesoro = asesorado;
  }
  comunicarse() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
class Escudero extends Personajes {
  personajeQueSirve = "Luchador";
  gradoPelotismo;
  constructor(suNombre, suFamilia, suEdad, suEstado, pelota) {
    super(suNombre, suFamilia, suEdad, suEstado);
    this.nivelPelotismo(pelota);
  }

  nivelPelotismo(nivel) {
    if (nivel <= 10) {
      this.gradoPelotismo = nivel;
    } else {
      this.gradoPelotismo = 10;
    }
  }
  comunicarse() {
    return "Soy un loser";
  }
}

//Crear personajes específicos
const joeffreyBaratheon =
  new Rey("Joeffrey", "Baratheon", 20, "vivo", 1);

const jamieLannister =
  new Luchador("Jamie", "Lannister", 40, "vivo", "espada", 12);

const daenerysTargaryen =
  new Luchador("Daenerys", "Targaryen", 30, "vivo", "dragón", 10);

const tyrionLannister =
  new Asesor("Tyrion", "Lannister", 40, "vivo", "Daenerys");

const bronn =
  new Escudero("Bronn", "na", 45, "vivo", 5);


//Crear array con todos los personajes
const totalPersonajes = [joeffreyBaratheon, jamieLannister,
  daenerysTargaryen, tyrionLannister, bronn];
