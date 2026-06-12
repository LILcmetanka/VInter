<template>
  <div class="slots-demo">
    <h1>🎰 Демонстрация слотов Vue.js</h1>
    <p class="subtitle">Все виды слотов в одном месте</p>

    <!-- 1. Default Slot -->
    <section class="demo-section">
      <h2>1️⃣ Default Slot (слот по умолчанию)</h2>
      <p>Основной контент компонента</p>

      <div class="demo-grid">
        <BaseCard>
          <h3>🎯 Простая карточка</h3>
          <p>
            Это контент переданный через default slot. Он отображается в
            основном теле карточки.
          </p>
        </BaseCard>

        <BaseCard>
          <h3>🎨 Другая карточка</h3>
          <p>
            Та же компонента, но с другим контентом. Слоты делают компоненты
            гибкими!
          </p>
        </BaseCard>
      </div>
    </section>

    <!-- 2. Named Slots -->
    <section class="demo-section">
      <h2>2️⃣ Named Slots (именованные слоты)</h2>
      <p>Разные области компонента для разного контента</p>

      <div class="demo-grid">
        <BaseCard>
          <template #image>
            <div class="demo-image">🖼️ Изображение</div>
          </template>

          <template #header>
            <h3>📌 Заголовок карточки</h3>
          </template>

          <p>Это основной контент (default slot)</p>
          <p>Он находится между header и footer</p>

          <template #footer>
            <div class="demo-footer">📍 Footer карточки</div>
          </template>

          <template #actions>
            <div class="demo-actions">
              <button class="btn btn-primary">⚡ Действие 1</button>
              <button class="btn btn-secondary">⚡ Действие 2</button>
            </div>
          </template>
        </BaseCard>
      </div>
    </section>

    <!-- 3. Fallback Content -->
    <section class="demo-section">
      <h2>3️⃣ Fallback Content (резервный контент)</h2>
      <p>Контент по умолчанию, если слот не передан</p>

      <div class="demo-grid">
        <BaseCard>
          <h3>Карточка БЕЗ footer</h3>
          <p>Footer не передан, поэтому показывается fallback</p>
        </BaseCard>

        <BaseCard>
          <h3>Карточка С footer</h3>
          <p>А тут footer передан явно</p>
          <template #footer>
            <div class="demo-footer">✨ Кастомный footer!</div>
          </template>
        </BaseCard>
      </div>
    </section>

    <!-- 4. Scoped Slots -->
    <section class="demo-section">
      <h2>4️⃣ Scoped Slots (слоты с данными)</h2>
      <p>Родитель получает данные от дочернего компонента</p>

      <h3>📋 DataList с кастомным рендерингом:</h3>
      <DataList :items="demoCountries" item-key="id">
        <template #item="{ item, index, isFirst, isLast }">
          <div class="custom-country" :class="{ first: isFirst, last: isLast }">
            <span class="number">#{{ index + 1 }}</span>
            <span class="flag">{{ item.flag }}</span>
            <div class="info">
              <strong>{{ item.name }}</strong>
              <span class="capital">{{ item.capital }}</span>
            </div>
            <span class="badge">{{ item.tag }}</span>
          </div>
        </template>

        <template #footer="{ count }">
          <div class="list-footer">
            📊 Всего стран: <strong>{{ count }}</strong>
          </div>
        </template>
      </DataList>

      <h3 style="margin-top: 2rem">🪗 Accordion со scoped slots:</h3>
      <Accordion :items="faqItems">
        <template #header="{ item, isOpen }">
          <span class="custom-header">
            <span class="icon">{{ isOpen ? "🔓" : "🔒" }}</span>
            {{ item.question }}
          </span>
        </template>

        <template #content="{ item, close }">
          <div class="custom-content">
            <p>{{ item.answer }}</p>
            <button class="btn btn-small" @click="close">Закрыть</button>
          </div>
        </template>
      </Accordion>
    </section>

    <!-- 5. Tabs со scoped slots -->
    <section class="demo-section">
      <h2>5️⃣ Tabs с scoped slots</h2>
      <p>Вкладки с доступом к данным о текущей вкладке</p>

      <Tabs :tabs="tabsData" default-tab="info">
        <template #info="{ activeTab }">
          <div class="tab-content-custom">
            <h3>ℹ️ Информация</h3>
            <p>
              Текущая вкладка: <strong>{{ activeTab }}</strong>
            </p>
            <p>Это контент вкладки "Информация"</p>
          </div>
        </template>

        <template #stats="{ activeTab }">
          <div class="tab-content-custom">
            <h3>📊 Статистика</h3>
            <p>
              Текущая вкладка: <strong>{{ activeTab }}</strong>
            </p>
            <div class="stats-demo">
              <div class="stat-box">
                <div class="stat-number">150+</div>
                <div class="stat-label">Стран</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">4</div>
                <div class="stat-label">Языка</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">1000+</div>
                <div class="stat-label">Отзывов</div>
              </div>
            </div>
          </div>
        </template>

        <template #contact="{ activeTab }">
          <div class="tab-content-custom">
            <h3>📞 Контакты</h3>
            <p>
              Текущая вкладка: <strong>{{ activeTab }}</strong>
            </p>
            <p>📧 Email: info@travel.guide</p>
            <p>📱 Phone: +1 234 567 890</p>
          </div>
        </template>
      </Tabs>
    </section>

    <!-- 6. Modal с slots -->
    <section class="demo-section">
      <h2>6️⃣ Modal с named slots</h2>
      <p>Модальное окно с кастомным контентом</p>

      <button class="btn btn-primary" @click="showModal = true">
        🪟 Открыть модальное окно
      </button>

      <Modal v-model="showModal" size="medium">
        <template #header>
          <h2>🌍 Кастомный заголовок модалки</h2>
        </template>

        <div class="modal-content-demo">
          <p>Это контент модального окна, переданный через default slot.</p>
          <p>Мы можем передать <strong>любой HTML</strong> внутрь модалки!</p>

          <div class="demo-grid">
            <div class="info-box">📦 Блок 1</div>
            <div class="info-box">📦 Блок 2</div>
          </div>
        </div>

        <template #footer>
          <button class="btn btn-secondary" @click="showModal = false">
            Отмена
          </button>
          <button class="btn btn-primary" @click="confirmAction">
            ✅ Подтвердить
          </button>
        </template>
      </Modal>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseCard from "../components/base/BaseCard.vue";
import Modal from "../components/base/Modal.vue";
import Tabs from "../components/base/Tabs.vue";
import Accordion from "../components/base/Accordion.vue";
import DataList from "../components/base/DataList.vue";

const showModal = ref(false);

const demoCountries = [
  { id: 1, flag: "🇯🇵", name: "Япония", capital: "Токио", tag: "🔥 Топ" },
  { id: 2, flag: "🇮🇹", name: "Италия", capital: "Рим", tag: "🍕 Еда" },
  { id: 3, flag: "🇫🇷", name: "Франция", capital: "Париж", tag: "❤️ Любовь" },
  { id: 4, flag: "🇪🇸", name: "Испания", capital: "Мадрид", tag: "☀️ Солнце" },
];

const faqItems = [
  {
    question: "Что такое слоты в Vue.js?",
    answer:
      "Слоты - это механизм для передачи контента от родительского компонента к дочернему. Они делают компоненты гибкими и переиспользуемыми.",
  },
  {
    question: "Какие виды слотов существуют?",
    answer:
      "Default slot (по умолчанию), Named slots (именованные), Scoped slots (с данными), Dynamic slots (динамические).",
  },
  {
    question: "Что такое scoped slots?",
    answer:
      "Scoped slots позволяют дочернему компоненту передавать данные обратно в родительский слот. Родитель решает, как отрендерить эти данные.",
  },
  {
    question: "Зачем нужны fallback slots?",
    answer:
      "Fallback контент показывается, если родитель не передал контент в слот. Это обеспечивает разумное поведение по умолчанию.",
  },
];

const tabsData = [
  { id: "info", label: "ℹ️ Информация" },
  { id: "stats", label: "📊 Статистика" },
  { id: "contact", label: "📞 Контакты" },
];

function confirmAction() {
  alert("✅ Действие подтверждено!");
  showModal.value = false;
}
</script>

<style scoped>
.slots-demo {
  animation: fadeIn 0.5s ease;
}

h1 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

.subtitle {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-size: 1.2rem;
}

.demo-section {
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.demo-section h2 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.demo-section > p {
  color: #666;
  margin-bottom: 1.5rem;
}

.demo-section h3 {
  color: #333;
  margin: 1.5rem 0 1rem 0;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.demo-image {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.demo-footer {
  background: #f8f9fa;
  padding: 1rem 1.5rem;
  text-align: center;
  color: #667eea;
  font-weight: 500;
}

.demo-actions {
  padding: 1rem 1.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: #f0f0f0;
  color: #333;
}

.btn-secondary:hover {
  background: #e0e0e0;
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;
}

/* Custom scoped slot styles */
.custom-country {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s;
}

.custom-country:hover {
  background: #e8f5e9;
  transform: translateX(5px);
}

.custom-country.first {
  border-left: 4px solid gold;
}

.custom-country.last {
  border-left: 4px solid #667eea;
}

.number {
  font-weight: bold;
  color: #667eea;
  min-width: 30px;
}

.flag {
  font-size: 2rem;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.capital {
  color: #666;
  font-size: 0.9rem;
}

.badge {
  background: #667eea;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
}

.list-footer {
  padding: 1rem 1.5rem;
  background: #f8f9fa;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}

.custom-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

.icon {
  font-size: 1.2rem;
}

.custom-content {
  padding: 0.5rem 0;
}

.custom-content p {
  margin-bottom: 0.5rem;
}

.tab-content-custom {
  animation: fadeIn 0.3s ease;
}

.tab-content-custom h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

.stats-demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
}

.stat-box {
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.modal-content-demo p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.info-box {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
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
