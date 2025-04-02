console.log("TEAM HOUSE BUILDING +38 093 752 74 77");

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

})();






if (typeof jQuery == "undefined") {
  let script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
  script.onload = function() {
      console.log("jQuery загружен динамически");
  };
  document.head.appendChild(script);
}

// ---------------------------------------------------------Switcher
// Функция для установки заданной темы/цветовой схемы
function setTheme123(themeName) {
  localStorage.setItem("theme-123", themeName);
  document.documentElement.className = themeName;
}

// Функция для переключения между светлой и тёмной темой
function toggleTheme123() {
  if (localStorage.getItem("theme-123") === "theme-dark-123") {
    setTheme123("theme-light-123");
  } else {
    setTheme123("theme-dark-123");
  }
}

// Немедленно вызываемая функция для установки темы при загрузке страницы
(function () {
  if (localStorage.getItem("theme-123") === "theme-dark-123") {
    setTheme123("theme-dark-123");
    document.getElementById("slider-123").checked = false;
  } else {
    setTheme123("theme-light-123");
    document.getElementById("slider-123").checked = true;
  }
})();


// ----------------------------------------------------------слайдер 
document.addEventListener('DOMContentLoaded', function () {
  // Обработчик клика по ссылке
  document.querySelectorAll('.preview-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Отменяем стандартное поведение ссылки

      // Получаем ID из data-id
      const id = this.getAttribute('data-id');

      // Загружаем изображения для слайдера на основе ID
      const images = getSliderImagesById(id);

      // Создаем слайдер
      const slider = createSlider(images);

      // Открываем слайдер в модальном окне
      openSliderModal(slider);
    });
  });
});

// Функция для получения изображений по ID
function getSliderImagesById(id) {
  // Пример данных (замените на реальные данные)
  const imageData = {
    M049: [
      'assets/img/slider/slide1.webp',
      'assets/img/slider/slide2.webp',
      'assets/img/slider/slide3.webp',
    ],
    M048: [
      'assets/img/slider/slide4.webp',
      'assets/img/slider/slide5.webp',
      'assets/img/slider/slide6.webp',
    ],
    // Добавьте другие ID и их изображения
  };

  return imageData[id] || []; // Возвращаем массив изображений или пустой массив, если ID не найден
}

// Функция для создания слайдера
function createSlider(images) {
  const container = document.createElement('div');
  container.classList.add('containerSlider');

  const slidesList = document.createElement('ul');
  slidesList.classList.add('slidesImage');

  const thumbnailsList = document.createElement('ul');
  thumbnailsList.classList.add('thumbnails');

  images.forEach((image, index) => {
    // Создаем слайд
    const slideItem = document.createElement('li');
    slideItem.id = `slide${index + 1}`;
    const slideImage = document.createElement('img');
    slideImage.src = image;
    slideImage.alt = `Slide ${index + 1}`;
    slideItem.appendChild(slideImage);
    slidesList.appendChild(slideItem);

    // Создаем миниатюру
    const thumbnailItem = document.createElement('li');
    const thumbnailLink = document.createElement('a');
    thumbnailLink.href = `#slide${index + 1}`;
    const thumbnailImage = document.createElement('img');
    thumbnailImage.src = image;
    thumbnailLink.appendChild(thumbnailImage);
    thumbnailItem.appendChild(thumbnailLink);
    thumbnailsList.appendChild(thumbnailItem);
  });

  container.appendChild(slidesList);
  container.appendChild(thumbnailsList);

  return container;
}

// Функция для открытия слайдера в модальном окне
function openSliderModal(slider) {
  // Создаем модальное окно
  const modal = document.createElement('div');
  modal.classList.add('slider-modal'); // Используем ваш класс для модального окна

  // Добавляем слайдер в модальное окно
  modal.appendChild(slider);

  // Кнопка закрытия (используем ваш стиль)
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button'); // Используем ваш класс для кнопки закрытия
  closeButton.innerText = 'Закрыть';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(closeButton);

  // Добавляем модальное окно на страницу
  document.body.appendChild(modal);
}