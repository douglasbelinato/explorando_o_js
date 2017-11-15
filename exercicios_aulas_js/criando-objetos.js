var fox = {cor: 'prata', modelo: 'Fox', fabricante: 'VW'};

console.log('Fox', fox);
console.log(typeof fox);

console.log('Cor do fox', fox.cor);
console.log('Cor do fox', fox['cor']);

// adicionando nova propriedade que seja de valor
fox.peso = 1100;
console.log('Fox', fox);

// adicionando nova propriedade que seja função
fox.ligar = function() { console.log('Ligando o carro.'); };
console.log(fox);
fox.ligar();

var celta = {
	cor: 'branco',
	modelo: 'Celta',
	fabricante: 'GM',
	ligar: function() {
		console.log('Ligando o carro');
	}
};

console.log('celta', celta);