function playWithKey() {
    const keyPressed = event.key;

    const displayKey = getElementById('display-letter');
    const keyNeed = displayKey.toLowerCase();
    if (keyPressed === keyNeed) {
        displayAlphabet()
        const backgroundremove = removeBacgroundColor(keyNeed);
        const currentScorText = getElementById('display-score');
        const currentScor = parseInt(currentScorText);
        const lastScor = currentScor + 1;
        setElementById('display-score',lastScor)
    }
    else {
        const currentLife = getElementById('display-life');
        const ShowLife = currentLife - 1;
        setElementById ('display-life', ShowLife);

        if (ShowLife === 0){
            gameover()
        }
    }
}

document.addEventListener('keyup', playWithKey)

function displayAlphabet() {
    const getElement = document.getElementById('display-letter');
    const randomAlphabet = createRandomAlphabet();
    getElement.innerText = randomAlphabet;

    // key background color change
    const backgroundColorChange = setBacgroundColor(randomAlphabet);
}

function play() {
    addClassListById('home-screen');
    removeClassListById('playground-screen');
    displayAlphabet()
}
function gameover(){
    addClassListById('playground-screen')
    removeClassListById ('score-screen')
}