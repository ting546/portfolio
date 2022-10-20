

// burger >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const burger = document.querySelector(".burger-menu");
const listMenu = document.querySelector(".menu__nav");
burger.addEventListener("click", function () {
  burger.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  listMenu.classList.toggle("_active");
});

AOS.init();
AOS.init({
  once: true,
});

$(function () {
  $(document).scroll(function () {
    if ($(this).scrollTop()) {
      $(".header__navbar").addClass("_active");
    } else {
      $(".header__navbar").removeClass("_active");
    }
  });
  $(function () {
    $(".back-top").hide();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
        $(".back-top").fadeIn();
      } else {
        $(".back-top").fadeOut();
      }
    });

    $(".back-top").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  });
});
