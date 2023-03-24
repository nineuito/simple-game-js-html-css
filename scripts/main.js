const person = document.getElementById('person');
const cactus = document.getElementById('cactus');

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    person.classList.add('jump');
}