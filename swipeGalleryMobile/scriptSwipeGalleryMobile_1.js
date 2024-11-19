(function ($) {
  $(function () {
    var agSlideFlickity = $(".js-flickity-slider").flickity({
      autoPlay: false, // Отключаем автоплей
      imagesLoaded: true,
      percentPosition: false,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true, // Зацикливаем слайдер
      groupCells: 1
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          agSlideFlickity.flickity('play'); // Включаем автоплей
        } else {
          agSlideFlickity.flickity('pause'); // Ставим на паузу
        }
      });
    }, { threshold: 0.5 }); // Срабатывает, если хотя бы 50% элемента видны

    observer.observe(document.querySelector(".js-flickity-slider"));
  });
})(jQuery);

$(".js-carousel-cell").on("dblclick", function () {
  const $card = $(this).find(".ag-shop-card_body");
  if ($card.hasClass("zoomed")) {
    $card.removeClass("zoomed"); // Убираем увеличение
  } else {
    $card.addClass("zoomed"); // Увеличиваем карточку
  }
});


  