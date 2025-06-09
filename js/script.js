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

// form
answersForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // leggo valori input
    const inputs = document.querySelectorAll('#input-group input');
    const userAnswers = [];
    
    for (let i = 0; i < inputs.length; i++) {
        const value = inputs[i].value;
        if (value === '') {
            document.getElementById('message').innerHTML = 'Compila tutti i campi!';
            return;
        }
        userAnswers.push(Number(value));
    }
    
    // confronto numeri
    let correctCount = 0;
    const correctNumbers = [];
    
    for (let i = 0; i < userAnswers.length; i++) {
        if (randomNumbers.includes(userAnswers[i])) {
            correctCount++;
            correctNumbers.push(userAnswers[i]);
        }
    }
    
    // mostro risultato con inner
    const message = document.getElementById('message');
    if (correctCount === 0) {
        message.innerHTML = 'Nessun numero corretto!';
    } else if (correctCount === 5) {
        message.innerHTML = 'Perfetto! Tutti i numeri corretti!';
    } else {
        message.innerHTML = `Hai indovinato ${correctCount} numeri: ${correctNumbers.join(', ')}`;
    }
    message.className = 'text-success text-center';
});