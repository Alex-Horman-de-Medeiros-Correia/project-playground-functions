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
  let maiorNumero = 0;
  let contagem = 0;
  

  for(let i = 0; i < array.length; i += 1){
    if(array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
    if(maiorNumero === array[i]){
      contagem += 1;
    }
    }
    return contagem;
  }
  


console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
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
