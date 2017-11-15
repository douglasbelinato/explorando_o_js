// variável global, porque está fora de uma função
var nome = 'Douglas';

var capitalizar = function() {
	// variável local à função capitalizar()
	var nome = 'AlgaWorks'.toUpperCase();
}

capitalizar();
console.log('nome:',nome);
//--------------------------------------------------

var capitalizar2 = function() {
	// variável local
	nome = 'AlgaWorks'.toUpperCase();
}

capitalizar2();
console.log('nome:',nome);

//--------------------------------------------------

var capitalizar3 = function() {
	// Nova variável sem sem a palavra chave 'var'
	//vira variável global
	novoNome = 'Carol'.toUpperCase();
}

capitalizar3();
console.log('nome:', novoNome);