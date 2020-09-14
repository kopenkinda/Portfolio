<template>
  <marquee class="notification">
    <strong>{{ t('underConstruction') }} 🚧🏗👷‍♂️</strong><br>
    <span>{{ t('developmentStarted', {on: new Date(1600015610879).toLocaleString()})}}</span>
  </marquee>
  <div class="container container_slim container_flex">
    <LanguageSwitcher />
  </div>
  <router-view />
</template>

<style lang="scss">
marquee {
  padding: 1rem;
  background-color: yellow;
  margin-bottom: 1rem;
}

html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: monospace, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  min-width: 320px;
  max-width: 640px;
  text-align: left;
  margin: 0 auto 1rem;
  border: 1px solid black;
  padding: 2rem;
  &_flex {
    display: flex;
    align-items: center;
  }
  &_slim {
    padding: 1rem 2rem;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import LanguageSwitcher from './components/LanguageSwitcher.vue';

export default defineComponent({
  name: 'App',
  components: {
    LanguageSwitcher,
  },
  setup() {
    return useI18n();
  },
});
</script>
