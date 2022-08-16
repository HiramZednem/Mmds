/*
    ===== Código de TypeScript =====
*/
/*
    Se dio una tarea de el objeto superHeroe volverlo tipado, la solcucion es esta:
    El problema que se presenta en esta tarea en principal, es que el superheroe que estamos creando tiene un objeto anidado que es la direccion
    dirrecion: {
        calle:
        pais:
        ciudad
    }
    para poder tipar esto, se puede en nuestra interfaz de manera anidada hacer esto:
        interface SuperHeroe {
            nombre: string;
            edad: number;
            direccion: {
                calle: string;
                pais: string;
                ciudad: string;
            };
            mostrarDireccion: () => string;
        }
    El detalle de hacer esto, es que estamos anidando objetos, y lo que se tiene que realizar es otra interfaz, por que si en dado caso la ciudad fuera un objeto anidad estariamos creando y creando objetos anidados para especificar el tipo de dato and that would make unreadable our code.
*/

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );




