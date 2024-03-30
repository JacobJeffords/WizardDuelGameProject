var currentActivePlayer = "hp2";
var logHistory = [];
var playerNames = {
    "hp1": "Player 1",
    "hp2": "Player 2"
}

function attack() {
    const currentHealth = Number(document.getElementById(currentActivePlayer).textContent)
    document.getElementById(currentActivePlayer).textContent = currentHealth - Math.floor(Math.random() * 10);
    checkHP();
    updateLogAttack(currentActivePlayer);
    changeActivePlayer();
}

function checkHP() {
    const currentHealth = Number(document.getElementById(currentActivePlayer).textContent)
    if (currentHealth <= 0) {
        document.getElementById("attackbutton").disabled = true;
        document.getElementById("healbutton").disabled = true;
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

function heal() {
    const currentHealth = Number(document.getElementById(currentActivePlayer).textContent)
    if (currentHealth < 100) {
        document.getElementById(currentActivePlayer).textContent = currentHealth + Math.floor(Math.random() * 5 + 3);
        checkHP();
        updateLogHeal(currentActivePlayer);
        changeActivePlayer();
    } else {
        checkHP();
        changeActivePlayer();
    }
}

function updateLogAttack(player) {
    const logElement = document.getElementById("dialog");
    const playerName = playerNames[player];
    const newLog = playerName + " has attacked!";

    logHistory.unshift(newLog);
    logHistory = logHistory.slice(0, 16);
    const updatedLog = logHistory.join("<br>");
    logElement.innerHTML = updatedLog;
}

function updateLogHeal(player) {
    const logElement = document.getElementById("dialog");
    const playerName = playerNames[player];
    const newLog = playerName + " has healed!";

    logHistory.unshift(newLog);
    logHistory = logHistory.slice(0, 16);
    const updatedLog = logHistory.join("<br>");
    logElement.innerHTML = updatedLog;
}
