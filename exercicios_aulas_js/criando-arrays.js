// declarando array
var emails = [];
emails[0] = 'joao@teste.com';
emails[1] = 'maria@teste.com';

console.log('emails[0]', emails[0]);
console.log('emails[5]', emails[5]);

// declarando e criando
var nomes = ['Douglas', 'Carol', 'Maria'];
console.log('Quantos nomes?', nomes.length);

// posso adicionar em uma posição mais à frente também
nomes[5] = 'José';
console.log('Quantos nomes?', nomes.length);

// e o que fica nas posições intermediárias fica como undefined
console.log('nomes[3]', nomes[3]);