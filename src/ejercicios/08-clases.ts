
// CLASES 

class PersonaNormal {
    /*
        Aqui por lo general no se acostumbra a definir primero las propiedades del objeto y despues inicializarlas en el constructor, aqui lo que se hace es iniciarlas directamente en el constructor de manera publica. Dejo una explicacion mas detallas en las notas
    */
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {

    constructor (
        public alterEgo:string, 
        public edad:number, 
        public nombreReal:string //Este se podria quitar y utilizar directamente la propiedad de donde estamos heredando, pero como primero vimos heroe, quedo asi en el curso.
    ) {
        //Herencia basica pa, no tengo que dar muchos detalles
        super( nombreReal, 'New York, USA'  );
    }

    imprimirNombre(): string {
        return this.alterEgo+ ' ' + this.nombreReal
    }
}

const ironman = new Heroe( 'IronMan', 45, 'Tony');
console.log(ironman);

/*
    La idea de inicializar las propiedades dentro del constructor ayuda mucho a reducir el código y que sea más fácil de leer.

    Pero no es obligatorio, puedes inicializar o bien definir tus propiedades fuera del constructor, eso es útil cuando no las quieres inicializar cuando se crea una nueva instancia, o cuando siempre tendrán un valor por defecto.

    Definir las propiedades dentro del constructor es una forma corta para hacer todo el proceso de asignación a la hora de crear la nueva instancia de nuestra clase en TypeScript
*/


