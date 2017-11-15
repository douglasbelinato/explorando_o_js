var criarCarroDaVolks = function(nome, placa) {
	return {
		nome: nome,
		placa: placa,
		fabricante: 'VW'
	};
}

var fox = criarCarroDaVolks('fox','AAA-1111');
console.log('fox', fox);

var gol = criarCarroDaVolks('gol','AAA-2222');
console.log('gol', gol);