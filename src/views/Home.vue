<template>
  <div class="home">
    <div class="container">
      <h1>{{ t('name') }}</h1>
      <p v-html="t('desc', icons)"></p>
    </div>
    <div class="container">
      <h2>{{ t('contactMe') }}</h2>
      <Button link href="https://t.me/leroifrancais" blank>
      <i class="em em-airplane" aria-role="presentation" aria-label="AIRPLANE"></i>
      {{ t('contact.telegram') }}
      </Button>
      <Button link href="mailto:hi@kopenkin.tech" blank>
        <i class="em em-email" aria-role="presentation" aria-label="ENVELOPE"></i>
        {{ t('contact.eMail') }}
      </Button>
      <Button link href="https://twitch.tv/DmitriyK_" blank>
      <i class="em em-purple_heart" aria-role="presentation" aria-label="PURPLE HEART"></i>
      {{ t('contact.twitch') }}
      </Button>
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
    const i18n = useI18n();
    const icons = {
      graduate:
        '<i class="em em-mortar_board" aria-role="presentation" aria-label="GRADUATION CAP"></i>',
      code: '<i class="em em-male-technologist" aria-role="presentation" aria-label=""></i>',
      books: '<i class="em em-book" aria-role="presentation" aria-label="OPEN BOOK"></i>',
      mail: '<i class="em em-email" aria-role="presentation" aria-label="ENVELOPE"></i>',
    };
    return { ...i18n, icons };
  },
});
</script>

<style lang="scss" scoped>
</style>
