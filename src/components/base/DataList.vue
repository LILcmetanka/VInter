<template>
  <div class="data-list">
    <div v-if="items.length === 0" class="empty-state">
      <slot name="empty">
        <p>😕 Список пуст</p>
      </slot>
    </div>

    <div v-else class="list-items">
      <!-- SCOPED SLOT для кастомного рендеринга каждого элемента -->
      <slot
        v-for="(item, index) in items"
        :key="itemKey ? item[itemKey] : index"
        name="item"
        :item="item"
        :index="index"
        :is-first="index === 0"
        :is-last="index === items.length - 1"
      >
        <!-- Fallback: простой вывод -->
        <div class="list-item-default">
          {{ item }}
        </div>
      </slot>
    </div>

    <!-- Слот для footer списка -->
    <slot name="footer" :count="items.length">
      <!-- Fallback -->
    </slot>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  itemKey: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.data-list {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.empty-state {
  padding: 3rem;
  text-align: center;
  color: #999;
}

.list-items {
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
}

.list-item-default {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}
</style>
