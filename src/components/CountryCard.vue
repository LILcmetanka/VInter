<template>
  <router-link
    :to="{ name: 'CountryDetail', params: { id: country.id } }"
    class="country-link"
  >
    <BaseCard hoverable clickable>
      <!-- Слот image -->
      <template #image>
        <div class="flag-container">
          <span class="flag">{{ country.flag }}</span>
        </div>
      </template>

      <!-- Слот header -->
      <template #header>
        <div class="card-header">
          <h3>{{ country.name[locale] }}</h3>
          <div class="rating">⭐ {{ country.rating }}</div>
        </div>
      </template>

      <!-- Default slot -->
      <p class="capital">🏛️ {{ country.capital[locale] }}</p>

      <div class="stats">
        <div class="stat">
          <span class="label">👥 {{ t("countries.population") }}</span>
          <span class="value">{{ n(country.population, "decimal") }}</span>
        </div>
        <div class="stat">
          <span class="label">💰 {{ t("countries.budget") }}</span>
          <span class="value budget">{{ n(country.budget, "currency") }}</span>
        </div>
      </div>

      <!-- Слот footer -->
      <template #footer>
        <div class="card-footer">
          <span>{{ country.reviews }} {{ t("countries.reviews") }}</span>
          <span class="arrow">→</span>
        </div>
      </template>
    </BaseCard>
  </router-link>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import BaseCard from "./base/BaseCard.vue";

defineProps({
  country: {
    type: Object,
    required: true,
  },
});

const { t, n, locale } = useI18n();
</script>

<style scoped>
.country-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.flag-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  text-align: center;
}

.flag {
  font-size: 5rem;
}

.card-header {
  padding: 1.5rem 1.5rem 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h3 {
  margin: 0;
  color: #667eea;
  font-size: 1.5rem;
}

.rating {
  background: #fff3e0;
  color: #ff9800;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-weight: 600;
  font-size: 0.9rem;
}

.capital {
  color: #666;
  margin: 0.5rem 0 1rem 0;
}

.stats {
  display: grid;
  gap: 0.5rem;
  margin-top: 1rem;
}

.stat {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.label {
  color: #666;
}

.value {
  font-weight: 600;
  color: #333;
}

.value.budget {
  color: #4caf50;
}

.card-footer {
  padding: 1rem 1.5rem;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
}

.arrow {
  font-size: 1.5rem;
  color: #667eea;
  transition: transform 0.3s;
}

.country-link:hover .arrow {
  transform: translateX(5px);
}
</style>
