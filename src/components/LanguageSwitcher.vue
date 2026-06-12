<template>
  <div class="language-switcher">
    <button
      v-for="lang in languages"
      :key="lang.code"
      @click="changeLanguage(lang.code)"
      :class="['lang-btn', { active: currentLocale === lang.code }]"
      :title="lang.name"
    >
      <span class="flag">{{ lang.flag }}</span>
      <span class="code">{{ lang.code.toUpperCase() }}</span>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const languages = [
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

const currentLocale = computed(() => locale.value);

function changeLanguage(langCode) {
  locale.value = langCode;
  localStorage.setItem("locale", langCode);
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.lang-btn:hover {
  border-color: #667eea;
  transform: translateY(-2px);
}

.lang-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
}

.flag {
  font-size: 1.2rem;
}

.code {
  font-size: 0.9rem;
}
</style>
