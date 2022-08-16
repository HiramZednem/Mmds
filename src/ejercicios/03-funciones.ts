
//- APRENDIENDO EL USO DE FUNCIONES -//

function sumar (a: number,b: number): number{
    return a+b;
}

const sumarFlecha = (a:number ,b:number ): number => {
    return a + b;
}

/*
    Primero van los valores obligatorios, luego los opcionales y al final los preestabelicidos
    Los valores opcionales son establecidos de este modo:
        dato?: number
*/
function multiplicar( numero: number, otroNumero?: number, base: number = 2 ): number {
    if ( otroNumero != undefined ){
        return numero * otroNumero;
    }else{
        return numero * base;
    }
}
/*
    Por ejemplo, nosotros aqui podemos mandar simplemente un numero
    const resultado = multiplicar( 5 );
    Que esto retornaria el numero mandado, multiplicado por la base previamente preestablecida como dos, 

    Tambien, nosotros podemos mandar dos numeros
    const resultado = multiplicar( 5, 3 );
    
    Tomando el 3 el valor del numero que antes se preestablecia como opcional, por tanto este numero deja de ser undefined y se multiplica 5*3

    Al final, si nosotros queremos cambiar la base, podemos hacer esto.
    const resultado = multiplicar( 5, undefined, 0 );
    
    console.log(resultado);
*/



//- APRENDIENDO EL USO DE LAS INTERFACES -//
interface PersonajeARK {
    nombre: string;
    pv: number;
    mostrarPv: () => void; //Asi se define en la interfaz una funcion.
}

function curar ( personaje: PersonajeARK, curarX: number ): void {
    /*
    Recibe un personaje, que tiene que cumplir las caracteristicas de la interfaz PersonajeARK, eso quiere decir, que si nosotros queremos establer por ejemplo:
        personaje.vida += curarX;

    Nos marcaria inmediatamente el error, ya que la propiedad vida, no esta definida en nuestra interfaz, esto nos ayuda a evitar errores.
    */
    personaje.pv += curarX;
}


const nuevoPersonajeArk: PersonajeARK = {
    //Aqui estamos creando un PersonajeARK, basandonos en nuestra interfaz, aqui se tiene que manejar esta sintaxis con coma, por que se esta definiendo un objeto.
    nombre: 'Hiram',
    pv: 50,
    mostrarPv() {
        console.log('Puntos de vida: ', this.pv );
    }
}


curar ( nuevoPersonajeArk, 20 );
nuevoPersonajeArk.mostrarPv( );







