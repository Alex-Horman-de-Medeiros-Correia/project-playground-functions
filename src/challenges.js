// Desafio 1
function compareTrue(boll01, boll02) {
  if(boll01 === true && boll02 === true) {
    return true;
  }else{
    return false;
  } 
  
}

//console.log(compareTrue(false, false));



// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
  
}

/* console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1)); */

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
  
}

//console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  return array[array.length -1] + ', ' + array[0];
}

//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

//console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let contagem = 0;
  

  for(let i = 0; i < array.length; i += 1){
    if(array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }

  for(let i = 0; i < array.length; i += 1){
    if(array[i] === maiorNumero) {
      contagem += 1;
    }
  }
return contagem;
}
  


/* console.log(highestCount([0, 0, 0])); */


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1forMouse = 0; 
  let cat2forMouse = 0;

  if(cat1 > mouse) {
    cat1forMouse = cat1 - mouse;
  }else{
    cat1forMouse = mouse - cat1;
  }

  if(cat2 > mouse) {
    cat2forMouse = cat2 - mouse;
  }else{
    cat2forMouse = mouse - cat2;
  }

  if(cat1forMouse < cat2forMouse) {
    return 'cat1';
  }else if(cat2forMouse < cat1forMouse) {
    return 'cat2';
  }else{
    return 'os gatos trombam e o rato foge';
  }
}

 /* console.log(catAndMouse (2,1,4)); */

// Desafio 8
function fizzBuzz(array) {
  let secondArray = array;


  /* for (let i = 0; i < array.length; i += 1){
    if(array[i] % 3 !== 0 && array[i] % 5 !== 0){
      secondArray[i] = "bug!";
    }
  }

  for (let i = 0; i < array.length; i += 1){
    if(array[i] % 3 === 0){
      secondArray[i] = "fizz";
    }
  }

  for (let i = 0; i < array.length; i += 1){
    if(array[i] % 5 === 0){
      secondArray[i] = "buzz";
    }
  } */

  for (let i = 0; i < array.length; i += 1){
    
    if(array[i] % 5 === 0 && array[i] % 3 === 0){
      secondArray[i] = "fizzBuzz";
    }else if(array[i] % 3 === 0){
      secondArray[i] = "fizz";
    }else if(array[i] % 5 === 0){
      secondArray[i] = "buzz";
     
    }else{
      secondArray[i] = "bug!";
    }

  }

  
  return secondArray;
}

/* console.log(fizzBuzz([2, 15, 7, 9, 45])); */

// Desafio 9
function encode(string) {

  let letras = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5,
  }

  let resultado = '';

  for (let i = 0; i < string.length; i += 1){
    if(letras[string[i]]){
      resultado += letras[string[i]]
    }else{
      resultado += string[i];
    }
  }
  

     /*  string.replace(/a/gm, '1');
   
      string.replace(/e/gm, '2');
   
      string.replace(/i/gm, '3');
  
      string.replace(/o/gm, '4');
  
      string.replace(/u/gm, '5'); */
    
  
  return resultado;
}

console.log(encode('hi there!'));

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
