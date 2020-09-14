<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'button',
});
</script>

<style lang="scss" scoped>
button {
  all: unset;
  padding: .5rem 1rem;
  border: 1px solid black;
  margin: 1rem;
  transition: all .33s;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: white;
  }
}
</style>
