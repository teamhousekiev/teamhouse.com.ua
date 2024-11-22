// snowfall.js
function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;  // Случайная позиция по горизонтали
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;  // Случайное время падения
        snowflake.style.animationDelay = `${Math.random() * 5}s`;  // Задержка анимации для разнообразия
        document.body.appendChild(snowflake);
    }
}

// Запуск создания снежинок
createSnowflakes();
