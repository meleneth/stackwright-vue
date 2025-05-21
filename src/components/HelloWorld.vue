<template>
  <h1>{{ msg }}</h1>
  <p>Count: {{ counter.count }}</p>
  <button @click="counter.increment()">+1</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

defineProps<{
  msg: string
}>()

const counter = useCounterStore()
</script>
