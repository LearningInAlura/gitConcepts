let listDrawnNumbers = new Array();
let limitNumber = 10;
let attempts = 1;
let secrectNumber = generateRandomNumber();

displayInitialMessage()

function displayTextOnScreen(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'US English Male', { rate: 1.0 });
}

function checkKick() {
    let kick = document.querySelector('input').value

    if (kick == secrectNumber) {

        let wordAttempt = attempts > 1 ? 'tries' : 'try'

        displayTextOnScreen('h1', 'got it right!')
        displayTextOnScreen('p', `you discovered the secret number with ${attempts} ${wordAttempt}.`)

        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        if (kick > secrectNumber) {
            displayTextOnScreen('p', 'The secret number is smaller');
        } else {
            displayTextOnScreen('p', 'The secret number is bigger')
        }
        attempts++;
        clearField();
    }
}

function generateRandomNumber() {

    let chooseNumber = parseInt(Math.random() * limitNumber + 1)

    if (listDrawnNumbers.length == limitNumber) {
        listDrawnNumbers = []
    }
    if (listDrawnNumbers.includes(chooseNumber)) {
        return generateRandomNumber();
    } else {
        listDrawnNumbers.push(chooseNumber)
        return chooseNumber
    }
}

function clearField() {
    document.querySelector('input').value = '';
}

function displayInitialMessage() {
    displayTextOnScreen('h1', 'Secret number game');
    displayTextOnScreen('p', 'Choose a number between 1 to 10');
}
function restartGame() {

    secrectNumber = generateRandomNumber();
    displayInitialMessage();
    clearField();
    attempts = 1;
    document.getElementById("reiniciar").setAttribute('disabled', true)
}