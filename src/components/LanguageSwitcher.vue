<template>
  <div>
    <Button v-for="lang in languages" :key="lang.code" @click="locale = lang.code">
      <i :class="`em em-${lang.code}`" aria-role="presentation" :aria-label="lang.aria"></i>
    </Button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from './Button.vue';

export default defineComponent({
  name: 'LanguageSwitcher',
  components: {
    Button,
  },
  setup() {
    return useI18n();
  },
  data() {
    return {
      languages: [
        { code: 'ru', aria: 'Russia Flag' },
        { code: 'us', aria: 'United States Flag' },
        { code: 'fr', aria: 'France Flag' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
