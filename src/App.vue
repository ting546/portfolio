<template>
  <MyHeader :menuItems="menuItems" :mode="mode" @mode="changeMode" />
  <main class="main">
    <MyHero :images="images" />
    <MyAbout />
    <MySkills :skillsItems="skillsItems" :mode="mode" />
    <MyPortfolio />
    <MyCert />
  </main>
  <MyFooter />
</template>
<script>
import MyHeader from "@/components/MyHeader.vue";
import MyHero from "@/components/MyHero.vue";
import MySkills from "@/components/MySkills.vue";
import MyAbout from "@/components/MyAbout.vue";
import MyPortfolio from "@/components/MyPortfolio.vue";
import MyCert from "@/components/MyCert.vue";
import MyFooter from "@/components/MyFooter.vue";
import { ref, onMounted } from "vue";

export default {
  components: { MyHeader, MyHero, MySkills, MyAbout, MyPortfolio, MyCert, MyFooter },
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
