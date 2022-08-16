
//IMPORTACIONES Y EXPORTACIONES (ESTOY UTILZANDO EL ARCHIVO 06-DESESTRUCTURACION-FUNCION PARA EXPORTAR LA INTERFACE DE TIPO PRODUCTO)

import { Producto , calculaISV } from './06-desestructuracion-funcion'

const carritosCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [ total, isv ] = calculaISV( carritosCompras );

console.log( 'Total:', total );
console.log( 'ISV:', isv );
