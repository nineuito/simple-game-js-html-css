const person = document.getElementById('person');
const cactus = document.getElementById('cactus');

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (person.classList != 'jump') {
        person.classList.add('jump')
    }
    setTimeout(() => {
        person.classList.remove('jump');
    }, 300);
}

let isAlive = setInterval ( function () {
    let personTop = parseInt(window.getComputedStyle(person).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    
    
    if (cactusLeft < 50 && cactusLeft > 0 && personTop >= 140) {
        alert('Game over!!');
    }
}, 10)