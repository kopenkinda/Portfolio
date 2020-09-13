<template>
  <div>
    <button @click="locale = 'ru'">RU</button>
    <button @click="locale = 'en'">EN</button>
    <button @click="locale = 'fr'">FR</button>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: monospace, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'App',
  data() {
    return {
      x: 10,
    };
  },
  setup() {
    return useI18n();
  },
});
</script>
