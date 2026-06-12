<template>
  <div class="countries">
    <h1>{{ t("countries.title") }}</h1>

    <div class="search-box">
      <input
        v-model="searchQuery"
        type="text"
        :placeholder="t('countries.search')"
        class="search-input"
      />
    </div>

    <div class="countries-grid">
      <CountryCard
        v-for="country in filteredCountries"
        :key="country.id"
        :country="country"
      />
    </div>

    <div v-if="filteredCountries.length === 0" class="no-results">
      <p>😕 {{ t("common.notFound") }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { countries } from "../data/countries";
import CountryCard from "../components/CountryCard.vue";

const { t, locale } = useI18n();
const searchQuery = ref("");

const filteredCountries = computed(() => {
  if (!searchQuery.value) return countries;

  const query = searchQuery.value.toLowerCase();
  return countries.filter((country) => {
    const name = country.name[locale.value].toLowerCase();
    return name.includes(query);
  });
});
</script>

<style scoped>
.countries {
  animation: fadeIn 0.5s ease;
}

h1 {
  color: white;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.search-box {
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
}

.countries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.no-results {
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  font-size: 1.2rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
