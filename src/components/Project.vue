<template>
  <div class="project">
    <img :src="imgUrl" :alt="heading" />
    <div class="content">
      <h2>{{ heading }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Project',
  props: {
    imgUrl: String,
    heading: String,
    description: String,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.project {
  display: flex;
  align-items: flex-start;
  margin: 1rem 0;
}

.content {
  margin-left: 1rem;
}

img {
  min-width: 200px;
}

h2,
p {
  margin: 0;
}
</style>
