// 1. Объявляем переменные
let quantityText = "3"; // строковое количество (по заданию let)
const itemName = "Путешествие к морю";
const unitValue = 36; // стоимость одного экземпляра
const extraValue = 10; // стоимость упаковки
const isTraining = true; // учебный признак

// 2. Явное преобразование строки в число
const quantity = Number(quantityText);

// 3. Вычисление итоговой стоимости
const total = unitValue * quantity + extraValue;

// 4. Вывод в консоль
console.log("Название:", itemName);
console.log("Учебные данные:", isTraining);
console.log("Количество экземпляров:", quantity);
console.log("Общая стоимость:", total, "усл. руб.");
console.log("Тип строки количества:", typeof quantityText);
console.log("Тип количества после преобразования:", typeof quantity);
console.log("Тип итога:", typeof total);
console.log("Тип учебного признака:", typeof isTraining);