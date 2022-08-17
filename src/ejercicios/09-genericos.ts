


//Una funcion es lo que tenemos aqui, pues esta va a regresar el tipo que recibe
function queTipoSoy<T>( argumento: T ){
    return argumento;
}

let soyString = queTipoSoy( 'Hola Mundo' );
let soyNumero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8,9,10] );

let soyExplicito = queTipoSoy<number>( 100 );
//Tambien podemos especificar desde antes que es lo que deseamos que retorne






