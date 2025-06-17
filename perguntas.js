function criaCartao(categoria, pergunta, resposta) {
const container = document.getElementById('container');
const article = document.createElement('article');
article.className = 'cartao';
const conteudo = document.createElement('div');
conteudo.className = 'cartao__conteudo';
const frente = document.createElement('div');
frente.className = 'cartao__frente';
frente.innerHTML = `<div><h3>${categoria}</h3><p>${pergunta}</p></div>`;
const verso = document.createElement('div');
verso.className = 'cartao__verso';
verso.innerHTML = `<p>${resposta}</p>`;
conteudo.appendChild(frente);
conteudo.appendChild(verso);
article.appendChild(conteudo);
article.addEventListener('click', () => {
article.classList.toggle('virado');
});
container.appendChild(article);
}
criaCartao(
'Programação',
'O que é JavaScript?',
'JavaScript é uma linguagem de programação.'
);
criaCartao(
'Geografia',
'Qual a capital da França?',
'A capital da França é Paris.'
);
criaCartao(
'Matemática',
'Quanto é 7 x 8?',
'7 x 8 = 56.');