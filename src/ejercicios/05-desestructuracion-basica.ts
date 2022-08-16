
//Siempre antes de crear un objeto hay que empezar creando la interfaz por que esto nos da la idea de como va a lucir el objeto
interface Detalles {
    autor: string;
    anio: number;
}

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

/*
    Esto es una forma perfectamente valida de mostrar los detalles del reproductor, sin embargo hay una manera mejor de hacer esto, con la desestructuración de objetos.

        console.log('El volumen actual es: ', reproductor.volumen );
        console.log('El segundo actual es: ', reproductor.segundo );
        console.log('La cancion actual es: ', reproductor.cancion );
        console.log('El autor es: ', reproductor.detalles.autor );

    DESESTRUCTURACION DE ARREGLOS:
    const  { propiedades a extraer } = objeto;

*/

/*
    AQUI TENEMOS UN PROBLEMA POR QUE ``DETALLES``, ES UN OBJETO QUE CONTIENE EL ``AUTOR`` Y EL ``AÑO``, ESTA ES UNA FORMA DE TRABAJARLO ( NO MUY RECOMENDABLE POR QUE SE VUELVE UN POCO DIFICIL DE LEER ): 

    const { volumen, segundo , cancion , detalles: { autor }  } = reproductor;

    FORMA RECOMENDABLE:
*/

const { volumen, segundo , cancion , detalles  } = reproductor;
const { autor : autorCancion } = detalles; 
// autor : autorCancion esta cambiando el nombre de la variable en la que se va a guardar al extraerse.

//   console.log('El volumen actual es: ', volumen );
//   console.log('El segundo actual es: ', segundo );
//   console.log('La cancion actual es: ', cancion );
//   console.log('El autor es: ', autorCancion );











/*   DESESTRUCTURACIÓN DE ARREGLOS   */

const dbz: string[] = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = dbz;
//Se deja vacio, por que no me interesa sacar los otros personajes

// console.log('Personaje 1: ', p1);
// console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);


/* 
    NOTAS:
        En la desestructuracion de objetos no importa la posicion por que los valores del objeto tienen un nombre, entonces se hace por nombre...

        En la desestructuracion de arreglos la posicion es lo importante

*/