let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() { // onload function will load the whole webpage
    setgame();
}

function setgame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    // tile.addEventListener("click", selectTile);
    setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setPlant, 1000); // 1000 miliseconds = 1 seconds, every 1 second call setPlant
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    // for changing position of mole and disppear current mole
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    // if mole is there and plant also select same tile 
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    //to show img of mole on selected random number(tile)
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    // for changing position of plant and disppear current plant
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";
 // if plant is there and mole also select same tile 
    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    //to show img of mole on selected random number(tile)
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = "SCORE : " + score.toString(); //update score html
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}