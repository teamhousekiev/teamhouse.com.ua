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
    var cards = document.querySelectorAll("a.card");
    var background = document.querySelector(".background");
  
    // Store the index of the last hovered card
    var lastHoveredCardIndex = localStorage.getItem("lastHoveredCardIndex") || 0;
  
    // Set the background to the last hovered card by default
    var cardRect = cards[lastHoveredCardIndex].getBoundingClientRect();
    var x = cardRect.left + window.scrollX + cardRect.width / 2;
    var y = cardRect.top + window.scrollY + cardRect.height / 2;
  
    background.style.width = cardRect.width + "px";
    background.style.height = cardRect.height + "px";
    background.style.transform = `translate(${x - cardRect.width / 2}px, ${
      y - cardRect.height / 2
    }px)`;
    background.style.opacity = "0"; // Set opacity to 0 when the page loads
  
    cards.forEach(function (card, index) {
      card.addEventListener("mouseenter", function (e) {
        // If the card is zoomed in, return early to prevent the hover effect
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
        background.style.opacity = "1"; // Change opacity to 1 when a card is hovered over
        background.style.top = "0%";
        background.style.left = "0%";
        background.style.transformOrigin = "center";
        // Store the index of the hovered card
        localStorage.setItem("lastHoveredCardIndex", index);
      });
  
      card.addEventListener("mouseleave", function (e) {
        background.style.opacity = "0"; // Change opacity back to 0 when the mouse leaves a card
        // Reset the background size when the mouse leaves the card
        background.style.width = "0px";
        background.style.height = "0px";
      });
  
      card.addEventListener("click", function () {
        if (card.classList.contains("zoomed")) {
          card.classList.remove("zoomed");
          card.style.transform = "none";
          card.style.position = "relative";
          card.style.width = "unset";
          card.style.height = "unset";
          card.style.top = "0";
          card.style.left = "0";
          card.style.zIndex = "0";
  
          // Remove the 'overflow' class from the body when a card is unzoomed
          document.body.classList.remove("overflow");
  
          // Remove the 'opacity-0' class from other <a> tags when a card is unzoomed
          cards.forEach(function (otherCard) {
            if (otherCard !== card) {
              otherCard.classList.remove("opacity-0");
            }
          });
        } else {
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
  
          // Add the 'overflow' class to the body when a card is zoomed
          document.body.classList.add("overflow");
  
          // Add the 'opacity-0' class to other <a> tags when a card is zoomed
          cards.forEach(function (otherCard) {
            if (otherCard !== card) {
              otherCard.classList.add("opacity-0");
            }
          });
        }
      });
    });
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


// секция о нас
const aboutUsTextContainer = document.querySelector('.aboutUsTextContainer');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutUsTextContainer.classList.add('animate');
            observer.unobserve(aboutUsTextContainer); // Отключаем наблюдатель
        }
    });
}, { threshold: 0.1 }); // Анимация начнется, когда 10% контейнера будет видимо

observer.observe(aboutUsTextContainer);
