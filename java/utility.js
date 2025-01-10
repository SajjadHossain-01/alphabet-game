function removeBacgroundColor(Element) {
    const getBacgraundColor = document.getElementById(Element);
    const backgroundColor = getBacgraundColor.classList.remove('bg-[#FFA500]')
}

function setBacgroundColor(Element) {
    const getBacgraundColor = document.getElementById(Element);
    const backgroundColor = getBacgraundColor.classList.add('bg-[#FFA500]')
}
function setElementById (ElementId,value){
    const setElement = document.getElementById(ElementId);
    setElement.innerText = value ;
}

function getElementById(Element) {
    const getElement = document.getElementById(Element);
    const addElement = getElement.innerText;
    return addElement;
}

// create random alphabet
function createRandomAlphabet() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const splitAlphabet = alphabet.split("");
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const randomAlphabet = splitAlphabet[index];
    return randomAlphabet;
}

function removeClassListById(Element) {
    const classListId = document.getElementById(Element);
    const classList = classListId.classList;
    const addClassList = classList.remove('hidden')
    return addClassList;
}

// Adding an css
function addClassListById(Element) {
    const classListId = document.getElementById(Element);
    const classList = classListId.classList;
    const addClassList = classList.add('hidden')
    return addClassList;
}