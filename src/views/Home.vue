<template>
  <div class="home">
    <marquee>
      <h1>{{ t('name') }}</h1>
      <h2>{{ t('underConstruction') }}</h2>
      <p>{{ t('developmentStarted', {on: new Date(1600015610879).toLocaleString()})}}</p>
    </marquee>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    return useI18n();
  },
});
</script>
