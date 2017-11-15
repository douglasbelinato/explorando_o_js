var joao = {
	nome: 'joão',
	idade: 25,
	endereco: {
		logradouro: 'Av Nações Unidas',
		numero: 100,
		complemento: 'Apto 101',
		cidade: 'São Paulo',
		estado: 'SP'
	}
}

for (var prop in joao) {
	console.log(prop, '-->', joao[prop]);
}