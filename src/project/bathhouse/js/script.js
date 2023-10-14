function PopUpShow() {
  $("#bathhouse-popup").fadeIn(300, "linear").attr("style", "display: flex;");
}
function PopUpShow2() {
  $("#stocks-popup").fadeIn(300, "linear").attr("style", "display: flex;");
}
function PopUpShow3() {
  $("#feedback-popup").fadeIn(300, "linear").attr("style", "display: flex;");
}
function PopUpHide() {
  $("#bathhouse-popup").fadeOut(300);
}
function PopUpHide2() {
  $("#stocks-popup").fadeOut(300);
}
function PopUpHide3() {
  $("#feedback-popup").fadeOut(300);
}
function f_acc() {
  $(".hall__list .hall__item-text").not($(this).next()).slideUp(300),
    $(".hall__item-top._active").not($(this)).removeClass("_active"),
    $(this).next().slideToggle(300),
    $(this).toggleClass("_active");
}
function burger() {
  const burger = document.querySelector(".burger-menu"),
    listMenu = document.querySelector(".menu__nav");
  burger.addEventListener("click", function () {
    burger.classList.toggle("_active"),
      document.body.classList.toggle("_lock"),
      document.body.classList.toggle("_open"),
      listMenu.classList.toggle("_active");
  });
}
let tooltipElem;
$(document).ready(function () {
  PopUpHide(),
    PopUpHide2(),
    PopUpHide3(),
    $("body").width() < 425 &&
      $(".hall__list .hall__item-top").on("click", f_acc);
}),
  $("feedback__popup-rating-star").each(function () {
    $(this).click(function (e) {
      e.preventDefault(),
        "img/star.png" == $(this).children("img").attr("src")
          ? $(this)
              .nextAll(this)
              .children("img")
              .attr("src", "img/star-hide.png")
          : ($(this).children("img").attr("src", "img/star.png"),
            $(this).prevAll(this).children("img").attr("src", "img/star.png"));
    });
  }),
  burger(),
  $(function () {
    $(".hall__slider").slick({
      slidesToShow: 3,
      appendArrows: ".slide-arrows",
      prevArrow:
        '<button class="slide-arrow arrow-prev"><img src="img/arrow-prev.svg" alt="стрелка слайдера"></button>',
      nextArrow:
        '<button class="slide-arrow arrow-next"><img src="img/arrow-next.svg" alt="стрелка слайдера"></button>',
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 767.98, settings: { slidesToShow: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 1, dots: !0 } },
      ],
    }),
      $(".stocks__slider").slick({
        slidesToShow: 1,
        appendArrows: ".stocks__slide-arrows",
        prevArrow:
          '<button class="slide-arrow arrow-prev stocks__arrow"><img src="img/arrow-prev.svg" alt="стрелка слайдера"></button>',
        nextArrow:
          '<button class="slide-arrow arrow-next stocks__arrow"><img src="img/arrow-next.svg" alt="стрелка слайдера"></button>',
        responsive: [
          { breakpoint: 991.98, settings: { slidesToShow: 1, dots: !0 } },
        ],
      });
  }),
  (document.onmouseover = function (event) {
    let target = event.target,
      tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;
    (tooltipElem = document.createElement("div")),
      (tooltipElem.className = "tooltip"),
      (tooltipElem.innerHTML = tooltipHtml),
      document.body.append(tooltipElem);
    let coords = target.getBoundingClientRect(),
      left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    left < 0 && (left = 0);
    let top = coords.top - tooltipElem.offsetHeight - 5;
    top < 0 && (top = coords.top + target.offsetHeight + 5),
      (tooltipElem.style.left = left + "px"),
      (tooltipElem.style.top = top + "px");
  }),
  (document.onmouseout = function (e) {
    tooltipElem && (tooltipElem.remove(), (tooltipElem = null));
  });
