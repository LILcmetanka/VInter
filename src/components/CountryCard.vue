<template>
  <router-link
    :to="{ name: 'CountryDetail', params: { id: country.id } }"
    class="country-card"
  >
    <div class="flag">{{ country.flag }}</div>
    <div class="info">
      <h3>{{ country.name[locale] }}</h3>
      <p class="capital">
        🏛️ {{ t("countries.capital") }}: {{ country.capital[locale] }}
      </p>

      <div class="stats">
        <div class="stat">
          <span class="label">👥 {{ t("countries.population") }}</span>
          <span class="value">{{ n(country.population, "decimal") }}</span>
        </div>
        <div class="stat">
          <span class="label">📏 {{ t("countries.area") }}</span>
          <span class="value">{{ n(country.area, "decimal") }} км²</span>
        </div>
      </div>

      <div class="footer">
        <div class="rating">
          ⭐ {{ country.rating }} ({{ country.reviews }}
          {{ t("countries.reviews") }})
        </div>
        <div class="budget">
          💰 {{ n(country.budget, "currency") }}/{{
            t("countries.budget").split(" ")[0]
          }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const props = defineProps({
  country: {
    type: Object,
    required: true,
  },
});

const { t, n, locale } = useI18n();
</script>

<style scoped>
.country-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  display: flex;
  gap: 1.5rem;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.country-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.flag {
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info {
  flex: 1;
}

.info h3 {
  margin: 0 0 0.5rem 0;
  color: #667eea;
  font-size: 1.5rem;
}

.capital {
  color: #666;
  margin: 0 0 1rem 0;
  font-size: 0.95rem;
}

.stats {
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1rem;
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

.footer {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
  font-size: 0.9rem;
}

.rating {
  color: #ff9800;
  font-weight: 600;
}

.budget {
  color: #4caf50;
  font-weight: 600;
}
</style>
