let square = document.getElementsByClassName('square');
console.log(square);

square.addEventListener('click', () => {
    console.log('hit')
})

const placePiece = () => {
    square.textContent = 'x';
    let element = document.getElementById(this);
    console.log(element);
}

