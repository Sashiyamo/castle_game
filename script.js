document.getElementById("start").addEventListener('click', function () {
    document.querySelector('.hero-select').classList.remove('display-none')
    document.querySelector('.start-page').classList.add('display-none')
})

















// var person = {
// 	'gender' : '',
// 	'class' : '',
// 	'race' : '',
// 	'height' : '',
// 	'gift' : '',
// 	'weapon' : '',
// 	'armor' : '',
// 	'familiar' : '',
// 	'srength' : 0,
// 	'agility' : 0,
// 	'intelligence' : 0,
// 	'' : '',
// 	'' : ''
// };
//
// var answ = 0;
//
// let variablePrompt = function(quest, varA, varB, tries) {
// 	answ = 0;
// 	answ = +prompt(quest + "\n1. " + varA + "\n2. " + varB);
// 	if (answ == 0) {
// 		alert("Не время сдаваться, самурай!");
// 		variablePrompt(quest, varA, varB);
// 	} else if (answ != 1 && answ != 2) {
// 		if (tries === undefined) {
// 			alert("Выбранного ответа нет в списке.");
// 			variablePrompt(quest, varA, varB, 1);
// 		} else if (tries == 1) {
// 			alert("Выбери ответ из списка!");
// 			variablePrompt(quest, varA, varB, 2);
// 		} else if (tries == 2) {
// 			alert("Нет, ты не понял, ОТВЕТ ИЗ СПИСКА!!!");
// 			variablePrompt(quest, varA, varB, 2);
// 		};
// 	};
// };
//
//
// let life = function () {
//
// 	let startGame = () => {
// 		alert("В этой игре ты будешь решать судьбу своего персонажа из средневековой вселенной, выбирая из двух вариантов ответа\n" + " Для начала тебе будет нужно создать персонажа, выбирая один из вариантов ответа: 1, 2 и тд");
// 		start = +prompt("Что будет нужно будет делать, когда наступит время выбирать судьбу?\n" + "1. Вводить, что в голову взбредет\n" + "2. Вводить цифры вариантов ответов\n")
// 		if (start == 2) {
// 			alert("Отлично, ты готов к путешествию! Начнем!")
// 		} alert("Ты совсем что ли? Из тех людей, которые везде вводят 666? Ладно, проходи дальше, но знай, что больше поблажек не будет!");
// 	};
// 	startGame();
//
// 	let chooseClass = () => {
// 		answ = +prompt ("Выбери свое происхождение:\n" + "1. Крестьянин\n" + "2. Разбойник\n" + "3. Дворянин");
// 		if (answ != 1 || answ != 2 || answ != 3 || answ != 666) {
// 			alert("Выбери номер из списка");
// 			chooseClass();
// 		} person.class = answ;
// 	}
// 	chooseClass();
//
// 	let chooseGift = () => {
// 		answ = +prompt ("Выбери начальный дар:\n" + "1. Монета\n" + "2. Разбойник\n" + "3. Дворянин");
// 		if (answ != 1 || answ != 2 || answ != 3 || answ != 666) {
// 			alert("Выбери номер из списка");
// 			chooseClass();
// 		} person.class = answ;
// 	}
//
// };