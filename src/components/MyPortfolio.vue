<template>
  <section class="portfolio offset" id="portfolio">
    <div class="container portfolio__container">
      <h2 class="title portfolio__title">Мое портфолио</h2>
      <div class="portfolio__filter-btns">
        <button class="portfolio__filter-btn active" data-filter="all" @click="porfolioFilter">Все</button>
        <button class="portfolio__filter-btn" data-filter="landing" @click="porfolioFilter">Лендинг</button>
        <button class="portfolio__filter-btn" data-filter="shop" @click="porfolioFilter">Магазин</button>
      </div>
      <TransitionGroup name="fade" tag="div" class="portfolio__items">
        <div class="portfolio__item" v-for="(item, index) in filterItems" :key="item.img">
          <div class="portfolio__item-wrap">
            <div class="portfolio__item-block">
              <h3 class="portfolio__item-title">{{ item.title }}</h3>
              <p class="portfolio__item-descr">
                {{ item.descr }}
              </p>
              <a class="btn btn--sm portfolio__more-btn" :href="item.link">Смотреть больше</a>
            </div>
            <div class="portfolio__img">
              <img  :src='item.img'  :alt="item.title" />
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
   
    const items = [
      {
        title: "Сайт бизнес компании",
        descr: 'Сайт для бизнес компании "GLOBALTEAM". Нужно было реализовать красивый и анимированный сайт. На сайте было много элементов декора так же была использована библиотека "AOS" анимация.',
        img: require("@/assets/img/portfolio/4.jpg") ,
        link: "./portfolio/project/GlobalTeam/index.html",
        site: "landing",
      },
      {
        title: "Сайт интернет магазина одежды",
        descr: "Сайт интернет магазина одежды.",
        img:  require("@/assets/img/portfolio/9.jpg"),
        link: "./portfolio/project/Tramontana/index.html",
        site: "shop",
      },
      {
        title: "Сайт образовательной платформы",
        descr: "Сайт образовательной платформы",
        img:  require("@/assets/img/portfolio/10.jpg"),
        link: "./portfolio/project/XOD/index.html",
        site: "landing",
      },
    ];
    let filterItems = ref(items);
    const porfolioFilter = (e) => {
      document.querySelectorAll(".portfolio__filter-btn").forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
      filterItems.value = [...items].filter((val) => {
        if (val.site === e.target.dataset.filter) {
          return true;
        }
        if (e.target.dataset.filter === "all") {
          return true;
        }
      });
      console.log(filterItems.value);
    };
    const getImg = (path) => {
      return `@/${path}`
    }

    return { items, porfolioFilter, filterItems, getImg };
  },
};
</script>
<style lang="scss">
.fade-move, /* apply transition to moving elements */
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
.portfolio {
  padding-bottom: 80px;
  margin-top: -60px;
  padding-top: 60px;
  &__container {
    padding: 0;
    max-width: 100%;
  }

  &__title {
    margin-bottom: 40px;
  }
  &__filter-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
  }
  &__filter-btn {
    font-size: 28px;
    &.active {
      color: var(--color-3);
    }
  }
  &__items {
  }

  &__item:not(:last-child) {
    margin-bottom: 30px;
  }

  &__item-wrap {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: max(15px, calc((100% - 1330px) / 2));
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    @include media(1400px) {
      flex-direction: column;
    }
  }

  &__item-block {
    width: 40%;
    z-index: 3;
    @include media(1400px) {
      width: 100%;
      padding-right: 15px;
    }
  }
  &__item:hover {
    .portfolio__img {
      img {
        transform: scale(1.1);
        transition: transform 15s ease;
      }
    }
  }

  &__item-title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
    transition: color 0.3s ease;
    @include table() {
      font-size: 24px;
    }
  }

  &__item-descr {
    margin-bottom: 20px;
    transition: color 0.3s ease;
  }

  &__more-btn {
    transition: background 0.3s ease;
    color: var(--color-2);
  }

  &__img {
    width: 60%;
    z-index: 3;
    overflow: hidden;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    @include media(1400px) {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 1s ease;
    }
  }
}
</style>
