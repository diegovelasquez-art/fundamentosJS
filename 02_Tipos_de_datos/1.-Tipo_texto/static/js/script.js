console.log("Conexion con js correcta...");
/*
Dato. tipo de texto(string)
Concatenacion de texto con el signo +
Podemos unir texto y variables
*/
//Concatenacion: unir texto y/o variables.
const nombre = "Diego";
const apellido = "Velásquez";
//Unimos ambas constantes con un texto extra.
console.log("Hola, mi nombre es: " + nombre + " " + apellido);

/*
2.- Ver el tipo de dato (typeof)
*/
console.log("La variable nombre es un tipo de dato: " + typeof (nombre));

// Temple literals (Forma moderna para concatenar)
console.log(`Hola, mi nombre es: ${nombre} ${apellido}`);

//Mostrar el largo de un string(texto) - contar los caracteres.
// .lenght --> Para contar caracteres y espacios.
let palabra = "paralelepípedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} letras.`);

//Crear una frase y contar sus caracteres.
let frase = "esternocleidomastoideo";
console.log(`La palabra "${frase}" tiene ${frase.length} letras.`);

// Metodos comunes en JS para formatear texto
// Transformar texto en Mayusculas .toUpperCase()
let texto1 = "jAvAsCrIPt";
console.log(texto1.toUpperCase());

// Transformar texto en Minusculas .toLowerCase()
let texto2 = "jAvAsCrIPt";
console.log(texto2.toLowerCase());

//Buscar un texto dentro de un string
let texto3 = "Leche, azucar, peras, huevos, harina";
console.log(texto3.includes("peras")); //true

//Convertir una variable a texto
let telefono = 89182920
let telefono_texto = String(telefono);
console.log(` Mi número de teléfono: ${telefono_texto}
     es de tipo: ${typeof telefono_texto}`);