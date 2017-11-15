// outro modo de fazer evento ready com jquery
// posso usar dessa forma ao invés de fazer:
//     $( document ).ready( handler )
// (vide documentação do jquery)
$(function() {
	//depois que todos os elementos estão prontos e carregados no DOM
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuario');

	// click é um atalho para .on('click', {handler})
	// vide documentação
	selecaoUsuarios.click(function() {
		// posso fazer assim:
		// var totalUsuariosSelecinados = $('.js-selecao-usuario:checked').length;
		// ou assim, com filter:
		var totalUsuariosSelecinados = selecaoUsuarios.filter(':checked').length;
		var checked = selecaoUsuarios.length === totalUsuariosSelecinados;
		selecaoTodosUsuarios.prop('checked', checked);
	});

	selecaoTodosUsuarios.click(function() {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
	});

});