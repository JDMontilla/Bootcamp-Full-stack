// Ejercicio Quick sort

function quicksort(arr){
    if(arr.length <= 1){
        return arr;
    }

let = izq = [];
let = der = [];
let pivote = arr.pop();
let long = arr.length;
let d = [];

    for(let i=0; i < long; i++){
        if(arr[i] <=pivote){
            izq.push(arr[i]);
        }else{
            der.push(arr[i]);
        }
    }
 return d.concat(quicksort(izq),pivote, quicksort(der));  

}

let numeros = [1,5,9,4,2,6,8,11,10,23]
console.log(numeros);

let numerosorg = quicksort.numeros
console.log(numerosorg)

   