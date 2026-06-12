<template>
  <div class="country-detail" v-if="country">
    <router-link to="/countries" class="back-link">
      ← {{ t("country.back") }}
    </router-link>

    <div class="country-header">
      <div class="flag-large">{{ country.flag }}</div>
      <div class="country-info">
        <h1>{{ country.name[locale] }}</h1>
        <p class="description">{{ country.description[locale] }}</p>

        <div class="rating-large">
          ⭐ {{ country.rating }} ({{ country.reviews }}
          {{ t("countries.reviews") }})
        </div>
      </div>
    </div>

    <nav class="sub-nav">
      <button
        @click="activeTab = 'overview'"
        :class="['tab-btn', { active: activeTab === 'overview' }]"
      >
        📖 {{ t("country.overview") }}
      </button>
      <button
        @click="activeTab = 'facts'"
        :class="['tab-btn', { active: activeTab === 'facts' }]"
      >
        📊 {{ t("country.facts") }}
      </button>
      <button
        @click="activeTab = 'travel'"
        :class="['tab-btn', { active: activeTab === 'travel' }]"
      >
        ✈️ {{ t("country.travel") }}
      </button>
      <button
        @click="activeTab = 'phrases'"
        :class="['tab-btn', { active: activeTab === 'phrases' }]"
      >
        💬 {{ t("country.phrases") }}
      </button>
    </nav>

    <div class="content">
      <!-- Overview -->
      <div v-if="activeTab === 'overview'" class="tab-content">
        <h2>{{ country.name[locale] }}</h2>
        <p>{{ country.description[locale] }}</p>

        <h3>{{ t("countries.attractions") }}</h3>
        <ul class="attractions-list">
          <li v-for="(attraction, index) in country.attractions" :key="index">
            {{ attraction[locale] }}
          </li>
        </ul>
      </div>

      <!-- Facts -->
      <div v-if="activeTab === 'facts'" class="tab-content">
        <div class="facts-grid">
          <div class="fact-item">
            <span class="fact-icon">🏛️</span>
            <div class="fact-info">
              <span class="fact-label">{{ t("country.capital") }}</span>
              <span class="fact-value">{{ country.capital[locale] }}</span>
            </div>
          </div>

          <div class="fact-item">
            <span class="fact-icon">👥</span>
            <div class="fact-info">
              <span class="fact-label">{{ t("country.population") }}</span>
              <span class="fact-value">{{
                n(country.population, "decimal")
              }}</span>
            </div>
          </div>

          <div class="fact-item">
            <span class="fact-icon">📏</span>
            <div class="fact-info">
              <span class="fact-label">{{ t("country.area") }}</span>
              <span class="fact-value"
                >{{ n(country.area, "decimal") }} км²</span
              >
            </div>
          </div>

          <div class="fact-item">
            <span class="fact-icon">💰</span>
            <div class="fact-info">
              <span class="fact-label">{{ t("country.gdp") }}</span>
              <span class="fact-value">{{
                n(country.budget * 365, "currency")
              }}</span>
            </div>
          </div>

          <div class="fact-item">
            <span class="fact-icon">🗣️</span>
            <div class="fact-info">
              <span class="fact-label">{{ t("country.language") }}</span>
              <span class="fact-value">{{ country.language[locale] }}</span>
            </div>
          </div>

          <div class="fact-item">
            <span class="fact-icon">💵</span>
            <div class="fact-info">
              <span class="fact-label">{{ t("country.currency") }}</span>
              <span class="fact-value">{{ country.currency }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Travel -->
      <div v-if="activeTab === 'travel'" class="tab-content">
        <div class="travel-info">
          <div class="info-card">
            <h3>📅 {{ t("countries.bestTime") }}</h3>
            <p>{{ country.bestTime[locale] }}</p>
          </div>

          <div class="info-card">
            <h3>💰 {{ t("countries.budget") }}</h3>
            <p class="budget-value">{{ n(country.budget, "currency") }}</p>
          </div>

          <div class="info-card">
            <h3>⭐ {{ t("countries.rating") }}</h3>
            <p class="rating-value">{{ country.rating }} / 5.0</p>
          </div>
        </div>
      </div>

      <!-- Phrases -->
      <div v-if="activeTab === 'phrases'" class="tab-content">
        <div class="phrases-list">
          <div class="phrase-item">
            <span class="phrase-label">{{ t("phrases.hello") }}</span>
            <span class="phrase-value">{{
              country.phrases.hello[locale]
            }}</span>
          </div>

          <div class="phrase-item">
            <span class="phrase-label">{{ t("phrases.thankYou") }}</span>
            <span class="phrase-value">{{
              country.phrases.thankYou[locale]
            }}</span>
          </div>

          <div class="phrase-item">
            <span class="phrase-label">{{ t("phrases.goodbye") }}</span>
            <span class="phrase-value">{{
              country.phrases.goodbye[locale]
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <h2>😕 {{ t("common.notFound") }}</h2>
    <router-link to="/countries" class="btn">{{
      t("country.back")
    }}</router-link>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { getCountryById } from "../data/countries";

const route = useRoute();
const { t, n, locale } = useI18n();

const country = computed(() => getCountryById(route.params.id));
const activeTab = ref("overview");
</script>

<style scoped>
.country-detail {
  animation: fadeIn 0.5s ease;
}

.back-link {
  display: inline-block;
  color: white;
  text-decoration: none;
  margin-bottom: 1.5rem;
  font-weight: 500;
  transition: opacity 0.3s;
}

.back-link:hover {
  opacity: 0.8;
}

.country-header {
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.flag-large {
  font-size: 6rem;
}

.country-info h1 {
  margin: 0 0 1rem 0;
  color: #667eea;
  font-size: 2.5rem;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.rating-large {
  font-size: 1.2rem;
  color: #ff9800;
  font-weight: 600;
}

.sub-nav {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.5rem;
  border-radius: 15px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  background: transparent;
  color: #666;
  border-radius: 10px;
  transition: all 0.3s;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
}

.tab-btn:hover {
  background: #f0f0f0;
  color: #667eea;
}

.tab-btn.active {
  background: #667eea;
  color: white;
}

.content {
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 20px;
  min-height: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.tab-content {
  animation: fadeIn 0.3s ease;
}

.tab-content h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.tab-content h3 {
  color: #333;
  margin: 2rem 0 1rem 0;
}

.attractions-list {
  list-style: none;
  padding: 0;
}

.attractions-list li {
  padding: 0.75rem;
  background: #f8f9fa;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.fact-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.fact-icon {
  font-size: 2.5rem;
}

.fact-info {
  display: flex;
  flex-direction: column;
}

.fact-label {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.fact-value {
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
}

.travel-info {
  display: grid;
  gap: 1.5rem;
}

.info-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
}

.info-card h3 {
  margin: 0 0 1rem 0;
  color: #667eea;
}

.budget-value,
.rating-value {
  font-size: 2rem;
  font-weight: bold;
  color: #4caf50;
}

.phrases-list {
  display: grid;
  gap: 1rem;
}

.phrase-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.phrase-label {
  color: #666;
  font-weight: 500;
}

.phrase-value {
  color: #667eea;
  font-size: 1.2rem;
  font-weight: 600;
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.3s;
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
