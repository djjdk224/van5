// ============================================================
// ОСНОВНАЯ РАБОТА (Пары 20-23)
// ============================================================

// Функция расчёта из пары 20
function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") return "Ошибка: укажите количество";
  const quantity = Number(quantityText);
  if (Number.isNaN(quantity) || !Number.isFinite(quantity)) return "Ошибка: введите число";
  if (quantity <= 0 || !Number.isInteger(quantity)) return "Ошибка: нужно положительное целое количество";
  return "Итого: " + (quantity * unitAmount + extraAmount);
}

// Массив карточек из пары 21
const catalog = [
  { position: 1, name: "Путешествие к морю", specs: "Для одного участника", description: "Материалы для первого упражнения" },
  { position: 2, name: "Вторая карточка", specs: "Характеристика второй", description: "Описание второй карточки" },
  { position: 3, name: "Третья карточка", specs: "Характеристика третьей", description: "Описание третьей карточки" }
];

const selectedName = "Путешествие к морю";
const quantityText = "3";
const unitValue = 36;
const extraValue = 10;

// Функция фильтрации из пары 22
function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") return items;
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

// DOM-элементы и события из пары 23
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const resetBtn = document.querySelector("#resetBtn");
const outputDiv = document.querySelector("#output");

// Поиск по кнопке
searchBtn.addEventListener("click", function() {
  const results = filterByText(catalog, searchInput.value);
  if (results.length === 0) {
    outputDiv.textContent = "Ничего не найдено.";
    return;
  }
  let text = "Найдено: " + results.length + "\n\n";
  for (let i = 0; i < results.length; i++) {
    text += "📖 " + results[i].name + "\n";
  }
  outputDiv.textContent = text;
});

// Сброс
resetBtn.addEventListener("click", function() {
  searchInput.value = "";
  outputDiv.textContent = "";
});

// Старые проверки в консоль
console.log("Записей: " + catalog.length);
console.log("Итого: " + getResult(quantityText, unitValue, extraValue));


// ============================================================
// ------------------------------------------------------------
// НОВОЕ: Вывод приветствия ПОСЛЕ работы программы
// ------------------------------------------------------------

// Находим блок для приветствия
const welcomeDiv = document.querySelector("#welcomeMsg");

// Выводим приветствие на страницу через JS
welcomeDiv.textContent = "Добро пожаловать!";