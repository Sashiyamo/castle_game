document.getElementById("start").addEventListener('click', function () {
    document.querySelector('.hero-select').classList.remove('display-none')
    document.querySelector('.start-page').classList.add('display-none')
})

document.getElementById("peasant").addEventListener('click', function () {
    document.getElementById("peasant-card").classList.add('hero-card-active')
    document.getElementById("thief-card").classList.remove('hero-card-active')
    document.getElementById("nobleman-card").classList.remove('hero-card-active')

    document.querySelector(".hero-select-bg").classList.add('peasant-select-bg')
    document.querySelector(".hero-select-bg").classList.remove('thief-select-bg')
    document.querySelector(".hero-select-bg").classList.remove('noble-select-bg')

    document.getElementById('thief-description').classList.add('hero-description-hide')
    document.getElementById('nobleman-description').classList.add('hero-description-hide')
    document.getElementById('peasant-description').classList.remove('hero-description-hide')

    document.querySelector(".to-journey").classList.remove('to-journey-hide')
})

document.getElementById("thief").addEventListener('click', function () {
    document.getElementById("thief-card").classList.add('hero-card-active')
    document.getElementById("peasant-card").classList.remove('hero-card-active')
    document.getElementById("nobleman-card").classList.remove('hero-card-active')

    document.querySelector(".hero-select-bg").classList.add('thief-select-bg')
    document.querySelector(".hero-select-bg").classList.remove('peasant-select-bg')
    document.querySelector(".hero-select-bg").classList.remove('noble-select-bg')

    document.getElementById('peasant-description').classList.add('hero-description-hide')
    document.getElementById('nobleman-description').classList.add('hero-description-hide')
    document.getElementById('thief-description').classList.remove('hero-description-hide')

    document.querySelector(".to-journey").classList.add('to-journey-hide')
})

document.getElementById("nobleman").addEventListener('click', function () {
    document.getElementById("nobleman-card").classList.add('hero-card-active')
    document.getElementById("peasant-card").classList.remove('hero-card-active')
    document.getElementById("thief-card").classList.remove('hero-card-active')

    document.querySelector(".hero-select-bg").classList.add('noble-select-bg')
    document.querySelector(".hero-select-bg").classList.remove('peasant-select-bg')
    document.querySelector(".hero-select-bg").classList.remove('thief-select-bg')

    document.getElementById('peasant-description').classList.add('hero-description-hide')
    document.getElementById('thief-description').classList.add('hero-description-hide')
    document.getElementById('nobleman-description').classList.remove('hero-description-hide')

    document.querySelector(".to-journey").classList.add('to-journey-hide')
})

document.querySelector(".to-journey").addEventListener('click', function () {
    document.querySelector('.game').classList.remove('display-none')
    document.querySelector('.hero-select').classList.add('display-none')

    startNode('11_0')
})

document.querySelectorAll(".way-card").forEach(function (e) {
    e.addEventListener('click', function (ev) {
        document.querySelectorAll(".way-card").forEach(function (e) {
            e.classList.remove("way-card-active")
        })
        ev.target.classList.add("way-card-active")
    })
})

document.querySelector(".select").addEventListener('click', function () {
    let ways = document.querySelectorAll(".way-card")
    if (ways[0].classList.contains("way-card-active")) {
        // startNode(localStorage.getItem("game_node") + 0)
        startNode(localStorage.getItem("game_node_next_0"))
    } else if (ways[1].classList.contains("way-card-active")) {
        // startNode(localStorage.getItem("game_node") + 1)
        startNode(localStorage.getItem("game_node_next_1"))
    } else alert("Выберите один из путей!")
})

function startText(texts, textInd = 0) {
    let el = document.querySelector(".next")
    let clone = el.cloneNode(true)
    el.parentNode.replaceChild(clone, el)

    document.querySelector(".way-text").innerHTML = texts[textInd]
    // console.log(texts)
    // console.log(textInd)

    if (textInd < texts.length - 1) {
        document.querySelector(".next").addEventListener('click', function () {
            startText(texts, ++textInd)
        })
    } else {
        document.querySelector(".next").classList.add("next-button-inactive")
        document.querySelector(".next").classList.remove("next-button")
    }
}

function startNode(nodeID) {
    fetch("game/scenaries.json")
        .then(response => {
            return response.json();
        })
        .then(game => {
            let history = JSON.parse(localStorage.getItem("game_history"))
            if (history == null) history = []
            if (history != null && history[history.length - 1] != localStorage.getItem("game_node")) {
                history.push(localStorage.getItem("game_node"))
            }
            localStorage.setItem("game_history", JSON.stringify(history))

            localStorage.setItem("game_node_prev", localStorage.getItem("game_node"))
            localStorage.setItem("game_node", nodeID)

            // for (let i game[nodeID]["way0"]["nexts"]["count"]) {
            //
            // }
            for (let e in game[nodeID]["way0"]["nexts"]) {
                let all_conditions = true
                for (let cond in e["condition"]){
                    if (!JSON.parse(localStorage.getItem("game_history")).contains(cond)) {
                        all_conditions = false
                    }
                }
                if (all_conditions) {
                    localStorage.setItem("game_node_next_0", e["next"])
                }
            }

            for( let e in game[nodeID]["way1"]["nexts"]) {
                let all_conditions = true
                for (let cond in e["condition"]){
                    if (!JSON.parse(localStorage.getItem("game_history")).contains(cond)) {
                        all_conditions = false
                    }
                }
                if (all_conditions) {
                    localStorage.setItem("game_node_next_1", e["next"])
                }
            }
            // console.log("all is ok")
            // console.log(game)

            document.querySelector(".game-bg").style.backgroundImage = 'url("/media/img/' + nodeID[0] + '/' + game[nodeID].background + '")'
            document.querySelector(".way0").style.backgroundImage = 'url("/media/img/' + nodeID[0] + '/' + game[nodeID]["way0"]["images"]["1"] + '")'
            document.querySelector(".way1").style.backgroundImage = 'url("/media/img/' + nodeID[0] + '/' + game[nodeID]["way1"]["images"]["1"] + '")'
            document.querySelector(".way0-text").innerHTML = game[nodeID]["way0"]["texts"][0]
            document.querySelector(".way1-text").innerHTML = game[nodeID]["way1"]["texts"][0]

            startText(game[nodeID]["texts"])
        });
}

if (localStorage.getItem("game_node") != null && localStorage.getItem("game_node") != "") {
    // document.querySelector('.game').classList.remove('display-none')
    // document.querySelector('.hero-select').classList.add('display-none')
    // document.querySelector('.start-page').classList.add('display-none')
    //
    // // startNode(localStorage.getItem("game_node"))
    // startNode("11_0")
}

















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