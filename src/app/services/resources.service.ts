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
    'Valeria',
    'Candela',
    'Valentina',
    'Lucía',
    'Paula',
    'Daniela',
    'Isabella',
    'Romina',
    'Emma',
    'Martina',
    'Sara',
    'Camila',
    'Antonella',
    'Amelia',
    'Clara',
    'Rosa',
    'Aitana',
    'Abril',
    'Dana',
    'Zoe',
    'Rafaela',
    'Tamara',
    'Elisa',
    'Isabel',
    'Irene',
    'Esther',
    'Noemí',
    'Priscila',
    'Alicia',
    'Laura',
    'Naiara',
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
    'Dante',
    'Heber',
    'Alex',
    'Diego',
    'Mauro',
    'Facundo',
    'Enzo',
    'Cristian',
    'Rodrigo',
    'Aarón',
    'Elián',
    'Ignacio',
    'Pablo',
    'Ricardo',
    'Roberto',
    'Mateo',
    'Diego',
    'Daniel',
    'Lucas',
    'Gabriel',
    'Adrian',
    'Lorenzo',
    'Axel',
    'Bruno',
    'Dylan',
    'Joel',
    'Ciro',
    'Ismael',
    'Luis',
    'Saúl',
    'Noah',
    'Rafael',
    'Tiago',
    'Andrés',
    'Francisco',
    'Héctor',
    'Nicolás',
    'Samuel',
    'Abel',
    'Leonardo',
  ];

  apellido: string[] = [
    'Garcia',
    'Araoz',
    'Valenzuela',
    'Andrada',
    'Perez',
    'Gomez',
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
    'Sosa',
    'Silva',
    'Russo',
    'Esposito',
    'Acosta',
    'Lombardi',
    'Moretti',
    'Caruso',
    'Barbieri',
    'Romano',
    'Simone',
    'Salvatore',
    'Santoro',
    'Aranda',
    'Brito',
    'Rios',
    'Juarez',
    'Chavez',
    'Moya',
    'Guerra',
    'Argañaraz',
    'Monteros',
    'Castañares',
    'Delgado',
    'Valdez',
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
    const photoNum = Math.floor(Math.random() * 20) + 1;

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

    const edad = Math.floor(Math.random() * 16) + 20;

    const altura = (Math.floor(Math.random() * 28) + 148).toString();

    const alturaFormateada =
      altura.charAt(0) + '.' + altura.charAt(1) + altura.charAt(2);

    this.persona = {
      nombre: nombre,
      apellido: apellido,
      foto: `../../../assets/img/woman${photoNum}.png`,
      genero: 'Mujer',
      nacionalidad: nacionalidad,
      altura: alturaFormateada,
      edad: edad,
      signozodiacal: signozodiacal,
      ocupacion: ocupacion,
      colorfavorito: colorfavorito,
    };

    return this.persona;
  }

  obtenerHombre(): Persona {
    const photoNum = Math.floor(Math.random() * 21) + 1;

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

    const edad = Math.floor(Math.random() * 16) + 20;

    const altura = (Math.floor(Math.random() * 30) + 160).toString();

    const alturaFormateada =
      altura.charAt(0) + '.' + altura.charAt(1) + altura.charAt(2);

    this.persona = {
      nombre: nombre,
      apellido: apellido,
      foto: `../../../assets/img/man${photoNum}.png`,
      genero: 'Hombre',
      nacionalidad: nacionalidad,
      altura: alturaFormateada,
      edad: edad,
      signozodiacal: signozodiacal,
      ocupacion: ocupacion,
      colorfavorito: colorfavorito,
    };

    return this.persona;
  }
}
