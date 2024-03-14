
var sumaDivisores=0;
var numero=0;
var divisor=0;
 
numero=parseInt(prompt("ingrese el numero del que desea encontrar el amigo "));
for (let divisor = 1; divisor< numero; divisor++) {
   
    if ( numero% divisor== 0) {
        sumaDivisores= sumaDivisores+ divisor;
    }
}
sumaDivisores;
 
alert("los numeros divisores de "+ numero + " suman " + sumaDivisores);