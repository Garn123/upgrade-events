/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */
const buttonToClick = document.querySelector('#btnToClick');
buttonToClick.addEventListener('click', () => clickButton());

const clickButton = () => {
    console.log('Boton pulsado');
}
/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */
const buttonToClick2 = document.querySelector('#btnToClick2');
buttonToClick2.addEventListener('focus', () => clickButton2())

const clickButton2 = () => {
    const inputText = document.querySelector('.focus');
    console.log(inputText.value);
}
/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

const buttonToClick3 = document.querySelector('#btnToClick3');
buttonToClick3.addEventListener('input', () => clickButton3())

const clickButton3 = () => {
    const inputText2 = document.querySelector('.value');
    console.log(inputText2.value);

}
