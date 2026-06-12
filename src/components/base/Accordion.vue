<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
      :class="{ open: openItems.includes(index) }"
    >
      <!-- Header -->
      <button class="accordion-header" @click="toggle(index)">
        <slot
          name="header"
          :item="item"
          :index="index"
          :is-open="openItems.includes(index)"
        >
          <span>{{ item.title }}</span>
        </slot>
        <span class="arrow" :class="{ rotated: openItems.includes(index) }"
          >▼</span
        >
      </button>

      <!-- Content через SCOPED SLOT -->
      <transition name="accordion">
        <div v-if="openItems.includes(index)" class="accordion-content">
          <slot
            name="content"
            :item="item"
            :index="index"
            :close="() => toggle(index)"
          >
            <p>{{ item.content }}</p>
          </slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
});

const openItems = ref([]);

function toggle(index) {
  if (openItems.value.includes(index)) {
    openItems.value = openItems.value.filter((i) => i !== index);
  } else {
    // Если multiple=false, закрываем остальные
    openItems.value = [index];
  }
}
</script>

<style scoped>
.accordion {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.accordion-item {
  border-bottom: 1px solid #e0e0e0;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  width: 100%;
  padding: 1.25rem 1.5rem;
  background: transparent;
  border: none;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s;
}

.accordion-header:hover {
  background: #f8f9fa;
}

.arrow {
  transition: transform 0.3s;
  color: #667eea;
}

.arrow.rotated {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 0 1.5rem 1.5rem 1.5rem;
  color: #666;
  line-height: 1.6;
}

/* Animations */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
