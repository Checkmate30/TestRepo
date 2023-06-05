


searchName("utkarsh");

function searchName()
let names = Array.from(document.getElementById("names")); //getting tab by ID
const childrens = names.childrens; // collecting UL tags li elements

const toArray = Array.from(childrens); // converting ul elements to array for javascript use

toArray.forEach(liElement => { //function to find name
    if(liElement.textContent === "Utkarsh"){
        console.log("result is true");
    }
})

