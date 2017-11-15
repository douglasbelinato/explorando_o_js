var contador = (function() {
	// com 'var' essa variável fica encapsulada. 
	// Dessa forma ela fica privada dentro da função.
	// Aqui fica o que eu quero que fique PRIVADO
	var valor = 0;

	function funcaoPrivada() {
		console.log('Função privada...');
	}

	// essa função retorna um objeto.
	// Aqui fica o que eu quero que fique PÚBLICO
	return {
		incrementar: function() {
			valor++;
			funcaoPrivada();
		},
		reset: function() {
			console.log('Valor do contador agora:', valor);
			valor = 0;
		}		
	}
})();

// Para evitar isso, eu já executo a função logo de cara
/*var t = contador();
t.incrementar();
t.incrementar();
t.reset();
*/


/* ==>  OUtra forma de fazer também:
var contador = (function() {
	// com 'var' essa variável fica encapsulada. 
	// Dessa forma ela fica privada dentro da função
	var valor = 0;
	var incrementar = function() {
		valor++;
	};
	var reset = function() {
		console.log('Valor do contador agora:', valor);
		valor = 0;
	};
	
	return {
		incrementar: incrementar,
		reset: reset
	}
})();

*/

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.reset();