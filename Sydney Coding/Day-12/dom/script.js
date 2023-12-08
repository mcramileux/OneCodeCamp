const button = document.getElementById('btn');
button.addEventListener('click', handleClick);

const form = document.getElementById('myForm');
form.addEventListener('submit', handleSubmit);

const nameInput = document.getElementById('name');
nameInput.addEventListener('keypress', handleKeyPress);

const container = document.getElementById('container');
container.addEventListener('mouseover', handleMouseOver);


function handleClick(event) {
    console.log('Button clicked!');
}

function handleSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    console.log("Hi " +name);
}

function handleKeyPress(event) {
    console.log('Key pressed: ', event.key)
}

function handleMouseOver(event) {
    if(event.target.classList.contains('box')) {
        event.target.style.backgroundColor = 'green';
        console.log("Mouseover on "+event.target.textContent);
    }
}