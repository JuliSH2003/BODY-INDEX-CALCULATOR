/* ЗАДАЧА:

1. - Вам нужно создать калькулятор индекса массы тела (BMI).

2. - Индекс массы тела рассчитывается по формуле: 
вес в Кг / Рост в квадрате.

Например, масса человека = 74 кг, рост = 172 см. Следовательно, индекс массы тела в этом случае равен:
ИМТ = 74кг / 1,722м² ≈ 25,01 кг/м²

3. Сравнить массы тел двух людей (данные ниже), и вывести в консоль сравнения двух результатов в булевом значении (true / false).

ДАННЫЕ:

    Петр: Вес: 72кг рост: 1.88м
    Денис: Вес: 82кг рост: 1.73м

4. У кого индекс BMI больше?*/

const weightPeter = 72,
    growthPeter = 1.88,
    weightDenis = 82,
    growthDenis =1.73;

const bicPeter = weightPeter/growthPeter**2,
    bicDenis = weightDenis/ growthDenis**2,
    bic = bicPeter < bicDenis;

console.log(bic);
console.log (bicPeter);
console.log (bicDenis);
