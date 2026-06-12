<template>
  <div class="about">
    <h1>{{ t("about.title") }}</h1>

    <div class="content-card">
      <p>{{ t("about.description") }}</p>

      <h3>{{ t("about.features") }}</h3>
      <ul>
        <li>✅ {{ t("app.nav.home") }} - {{ t("home.hero.title") }}</li>
        <li>✅ {{ t("app.nav.countries") }} - {{ t("countries.title") }}</li>
        <li>
          ✅ {{ t("countries.phrases") }} - {{ t("phrases.hello") }},
          {{ t("phrases.thankYou") }}
        </li>
        <li>✅ {{ t("countries.currency") }} - {{ n(100, "currency") }}</li>
        <li>
          ✅ {{ t("countries.population") }} - {{ n(1000000, "decimal") }}
        </li>
        <li>
          ✅ 4 {{ t("home.features.cards.languages.title") }}: 🇷🇺 🇬🇧 🇪🇸 🇫🇷
        </li>
      </ul>

      <h3>{{ t("about.tech") }}</h3>
      <ul>
        <li>Vue 3 (Composition API)</li>
        <li>vue-i18n 9</li>
        <li>Vite</li>
        <li>CSS3</li>
      </ul>

      <div class="demo-section">
        <h3>Демонстрация форматирования:</h3>

        <div class="demo-item">
          <strong>Числа:</strong> {{ n(1234567.89, "decimal") }}
        </div>

        <div class="demo-item">
          <strong>Валюта:</strong> {{ n(99.99, "currency") }}
        </div>

        <div class="demo-item">
          <strong>Проценты:</strong> {{ n(0.75, "percent") }}
        </div>

        <div class="demo-item">
          <strong>Дата:</strong> {{ d(new Date(), "long") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t, n, d } = useI18n();
</script>

<style scoped>
.about {
  animation: fadeIn 0.5s ease;
}

h1 {
  color: white;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.content-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.content-card h3 {
  color: #667eea;
  margin: 2rem 0 1rem 0;
}

.content-card p {
  line-height: 1.8;
  color: #555;
  margin-bottom: 1rem;
}

.content-card ul {
  line-height: 2;
  color: #555;
  padding-left: 2rem;
}

.demo-section {
  margin-top: 2rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.demo-item {
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: white;
  border-radius: 8px;
  font-size: 1.1rem;
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
