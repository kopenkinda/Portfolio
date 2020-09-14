<template>
  <button class="button" :title="title" v-if="!link">
    <slot></slot>
  </button>
  <a class="button" :href="to" :title="title" :target="blank ? '_blank' : null" v-else>
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'button',
  props: {
    link: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      default: '',
    },
    blank: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  all: unset;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  margin: 1rem;
  transition: all 0.33s;
  cursor: pointer;
  font-weight: bold;
  box-shadow: inset 0 0 0 1px transparent;
  &:hover,
  &:active,
  &:focus {
    background-color: black;
    color: white;
  }
  &:active,
  &:focus {
    box-shadow: inset 0 0 0 1px white;
  }
  &:visited {
    --color: rgb(212, 104, 189);
    border-color: var(--color);
  }
}
</style>
