<template>
  <section class="skills offset" id="skills">
    <div class="container">
      <h2 class="title skills__title">Мои навыки</h2>
      <p class="skills__descr">
        Мои навыки в веб-разработке позволяют мне создавать современные и функциональные веб-сайты, которые сочетают в себе креативный дизайн, выдающуюся пользовательскую опыт и эффективную
        функциональность. Я имею опыт работы с различными технологиями и инструментами, включая HTML, CSS, JavaScript. Мои навыки также включают в себя оптимизацию сайтов для высокой
        производительности, что позволяет веб-ресурсам работать быстро и эффективно, привлекая максимальное количество посетителей.
      </p>
      <div class="skills__items">
        <div class="skills__item" v-for="(item, index) in skillsItems" :key="index" ref="skillsItem">
          <div class="skills__circle" :style="{ '--circleStart': circleStart, '--circleEnd': circleEnd }">
            <svg class="skills__circle-svg" :style="{ strokeDasharray: item.circlePrecent }">
              <circle cx="100" cy="100" r="90"></circle>
            </svg>
            <svg class="skills__circle-svg skills__circle-svg--cover">
              <circle cx="100" cy="100" r="90"></circle>
            </svg>
            <p class="skills__percent">
              <span>{{ item.precent }}</span
              >%
            </p>
          </div>
          <p class="skills__name">{{ item.name }}</p>
        </div>
      </div>
      <div class="skills__sec">
        <h3 class="skills__sec-title">Дополнительные навыки:</h3>
        <div class="skills__sec-items">
          <div class="skills__sec-item">
            <a href="https://sass-lang.com/" target="_blank">
              <img src="@/assets/img/sass.png" alt="sass" />
            </a>
          </div>
          <div class="skills__sec-item">
            <a href="https://gulpjs.com/" target="_blank">
              <img src="@/assets/img/gulp.png" alt="gulp" />
            </a>
          </div>
          <div class="skills__sec-item">
            <a href="https://elementor.com/" target="_blank">
              <img src="@/assets/img/elementor.png" alt="elementor" />
            </a>
          </div>
          <div class="skills__sec-item" v-if="!mode">
            <a href="https://github.com/" target="_blank">
              <img src="@/assets/img/github-mark.png" alt="github" />
            </a>
          </div>
          <div class="skills__sec-item" v-else>
            <a href="https://github.com/" target="_blank">
              <img src="@/assets/img/github-mark-white.png" alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  props: ["skillsItems", "mode"],
  setup(props) {
    const circleStart = 575;
    const circleEnd = 1140;
    const skillsItem = ref(null);
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
      props.skillsItems.forEach((item) => {
        item["circlePrecent"] = circleStart;
        gsap.to(item, {
          scrollTrigger: ".skills__items",
          duration: 2,
          ease: "power1.in",
          circlePrecent: circleStart + (item.precent / 100) * (circleEnd - circleStart),
        });
      });
      gsap.from(".skills__percent > span", {
        scrollTrigger: ".skills__items",
        textContent: 0,
        duration: 2,
        ease: "power1.in",
        snap: { textContent: 1 },
      });
    });

    return {
      circleStart,
      circleEnd,
      skillsItem,
    };
  },
};
</script>
<style lang="scss">
.skills {
  padding-bottom: 80px;
  margin-top: -60px;
  padding-top: 60px;
  &__title {
    margin-bottom: 20px;
  }
  &__descr {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    row-gap: 20px;
    margin-bottom: 30px;
  }

  &__item {
    text-align: center;
    width: 20%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include media(1400px) {
      width: 33.33333%;
    }
    @include table() {
      width: 50%;
    }
  }

  &__circle {
    width: 200px;
    height: 200px;
    position: relative;
    @include mob() {
      transform: scale(0.91);
    }
  }
  &__circle-svg {
    width: 100%;
    height: 100%;
    fill: transparent;
    stroke: var(--color-2);
    stroke-width: 3px;
    stroke-dasharray: var(--circleStart);
    stroke-dashoffset: var(--circleStart);
    stroke-linecap: round;
    position: relative;
    z-index: 3;
    &--cover {
      stroke: var(--color-6);
      stroke-dasharray: var(--circleEnd);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      opacity: 0.5;
    }
  }
  &__percent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    z-index: 10;
  }

  &__name {
    font-size: 20px;
  }
  &__sec {
  }
  &__sec-title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  &__sec-items {
    display: flex;
    margin: 0 -10px;
  }
  &__sec-item {
    width: 25%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
