const itemName = "Путешествие к морю";
const quantityText = "3";
const unitValue = 36;
const extraValue = 10;
const isTraining = true;

function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") {
    return "Ошибка: укажите количество";
  }

  const quantity = Number(quantityText);

  if (Number.isNaN(quantity) || !Number.isFinite(quantity)) {
    return "Ошибка: введите число";
  }

  if (quantity <= 0 || !Number.isInteger(quantity)) {
    return "Ошибка: нужно положительное целое количество";
  }

  const totalAmount = quantity * unitAmount + extraAmount;

  return "Итого: " + totalAmount;
}

const resultMessage = getResult(quantityText, unitValue, extraValue
);
console.log(resultMessage);

console.log("--- Испытания ---");

console.log("Мой вариант:          ", getResult("3",          unitValue, extraValue));
console.log("Одна единица:         ", getResult("1",          unitValue, extraValue));
console.log("Три единицы:          ", getResult("3",          unitValue, extraValue));
console.log("Пустое поле:          ", getResult("",           unitValue, extraValue));
console.log("Только пробелы:       ", getResult("   ",        unitValue, extraValue));
console.log("Слово:                ", getResult("два",        unitValue, extraValue));
console.log("Бесконечность:        ", getResult("Infinity",   unitValue, extraValue));
console.log("Ноль:                 ", getResult("0",          unitValue, extraValue));
console.log("Отрицательное:        ", getResult("-1",         unitValue, extraValue));
console.log("Дробное:              ", getResult("1.5",        unitValue, extraValue));
console.log("Пробелы вокруг числа: ", getResult(" 2 ",        unitValue, extraValue));

console.log("--- Дополнительные испытания ---");

console.log("Величина на единицу +10:", getResult("2", unitValue + 10, extraValue));
console.log("Общая добавка +10:      ", getResult("2", unitValue,      extraValue + 10));