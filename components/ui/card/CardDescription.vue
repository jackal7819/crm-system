<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p :class="cn('text-xl text-slate-500 dark:text-slate-400 pt-3', props.class)">
    <slot />
  </p>
</template>
