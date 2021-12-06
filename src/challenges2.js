// Desafio 10
function techList(array, name) {

  if(array.length === 0){
    return 'Vazio!';
  }else{
    let lista = array.sort();

    for(let i = 0; i < lista.length; i += 1){
      lista[i] = {
        tech: lista[i],
        name,
      }
    }
    return lista;
  }

}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));



// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
