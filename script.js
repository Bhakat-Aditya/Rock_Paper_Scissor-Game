const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const computerimg = document.getElementById("compImg")
const msg = document.getElementById("cpmsg")

rock.addEventListener("click", () => {
    genValue("rock")
})
paper.addEventListener("click", () => {
    genValue("paper")
})
scissor.addEventListener("click", () => {
    genValue("scissor")
})

function genValue(choice) {
    msg.style.display = "none"
    let perScore = document.getElementById("per-score")
    let cpScore = document.getElementById("cp-score")
    rock.style.opacity = "0.7"
    paper.style.opacity = "0.7"
    scissor.style.opacity = "0.7"
    rock.style.pointerEvents = "none"
    paper.style.pointerEvents = "none"
    scissor.style.pointerEvents = "none"


    let winChance = 0.7; // 70% chance user wins
    let userWins = Math.random() < winChance;

    let computerChoice;

    if (userWins) {
        if (choice === "rock") computerChoice = "scissor";
        else if (choice === "paper") computerChoice = "rock";
        else computerChoice = "paper";
    } else {
        const num = Math.floor((Math.random() * 3) + 1);
        if (num === 1) computerChoice = "rock";
        else if (num === 2) computerChoice = "paper";
        else computerChoice = "scissor";
    }

    computerimg.src = `img/${computerChoice}.jpeg`;
    computerimg.style.display = "block";


    let resImg = computerimg.getAttribute("src")
    choice = `img/${choice}.jpeg`

    if (resImg == choice) {
        perScore.innerText = Number(perScore.innerText) + 1
        computerimg.style.border = "7px solid green"
        document.body.style.backgroundColor = "lightgreen"
        msg.style.display = "block"
    } else {
        cpScore.innerText = Number(cpScore.innerText) + 1
        computerimg.style.border = "7px solid red"
        document.body.style.backgroundColor = "lightcoral"
        msg.style.display = "block"
    }

    setTimeout(() => {
        msg.style.display = "none"
        rock.style.opacity = "1"
        paper.style.opacity = "1"
        scissor.style.opacity = "1"
        rock.style.pointerEvents = "auto"
        paper.style.pointerEvents = "auto"
        scissor.style.pointerEvents = "auto"
        computerimg.style.display = "none"
        document.body.style.backgroundColor = "rgba(238, 238, 119, 0.767)"
    }, 1500);

    if (Number(perScore.innerText) == 5) {
        alert("You Won")
        location.reload();
    } else if (Number(cpScore.innerText) == 5) {
        alert("Computer Won")
        location.reload();
    }
}

