let priceSlider = document.getElementById("price");
let squareSlider = document.getElementById("square");
let filterPriceSlider = document.getElementById("filterPrice");
// Инициализация Slider.js

// Первым параметром передаётся контейнер слайдера(в нашем случае переменная priceSlider 
// со значением document.getElementById('price')), а второй параметр - объект с параметрами слайдера
noUiSlider.create(priceSlider, {
    // Значения начала и конца слайдера по умолчанию
    start: [0, 500],
    // Соединить две кнопки слайдера линией
    connect: true,
    // Диапазон значений
    range: {
        'min': 0,
        'max': 500,
    },
    // Шаг кнопки
    step: 1,
    // Максимальный отступ между двумя кнопками (в данном случае оно не может быть больше 1000)
    margin: 10,
    // Для формата значения(добавление в конце чисел знака ₽), используется бибилиотека wNumb.js
    tooltips: true,
    format: wNumb({
        decimals: 0,
        // Знак, который ставится после значения
        suffix: " млн. ₽"
    }),
});


noUiSlider.create(squareSlider, {
    start: [0, 16000],
    connect: true,
    range: {
        'min': 0,
        'max': 16000,
    },
    step: 100,
    margin: 100,
    tooltips: true,
    format: wNumb({
        decimals: 0,
        suffix: " м²"
    }),
});

noUiSlider.create(filterPriceSlider, {
    // Значения начала и конца слайдера по умолчанию
    start: [0, 500],
    // Соединить две кнопки слайдера линией
    connect: true,
    // Диапазон значений
    range: {
        'min': 0,
        'max': 500,
    },
    // Шаг кнопки
    step: 1,
    // Максимальный отступ между двумя кнопками (в данном случае оно не может быть больше 1000)
    margin: 10,
});

let priceMin, priceMax, squareMin, squareMax = 0;

let button = document.querySelector("#submitButton");

button.addEventListener("click", e => {
    e.preventDefault();
    priceMin = parseInt(price.noUiSlider.get()[0].replace(/[^0-9]/g, ''), 10);
    priceMax = parseInt(price.noUiSlider.get()[1].replace(/[^0-9]/g, ''), 10);
    squareMin = parseInt(square.noUiSlider.get()[0].replace(/[^0-9]/g, ''), 10);
    squareMax = parseInt(square.noUiSlider.get()[1].replace(/[^0-9]/g, ''), 10);
    alert(`Информация\n
                    Минимальная площадь: ${squareMin}м²\n
                    Максимальная площадь: ${squareMax}м²\n
                    Минимальная цена: ${priceMin} млн. ₽\n
                    Максимальная цена: ${priceMax} млн. ₽\n`);
});