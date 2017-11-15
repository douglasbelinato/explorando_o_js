$(function() {

	
	$('#botao1').on('click',function(e) {
		console.log('Botão 1 clicado');
	});	

	$('#link1').on('click', function(e) {
		e.preventDefault(); // interrompe comportamento default do evento
		console.log('Link 1 clicado');
	});

	$('#input1').on('keyup', function(e) {
		console.log(e.key, '-', e.keyCode);
	});
});

// Não usar onclick na tag HTML
/*function botao1Clicado(){
	console.log('Botão 1 clicado');
}*/