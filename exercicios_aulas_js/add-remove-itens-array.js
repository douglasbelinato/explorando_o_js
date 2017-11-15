var emails = [];

console.log(emails.length);

// push adiciona sempre no fim
emails.push('joao@email.com');
console.log(emails);

emails.push('maria@email.com');
console.log(emails);

emails.push('jose@email.com');
console.log(emails);

// pop remove o último elemento e devolve como retorno
var email = emails.pop();
console.log(emails);
console.log('email removido:',email);

// unshift adiciona no inicio
emails.unshift('pedro@email.com');
console.log(emails);

// shift remove o primeiro e devolve como retorno
email = emails.shift(email);
console.log('email removido:',email);