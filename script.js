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
	'O comercial vendeu uma feature que não existe no sistema', 
	'Agendaram a homologação do sistema para às 18h de sexta',
	'Patch de correção para um problema que foi criado por um patch anterior'
];

document.getElementById('motivo').firstChild.innerText = motivos[Math.trunc(Math.random() * motivos.length)];
