<template >
 <footer class="footer offset" id="footer">
    <div class="container">
      <h2 class="title footer__title">Контакты</h2>
      <div class="footer__wrap">
        <ul class="footer__items">
          <li class="footer__item">
            <h3 class="footer__sub-title">Telegram:</h3>
            <a class="footer__link" href="https://t.me/igor_beldanov" target="_blank">https://t.me/igor_beldanov</a>
          </li>
          <li class="footer__item">
            <h3 class="footer__sub-title">ВКонтакте:</h3>
            <a class="footer__link" href="https://m.vk.com/beldanovigor" target="_blank">https://m.vk.com/beldanovigor</a>
          </li>
          <li class="footer__item">
            <h3 class="footer__sub-title">Instagram:</h3>
            <a class="footer__link" href="https://www.instagram.com/beldanov_igor" target="_blank">https://www.instagram.com/beldanov_igor/</a>
          </li>
        </ul>
        <div class="footer__sec-items">
          <div class="footer__sec-item">
            <h3 class="footer__sub-title">Почта:</h3>
            <a class="footer__link" href="mailto:igorbeldanov62@gmail.com" target="_blank">igorbeldanov62@gmail.com</a>
          </div>
          <div class="footer__sec-item">
            <h3 class="footer__sub-title">GitHub:</h3>
            <a class="footer__link" href="https://github.com/ting546" target="_blank">https://github.com/ting546</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  
}
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
</style>