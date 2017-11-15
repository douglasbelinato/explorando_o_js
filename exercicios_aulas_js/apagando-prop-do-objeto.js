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

console.log(joao);
delete joao.endereco.numero; // apaga a propriedade do objeto
//delete joao['endereco']['numero'];  // pode ser acessado assim também
console.log(joao);
