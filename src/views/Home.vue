<template>
  <div class="home">
    <div class="hero">
      <h1>{{ t("home.hero.title") }}</h1>
      <p class="subtitle">{{ t("home.hero.subtitle") }}</p>

      <router-link to="/countries" class="btn btn-primary">
        {{ t("home.hero.cta") }} →
      </router-link>
    </div>

    <div class="features">
      <h2>{{ t("home.features.title") }}</h2>

      <div class="features-grid">
        <div class="feature-card">
          <div class="icon">📚</div>
          <h3>{{ t("home.features.cards.guide.title") }}</h3>
          <p>{{ t("home.features.cards.guide.description") }}</p>
        </div>

        <div class="feature-card">
          <div class="icon">🌐</div>
          <h3>{{ t("home.features.cards.languages.title") }}</h3>
          <p>{{ t("home.features.cards.languages.description") }}</p>
        </div>

        <div class="feature-card">
          <div class="icon">💱</div>
          <h3>{{ t("home.features.cards.currency.title") }}</h3>
          <p>{{ t("home.features.cards.currency.description") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
.home {
  animation: fadeIn 0.5s ease;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.hero h1 {
  font-size: 3rem;
  color: #667eea;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.features {
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.features h2 {
  text-align: center;
  color: #667eea;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  border-radius: 15px;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
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
