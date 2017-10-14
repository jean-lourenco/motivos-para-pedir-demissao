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
	'Deixaram pra contratar a consultoria quando começou a dar merda',
	'O planejamento do projeto se resume a fazer tudo no tempo'
];

document.getElementById('motivo').firstChild.innerText = motivos[Math.trunc(Math.random() * motivos.length)];
