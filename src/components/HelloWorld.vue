<template>
  <div class="text-center mt-8">
    <h1 class="text-3xl font-bold text-purple-600">{{ msg }}</h1>
    <p class="mt-4 text-lg">Count: {{ counter.count }}</p>
    <button @click="counter.increment()" class="mt-2 px-4 py-2 bg-purple-600 text-white rounded">
      +1
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

defineProps<{
  msg: string
}>()

const counter = useCounterStore()
</script>
