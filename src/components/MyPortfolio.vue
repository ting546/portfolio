<template>
  <section class="portfolio offset" id="portfolio">
    <div class="container portfolio__container">
      <h2 class="title portfolio__title">Мое портфолио</h2>
      <div class="portfolio__filter-btns">
        <button class="portfolio__filter-btn active" data-filter="all" @click="porfolioFilter">Все</button>
        <button class="portfolio__filter-btn" data-filter="landing" @click="porfolioFilter">Лендинг</button>
        <button class="portfolio__filter-btn" data-filter="shop" @click="porfolioFilter">Магазин</button>
        <button class="portfolio__filter-btn" data-filter="copr" @click="porfolioFilter">Корпоративный</button>
      </div>
      <TransitionGroup name="fade" tag="div" class="portfolio__items">
        <div class="portfolio__item" v-for="(item, index) in filterItems" :key="item.img">
          <div class="portfolio__item-wrap">
            <div class="portfolio__item-block">
              <h3 class="portfolio__item-title">{{ item.title }}</h3>
              <p class="portfolio__item-descr" v-html="item.descr"></p>
              <p class="portfolio__item-price">
                Цена: <span>{{ item.price ? item.price + "руб" : "не указано" }}</span>
              </p>
              <a class="btn btn--sm portfolio__more-btn" :href="item.link">Смотреть больше</a>
            </div>
            <div class="portfolio__img">
              <img :src="item.img" :alt="item.title" />
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
import dataPortfolio from "@/dataPortfolio.js";
export default {
  setup() {
  
    let filterItems = ref(dataPortfolio);
    const porfolioFilter = (e) => {
      document.querySelectorAll(".portfolio__filter-btn").forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
      filterItems.value = [...dataPortfolio].filter((val) => {
        if (val.site === e.target.dataset.filter) {
          return true;
        }
        if (e.target.dataset.filter === "all") {
          return true;
        }
      });
    };
    const getImg = (path) => {
      return `@/${path}`;
    };

    return { dataPortfolio, porfolioFilter, filterItems, getImg };
  },
};
</script>
<style lang="scss">
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.fade-leave-active {
  position: absolute;
}
.portfolio {
  padding-bottom: 50px;
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
    flex-wrap: wrap;
    gap: 15px;
    padding: 0 15px;
  }
  &__filter-btn {
    font-size: 28px;
    &.active {
      color: var(--color-3);
    }
    @include table() {
      font-size: 20px;
    }
    @include mob() {
      font-size: 17px;
    }
  }
  &__items {
    padding-top: 30px;
    padding-bottom: 30px;
    overflow: hidden;
  }

  &__item:not(:last-child) {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--color-3);
  }

  &__item-wrap {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: max(15px, calc((100% - 1330px) / 2));
    // overflow: hidden;
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
      transform: translateY(-10px);
      box-shadow: 0px 10px 20px var(--color-3);
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
    margin-bottom: 15px;
    transition: color 0.3s ease;
    a {
      text-decoration: underline;
      color: var(--link-color);
      &:hover {
        color: var(--color-3);
      }
    }
  }
  &__item-price {
    margin-bottom: 20px;
    span {
      font-weight: 600;
    }
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
    transition: box-shadow 0.3s ease, transform 0.4s ease;
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
