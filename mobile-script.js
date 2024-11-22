document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, что ширина экрана меньше или равна 768px
    if (window.innerWidth <= 768) {
        const cards = document.querySelectorAll('.cardBuild');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                // Переключаем класс active на карточке
                card.classList.toggle('active');
            });
        });
    }
});
