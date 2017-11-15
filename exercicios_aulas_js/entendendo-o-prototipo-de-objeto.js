var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111'
}

// definindo prototype - modo 2, criando objeto já informando qual
// é o prototype
var gol = Object.create(volks);
/*var gol = {
	nome: 'Gol',
	placa: 'AAA-2222'
}*/

// definindo prototype - modo 3, passando propriedade __proto__
// ele já adiciona o novo valor do prototype na criaçaõ do objeto
var saveiro = {
	nome: 'Gol',
	placa: 'AAA-2222',
	__proto__: volks // Não é tão recomendada usar por incpatibilidade de versão com os browsers
}

console.log('fox', fox);
console.log('gol', gol);

console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));

console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

// definindo prototype - modo 1
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante -->', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);
console.log('saveiro.fabricante', saveiro.fabricante);


console.log('toString do fox:', fox);