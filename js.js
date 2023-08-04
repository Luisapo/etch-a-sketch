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

    let squares = prompt("How many buttons would you like per row? The same amount gets added per column, the max is 64 x 64") 
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
    const bg_color = event.target; // get element ;
    let computed_style = getComputedStyle(bg_color) ;
    let backgroundColor = computed_style.backgroundColor ;
    
    if (backgroundColor === "rgb(255, 255, 255)" || backgroundColor === "#ffffff" || backgroundColor === "white") {
        let red = Math.round(Math.random() * 256);
        let blue = Math.round(Math.random() * 256);
        let green = Math.round(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${red},${blue},${green})`;    
    } else {
        let rgbColorItem = event.target.style.backgroundColor;
        let rgbColors = rgbColorItem.substring(4, rgbColorItem.length - 1);
        let rgbColorValues = rgbColors.split(",");
        let lowerRed = parseInt(rgbColorValues[0].trim()) * .9 - 10 ;
        let lowerBlue = parseInt(rgbColorValues[1].trim()) * .9 - 10 ;
        let lowerGreen = parseInt(rgbColorValues[2].trim()) * .9 - 10 ;
        event.target.style.backgroundColor = `rgb(${lowerRed },${lowerBlue},${lowerGreen})`;    

    }
    
}

function handleMouseOut(event) {
    event.target.style.backgroundColor = "white";
}

for(let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', handleMouseOver);
    //elements[i].addEventListener('mouseout', handleMouseOut);
}

    }
}


begin.addEventListener("click", handleClick, );

