var acessorio = {som: 'Pioneer', banco: 'Couro'};
var ligar = function(a) {
	console.log('Ligando o carro', a);
}

// array com string, numero, objeto e função
var fox = ['Fox', 4, acessorio, ligar];
console.log(fox);

console.log(fox[2].som);
fox[3]('agora!');