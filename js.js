    let score = 0;
    let Timecounter = 50;
    let gameOver = false;


        //  to store the bird elements
        const birds = document.querySelectorAll(".bird"); // Assuming you've added a 'bird' class to bird elements

    // Object to store timers for each bird
    // use to manage the timer for each bird
    const birdTimers = {};

    // this function bring back the bird
    function resetBird(bird) {
        bird.style.display = "block";
    }


    setInterval(() => {
        if (Timecounter >= 0) {
            document.getElementById("currentTimer").innerHTML = Timecounter;
            Timecounter--;
        } else {
            showGameOverPopup();
        }
    }, 1000);
    
    function showGameOverPopup() {
        gameOver = true; // Set the game-over flag
        document.getElementById("finalScore").innerHTML = score;
        document.getElementById("gameOverModal").style.display = "block";
    
        // Function to restart the game when the restart button is clicked
        document.getElementById("restartButton").addEventListener("click", restartGame);
    }
    
    function restartGame() {
        location.reload();
    }
    
    window.onclick = function hunt(hunt) {
        if(Timecounter < 0)
        {
            return;
        }
       
            if (hunt.target.nodeName=="IMG") {
                const clickedBird = hunt.target;
                clickedBird.style.display = "none";
                document.getElementById("shoot").play();
                if (clickedBird.id == "b6") {
                    score += 5;
                } else {
                    score++;
                }
                document.getElementById("current_score").innerHTML = score;
    
                birdTimers[clickedBird.id] = setTimeout(() => {
                    resetBird(clickedBird);
                }, 6000);
            } else {
                document.getElementById("miss_shoot").play();
                score--;
                score = Math.max(score, 0);
                document.getElementById("current_score").innerHTML = score;
            }
        }
   