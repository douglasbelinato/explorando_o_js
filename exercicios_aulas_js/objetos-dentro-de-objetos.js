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
console.log('Cidade do João:', joao.endereco.cidade);
joao.endereco.numero = 101;
console.log(joao);
console.log(joao.endereco.cep); // propriedade ñ existe
console.log('Estado do João:', joao['endereco']['estado']);http://www.americanas.com.br/produto/8348820