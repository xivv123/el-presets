<template>
    <div>
      <slot :attrs="attrs"></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const { attrs } = defineProps({
    attrs: {
      type: Object,
      default: () => ({})
    }
  });
  </script>