
// const b1 = Buffer.alloc(20);

// const b2 = Buffer.from("Mañana más");

// console.log(b1);
// console.log(b2);

// console.log(b2.toString());
// console.log(b2[0]);

// const my_var = "Mañana más";
// b1.write(my_var);

const my_var = ("Hola mundo");

//1.- b1 = Buffer.from / write / toString / alloc / slice / ... -> Mostrar "Hola mundo" por pantalla;
//2.- b2 = Buffer -> Mostrar solo "Hola";
//3.- b3 = Buffer -> Mostrar "Mundo  Hola";
//4.- b4 = Buffer -> Mostrar "mundohola"; 

//1)
const b1 = Buffer.from(my_var);
console.log(b1.toString());

//2)
const b2 = Buffer.alloc(4);
b2.write(my_var);
console.log(b2.toString());

//3)
const b3 = Buffer.from(my_var);
const primera_parte = b3.slice(0,4);
const segunda_parte = b3.slice(5);
console.log(Buffer.concat([segunda_parte, primera_parte]).toString());
