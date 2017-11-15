// Por convenção, nomes de variáveis de funções construtoras
// começam com letra maiúscula
var Carro = function(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	this.fabrica = 'VW';
}

var fox = new Carro('Fox', 'AAA-1111');
console.log('fox', fox);
