// retrieve elements and add event listeners for ghost and pumpkin
document.addEventListener('DOMContentLoaded', () => {

const ghostImg = document.getElementById('ghost');
const button = document.getElementById('animate-ghost');
const buttonPumpkin = document.getElementById('animate-pumpkin');
const pumpkinImg = document.getElementById('pumpkin');
const wizardImg = document.getElementById('wizard');
const buttonWizard = document.getElementById('animate-wizard');

// declare and load audio files and volume settings
let backgroundMusic = new Audio('assets/sounds/main-theme.mp3');
let dungeonMusic = new Audio('assets/sounds/dungeon-sound.mp3');
let deathMusic = new Audio('assets/sounds/dead-sound.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;
dungeonMusic.loop = true;
dungeonMusic.volume = 0.5;
deathMusic.loop = true;
deathMusic.volume = 0.7;

// state variables for player states
let death = false;
let dungeon = false;

// retrieve elements and add event listeners for the super hero wizard

buttonWizard.addEventListener('click', animateWizard);
function animateWizard() {
    wizardImg.classList.remove('ghost');
    wizardImg.classList.add('ghost-visible');
    console.log('Wizard button clicked: playing backgroundMusic');
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();
}

button.addEventListener('click', animateGhosts);
function animateGhosts() {
    ghostImg.classList.remove('ghost');
    ghostImg.classList.add('ghost-visible');
    death = true;
    stopAllMusic();
    console.log('Ghost button clicked: playing deathMusic');
    checkStates();
}

buttonPumpkin.addEventListener('click', animatePumpkin);
function animatePumpkin() {
    pumpkinImg.classList.remove('ghost');
    pumpkinImg.classList.add('ghost-visible');
}


// different music for dungeon and death

// stop all music function
function stopAllMusic() {
    backgroundMusic.pause();
    dungeonMusic.pause();
    deathMusic.pause();
    console.log('All music paused');
}

function checkStates() {
    if (death) {
        deathMusic.currentTime = 0;
        deathMusic.play();
        console.log('Death state: deathMusic playing');
    } else if (dungeon) {
        dungeonMusic.currentTime = 0;
        dungeonMusic.play();
        console.log('Dungeon state: dungeonMusic playing');
    }
}


});
