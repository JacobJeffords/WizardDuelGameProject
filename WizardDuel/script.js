var currentActivePlayer = "hp1";
var playerNames = {
    "hp1": "Player 1",
    "hp2": "Player 2"
}

function attack() {
    const currentHealth = Number(document.getElementById(currentActivePlayer).textContent)
    document.getElementById(currentActivePlayer).textContent = currentHealth - Math.floor(Math.random() * 10);
    checkHP();
    updateLog(currentActivePlayer);
    changeActivePlayer();
}

function checkHP() {
    const currentHealth = Number(document.getElementById(currentActivePlayer).textContent)
    if (currentHealth <= 0) {
        document.getElementById("attackbutton").disabled = true;
    }
}

function changeActivePlayer() {
    var hp1 = "hp1";
    var hp2 = "hp2";

    if (currentActivePlayer === hp1) {
        currentActivePlayer = hp2;
    } else {
        currentActivePlayer = hp1;
    }
}

function updateLog(player) {
    const logElement = document.getElementById("dialog");
    const currentLog = logElement.innerHTML;
    const playerName = playerNames[player];
    const newLog = currentLog + "<br>" + playerName + " has attacked!";
    logElement.innerHTML = newLog;
}