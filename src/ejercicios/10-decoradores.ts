
/* Para usar los decoradores tengo que activarlos desde el archivo tsconfig.json o desde jsconfig.json en el apartade de caracteristicas experimentales. */

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log( MiSuperClase );

/* 
    Un decorador no es mas que una funcion que expande su clase añadiendole funcionalidades especiales.
*/
