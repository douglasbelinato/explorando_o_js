// modo 1 - function declaration
// com ele o hoisting funciona
function somar(a, b) {
	console.log('arguments -->', arguments)
	return a + b;
}

// modo 2 - function expression
// com ele o hoisting NÃO funciona
var subtrair = function(a, b) {
	return a - b;
}

function funcaoSemParametro() {
	console.log('arguments -->', arguments)
}

var soma = somar(4,1);
console.log("Soma 4 + 1 =", soma);

var subtracao = subtrair(4,1);
console.log("Substração 4 - 1 =", subtracao);

console.log('-----------------------------');
console.log(funcaoSemParametro(5,6))

console.log('-----------------------------');
console.log('typeof subtrair = ',typeof subtrair);