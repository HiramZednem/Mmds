

//Lo que se aprendio principalmente esta en la linea 21, que es añadir el signo ? para que evalue antes de hacer tal propiedad.

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: 'Fernando',
}

const pasajero2: Pasajero = {
  nombre: 'Melisa',
  hijos: ['Natalia','Gabriel']
}

function imprimeHijos( pasajero:Pasajero ): void {

  const cuantosHijos = pasajero.hijos?.length || 0;
  //Aqui le añadimos hijos"?"", con esto, le estoy diciendo que evalue los hijos, si esto tiene un valor, entonces sacale el . length

  console.log( cuantosHijos );


}


imprimeHijos(pasajero2);

