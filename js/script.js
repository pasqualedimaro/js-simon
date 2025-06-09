// seleziono elementi da html
const countdown = document.getElementById('countdown');
const instructions = document.getElementById('instructions');
const numbersList = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');

// creo array per numeri casuali
const randomNumbers = [];

// genero 5 numeri casuali da 1 a 50
for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 50) + 1;
    randomNumbers.push(randomNum);
}

// mostro i numri
for (let i = 0; i < randomNumbers.length; i++) {
    numbersList.innerHTML += '<li>' + randomNumbers[i] + '</li>';
}

// avvio countdown di 30 secondi
let seconds = 30;
countdown.innerHTML = seconds;

const timer = setInterval(function() {
    seconds = seconds - 1;
    countdown.innerHTML = seconds;
    
    if (seconds === 0) {
        clearInterval(timer);
        
    // nascondo numeri e mostro form
    numbersList.innerHTML = '';
    countdown.style.display = 'none';
    instructions.innerHTML = 'Inserisci i numeri che ricordi:';
    answersForm.classList.remove('d-none');
    }
}, 1000);