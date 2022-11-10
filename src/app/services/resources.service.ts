import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  persona!: Persona;

  nombreMujer: string[] = [
    'Maria',
    'Bianca',
    'Lucila',
    'Constanza',
    'Micaela',
    'Agustina',
    'Lorena',
    'Mariana',
    'Sofía',
    'Silvana',
    'Noelia',
    'Abigail',
    'Emilia',
    'Marisol',
    'Carolina',
    'Veronica',
  ];

  nombreHombre: string[] = [
    'Oscar',
    'Leandro',
    'Marcos',
    'Matías',
    'Martín',
    'Luciano',
    'Jesus',
    'Ezequiel',
    'Augusto',
    'Alan',
    'Franco',
    'Nahuel',
    'Heber',
    'Alex',
    'Diego',
    'Mauro',
    'Facundo',
    'Enzo',
    'Cristian',
    'Rodrigo',
  ];

  apellido: string[] = [
    'Garcia',
    'Araoz',
    'Valenzuela',
    'Perez',
    'Gomez',
    'Medina',
    'Cardozo',
    'Hernandez',
    'Medina',
    'Baez',
    'Salinas',
    'Fernandez',
    'Castro',
    'Hernández',
    'Rodríguez',
    'Villalba',
    'Ramirez',
    'Álvarez',
    'Cruz',
    'López',
    'Ledesma',
    'Torres',
    'Herrera',
    'Giménez',
    'Gónzalez',
    'Carrizo',
    'Ruiz',
    'Mamani',
    'Castillo',
    'Córdoba',
    'Díaz',
    'Rojas',
    'Páez',
    'Carlino',
    'Aguirre',
    'Flores',
    'Caceres',
    'Coronel',
    'Martinez',
    'Sánchez',
  ];

  nacionalidad: string[] = [
    'Argentina',
    'Perú',
    'Colombia',
    'España',
    'Venezuela',
    'México',
    'Paraguay',
    'Chile',
    'Uruguay',
    'Bolivia',
    'Ecuador',
    'Venezuela',
  ];

  signozodiacal: string[] = [
    'Aries',
    'Tauro',
    'Géminis',
    'Cáncer',
    'Leo',
    'Virgo',
    'Libra',
    'Escorpio',
    'Sagitario',
    'Capricornio',
    'Acuario',
    'Piscis',
  ];

  ocupacion: string[] = [
    'Estudiante',
    'Sin ocupación',
    'Policía',
    'Medicina',
    'Enfermeria',
    'Abogacia',
    'Profesorado',
    'Psicologia',
    'Programación',
    'Veterinaria',
    'Ventas',
    'Musica',
    'Redes Sociales',
    'IT',
    'Marketing',
    'RRHH',
  ];

  colorfavorito: string[] = [
    'Azul',
    'Blanco',
    'Rojo',
    'Verde',
    'Rosa',
    'Negro',
    'Amarillo',
    'Morado',
    'Naranja',
    'Celeste',
    'Gris',
    'Marrón',
  ];

  constructor() {}

  obtenerMujer(): Persona {
    const photoNum = Math.floor(Math.random() * 9) + 1;

    const nombre =
      this.nombreMujer[Math.floor(Math.random() * this.nombreMujer.length)];

    const apellido =
      this.apellido[Math.floor(Math.random() * this.apellido.length)];

    const nacionalidad =
      this.nacionalidad[Math.floor(Math.random() * this.nacionalidad.length)];

    const signozodiacal =
      this.signozodiacal[Math.floor(Math.random() * this.signozodiacal.length)];

    const ocupacion =
      this.ocupacion[Math.floor(Math.random() * this.ocupacion.length)];

    const colorfavorito =
      this.colorfavorito[Math.floor(Math.random() * this.colorfavorito.length)];

    this.persona = {
      nombre: nombre,
      apellido: apellido,
      foto: `../../../assets/img/woman${photoNum}.png`,
      genero: 'Mujer',
      nacionalidad: nacionalidad,
      altura: 1,
      edad: 1,
      signozodiacal: signozodiacal,
      ocupacion: ocupacion,
      colorfavorito: colorfavorito,
    };

    return this.persona;
  }

  obtenerHombre(): Persona {
    const photoNum = Math.floor(Math.random() * 9) + 1;

    const nombre =
      this.nombreHombre[Math.floor(Math.random() * this.nombreHombre.length)];

    const apellido =
      this.apellido[Math.floor(Math.random() * this.apellido.length)];

    const nacionalidad =
      this.nacionalidad[Math.floor(Math.random() * this.nacionalidad.length)];

    const signozodiacal =
      this.signozodiacal[Math.floor(Math.random() * this.signozodiacal.length)];

    const ocupacion =
      this.ocupacion[Math.floor(Math.random() * this.ocupacion.length)];

    const colorfavorito =
      this.colorfavorito[Math.floor(Math.random() * this.colorfavorito.length)];

    this.persona = {
      nombre: nombre,
      apellido: apellido,
      foto: `../../../assets/img/man${photoNum}.png`,
      genero: 'Hombre',
      nacionalidad: nacionalidad,
      altura: 1,
      edad: 1,
      signozodiacal: signozodiacal,
      ocupacion: ocupacion,
      colorfavorito: colorfavorito,
    };

    return this.persona;
  }
}
