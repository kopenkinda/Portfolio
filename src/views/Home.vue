<template>
  <div class="home">
    <div class="container">
      <h1>{{ t('name') }}</h1>
      <p v-html="t('desc')"></p>
    </div>
    <div class="container">
      <h2>{{ t('contactMe') }}</h2>
      <Button link href="https://t.me/leroifrancais" blank>{{ t('contact.telegram') }}</Button>
      <Button link href="mailto:hi@kopenkin.tech" blank>{{ t('contact.eMail') }}</Button>
      <Button link href="https://twitch.tv/DmitriyK_" blank>{{ t('contact.twitch') }}</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import Button from '../components/Button.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Button,
  },
  setup() {
    return useI18n();
  },
});
</script>

<style lang="scss" scoped>
</style>
