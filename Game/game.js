// Variables globales actualizadas
let currentMode = "normal"; // "normal" o "hard"
let obstacles = [];
let gameSpeed = 2;
let gameRunning = false;

// Selección de modo
document.getElementById("normal-mode").addEventListener("click", () => {
    currentMode = "normal";
    resetGame();
});

document.getElementById("hard-mode").addEventListener("click", () => {
    currentMode = "hard";
    resetGame();
});

// Función para crear obstáculos según el modo
function createObstacle() {
    const obstacle = document.createElement("div");
    obstacle.className = "obstacle";
    gameContainer.appendChild(obstacle);

    let x, y, vx, vy;

    if (currentMode === "normal") {
        // Modo Normal: Caen desde arriba
        x = Math.random() * 100;
        y = -30;
        vx = 0;
        vy = gameSpeed;
    } else {
        // Modo Difícil: Patrones impredecibles
        const side = Math.floor(Math.random() * 4); // 0: arriba, 1: derecha, 2: abajo, 3: izquierda
        if (side === 0) {
            x = Math.random() * 100;
            y = -30;
            vx = (Math.random() - 0.5) * 2; // Movimiento horizontal aleatorio
            vy = gameSpeed;
        } else if (side === 1) {
            x = 100 + 30;
            y = Math.random() * 100;
            vx = -gameSpeed;
            vy = (Math.random() - 0.5) * 2;
        } else if (side === 2) {
            x = Math.random() * 100;
            y = 100 + 30;
            vx = (Math.random() - 0.5) * 2;
            vy = -gameSpeed;
        } else {
            x = -30;
            y = Math.random() * 100;
            vx = gameSpeed;
            vy = (Math.random() - 0.5) * 2;
        }
    }

    obstacles.push({
        element: obstacle,
        x: x,
        y: y,
        vx: vx,
        vy: vy
    });

    updateObstaclePosition(obstacles[obstacles.length - 1]);
}

// Función para actualizar posición con física "impredecible" (Modo Difícil)
function updateObstaclePosition(obstacle) {
    if (currentMode === "hard") {
        // Cambio de dirección aleatorio (10% de probabilidad por frame)
        if (Math.random() < 0.01) {
            obstacle.vx = (Math.random() - 0.5) * 4;
            obstacle.vy = (Math.random() - 0.5) * 4;
        }
        // Rebote en bordes
        if (obstacle.x < 0 || obstacle.x > 100) obstacle.vx *= -1;
        if (obstacle.y < 0 || obstacle.y > 100) obstacle.vy *= -1;
    }

    obstacle.x += obstacle.vx;
    obstacle.y += obstacle.vy;
    obstacle.element.style.left = `${obstacle.x}%`;
    obstacle.element.style.top = `${obstacle.y}%`;
}

// En el gameLoop, actualizamos todos los obstáculos
function gameLoop() {
    if (gameRunning) {
        if (Math.random() < 0.02) createObstacle();
        obstacles.forEach((obstacle, index) => {
            updateObstaclePosition(obstacle);
            checkCollision(obstacle, index);
        });
    }
    requestAnimationFrame(gameLoop);
}

// Función para reiniciar el juego
function resetGame() {
    gameRunning = true;
    obstacles.forEach(obstacle => obstacle.element.remove());
    obstacles = [];
    score = 0;
    gameSpeed = currentMode === "hard" ? 3 : 2; // Más rápido en modo difícil
    scoreDisplay.textContent = `Puntuación: 0`;
}





