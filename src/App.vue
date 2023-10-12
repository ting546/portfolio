<template>
  <MyHeader :menuItems="menuItems" :mode="mode" @mode="changeMode" />

  <main class="main">
    <MyHero :images="images" />
    <MyAbout />
    <MySkills :skillsItems="skillsItems" :mode="mode" />
    <MyPortfolio />
    <section class="cert offset" id="cert">
      <div class="container">
        <h2 class="title cert__title">Мои сертификаты</h2>
        <div class="cert__items">
          <div class="cert__item">
            <img src="@/assets/img/cert/1.jpg" alt="" />
          </div>
          <div class="cert__item">
            <img src="@/assets/img/cert/2.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer offset" id="footer">
    <div class="container">
      <h2 class="title footer__title">Контакты</h2>
      <div class="footer__wrap">
        <ul class="footer__items">
          <li class="footer__item">
            <h3 class="footer__sub-title">Telegram:</h3>
            <a class="footer__link" href="">https://t.me/igor_beldanov</a>
          </li>
          <li class="footer__item">
            <h3 class="footer__sub-title">ВКонтакте:</h3>
            <a class="footer__link" href="">https://m.vk.com/beldanovigor</a>
          </li>
          <li class="footer__item">
            <h3 class="footer__sub-title">Instagram:</h3>
            <a class="footer__link" href="">https://www.instagram.com/beldanov_igor/</a>
          </li>
        </ul>
        <div class="footer__sec-items">
          <div class="footer__sec-item">
            <h3 class="footer__sub-title">Почта:</h3>
            <a class="footer__link" href="mailto:igorbeldanov62@gmail.com">igorbeldanov62@gmail.com</a>
          </div>
          <div class="footer__sec-item">
            <h3 class="footer__sub-title">GitHub:</h3>
            <a class="footer__link" href="https://github.com/ting546">https://github.com/ting546</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import MyHeader from "@/components/MyHeader.vue";
import MyHero from "@/components/MyHero.vue";
import MySkills from "@/components/MySkills.vue";
import MyAbout from "@/components/MyAbout.vue";
import MyPortfolio from "@/components/MyPortfolio.vue";
import { ref, onMounted } from "vue";

export default {
  components: { MyHeader, MyHero, MySkills, MyAbout, MyPortfolio },
  setup() {
    const mode = ref(false);
    const images = [
      {
        url: require("@/assets/img/html.png"),
      },
      {
        url: require("@/assets/img/css.png"),
      },
      {
        url: require("@/assets/img/js.png"),
      },
      {
        url: require("@/assets/img/vuejs.png"),
      },
      {
        url: require("@/assets/img/wp.png"),
      },
    ];
    const menuItems = [
      {
        text: "Обо мне",
        path: "#about",
      },
      {
        text: "Мои навыки",
        path: "#skills",
      },
      {
        text: "Портфолио",
        path: "#portfolio",
      },
      {
        text: "Сертификаты",
        path: "#cert",
      },
      {
        text: "Контакты",
        path: "#footer",
      },
    ];
    const skillsItems = ref([
      {
        precent: 90,
        name: "HTML",
      },
      {
        precent: 80,
        name: "CSS",
      },
      {
        precent: 50,
        name: "JS",
      },
      {
        precent: 60,
        name: "Wordpress",
      },
      {
        precent: 30,
        name: "Vuejs",
      },
    ]);
    const changeMode = (e) => {
      mode.value = e;
      if (!mode.value) {
        document.body.classList.add("light");
      } else {
        document.body.classList.remove("light");
      }
    };
    onMounted(() => {
      if (window.matchMedia) {
        
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.body.classList.remove("light");
          mode.value = true;
        } else {
          document.body.classList.add("light");
          mode.value = false;
        }
      }
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        if (window.matchMedia) {
          mode.value = !mode.value;
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.remove("light");
          } else {
            document.body.classList.add("light");
          }
        }
      });
    });
    
    return {
      menuItems,
      skillsItems,
      images,
      mode,
      changeMode,
    };
  },
};
</script>
<style lang="scss">
.footer {
  padding-bottom: 50px;

  &__title {
    margin-bottom: 30px;
  }
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    @include desk() {
      gap: 20px;
      flex-direction: column;
    }
  }
  &__sub-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  &__items {
    width: 70%;
    @include desk() {
      width: 100%;
    }
  }

  &__item {
  }
  &__item:not(:last-child) {
    margin-bottom: 15px;
  }

  &__link {
    color: var(--link-color);
    font-size: 24px;
    &:hover {
      color: var(--btn-hover);
    }
    @include desk() {
      display: block;
    }
    @include table() {
      font-size: 18px;
    }
  }

  &__sec-items {
    width: 30%;
    @include desk() {
      width: 100%;
    }
  }

  &__sec-item {
  }
  &__sec-item:not(:last-child) {
    margin-bottom: 20px;
  }

  &__link {
  }
}

.cert {
  padding-top: 80px;
  margin-top: -60px;
  padding-bottom: 60px;
  &__title {
    margin-bottom: 30px;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    row-gap: 20px;
    @include mob() {
      flex-direction: column;
    }
  }

  &__item {
    width: 50%;
    padding: 0 10px;
    @include mob() {
      width: 100%;
    }
  }
}

.btn {
  padding: 20px 28px;
  background: var(--color-3);
  display: inline-block;
  border-radius: 12px;
  font-size: 20px;
  transition: background 0.3s ease;
  &:hover {
    background: var(--btn-hover);
  }
  &--sm {
    padding: 16px 24px;
    font-size: 18px;
  }
  @include table() {
    font-size: 18px;
    padding: 14px 20px;
  }
}

body {
  background: var(--main-gradient);
  background-size: 200% 200%;
  // background-attachment: fixed;
}
.offset {
  padding-left: 400px;
  @include desk() {
    padding-left: 320px;
  }
  @include lap() {
    padding-left: 0;
  }
}
</style>
