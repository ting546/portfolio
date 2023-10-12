<template>
  <section class="hero offset">
    <div class="container">
      <div class="hero__wrapp">
        <h1 class="hero__title">
          <span>Привет, меня зовут Игорь</span>
          <span>Я делаю сайты</span>
        </h1>
        <p class="hero__descr">Занимаюсь адаптивной, кроссбраузерной версткой сайтов</p>
        <a class="btn hero__btn" href="https://t.me/igor_beldanov">Заказать сайт</a>
      </div>
      <div class="hero__img-wrap">
        <div v-for="(image, index) in images" :class="`hero__img hero__img--${index + 1}`" :key="index">
          <img :src="image.url" aria-hidden="true" alt="" ref="image2" />
          <img :src="image.url" aria-hidden="true" alt="" ref="image" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted, ref } from "vue";
import gsap from "gsap";
export default {
  props: ["images"],
  setup() {
    const image = ref(null);
    const image2 = ref(null);

    onMounted(() => {
      gsap.from([".hero__title", ".hero__title > span", ".hero__descr", ".hero__btn", ".hero__img"], { x: -100, duration: 0.2, opacity: 0, stagger: 0.2 });
      const mouseMove = (event) => {
        const move = 40;
        const moveShadow = 12;
        image.value.forEach((img, idx) => {
          const shadow = image2.value[idx];
          const rect = img.getBoundingClientRect();
          const halfHeight = rect.height / 2 + rect.top;
          const halfWidth = rect.width / 2 + rect.left;
          const numX = event.clientY - halfHeight;
          const numY = event.clientX - halfWidth;
          // Вычисляем угол поворота и применяем его к изображению
          gsap.to(img, {
            rotationX: -numX / move,
            rotationY: numY / move,
            duration: 0.5,
          });
          gsap.to(shadow, {
            rotationX: -numX / move,
            rotationY: numY / move,
            translateX: -numY / moveShadow,
            translateY: -numX / moveShadow,
            duration: 0.7,
          });

          
        });
      };
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("touchmove", mouseMove);
    });
    return {
      image,
      image2,
    };
  },
};
</script>
<style lang="scss">
.hero {
  position: relative;
  height: 100vh;
  padding-top: 100px;
  overflow: hidden;
  padding-bottom: 80px;
  &__wrapp {
    position: relative;
    z-index: 3;
    background: var(--color-rgba-1);
    padding: 40px;
    display: inline-block;
  }
  &__img-wrap {
    opacity: 0.4;
    overflow: hidden;
  }
  &__title {
    display: inline-block;
    margin-bottom: 15px;
    font-size: 60px;
    font-weight: 700;

    > span {
      display: block;
    }
    @include desk() {
      font-size: 40px;
    }
    @include table() {
      font-size: 30px;
    }
  }

  &__descr {
    font-weight: 400;
    margin-bottom: 20px;
  }

  &__img {
    --width: 1;
    position: absolute;
    width: 100px;
    opacity: 1;
    perspective: 1000px;
    @include desk() {
      --width: 1.3;
    }
    @include mob() {
      --width: 1.4;
    }

    &--1 {
      top: 35%;
      left: 50%;
      width: calc(300px / var(--width));
      @include lap() {
        left: 40%;
      }
      @include mob(){
        top: 50%;
      }
    }
    &--2 {
      top: 10%;
      width: calc(350px / var(--width));
      left: 70%;
      @include mob() {
        top: 50%;
        left: -4%;
      }
    }

    &--3 {
      top: 70%;
      left: 50%;
      width: calc(150px / var(--width));
      @include lap() {
        left: 35%;
      }
      @include mob() {
        top: 80%;
      }
    }
    &--4 {
      top: 70%;
      width: calc(200px / var(--width));
      left: 30%;
      @include lap() {
        left: 3%;
      }
      @include mob() {
        top: 80%;
      }
    }
    &--5 {
      top: 70%;
      width: calc(200px / var(--width));
      left: 70%;
      @include mob() {
        top: 80%;
      }
    }

    img {
      will-change: transform; /* Оптимизация для анимации */
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    img:first-child {
      position: absolute;
      top: 0;
      opacity: 0.5;
      filter: drop-shadow(10px 10px 10px var(--color-1));
    }
  }
}
</style>
