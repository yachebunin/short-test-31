<template>
  <div class="card h-100">
    <img :src="car.image" class="card-img-top" :alt="car.title" />
    <div class="card-body">
      <h5 class="card-title">{{ car.title }}</h5>
      <p class="card-text">Объем двигателя: {{ car.engine_volume }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Car } from '~/types/Car';

defineProps<{
  car: Car;
}>();
</script>
