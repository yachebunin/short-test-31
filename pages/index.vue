<template>
  <div class="bg-light">
    <div class="container py-5">
      <h1 class="text-center mb-5">Автомобилка</h1>
      <div v-if="isLoading" class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Загрузка...</span>
        </div>
      </div>
      <div v-else-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
      <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" v-for="car in cars" :key="car.id">
          <CarCard :car="car" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCarStore } from '~/stores/carStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import CarCard from '~/components/CarCard.vue';

const carStore = useCarStore();
const { cars, isLoading, error } = storeToRefs(carStore);

onMounted(() => {
  if (!cars.value.length) {
    carStore.fetchCars();
  }
});
</script>
