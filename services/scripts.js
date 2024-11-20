document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".service-card");
  
    cards.forEach(card => {
      // Расширение/сворачивание карточки при клике
      card.addEventListener("click", () => {
        card.classList.toggle("active");
      });
  
      // Переход на страницу при двойном клике
      card.addEventListener("dblclick", () => {
        const service = card.getAttribute("data-service");
        window.location.href = `${service}.html`; // Переход на соответствующую страницу
      });
    });
  });
  

// подгрузка карточек сервис 
document.addEventListener("DOMContentLoaded", function () {
    const ourServiceSection = document.getElementById("ourService");
  
    // Загрузка внешнего HTML
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
  
        // После загрузки, активируем интерактивный функционал
        activateServiceCards();
      })
      .catch(error => {
        console.error("Ошибка при загрузке services.html:", error);
      });
  
    // Функция для активации JS логики на загруженном контенте
    function activateServiceCards() {
      const cards = document.querySelectorAll(".service-card");
  
      cards.forEach(card => {
        card.addEventListener("click", () => {
          card.classList.toggle("active");
        });
  
        card.addEventListener("dblclick", () => {
          const service = card.getAttribute("data-service");
          window.location.href = `${service}.html`;
        });
      });
    }
  });
  

//   --------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            // Убираем активный класс с других карточек
            serviceCards.forEach(c => c.classList.remove('active'));
            // Переключаем активный класс на текущей карточке
            card.classList.toggle('active');
        });
    });
});

