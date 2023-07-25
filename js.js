const main_container = document.createElement('div');
main_container.setAttribute("id", "main-container")
main_container.style.width = "100vw";
main_container.style.height = "100vh";
main_container.style.margin = "0";
//main_container.style.backgroundColor = "blue"
main_container.style.display = "flex";



document.body.appendChild(main_container)

function removeChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


const begin = document.getElementById("start");
function handleClick() {    
    const top_container = document.getElementById("main-container")
    removeChildNodes(top_container)

    let squares = prompt("How many buttons would you like? The max is 64 x 64") 
    if (squares > 64) {
        return alert("That is invalid, please choose again.")
    } else {

    
    const height = 100 / squares;

    for(let i=0; i < squares; i++) {
            let grid_container = document.createElement("div");
            grid_container.style.flexGrow = "1";
            //grid_container.style.backgroundColor = "red";        
            main_container.appendChild(grid_container)
            for(let j = 0; j<squares; j++){
                let small_container = document.createElement("div");
                small_container.setAttribute("class", "myGridContainer");
                small_container.style.backgroundColor = "white"
                small_container.style.height = `${height}vh`
                //small_container.style.border = "1px solid black";
                grid_container.appendChild(small_container)
                
                
            }        
            }
const elements = document.getElementsByClassName("myGridContainer");

function handleMouseOver(event) {
    event.target.style.backgroundColor = "yellow";
}

function handleMouseOut(event) {
    event.target.style.backgroundColor = "white";
}

for(let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', handleMouseOver);
    elements[i].addEventListener('mouseout', handleMouseOut);
}

    }
}


begin.addEventListener("click", handleClick, );

