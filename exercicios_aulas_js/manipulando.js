// outro modo de fazer evento ready com jquery
// posso usar dessa forma ao invés de fazer:
//     $( document ).ready( handler )
// (vide documentação do jquery)
$(function() {
	//depois que todos os elementos estão prontos e carregados no DOM
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuario');

	function estilizarLinhaUsuarios() {
		selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
	}

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
		estilizarLinhaUsuarios();
		/*if (selecaoTodosUsuarios.prop('checked')) {
			selecaoUsuarios.parents('tr').addClass('selecionado');
		} else {
			selecaoUsuarios.parents('tr').removeClass('selecionado');
		}*/
	});

	// assim como click, change é um atalho para .on('change', {handler})
	selecaoUsuarios.change(function(evento) {
		// var selecaoUsuario = $(evento.target);
		estilizarLinhaUsuarios();
		/*
		if (selecaoUsuario.prop('checked')) {
			// parents => navegue nos pais desse elemento até chegar a
			// ao elemento/id/classe desejado
			// obs: .parent() procura só no primeiro pai
			selecaoUsuario.parents('tr').addClass('selecionado');
		} else {
			selecaoUsuario.parents('tr').removeClass('selecionado');
		}*/
	});

});