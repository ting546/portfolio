<template>
  <div class="socials">
    <h4 class="socials__title">{{ title }}</h4>
    <ul class="socials__items">
      <li class="socials__item" v-for="(item, index) in socials" :key="index">
        <a class="socials__link" :href="item.link" target="_blank">
          <img :src="item.img" :alt="item.name" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  props: ["title"],
  setup() {
    const socials = [
      {
        img: require("@/assets/img/telegram.svg"),
        name: "telegram",
        link: "https://t.me/igor_beldanov",
      },
      {
        img: require("@/assets/img/instagram.svg"),
        name: "instagram",
        link: "https://www.instagram.com/beldanov_igor/",
      },
      {
        img: require("@/assets/img/vk.svg"),
        name: "Vk",
        link: "https://m.vk.com/beldanovigor",
      },
      {
        img: require("@/assets/img/github.svg"),
        name: "github",
        link: "https://github.com/ting546",
      },
    ];
    return { socials };
  },
};
</script>
<style lang="scss">
.socials {
  &__title {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    gap: 10px;
  }

  &__item {
  }

  &__link {
    display: block;
    width: 50px;
    height: 50px;
    transition: opacity 0.2s ease;

    img {
      width: 100%;
      height: 100%;
    }
  }
  &__link:hover {
    opacity: 0.5;
  }
}
</style>
