var priceSlider = document.getElementById('price');
var squareSlider = document.getElementById('square');

// Инициализация Slider.js

// Первым параметром передаётся контейнер слайдера(в нашем случае переменная priceSlider 
// со значением document.getElementById('price')), а второй параметр - объект с параметрами слайдера
noUiSlider.create(priceSlider, {
    // Значения начала и конца слайдера по умолчанию
    start: [0, 500000000],
    // Соединить две кнопки слайдера линией
    connect: true,
    // Диапазон значений
    range: {
        'min': 0,
        'max': 500000000,
    },
    // Шаг кнопки
    step: 1,
    // Максимальный отступ между двумя кнопками (в данном случае оно не может быть больше 1000)
    margin: 1000,
    // Для формата значения(добавление в конце чисел знака ₽), используется бибилиотека wNumb.js
    tooltips: true,
    format: wNumb({
        decimals: 0,
        // Знак, который ставится после значения
        suffix: " ₽"
    }),
});


noUiSlider.create(squareSlider, {
    start: [0, 16000],
    connect: true,
    range: {
        'min': 0,
        'max': 16000,
    },
    step: 1,
    margin: 100,
    tooltips: true,
    format: wNumb({
        decimals: 0,
        suffix: " м²"
    }),
});

var priceMin, priceMax, squareMin, squareMax = 0;