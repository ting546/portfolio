
// burger >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const burger = document.querySelector(".burger-menu")
const catalogBlock = document.querySelector(".header-bottom")
const mobileMenu = document.querySelector(".mobile-menu")
if (burger) {
  burger.addEventListener("click", function () {
    burger.classList.toggle("_active")
    catalogBlock.classList.toggle("open")
    // если mobileMenu display: none
    if (getComputedStyle(mobileMenu).display == "none") {
      document.body.classList.remove("_lock")

    }
    else {
      // если в mobileMenu есть открытые вкладки закрыть их при клике на burger
      if (mobileMenu.querySelectorAll(".active").length) {
        mobileMenu.querySelectorAll(".active").forEach(e => {
          e.classList.remove("active");

        });
      };
      mobileMenu.classList.toggle("open")
      document.body.classList.toggle("_lock")

    }
  });
}

// При клике на любую ссылку внутри Каталога закрыть меню Каталога
if (catalogBlock) {
  catalogBlock.querySelectorAll("a").forEach(catalogBlockLink => {
    catalogBlockLink.addEventListener("click", function () {
      catalogBlock.classList.remove("open")
      burger.classList.remove("_active")
    })

  })
}

// При клике на любую ссылку внутри Mobile Каталога закрыть меню Каталога
if (mobileMenu) {
  mobileMenu.querySelectorAll("a").forEach(mobileMenuLink => {
    mobileMenuLink.addEventListener("click", function () {
      mobileMenu.classList.remove("open")
      burger.classList.remove("_active")
      document.body.classList.remove("_lock")
    })

  })
}
// Вывод подменю Каталога
const mobileDropdownBtns = document.querySelectorAll(".mobile-dropdown__btn")
if (mobileDropdownBtns) {
  const backBtns = document.querySelectorAll(".mobile-dropdown__back-btn")
  backBtns.forEach(backBtn => {
    backBtn.addEventListener("click", function () {
      this.closest(".active").classList.remove("active")

    })
  })

  mobileDropdownBtns.forEach(mobileDropdownBtn => {
    mobileDropdownBtn.addEventListener("click", function () {
      const subList = this.nextElementSibling
      if (subList) {
        subList.classList.add("active")

      }
    });
  });
}
// Открытие формы поиска
const searchBtn = document.querySelector(".search__btn > svg")
const searchInput = document.querySelector(".search__input")
if (searchBtn) {
  searchBtn.addEventListener("click", function (e) {
    e.preventDefault
    searchInput.classList.toggle("active")
  })
}
//Закритие каталога и поиска при клике вне их
document.addEventListener("click", function (e) {
  const withinBoundaries = e.composedPath().includes(burger);
  const withinBoundaries2 = e.composedPath().includes(catalogBlock);
  const withinBoundaries3 = e.composedPath().includes(searchInput);
  const withinBoundaries4 = e.composedPath().includes(searchBtn);
  const withinBoundaries5 = e.composedPath().includes(mobileMenu);
  if (!withinBoundaries & !withinBoundaries2 & !withinBoundaries5) {
    burger.classList.remove("_active")
    catalogBlock.classList.remove("open")
  }
  if (!withinBoundaries3 & !withinBoundaries4) {
    searchInput.classList.remove("active")
  }

})


// Добавляет класс active к card-favorit
const cardFavorits = document.querySelectorAll(".favorit-btn")
if (cardFavorits) {
  cardFavorits.forEach(cardFavorit => {
    cardFavorit.addEventListener("click", function () {
      if (this.closest(".active")) {
        this.classList.remove("active")

      } else {
        this.classList.add("active")
      }


    })
  })
}
// Меню фильра
const filter = document.querySelector(".filter")
const filterCloseBtn = document.querySelector(".filter__close")
const filterShowBtn = document.querySelector(".filter__btn")
const filterBtn = document.querySelector(".product-cards__filter-btn")
if (filter) {
  filterBtn.addEventListener("click", function () {
    filter.classList.add("open")
    document.body.classList.add("_lock")
  })
  filterCloseBtn.addEventListener("click", function () {
    filter.classList.remove("open")
    document.body.classList.remove("_lock")
  })
  filterShowBtn.addEventListener("click", function () {
    filter.classList.remove("open")
    document.body.classList.remove("_lock")
  })
}
// Меню сортировки
const sort = document.querySelector(".sort")
const sortBtn = document.querySelector(".product-cards__sort-btn")
const sortCloseBtn = document.querySelector(".sort__close")
const sortrShowBtn = document.querySelector(".sort__btn")

if (sort) {
  sortBtn.addEventListener("click", function () {
    sort.classList.add("open")
    document.body.classList.add("_lock")
  })
  sortCloseBtn.addEventListener("click", function () {
    sort.classList.remove("open")
    document.body.classList.remove("_lock")
  })
  sortrShowBtn.addEventListener("click", function () {
    sort.classList.remove("open")
    document.body.classList.remove("_lock")
  })
}

// chat
const chat = document.querySelector(".chat")
setTimeout(function(){
  chat.classList.add("active")
}, 2000)

// слайдеры
const counselSlider = new Swiper('.counsel-slider', {
  autoplay: true,
  slidesPerView: 1.3,
  spaceBetween: 8,
  navigation: {
    nextEl: '.slider-arrow-next--counsel',
    prevEl: '.slider-arrow-prev--counsel',
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
    },
    767.98: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2.7,
      spaceBetween: 32,
    },

  }

});

const brandContent = new Swiper('.brand__content', {
  slidesPerView: 3.4,
  spaceBetween: 24,
  breakpoints: {

    480: {
      slidesPerView: 4.4,
      spaceBetween: 30
    },

    640: {
      slidesPerView: 5.4,
      spaceBetween: 40
    },
    991: {
      slidesPerView: 7,
      spaceBetween: 80
    },
  }
});

const blogSlider = new Swiper('.blog-slider', {
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 8,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    575.98: {

      grabCursor: true,
      spaceBetween: 32,
      slidesPerView: "auto",
      direction: 'vertical',
    }
  },

});

const heroSlider = new Swiper('.hero-slider', {
  slidesPerView: 1,
  loop: true,
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});


// 2 слайдера карточки товара
// Инициализация превью слайдера
const miniImages = new Swiper('.product-card-mini-images .swiper-container', { // ищем слайдер превью по селектору
  // задаем параметры
  slidesPerView: 3, // показывать по 3 превью
  spaceBetween: 24, // расстояние между слайдами
  navigation: { // задаем кнопки навигации
    nextEl: '.slider-arrow-next--product-card-mini-images', // кнопка Next
    prevEl: '.slider-arrow-prev--product-card-mini-images' // кнопка Prev
  },
  freeMode: true, // при перетаскивании превью ведет себя как при скролле

});
// Инициализация слайдера изображений
const cardImages = new Swiper('.product-card-images .swiper-container', { // ищем слайдер превью по селектору
  // задаем параметры
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 32, // расстояние между слайдами
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  navigation: { // задаем кнопки навигации
    nextEl: '.slider-arrow-next--product-card-mini-images', // кнопка Next
    prevEl: '.slider-arrow-prev--product-card-mini-images' // кнопка Prev
  },
  grabCursor: true, // менять иконку курсора
  thumbs: { // указываем на превью слайдер
    swiper: miniImages // указываем имя превью слайдера
  },
  pagination: {
    el: '.swiper-pagination--product-card-images',
    type: 'bullets',
    clickable: true,
  },
});

const watchedSlider = new Swiper('.watched-slider', {
  autoplay: true,
  slidesPerView: 1.3,
  spaceBetween: 8,
  navigation: {
    nextEl: '.slider-arrow-next--watched',
    prevEl: '.slider-arrow-prev--watched',
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
    },
    767.98: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 32,
    },

  }
});

