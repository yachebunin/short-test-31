import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiBase: 'https://am111.05.testing.place/api/v1',
    },
  },
  app: {
    head: {
      title: 'Автомобилка',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        },
      ],
    },
  },
});
