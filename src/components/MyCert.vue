<template>
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
</template>
<script>
export default {};
</script>
<style lang="scss">
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
</style>
