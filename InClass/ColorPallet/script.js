const chooseColor = document.getElementById('container')

chooseColor.addEventListener('click', buttonClickHandler)


// const redButton = document.getElementById("red");
// const greenButton = document.getElementById("green");
// const blueButton = document.getElementById('blue');


// redButton.addEventListener('click', buttonClickHandler);
// greenButton.addEventListener('click', buttonClickHandler);
// blueButton.addEventListener('click', buttonClickHandler);

function buttonClickHandler(event){
    if(event.target.id == 'red'){
        event.target.style.backgroundColor = 'red';     
    }
    if(event.target.id == 'green'){
        event.target.style.backgroundColor = 'green';
    }
    if(event.target.id == 'blue'){
        event.target.style.backgroundColor = 'blue';
    }
}