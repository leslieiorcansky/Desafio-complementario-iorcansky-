const mascota1 = {
    nombre: 'Tommy',
    edad: '10',
    mascota: 'perro',
    vivo: true,
};

const mascota3 = {
    nombre: 'Frida',
    edad: '2',
    mascota: 'gato',
    vivo: true,
};

const mascota4 = null;

console.log (mascota3 || 'La mascota no existe');
console.log(mascota4 || 'La mascota no existe');

const {nombre,edad,vivo} = mascota1;
console.log(nombre);

 const mascota2 = {
    ...mascota1,
    raza: 'Caniche',
    dueño: 'Pedro'
 };

 console.log(mascota2);

const mayorDeEdad = (mascota1.edad >= 2) ? true : false

mayorDeEdad ? alert (`${mascota1.nombre} es un ${mascota1.mascota} adulto`) : alert(`${mascota1.nombre} es cachorro`)

console.log(mayorDeEdad);