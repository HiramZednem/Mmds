/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash','Counter','Healing'];

//La interface esta muy chida, ya que basicamente es un molde de lo que voy a trabajar, me pernute poner datos opcionales como lo es el pueblo natal, y basar distintas cosas en el.
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;

}

const personaje: Personaje = {
    nombre: 'Hiram',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = "Tuxtla Gutierrez";

console.table( personaje );