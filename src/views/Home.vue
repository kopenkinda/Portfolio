<template>
  <div class="home">
    <div class="container">
      <h1>{{ t('name') }}</h1>
      <h2>{{ t('underConstruction') }}</h2>
      <p>{{ t('developmentStarted', {on: new Date(1600015610879).toLocaleString()})}}</p>
    </div>
    <div class="container">
      <h2>{{ t('contactMe') }}</h2>
      <Button
        style="margin-left: 0;"
        link
        href="https://t.me/leroifrancais"
        blank
      >{{ t('contact.telegram') }}</Button>
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
.container {
  min-width: 320px;
  max-width: 640px;
  text-align: left;
  margin: 0 auto 1rem;
  border: 1px solid black;
  padding: 2rem;
}
</style>
