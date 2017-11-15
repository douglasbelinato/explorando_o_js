// criação de objeto
var contador = {
	valor: 0,
	incrementar: function() {
		this.valor++;
	},
	reset: function() {
		console.log('Valor do contador agora:', this.valor);
		this.valor = 0;
	}
}

// sem encapsular os elementos do objeto, consigo fazer isso
// e pode dar problema:
// contador.valor = 'exemplo';

contador.incrementar();
contador.incrementar();
contador.reset();
contador.incrementar();
contador.reset();