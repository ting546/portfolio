<template>
  <section class="about offset" id="about">
    <div class="container">
      <h2 class="title about__title">Обо мне</h2>
      <div class="about__content">
        <div class="about__text-block">
          <h3>Веб-разработчик с опытом <span>более 2 лет</span></h3>

          <p>
            Сверстаю для вас сайт по макету из Figma, Psd - <b>адаптивно,</b> <b>кроссбраузерно.</b><br />
            Мой стек: <b>HTML,</b> <b>CSS,</b> <b>JS,</b><b> Wordpress</b> (Натяжка, Elementor, Acf)<br />
            Доп. технологии: SCSS, БЭМ, Gulp, Animate, Bootstrap, Немного Vue 3.<br />
            Создаю сайты довольно давно и знаю как должен выглядеть качественный сайт в моем портфолио более 8 качественных сайтов сверстаных мною. Верстаю макеты практически любой сложности.<br />
          </p>
          Как проходит работа?
          <ol>
            <li>Вы предоставляете мне макет сайта</li>
            <li>Предоставляете ТЗ ЛИБО пожелания к вёрстке</li>
            <li>Я ознакамливаюсь с макетом и называю сумму</li>
            <li>Я верстаю макет каждый день сообщая о проделоной работе</li>
            <li>После верстки я протестирую сайт</li>
            <li>Вы согласовывайте сверстаный сайт (если вдруг всплывут баги, исправлю)</li>
          </ol>
          <MySocials :title="'Мои контакты:'" class="about__socials" />
        </div>

        <div class="site-block about__site-block">
          <h3 class="title site-block__main-title">Структура сайта</h3>
          <div class="site-block__header">
            <p class="site-block__title">Шапка</p>
            <span class="site-block__line site-block__line--1"></span>
            <span class="site-block__line site-block__line--2"></span>
            <p class="site-block__descr">Шапка - это блок в верхней части страницы сайта, который виден на всех страницах сайта</p>
            <div class="site-block__nav">
              <p class="site-block__title">Меню</p>
              <span class="site-block__line site-block__line--1"></span>
              <span class="site-block__line site-block__line--2"></span>
              <p class="site-block__descr">Меню — это набор ссылок на другие страницы сайта, либо на конкретные разделы одной страницы.</p>
            </div>
          </div>
          <div class="site-block__main">
            <p class="site-block__title">Контент сайта</p>
            <span class="site-block__line site-block__line--1"></span>
            <span class="site-block__line site-block__line--2"></span>
            <p class="site-block__descr">Контент сайта – это все информационное содержание ресурса: тексты, изображения, видео и пр.</p>
            <div class="site-block__main-content">
              <div class="site-block__sitebar">
                <p class="site-block__title">Сайдбар</p>
                <span class="site-block__line site-block__line--1"></span>
                <span class="site-block__line site-block__line--2"></span>
                <p class="site-block__descr">
                  Сайдбар — это боковая панель сайта, визуально разграниченная с контентом на странице. Благодаря ее блокам посетители понимают, что и где расположено на сайте.
                </p>
              </div>
              <div class="site-block__sections">
                <div class="site-block__section">
                  <p class="site-block__title">Секция</p>
                  <span class="site-block__line site-block__line--1"></span>
                  <span class="site-block__line site-block__line--2"></span>
                  <p class="site-block__descr">
                    Секция - это отличный способ организовать и отобразить контент на сайте. Секции охватывают всю ширину сайта, позволяя вам размещать и настраивать элементы.
                  </p>
                </div>
                <div class="site-block__section">
                  <p class="site-block__title">Секция</p>
                  <span class="site-block__line site-block__line--1"></span>
                  <span class="site-block__line site-block__line--2"></span>
                  <p class="site-block__descr">
                    Секция - это отличный способ организовать и отобразить контент на сайте. Секции охватывают всю ширину сайта, позволяя вам размещать и настраивать элементы.
                  </p>
                </div>
                <div class="site-block__section">
                  <p class="site-block__title">Секция</p>
                  <span class="site-block__line site-block__line--1"></span>
                  <span class="site-block__line site-block__line--2"></span>
                  <p class="site-block__descr">
                    Секция - это отличный способ организовать и отобразить контент на сайте. Секции охватывают всю ширину сайта, позволяя вам размещать и настраивать элементы.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="site-block__footer">
            <p class="site-block__title">Подвал</p>
            <span class="site-block__line site-block__line--1"></span>
            <span class="site-block__line site-block__line--2"></span>
            <p class="site-block__descr">Подвал - это блок в нижней части страницы. Содержит полезную, но не первостепенную информацию. Виден на всех страницах сайта.</p>
            <div class="site-block__nav">
              <p class="site-block__title">Меню</p>
              <span class="site-block__line site-block__line--1"></span>
              <span class="site-block__line site-block__line--2"></span>
              <p class="site-block__descr">Меню — это набор ссылок на другие страницы сайта, либо на конкретные разделы одной страницы.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted } from "vue";
import MySocials from "@/components/MySocials.vue";
export default {
  props: ["socials"],
  components: { MySocials },
  setup() {
    onMounted(() => {
      const allBlocks = document.querySelectorAll(".site-block div");

      allBlocks.forEach((block) => {
        const toltipFunc = (e) => {
          e.stopPropagation();
          allBlocks.forEach((item) => {
            item.classList.remove("active");
          });
          block.classList.add("active");
        };
        block.addEventListener("mouseover", toltipFunc);
        block.addEventListener("click", toltipFunc);

        block.addEventListener("mouseleave", (e) => {
          e.stopPropagation();
          block.classList.remove("active");
        });
      });
    });
  },
};
</script>
<style lang="scss">
.about {
  padding-bottom: 80px;
  margin-top: -60px;
  padding-top: 60px;

  &__title {
    margin-bottom: 60px;
    @include table() {
      margin-bottom: 30px;
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    @include medc() {
      flex-direction: column;
    }
    @include lap() {
      flex-direction: row;
    }
    @include table() {
      flex-direction: column;
    }
  }
  &__socials {
    margin-top: 20px;
  }
  &__site-block {
    width: 50%;
    @include medc() {
      width: 100%;
    }
    @include table() {
      width: 80%;
    }
    @include mob() {
      width: 100%;
    }
  }
  &__text-block {
    width: 50%;
    @include medc() {
      width: 100%;
    }
    h3 {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 20px;
      max-width: 600px;
      @include table() {
        font-size: 24px;
      }
      span {
        color: var(--color-3);
      }
    }
    b {
      color: var(--color-3);
    }
    p {
      margin-bottom: 20px;
    }
    ol {
      margin-top: 10px;
      padding-left: 20px;
      li:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}
.site-block {
  --line-height: 120px;
  &__main-title {
    display: none;
    margin-bottom: 30px;
    @include table() {
      display: block;
    }
  }
  &__header {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__sitebar,
  &__main,
  &__section,
  &__footer,
  &__header,
  &__nav {
    position: relative;
    border: 2px solid var(--color-3);
  }
  &__section.active,
  &__nav.active,
  &__sitebar.active,
  &__main.active,
  &__footer.active,
  &__header.active {
    background: rgba(0, 0, 0, 0.5);
  }

  &__title {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--color-3);
    padding: 5px;
  }

  &__nav {
    height: 80px;
    width: 90%;
  }

  &__descr {
    position: absolute;
    top: calc((50% - var(--line-height) * 2) + 10px);
    left: calc(50% - 100px);
    transform: translate(-50%, -50%);
    background: var(--color-3);
    padding: 10px 15px;
    opacity: 0;
    visibility: hidden;
    width: 300px;
    text-align: center;
    box-shadow: 0 0 20px var(--color-3);
    font-size: 16px;
    z-index: 3;
    @include mob() {
      left: calc(70% - 100px);
    }
  }
  &__line {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 1px;
    height: var(--line-height);
    background: var(--color-3);
    display: block;

    &--1 {
      top: calc(50% - var(--line-height) / 2);
      left: 50%;
      opacity: 0;
      visibility: hidden;
    }
    &--2 {
      top: calc((50% - var(--line-height) / 2) - var(--line-height));
      left: 50%;
      transform-origin: bottom;
      transform: translate(-50%, -50%) rotate(-40deg);
      opacity: 0;
      visibility: hidden;
    }
  }
  &__main.active,
  &__footer.active,
  &__header.active,
  &__section.active,
  &__nav.active,
  &__sitebar.active {
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 5px;
      height: 5px;
      background: var(--color-3);
      border-radius: 8px;
      opacity: 1;
      visibility: visible;
      transition: opacity 0.2s ease;
    }
    & > .site-block__descr {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.2s ease 0.3s;
    }
    & > .site-block__line {
      &--1 {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.2s ease 0.1s;
      }
      &--2 {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.2s ease 0.2s;
      }
    }
  }
  @include table() {
    &__sitebar.active {
      & > .site-block__descr {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.2s ease 0.3s;
        left: 170%;
      }
      & > .site-block__line {
        &--1 {
          opacity: 1;
          visibility: visible;
          transition: opacity 0.2s ease 0.1s;
        }
        &--2 {
          opacity: 1;
          visibility: visible;
          transition: opacity 0.2s ease 0.2s;
          transform: translate(-50%, -50%) rotate(40deg);
        }
      }
    }
  }

  &__main {
    margin-bottom: 20px;
  }
  &__main-content {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 90%;
    margin: 0 auto;
  }
  &__sitebar {
    width: 30%;
  }
  &__sections {
    width: 80%;
  }
  &__section {
    height: 70px;
  }
  &__section:not(:last-child) {
    margin-bottom: 20px;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__main,
  &__footer,
  &__header {
    padding: 44px 0;
  }
}
</style>
