let motivos = [
	'No começo era legal, mas agora eu quero matar todo mundo',
	'Uma capivara me disse pra fazer isso',
	'Papai quer que eu faça medicina',
	'Demissão não se pede, se ganha!'
];

document.getElementById('motivo').firstChild.innerText = motivos[Math.trunc(Math.random() * motivos.length)];
