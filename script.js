let motivos = [
	'No começo era legal, mas agora eu quero matar todo mundo',
	'Acabou o café',
	'Acabou o leite do café',
	'Acabou o açúcar do café',
	'Nunca posso nada nessa p****!',
	'Demissão não se pede se ganha!',
	'A empresa usa Sybase',
	'O comercial vendeu uma feature que não existe no sistema' ,
	'Agendaram a homologação do sistema para às 18h de sexta',
	'Meu trabalho esta matando a minha criatividade',
	'Patch de correção para um problema que foi criado por um patch anterior',
	'Deixaram pra contratar a consultoria quando começou a dar merda',
	'O planejamento do projeto se resume a fazer tudo no tempo',
	'Não entendi a change, mas os totais voltaram a bater',
	'A empresa está contratando programador PHP',
	'A empresa usa SVN',
	'O código fonte é cheio de números mágicos',
	'Usando SQL para registrar log',
	'Projeto com escopo aberto e prazo fechado',
	'A Senior comprou a empresa',
	'A empresa usa Delphi e Firebird (Quem que perde tempo com isso?)',
	'O banheiro fede',
	'Ninguém tem tempo, o tempo todo.',
	'Recebi outro projeto que pediram a conta antes de terminá-lo.',
	'Tá todo mundo pedindo a conta já no meu primeiro dia de trabalho.'
];

document.getElementById('motivo').firstChild.innerText = motivos[Math.trunc(Math.random() * motivos.length)];
