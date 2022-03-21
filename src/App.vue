<template>
  <div id="app">
    <app-header />
    <div class="content">
      <div class="content-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from './components/app-header'

export default {
  name: 'app',
  components: {
    'app-header': appHeader,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1036px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
.content {
  padding: 30px;
}
.content-container {
  max-width: 676px;
  width: 100%;
  margin: 0 auto;
}

#app {
  font-family: Montserrat, sans-serif;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>
