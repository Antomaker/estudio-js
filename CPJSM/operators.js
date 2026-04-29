let a,b;

input = prompt("Ingrese el primer numero:");
a = parseFloat(input);
b = parseFloat(prompt("Ingrese el segundo numero:"));
console.log("La suma es: " + (a+b));
console.log("La resta es: " + (a-b));
console.log("La multiplicacion es: " + (a*b));
console.log("La division es: " + (a/b));
console.log("El modulo es: " + (a%b));
console.log("El resultado de elevar el primer numero al segundo es: " + (a**b));
incremento = a++;
console.log("El valor de a es: " + a);
console.log("El valor de incremento es: " + incremento);
decremento = b--;
console.log("El valor de b es: " + b);
console.log("El valor de decremento es: " + decremento);

const x=10,y=5;

const equal = x==y;
const notEqual = x!=y;
const greaterThan = x>y;
const lessThan = x<y;
const greaterThanOrEqual = x>=y;
const lessThanOrEqual = x<=y;
const strcitinEqual = x!==y;
console.log("x es igual a y: " , equal);
console.log("x es diferente a y: " , notEqual);
console.log("x es mayor que y: " , greaterThan);
console.log("x es menor que y: " , lessThan);
console.log("x es mayor o igual a y: " ,greaterThanOrEqual);
console.log("x es menor o igual a y: " , lessThanOrEqual);
console.log("x es estrictamente desigual a y: " , strcitinEqual);
// Operadores asignacion mejor usar strict equal (===) y strict not equal (!==) para evitar problemas de coercion de tipos.
//logical operators
const and = (x > 5) && (y < 10);
const or = (x > 5) || (y < 5);
const not = !(x > 5);
console.log("El resultado de AND es: " , and);
console.log("El resultado de OR es: " , or);
console.log("El resultado de NOT es: " , not);
//asignment operators
let c = 10;
c += 5;
console.log("El valor de c despues de += 5 es: " + c);
c -= 3;
console.log("El valor de c despues de -= 3 es: " + c);
c *= 2;
console.log("El valor de c despues de *= 2 es: " + c);
c /= 4;
console.log("El valor de c despues de /= 4 es: " + c);
c %= 3;
console.log("El valor de c despues de %= 3 es: " + c);  
c **= 2;
console.log("El valor de c despues de **= 2 es: " + c);
