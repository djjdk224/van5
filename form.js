// ============================================================
// Пара 24: Обработка формы и вывод результата с сообщениями
// Вариант 05
// ============================================================

// 1. Переносим функцию из пары 20 (не переписываем!)
function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") {
    return "Укажите количество";
  }

  const quantity = Number(quantityText);

  if (Number.isNaN(quantity) || !Number.isFinite(quantity)) {
    return "Введите число";
  }

  if (quantity <= 0 || !Number.isInteger(quantity)) {
    return "Нужно положительное целое количество";
  }

  const totalAmount = quantity * unitAmount + extraAmount;
  return "Итого: " + totalAmount;
}

// 2. Константы из пары 20
const unitValue = 36;
const extraValue = 10;

// 3. Находим элементы
const form = document.querySelector("form");
const result = document.querySelector("#result");

// 4. Доп. задание: Счётчик отправок
let submitCount = 0;

// 5. Обработчик отправки
form.addEventListener("submit", function (event) {
  // Отменяем перезагрузку страницы
  event.preventDefault();

  // Читаем количество (это всегда строка)
  const quantityText = document.querySelector("#quantity").value;

  // Читаем название выбранной позиции (берём .text, а не .value)
  const select = document.querySelector("#item");
  const itemName = select.options[select.selectedIndex].text;

  // Считаем результат
  const message = getResult(quantityText, unitValue, extraValue);

  // Увеличиваем счётчик (доп. задание)
  submitCount = submitCount + 1;

  // Выводим на страницу с номером проверки
  result.textContent = "Проверка " + submitCount + ". " + itemName + ". " + message;
});