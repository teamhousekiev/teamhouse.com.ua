const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Initial canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let particleCount = calculateParticleCount();

class Particle {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() / 5 + 0.1;
        this.opacity = 1;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
    }

    update() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.reset();
        }

        if (!this.fadingOut && Date.now() > this.fadeStart) {
            this.fadingOut = true;
        }
        
        if (this.fadingOut) {
            this.opacity -= 0.008;
            if (this.opacity <= 0) {
                this.reset();
            }
        }
    }

    draw() {
        ctx.fillStyle = `rgba(${255 - (Math.random() * 255/2)}, 255, 255, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

function calculateParticleCount() {
    return Math.floor((canvas.width * canvas.height) / 6000);
}

function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particleCount = calculateParticleCount();
    initParticles();
}

window.addEventListener('resize', onResize);

initParticles();
animate();


console.log("Привет Саймон");


document.addEventListener("DOMContentLoaded", function () {
  // Проверка ширины экрана (только для ПК)
  if (window.innerWidth >= 768) {
    var cards = document.querySelectorAll("a.card");
    var background = document.querySelector(".background");

    // Сохранение индекса последней наведенной карты
    var lastHoveredCardIndex = localStorage.getItem("lastHoveredCardIndex") || 0;

    // Установка фона на последнюю наведенную карту по умолчанию
    var cardRect = cards[lastHoveredCardIndex].getBoundingClientRect();
    var x = cardRect.left + window.scrollX + cardRect.width / 2;
    var y = cardRect.top + window.scrollY + cardRect.height / 2;

    background.style.width = cardRect.width + "px";
    background.style.height = cardRect.height + "px";
    background.style.transform = `translate(${x - cardRect.width / 2}px, ${
      y - cardRect.height / 2
    }px)`;
    background.style.opacity = "0"; // Устанавливаем начальную непрозрачность фона

    // Для каждой карты добавляем события
    cards.forEach(function (card, index) {
      card.addEventListener("mouseenter", function (e) {
        // Если карта уже увеличена, пропускаем эффект наведения
        if (card.classList.contains("zoomed")) {
          return;
        }

        var rect = card.getBoundingClientRect();
        x = rect.left + window.scrollX + rect.width / 2;
        y = rect.top + window.scrollY + rect.height / 2;

        background.style.width = rect.width + "px";
        background.style.height = rect.height + "px";
        background.style.transform = `translate(${x - rect.width / 2}px, ${
          y - rect.height / 2
        }px)`;
        background.style.opacity = "1"; // Фон становится видимым при наведении
        background.style.top = "0%";
        background.style.left = "0%";
        background.style.transformOrigin = "center";
        // Сохраняем индекс наведения
        localStorage.setItem("lastHoveredCardIndex", index);
      });

      card.addEventListener("mouseleave", function (e) {
        background.style.opacity = "0"; // Фон скрывается, когда мышь уходит с карты
        background.style.width = "0px";
        background.style.height = "0px";
      });

      card.addEventListener("click", function () {
        if (card.classList.contains("zoomed")) {
          // Убираем эффект увеличения
          card.classList.remove("zoomed");
          card.style.transform = "none";
          card.style.position = "relative";
          card.style.width = "unset";
          card.style.height = "unset";
          card.style.top = "0";
          card.style.left = "0";
          card.style.zIndex = "0";

          // Убираем класс overflow с body при уменьшении карты
          document.body.classList.remove("overflow");

          // Восстанавливаем видимость других карт
          cards.forEach(function (otherCard) {
            if (otherCard !== card) {
              otherCard.classList.remove("opacity-0");
            }
          });
        } else {
          // Применяем эффект увеличения
          card.classList.add("zoomed");
          card.style.position = "fixed";
          card.style.top = "50%";
          card.style.left = "50%";
          requestAnimationFrame(function () {
            card.style.transform = "translate(-50%, -50%)";
          });
          card.style.width = "90vw";
          card.style.height = "90vh";
          card.style.zIndex = "1000";

          // Добавляем класс overflow на body при увеличении карты
          document.body.classList.add("overflow");

          // Затемняем остальные карты
          cards.forEach(function (otherCard) {
            if (otherCard !== card) {
              otherCard.classList.add("opacity-0");
            }
          });
        }
      });
    });
  }
});






  function scrollToFooter() {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Инициализация переменных
let startX; // Начальная позиция касания
let currentTranslateX = 0; // Текущая позиция для перемещения
const items = document.querySelector('.items'); // Контейнер с элементами
const itemsArray = document.querySelectorAll('.item'); // Все элементы
const itemWidth = itemsArray[0].offsetWidth; // Ширина одного элемента

// Обработчик события начала касания
items.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Запоминаем начальную позицию
});

// Обработчик события движения касания
items.addEventListener('touchmove', (e) => {
    const moveX = e.touches[0].clientX - startX; // Вычисляем смещение
    items.style.transform = `translateX(${currentTranslateX + moveX}px)`; // Применяем трансформацию
});

// Обработчик события завершения касания
items.addEventListener('touchend', (e) => {
    const moveX = e.changedTouches[0].clientX - startX; // Вычисляем окончательное смещение
    if (moveX > 50) {
        // Свайп вправо
        currentTranslateX += itemWidth; // Двигаем вправо
    } else if (moveX < -50) {
        // Свайп влево
        currentTranslateX -= itemWidth; // Двигаем влево
    }

    // Ограничиваем текущую позицию
    currentTranslateX = Math.max(Math.min(currentTranslateX, 0), -itemWidth * (itemsArray.length - 1));
    items.style.transition = 'transform 0.3s ease'; // Плавный переход
    items.style.transform = `translateX(${currentTranslateX}px)`; // Применяем финальную трансформацию
});



// Подгрузка мобильной версии галереи работ
document.addEventListener("DOMContentLoaded", function () {
  // Проверка ширины экрана для мобильных устройств
  if (window.innerWidth <= 768) {
      // Скрываем галерею для ПК
      document.getElementById("ourWork").style.display = "none";
      
      // Показ мобильной галереи
      document.getElementById("mobile-gallery").style.display = "block";

      // Подгрузка CSS для мобильной галереи
      const mobileStyles = document.createElement("link");
      mobileStyles.rel = "stylesheet";
      mobileStyles.href = "./swipeGalleryMobile/stylesSwipeGalleryMobile_1.css"; // Укажите правильный путь
      document.head.appendChild(mobileStyles);

      // Подгрузка HTML-контента для мобильной галереи
      fetch("./swipeGalleryMobile/indexSwipeGalleryMobile_1.html") // Укажите путь к мобильной галерее
          .then(response => response.text())
          .then(html => {
              document.getElementById("mobile-gallery").innerHTML = html;

              // После загрузки HTML инициализируйте скрипт Flickity
              const flickityScript = document.createElement("script");
              flickityScript.src = "./swipeGalleryMobile/scriptSwipeGalleryMobile_1.js"; // Укажите правильный путь
              document.body.appendChild(flickityScript);
          })
          .catch(error => console.error("Ошибка при загрузке галереи:", error));
  } else {
      // Если экран не мобильный (ПК), то скрываем мобильную галерею
      document.getElementById("mobile-gallery").style.display = "none";
      // Убедимся, что галерея для ПК видна
      document.getElementById("ourWork").style.display = "block";
  }
});


// секция о нас для мобильных
const aboutUsTextContainer = document.querySelector('.aboutUsTextContainer');

if (window.innerWidth <= 768) { // Проверяем ширину окна (например, до 768px — стандартный порог для мобильных)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutUsTextContainer.classList.add('animate');
                observer.unobserve(aboutUsTextContainer); // Отключаем наблюдатель
            }
        });
    }, { threshold: 0.1 }); // Анимация начнется, когда 10% контейнера будет видимо

    observer.observe(aboutUsTextContainer);
}



// Скрыть форму на мобильных
(function () {
  // Функция для проверки размера экрана
  function checkScreenSize() {
    var footer = document.getElementById('footer'); // Получаем элемент с id "footer"
    
    // Проверяем ширину экрана
    if (window.innerWidth <= 767) { // Если ширина экрана <= 767px (мобильные устройства)
      footer.style.display = 'none'; // Скрыть элемент
    } else {
      footer.style.display = 'block'; // Показать элемент
    }
  }

  // Проверяем размер экрана при загрузке страницы
  checkScreenSize();

  // Проверяем размер экрана при изменении размера окна
  window.addEventListener('resize', checkScreenSize);
})();






// -НЕВОЗМОЖНОСТЬ ПОКИНУТЬ САЙТ _____________________
let backPressCount = 0;

window.addEventListener("popstate", function(event) {
    // Prevent default behavior on back button
    if (backPressCount === 0) {
        // Prevent going back and replace with a new state
        history.pushState(null, null, location.href);
    } else {
        // If the user presses back twice, allow it to leave the page
        backPressCount = 0;  // Reset count
    }
});

document.addEventListener("backbutton", function() {
    // Track the first back press
    if (backPressCount === 0) {
        backPressCount++;
        alert("Press again to exit the site");  // Notify user to press again
        return false;  // Prevent exit
    } else {
        backPressCount = 0;
    }
}, false);

history.pushState(null, null, location.href);  // Initial state to override back navigation


// --------------------------------------------------------------------------------------------------------

window.addEventListener('load', function() {
  // Получаем все элементы с текстом (можно настроить под нужные элементы)
  const elements = document.querySelectorAll('.content-section, h2, p, div'); // Пример для элементов с классом .content-section, h2, p, div

  elements.forEach(element => {
      const elementRect = element.getBoundingClientRect(); // Получаем размер и положение элемента
      const containerRect = element.parentElement.getBoundingClientRect(); // Получаем размер и положение контейнера

      // Проверяем, выходит ли элемент за пределы по горизонтали
      if (elementRect.right > containerRect.right) {
          // Получаем название тега элемента
          const elementTagName = element.tagName.toLowerCase(); // Получаем название тега в нижнем регистре

          // Получаем индекс элемента в его родительском контейнере
          const parent = element.parentElement;
          const indexInParent = Array.from(parent.children).indexOf(element) + 1; // Индекс элемента в родительском контейнере (1-based)

          // Логируем информацию о положении элемента
          console.log(`Элемент '${elementTagName}' с индексом ${indexInParent} выходит за пределы контейнера.`);
      }
  });
});
