<template>
  <div class="header">
    <div class="container">
      <div class="header__wrap">

        <router-link to="/" class="logo header__logo">
          <img src="../assets/logo.svg" alt="">
        </router-link>

        <div class="nav header__nav">
          <router-link class="nav__item" to="/">Форма</router-link>
          <router-link class="nav__item" to="/preview">Превью</router-link>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss">
.header {
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);

  &__wrap {
    height: 76px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    width: 93px;
  }
  &__nav {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin-right: 93px;

  }
}

.nav {
  &__item {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(17, 17, 17, 0.48);

    text-decoration: none;
    margin: 0 12px;
  }
}
</style>
