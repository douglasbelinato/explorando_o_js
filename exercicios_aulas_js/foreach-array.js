var nomes = ['João', 'Maria', 'Pedro', 'José'];

// for normal
for (var i = 0; i < nomes.length; i++) {
	console.log('nomes[', i, '] = ', nomes[i]);
}

console.log('---------------------------------');

// API do array - foreach
nomes.forEach(function(elemento) {
	console.log(elemento);
});

console.log('---------------------------------');

console.log(nomes.toString());
console.log(nomes.join(' - '));