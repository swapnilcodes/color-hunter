let about = document.getElementById("about");
about.addEventListener('click', function () {
    window.open('https://linktr.ee/while_true_coder');
});


// To check Scores 
let checkScores = document.getElementById('view-scores');
checkScores.addEventListener('click', function () {
    let body = document.querySelector('body');
    body.removeChild(document.querySelector('.menu'));
    document.querySelector('body').removeChild(document.querySelector('h1'));
    document.querySelector('body').removeChild(document.querySelector('h3'));
    let scoreHeading = document.createElement('h1');
    scoreHeading.innerHTML = 'Scores';
    scoreHeading.id = 'score-heading';
    body.appendChild(scoreHeading);
    body.appendChild(document.createElement('hr'));
    if (localStorage.getItem('scores') == null) {
        let noScores = document.createElement('h2');
        noScores.innerText = 'No Scores Yet';
        noScores.id = 'no-scores-heading';
        body.appendChild(noScores);
    } else {
        let scoresBox = document.createElement('div');
        scoresBox.className = 'scores';
        html = '';
        scores = JSON.parse(localStorage.getItem('scores'));
        scores.forEach(function (element, index) {
            html += `
                <div class= 'score-block'><div class= 'date' id= '${index}'></div><div class= 'score'>${element}</div></div>
            `;
        });
        scoresBox.innerHTML = html;
        document.querySelector('body').appendChild(scoresBox);
        let text = '';
        let datesElement = document.getElementsByClassName('date');
        let dates = JSON.parse(localStorage.getItem('dates'));
        console.log(dates);
        let elems = Array.from(datesElement);
        for (i = 0; i < elems.length; i++) {
            text = dates[i];
            document.getElementById(i).innerText = text;
        }
    }
});


// For Gameplay Of The Game
let play = document.getElementById('play');
play.addEventListener('click', async function () {
    let dates;
    let scores;
    if (localStorage.getItem('dates') == null) {
        dates = [];
    } else {
        dates = JSON.parse(localStorage.getItem('dates'));
    }
    if (localStorage.getItem('scores') == null) {
        scores = [];
    } else {
        scores = JSON.parse(localStorage.getItem('scores'));
    }
    let body = document.querySelector('body');
    body.removeChild(document.querySelector('.menu'));
    body.removeChild(document.querySelector('h1'));
    body.removeChild(document.querySelector('h3'));
    let root = document.querySelector('.root');
    let game_over = false;
    let score = 0;
    let timer = 3;
    while (!game_over) {
        console.log(timer);
        if (document.querySelector('#counter') == null) {
            let counter_elem = document.createElement('h3');
            counter_elem.id = 'counter';
            counter_elem.innerText = timer;
            root.appendChild(counter_elem);
        }
        if (document.querySelector('#query') == null) {
            let option_queries = getMultipleQuery();
            let questionColor = option_queries[0];
            console.log(option_queries);

            let score_elem = document.createElement('h2');
            score_elem.id = 'score';
            score_elem.innerText = score;
            root.appendChild(score_elem);
            let query = document.createElement('h3');
            query.id = 'query';
            query.style.color = questionColor;
            query.innerText = `Click The Button With ${questionColor} color`;
            root.appendChild(query);
            let queries_cont = document.createElement('div');
            queries_cont.className = 'querie-cont';
            let first_query = document.createElement('button');
            first_query.className = 'queries';
            first_query.innerText = 'Click Me';
            first_query.style.backgroundColor = option_queries[1];
            first_query.addEventListener('click', function () {
                if (first_query.style.backgroundColor == questionColor) {
                    timer = 3;
                    score++;
                    root.removeChild(document.querySelector('.queries'));
                    root.removeChild(document.querySelector('.queries'));
                    root.removeChild(document.querySelector('.queries'));
                    root.removeChild(document.querySelector('#score'));
                    root.removeChild(document.querySelector('#query'));

                } else {
                    game_over = true;
                }
            });
            root.appendChild(first_query);
            let secondQuery = document.createElement('button');
            secondQuery.className = 'queries';
            secondQuery.innerText = 'Click Me';
            secondQuery.style.backgroundColor = option_queries[2];
            secondQuery.addEventListener("click", function () {
                if (secondQuery.style.backgroundColor == questionColor) {
                    timer = 3;
                    score++;
                    root.removeChild(document.querySelector('.queries'));
                    root.removeChild(document.querySelector('.queries'));
                    root.removeChild(document.querySelector('.queries'));
                    root.removeChild(document.querySelector('#score'));
                    root.removeChild(document.querySelector('#query'));
                } else {
                    game_over = true;
                }
            });
            root.appendChild(secondQuery);
            let thirdQuery = document.createElement('button');
            thirdQuery.className = 'queries';
            thirdQuery.innerText = 'Click Me';
            thirdQuery.id = '3';
            thirdQuery.style.backgroundColor = option_queries[3];
            thirdQuery.addEventListener("click", function () {
                if (thirdQuery.style.backgroundColor == questionColor) {
                    timer = 3;
                    score++;
                    root.removeChild(document.querySelector('.queries'));
                    root.removeChild(document.querySelector('.queries'));
                    root.removeChild(document.querySelector('.queries'));
                    root.removeChild(document.querySelector('#score'));
                    root.removeChild(document.querySelector('#query'));

                } else {
                    game_over = true;
                }
            });
            root.appendChild(thirdQuery);
        }

        await sleep(1000);
        timer--;
        document.querySelector('#counter').innerText = timer;
        if (timer == 0) {
            game_over = true;
        }
    }
    root.innerHTML = '';
    let gameOverHeading = document.createElement('h1');
    gameOverHeading.id = 'game-over';
    gameOverHeading.innerText = 'Game-Over';
    root.appendChild(gameOverHeading);
    let final_score = document.createElement('h3');
    final_score.id = 'score';
    final_score.innerText = `Your Score: ${score}`;
    root.appendChild(final_score);
    scores.push(score);
    obj = new Date();
    date = obj.getDate() + '/' + obj.getMonth() + '/' + obj.getFullYear();
    dates.push(date);
    console.log(dates);
    localStorage.setItem('scores', JSON.stringify(scores));
    localStorage.setItem('dates', JSON.stringify(dates));

});

// For Generating A Single Color Query
function getSingleQuery() {
    let colors = ['blue', 'red', 'green', 'violet', 'black', 'grey', 'brown', 'yellow'];
    var randomNumber = parseInt(Math.random() * colors.length - 1);
    return colors[randomNumber];
}

// For Generating Multiple Color Query
function getMultipleQuery() {
    let question = getSingleQuery();
    let color1;
    let color2;
    let color3;
    let selectedColors;
    let colors = ['blue', 'red', 'green', 'violet', 'black', 'grey', 'brown', 'yellow'];

    var random1 = parseInt(Math.random() * colors.length - 1);
    color1 = colors[random1];
    var random2 = parseInt(Math.random() * colors.length - 1);
    while (random2 == random1) {
        random2 = parseInt(Math.random() * colors.length - 1);
    }
    color2 = colors[random2];
    var random3 = parseInt(Math.random() * colors.length - 1);
    while (random3 == random1 && random3 == random2) {
        random3 = parseInt(Math.random() * colors.length - 1);
    }
    color3 = colors[random3];
    selectedColors = [color1, color2, color3];
    while (!(selectedColors.includes(question))) {
        var random1 = parseInt(Math.random() * colors.length - 1);
        color1 = colors[random1];
        var random2 = parseInt(Math.random() * colors.length - 1);
        while (random2 == random1) {
            random2 = parseInt(Math.random() * colors.length - 1);
        }
        color2 = colors[random2];
        var random3 = parseInt(Math.random() * colors.length - 1);
        while (random3 == random1 && random3 == random2) {
            random3 = parseInt(Math.random() * colors.length - 1);
        }
        color3 = colors[random3];
        selectedColors = [color1, color2, color3];
    }
    let returnQuery = [question, color1, color2, color3];
    return returnQuery;
}

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}