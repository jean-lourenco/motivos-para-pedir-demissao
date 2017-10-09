let motivos = [
	'No começo era legal, mas agora eu quero matar todo mundo',
	'Uma capivara me disse pra fazer isso',
	'Papai quer que eu faça medicina',
	'Acabou o café',
	'Acabou o leite do café',
	'Acabou o açucar do café',
	'Nunca posso nada nessa p****!',
	'Demissão não se pede, se ganha!',
	'A empresa usa Sybase',
	'O banco está com problema e o dba não resolve',
	'É sempre culpa da aplicação, nunca do banco'
];

document.getElementById('motivo').firstChild.innerText = motivos[Math.trunc(Math.random() * motivos.length)];
