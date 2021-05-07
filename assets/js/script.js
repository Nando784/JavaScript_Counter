/*---------- Function ----------*/

function assignEventListener(){
    document.getElementById('change-add').addEventListener('change',changeValue);
    document.getElementById('change-sub').addEventListener('change',changeValue);
}


function insertElements() {
    let contentDiv = document.getElementById('content');
    let optionDiv=document.getElementById('option');


    contentDiv.appendChild(buttonSubtract);
    contentDiv.appendChild(counterDiv);
    contentDiv.appendChild(buttonAdd);

    counterDiv.appendChild(counterNumber);

    optionDiv.appendChild(buttonReset);
    optionDiv.appendChild(document.getElementById("change-add"));
}


function changeValue(event) {
    switch (event.target.getAttribute('id')) {
        case "change-add":
            addValue=parseInt(event.target.value);
            break;
        case "change-sub":
            subValue=parseInt(event.target.value);
            break;
    }
}


function counterAdd() {
    let counterValue = document.getElementById("counter-txt").innerHTML;
    document.getElementById("counter-txt").innerText = parseInt(counterValue) + addValue;
}


function counterSubtract() {
    let counterValue = document.getElementById("counter-txt").innerHTML;
    document.getElementById("counter-txt").innerText = parseInt(counterValue) - subValue;
}


function keyboardEvent(event){
    switch (event.key){
        case "+":
            counterAdd();
            break;

        case "-":
            counterSubtract();
            break;

        case "r":
            optionReset();
            break;

        default:break;
    }
}


function optionReset() {
    document.getElementById("counter-txt").innerText = "0";

    document.getElementById('base-add').selected=true;
    document.getElementById('base-sub').selected=true;
    subValue=1;
    addValue=1;
}

/*---------- End Function ----------*/


/*------------------------------ Creation of The Element ------------------------------*/

//Variable For Change The Value From Dropdown
let subValue=1;
let addValue=1;


/*---------- Button Add ----------*/
let buttonAdd = document.createElement('button');

buttonAdd.setAttribute('class', 'btn btn-success');
buttonAdd.setAttribute('id', 'add-btn');

buttonAdd.addEventListener('click', counterAdd);

buttonAdd.innerHTML = "<h1>+</h1>";


/*---------- Button Subtract ----------*/
let buttonSubtract = document.createElement('button');

buttonSubtract.setAttribute('class', 'btn btn-danger');
buttonSubtract.setAttribute('id', 'add-btn');

buttonSubtract.addEventListener('click', counterSubtract);

buttonSubtract.innerHTML = "<h1>-</h1>";

/*---------- Button Reset ----------*/
let buttonReset = document.createElement('button');

buttonReset.setAttribute('class', 'btn btn-lg btn-secondary');
buttonReset.setAttribute('id', 'reset-btn');

buttonReset.addEventListener('click', optionReset);

buttonReset.innerHTML = "Reset";


/*---------- Counter Creation ----------*/
let counterNumber = document.createElement('h1');

counterNumber.setAttribute('id', 'counter-txt');
counterNumber.setAttribute('onmousedown','return false');

counterNumber.innerHTML = "0";


/*---------- Counter Div Creation ----------*/
let counterDiv=document.createElement('div');

counterDiv.setAttribute('class', 'counter-div');
counterDiv.setAttribute('id', 'counter-div');


/*------------------------------ End Creation of The Element ------------------------------*/

/*------------------------------ Assign Event Listener ------------------------------*/

/*---------- Insert Element & Set Listener ----------*/
document.addEventListener('DOMContentLoaded', insertElements);
document.addEventListener('DOMContentLoaded', assignEventListener);


/*---------- Key Events ----------*/
document.addEventListener('keydown',keyboardEvent);
















