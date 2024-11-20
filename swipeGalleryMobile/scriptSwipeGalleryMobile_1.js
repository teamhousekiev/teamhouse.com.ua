(function ($) {
  $(function () {
    // Инициализация Flickity
    var agSlideFlickity = $(".js-flickity-slider").flickity({
      autoPlay: 3000, // Автоплей с интервалом 3 секунды
      imagesLoaded: true,
      percentPosition: false,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
      groupCells: 1
    });

    // Наблюдатель для паузы автоплея
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          agSlideFlickity.flickity('play');
        } else {
          agSlideFlickity.flickity('pause');
        }
      });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector(".js-flickity-slider"));

    // Увеличение изображения на весь экран
    $(".js-carousel-cell").on("dblclick", function () {
      const $image = $(this).find("img"); // Находим изображение
      if ($image.hasClass("zoomed")) {
        $image.removeClass("zoomed"); // Убираем увеличение
        $("body").removeClass("no-scroll"); // Включаем прокрутку
      } else {
        $image.addClass("zoomed"); // Увеличиваем изображение
        $("body").addClass("no-scroll"); // Отключаем прокрутку
      }
    });

    // Линейное увеличение при движении пальцем
    $(".js-carousel-cell img").on("touchmove", function (event) {
      const touch = event.touches[0]; // Получаем данные касания
      const centerX = $(this).offset().left + $(this).width() / 2;
      const centerY = $(this).offset().top + $(this).height() / 2;
      const distance = Math.sqrt(
        Math.pow(touch.pageX - centerX, 2) + Math.pow(touch.pageY - centerY, 2)
      );

      const scale = Math.min(2, 1 + distance / 200); // Ограничиваем увеличение
      $(this).css("transform", `scale(${scale})`);
    }).on("touchend", function () {
      $(this).css("transform", "scale(1)"); // Возвращаем исходное состояние
    });
  });
})(jQuery);
