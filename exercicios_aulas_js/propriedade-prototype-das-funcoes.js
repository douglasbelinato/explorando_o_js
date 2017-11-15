// declaração de função construtora para poder
// instanciar um objeto com new depois
// Por convenção se inicia com letra maiúscula a var
// Posso fazer assim:

var Carro = function(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	//this.fabricante = 'VW';
}
/*
// Ou posso fazer assim:
function Carro(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'VW';
}
*/

Carro.prototype.fabricante = 'VW';
Carro.prototype.ligar = function() {
	console.log('Ligando o carro...');
};

var fox = new Carro('Fox', 'AAA-1111');
console.log('fox', fox);

var gol = new Carro('Gol', 'AAA-2222');
console.log('gol', gol);

console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);
fox.ligar();

console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));