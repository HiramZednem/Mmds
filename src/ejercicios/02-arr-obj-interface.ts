
let habilidades: string[] = ['Bash','Counter','Healing'];
//let habilidades: (string | number)[] = ['bash',1]

//La interfaz es un molde de lo que voy a trabajar//
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
    //AQUI EL PUEBLO NATAL ES UNA CARACTERISTICA OPCIONAL

}

/* 
    Estoy creando un personaje con el molde de la interfaz personaje, si intento añadir una propieda eXtra como por ejemplo:
        paisOrigen: 'Mexico'
    me marcaria un error, para eso tendria que añadir a mi interfaz, la propiedad 
        paisOrigen: string
 */
const personaje: Personaje = {
    nombre: 'Hiram',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = "Tuxtla Gutierrez";

console.table( personaje );