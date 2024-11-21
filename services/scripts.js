document.addEventListener("DOMContentLoaded", function () {
    const ourServiceSection = document.getElementById("ourService");

    // Загрузка внешнего HTML и инициализация логики после загрузки
    fetch("services.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // Заменяем содержимое секции на загруженный HTML
            ourServiceSection.innerHTML = html;

            // Активируем функционал карточек
            initializeServiceCards();
        })
        .catch(error => {
            console.error("Ошибка при загрузке services.html:", error);
        });

    // Функция для обработки интерактивности карточек
    function initializeServiceCards() {
        const serviceCards = document.querySelectorAll(".service-card");

        serviceCards.forEach(card => {
            // Расширение/сворачивание карточки при клике
            card.addEventListener("click", () => {
                // Убираем активный класс с других карточек
                serviceCards.forEach(c => c.classList.remove("active"));
                // Переключаем активный класс на текущей карточке
                card.classList.toggle("active");
            });

            // Переход на страницу при двойном клике
            card.addEventListener("dblclick", () => {
                const service = card.getAttribute("data-service");
                window.location.href = `${service}.html`; // Переход на соответствующую страницу
            });
        });
    }
});
