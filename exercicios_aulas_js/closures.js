function incrementar() {
	var valor = 0;

	return function() {
		return ++valor;
	}

}

var fn = incrementar();
console.log('typeof fn =',typeof fn);

console.log(fn());
console.log(fn());
console.log(fn());

console.log('*******************************************');

// ********************************************************
// Funções auto executáveis
var incrementar2 = (function() {
	var valor = 0;

	return function() {
		return ++valor;
	}
}) ();

console.log(incrementar2());
console.log(incrementar2());
console.log(incrementar2());