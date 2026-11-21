// ============================================================
// Пара 25: Вывод и фильтрация каталога (с доп. заданием)
// ============================================================

// 1. Переносим массив из catalog.js
const catalog = [
  { position: 1, name: "Путешествие к морю", specs: "Для одного участника", description: "Материалы для первого упражнения" },
  { position: 2, name: "Вторая карточка", specs: "Характеристика второй", description: "Описание второй карточки" },
  { position: 3, name: "Третья карточка", specs: "Характеристика третьей", description: "Описание третьей карточки" }
];

// 2. ОСНОВНАЯ функция фильтрации (по названию) из пары 22
function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") {
    return items;
  }
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

// 3. ДОПОЛНИТЕЛЬНАЯ функция фильтрации (по названию и характеристике)
function filterByTextAndSpecs(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") {
    return items;
  }
  return items.filter(item =>
    item.name.toLowerCase().includes(normalized) ||
    item.specs.toLowerCase().includes(normalized)
  );
}

// 4. Находим элементы на странице
const catalogList = document.querySelector("#catalog-list");
const statusText = document.querySelector("#status");
const searchInput = document.querySelector("#search");

// 5. Функция сборки карточек
function renderCatalog(items) {
  catalogList.replaceChildren(); // Очищаем контейнер

  for (const item of items) {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = item.name;

    const specs = document.createElement("p");
    specs.textContent = item.specs;

    const description = document.createElement("p");
    description.textContent = item.description;

    card.append(title, specs, description);
    catalogList.append(card);
  }

  // Обновляем счётчик
  if (items.length === 0) {
    statusText.textContent = "Ничего не найдено";
  } else {
    statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
  }
}

// 6. Первый запуск (показываем весь каталог)
renderCatalog(catalog);

// 7. Обработчик поиска (используем ДОПОЛНИТЕЛЬНУЮ функцию)
searchInput.addEventListener("input", function () {
  // Внимание: здесь вызывается filterByTextAndSpecs вместо filterByText
  const found = filterByTextAndSpecs(catalog, searchInput.value);
  renderCatalog(found);
});