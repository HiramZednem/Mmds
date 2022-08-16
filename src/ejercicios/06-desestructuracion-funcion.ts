
// DESESTRUCTURACIÓN DE ARGUMENTOS

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "Nokia A1",
    precio: 150
}
const tableta: Producto = {
    desc: "iPad Air",
    precio: 350
}


export function calculaISV ( productos: Producto[] ): [ number, number ] {
/*
    Esta seria la forma normal de barrer mi arreglo de productos
        productos.forEach ( ( producto ) => {
            total+= producto.precio;
        } ); 

    Sin embargo, la desestructuración de argumentos me ayuda a sacar la propiedad que necesito de mi objeto.
*/
    let total = 0;

   productos.forEach( ({ desc , precio }) => {
        //console.log( desc,' = ',precio ); //Asi me evito poner objeto.propiedad
        total += precio;
   } );

    return [total, total * 0.15];
}

// const articulos: Producto[] = [ telefono, tableta ];

// const [ total, isv ] = calculaISV( articulos );

// console.log( 'Total:', total );
// console.log( 'ISV:', isv );