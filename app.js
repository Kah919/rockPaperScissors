const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result');
const rock = document.querySelector('#r');
const paper = document.querySelector('#p');
const scissor = document.querySelector('#s');
const actionMsg = document.querySelector('#action-msg');

let userScore = 0;
let compScore = 0;


let getCompChoice = x => {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

let convertToWord = x => {
    if(x === 'r') return 'Rock';
    if(x === 'p') return 'Paper';
    return 'Scissor';
}

let win = (x, y) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    result.innerHTML = 'You Win! :)';
    let doc = document.getElementById(x);
    actionMsg.innerHTML = `${convertToWord(x)} beats ${convertToWord(y)}!`;
    doc.classList.add('green');
    setTimeout(() => {doc.classList.remove('green')}, 1000);
}

let lose = (x, y) => {
    let doc = document.getElementById(x);
    result.innerHTML = 'Issa L :(';
    actionMsg.innerHTML = `${convertToWord(y)} beats ${convertToWord(x)}!`;compScore++;
    compScore_span.innerHTML = compScore;
    doc.classList.add('red');
    setTimeout(() => {
    doc.classList.remove('red')
    }, 1000);
}

let draw = (x, y) => {
    result.innerHTML = 'Draw!';
    actionMsg.innerHTML = `${convertToWord(x)} and ${convertToWord(y)} is a tie!`;
    let doc = document.getElementById(x);
    doc.classList.add('gray');
    setTimeout(() => doc.classList.remove('gray'), 1000);
}

let game = userChoice => {
    const compChoice = getCompChoice();
    switch(userChoice + compChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, compChoice);
            break;
        case 'rp':
        case 'rs':
        case 'sr':
            lose(userChoice, compChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, compChoice);
            break;
    }
}

game();

let main = x => {
    rock.addEventListener('click', function() {
        game('r');
    })

    paper.addEventListener('click', function() {
        game('p');
    })

    scissor.addEventListener('click', function() {
        game('s');
    })
}

main();