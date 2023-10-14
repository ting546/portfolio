<template>
  <header class="header" :class="{ open: menuOpen }">
    <button class="burger-menu" type="button" aria-label="Открыть меню" @click="menuOpen = !menuOpen" :class="{ active: menuOpen }">
      <span class="burger-menu__line">
        <span></span>
      </span>
    </button>
    <button class="theme-mode" @click="$emit('mode', !mode)" :class="{ active: mode }">
      <span class="theme-mode__block">
        <img src="@/assets/img/moon.png" alt="dark" />
        <img src="@/assets/img/light.png" alt="light" />
      </span>
    </button>
    <div class="header__wrapper">
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__item" v-for="item in menuItems" :key="item.path">
            <a :href="item.path" @click="menuOpen = !menuOpen">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
      <MySocials :title="'Для связи со мной:'" class="header__socials" />
    </div>
  </header>
</template>
<script>
import MySocials from "@/components/MySocials.vue";
import { ref, watch } from "vue";
export default {
  props: ["menuItems", "mode"],
  components: { MySocials },
  setup() {
    const menuOpen = ref(false);
    watch(menuOpen, (newVal) => {
      if (newVal) {
        document.body.classList.add("lock");
      } else {
        document.body.classList.remove("lock");
      }
    });

    return { menuOpen };
  },
};
</script>
<style lang="scss">
.theme-mode {
  position: absolute;
  top: 30px;
  left: 30px;
  background: var(--color-5);
  border: 2px solid var(--color-6);
  display: flex;
  align-items: center;
  padding: 3px;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  &__block {
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50px;
    padding: 2px;
    transition: all 0.3s ease;
    img {
      width: 100%;
      height: 100%;
    }
    img:nth-child(1) {
      display: none;
    }
  }
  &.active {
    .theme-mode__block {
      left: 55%;
      display: flex;
      background: #000;
      img {
        display: none;
      }
      img:nth-child(1) {
        display: block;
      }
    }
  }
}
.light {
  .header {
    background: var(--color-1);
    box-shadow: 0 0 82px var(--color-2);
    @include lap() {
      box-shadow: 0 0 0 transparent;
    }
    &.open {
      @include lap() {
        box-shadow: 0 0 82px var(--color-2);
      }
    }
  }
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  color: var(--color-2);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 82px var(--color-1);
  z-index: 3;
  transition: all 0.3s ease;
  z-index: 20;
  @include desk() {
    width: 320px;
  }
  @include lap() {
    left: -320px;
    background: var(--color-5);
    box-shadow: 0 0 0 transparent;
  }
  &.open {
    left: 0;
    box-shadow: 0 0 82px var(--color-1);
  }
  &__wrapper {
    width: 100%;
  }
  &__socials {
    padding-left: 30px;
    position: absolute;
    bottom: 30px;
  }
}
.menu {
  width: 100%;
  margin-bottom: 20px;

  &__list {
  }

  &__item {
    a {
      font-size: 35px;
      display: block;
      padding-left: 30px;
      padding-right: 20px;
      padding-top: 15px;
      padding-bottom: 15px;
      transition: background 0.3s ease;
      font-family: var(--font-family-igr);
    }
    a:hover {
      background: var(--color-3);
    }
  }
}
</style>
