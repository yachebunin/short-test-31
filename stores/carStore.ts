import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Car } from '~/types/Car';
import { useRuntimeConfig } from '#imports';

export const useCarStore = defineStore('carStore', () => {
    const cars = ref<Car[]>([]);
    const isLoading = ref(false);
    const error = ref<string | null>(null);
    const config = useRuntimeConfig();

    const fetchCars = async () => {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await fetch(`${config.public.apiBase}/cars/list`);
            if (!response.ok) {
                throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
            }
            const data = (await response.json()) as Car[];
            cars.value = data;
        } catch (err: any) {
            error.value = err.message || 'Неизвестная ошибка';
        } finally {
            isLoading.value = false;
        }
    };

    return {
        cars,
        isLoading,
        error,
        fetchCars,
    };
});
