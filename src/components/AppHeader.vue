<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="logo"> 🌍 {{ t("app.title") }} </router-link>

      <nav class="nav">
        <router-link to="/" class="nav-link">{{
          t("app.nav.home")
        }}</router-link>
        <router-link to="/countries" class="nav-link">{{
          t("app.nav.countries")
        }}</router-link>
        <router-link to="/slots-demo" class="nav-link">🎰 Слоты</router-link>
        <router-link to="/about" class="nav-link">{{
          t("app.nav.about")
        }}</router-link>
      </nav>

      <LanguageSwitcher />
    </div>
  </header>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LanguageSwitcher from "./LanguageSwitcher.vue";

const { t } = useI18n();
</script>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
  text-decoration: none;
  transition: transform 0.2s;
}

.logo:hover {
  transform: scale(1.05);
}

.nav {
  display: flex;
  gap: 1.5rem;
  flex: 1;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s;
}

.nav-link:hover {
  background: #f0f0f0;
  color: #667eea;
}

.nav-link.router-link-active {
  background: #667eea;
  color: white;
}
</style>
