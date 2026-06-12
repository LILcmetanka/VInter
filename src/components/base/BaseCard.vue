<template>
  <div
    class="base-card"
    :class="{ hoverable, clickable }"
    @click="$emit('click')"
  >
    <!-- Слот для изображения -->
    <slot name="image">
      <!-- Fallback контент, если слот не передан -->
    </slot>

    <!-- Слот для заголовка -->
    <slot name="header">
      <!-- Fallback контент -->
    </slot>

    <!-- Основной контент (default slot) -->
    <div class="card-body">
      <slot>
        <!-- Fallback контент -->
        <p class="fallback-text">Контент не передан</p>
      </slot>
    </div>

    <!-- Слот для footer -->
    <slot name="footer">
      <!-- Fallback контент -->
    </slot>

    <!-- Слот для действий (кнопки и т.д.) -->
    <slot name="actions">
      <!-- Fallback контент -->
    </slot>
  </div>
</template>

<script setup>
defineProps({
  hoverable: {
    type: Boolean,
    default: true,
  },
  clickable: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["click"]);
</script>

<style scoped>
.base-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.base-card.hoverable:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.base-card.clickable {
  cursor: pointer;
}

.card-body {
  padding: 1.5rem;
}

.fallback-text {
  color: #999;
  font-style: italic;
  text-align: center;
}
</style>
