<template>
  <div class="tabs">
    <!-- Навигация вкладок -->
    <div class="tabs-nav">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Контент вкладок через SCOPED SLOTS -->
    <div class="tabs-content">
      <slot :name="activeTab" :active-tab="activeTab" :tabs="tabs">
        <p class="fallback-text">Контент вкладки не передан</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    // Формат: [{ id: 'overview', label: 'Обзор' }, ...]
  },
  defaultTab: {
    type: String,
    default: "",
  },
});

const activeTab = ref(props.defaultTab || props.tabs[0]?.id || "");
</script>

<style scoped>
.tabs {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tabs-nav {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #f8f9fa;
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
  background: white;
  color: #667eea;
}

.tab-btn.active {
  background: #667eea;
  color: white;
}

.tabs-content {
  padding: 2rem;
  min-height: 300px;
}

.fallback-text {
  color: #999;
  font-style: italic;
  text-align: center;
}
</style>
