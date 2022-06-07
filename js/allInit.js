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
    start: [0, 30000000],
    // Соединить две кнопки слайдера линией
    connect: true,
    // Диапазон значений
    range: {
        'min': 0,
        'max': 30000000,
    },
    // Шаг кнопки
    step: 1,
});

let priceMin, priceMax, squareMin, squareMax = 0;


let categoryCheckboxes = document.getElementsByClassName("category");
let categoryAll = document.querySelector(".category__all");
categoryAll.classList.add("selected");

for (let i = 0; i < categoryCheckboxes.length; i++) {
    categoryCheckboxes[i].addEventListener("click", function (event) {
        if (event.target.classList.contains("selected")) {
            event.target.classList.remove("selected");
            if (!(document.querySelector(".selected"))) categoryAll.classList.add("selected");
        } else {
            for (let j = 0; j < categoryCheckboxes.length; j++) {
                categoryCheckboxes[j].classList.remove("selected");
            }
            event.target.classList.add("selected");
        }
    });
}

let regionCheckboxes = document.getElementsByClassName("region__checkbox");
let checkedCheckboxes = [];

const input0 = document.getElementById("input-0");
const input1 = document.getElementById("input-1");
const inputs = [input0, input1];

filterPriceSlider.noUiSlider.on("update", function () {
    let filterPriceMin = Math.floor(filterPrice.noUiSlider.get()[0]);
    let filterPriceMax = Math.floor(filterPrice.noUiSlider.get()[1]);
    input0.value = filterPriceMin;
    input1.value = filterPriceMax;
});

const setPriceSliderRange = function (i, value) {
    let arr = [null, null];
    arr[i] = value;
    filterPriceSlider.noUiSlider.set(arr);
};

inputs.forEach((element, index) => {
    element.addEventListener("change", function (event) {
        setPriceSliderRange(index, event.currentTarget.value);
    });
});

let Button = document.querySelector("#sendButton");

sendButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("map").scrollIntoView();
    priceMin = parseInt(price.noUiSlider.get()[0].replace(/[^0-9]/g, ''), 10);
    priceMax = parseInt(price.noUiSlider.get()[1].replace(/[^0-9]/g, ''), 10);
    squareMin = parseInt(square.noUiSlider.get()[0].replace(/[^0-9]/g, ''), 10);
    squareMax = parseInt(square.noUiSlider.get()[1].replace(/[^0-9]/g, ''), 10);
    /* alert(`Информация\n
                    Минимальная площадь: ${squareMin}м²\n   
                    Максимальная площадь: ${squareMax}м²\n
                    Минимальная цена: ${priceMin} млн. ₽\n
                    Максимальная цена: ${priceMax} млн. ₽\n`); */
    
    window.open(`http://project5569567.tilda.ws/page27951809.html?tfc_price:max[451485822]=${priceMax}&tfc_price:min[451485822]=${priceMin}&tfc_div=:::`);
});


class Flat {
    constructor(categoryName, price, region, coordinates) {
        this.categoryName = categoryName;
        this.price = price;
        this.region = region;
        this.coordinates = coordinates;
    }

    get categoryName() {
        return this._categoryName;
    }

    set categoryName(text) {
        this._categoryName = text;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (!(value < 0 || value > 30000000)) {
            this._price = value;
        }
    }

    get region() {
        return this._region;
    }

    set region(text) {
        if (typeof text !== "string") {
            this._region = text.toString();
            return;
        }
        this._region = text;
    }

    get coordinates() {
        return this._coordinates;
    }

    set coordinates(arr) {
        this._coordinates = arr;
    }
}

// Добавление новых элементов с помощью конструктора класса Flat, 
// добавление этих элементов в массив flatsArray
let flatsArray = [];

let type_1 = "Коттеджы";
let type_2 = "Танхаусы";
let type_3 = "Квартиры";
let type_4 = "Участок";

let region_1 = "Одинцовский городской округ";
let region_2 = "ЦАО";

let address_1 = "коттеджный поселок Довиль";

let flat_1 = new Flat(type_1, 5500000, region_1, [55.679316, 37.381306]);
flatsArray.push(flat_1);
let flat_2 = new Flat(type_1, 8500000, region_1, [55.652563, 37.243999]);
flatsArray.push(flat_2);
let flat_3 = new Flat(type_1, 3715170, region_1, [55.653807, 37.243181]);
flatsArray.push(flat_3);
let flat_4 = new Flat(type_1, 7500000, region_1, [55.653228, 37.241241]);
flatsArray.push(flat_4);
let flat_5 = new Flat(type_2, 1415303, region_1, [55.652237, 37.244816]);
flatsArray.push(flat_5);
let flat_6 = new Flat(type_1, 8200000, region_1, [55.654416, 37.241277]);
flatsArray.push(flat_6);
let flat_7 = new Flat(type_1, 7400000, region_1, [55.654985, 37.239678]);
flatsArray.push(flat_7);
let flat_8 = new Flat(type_1, 1415303, region_1, [55.652720, 37.245266]);
flatsArray.push(flat_8);
let flat_9 = new Flat(type_1, 1415303, region_1, [55.650963, 37.244592]);
flatsArray.push(flat_9);
let flat_10 = new Flat(type_2, 1441839, region_1, [55.650632, 37.246254]);
flatsArray.push(flat_10);
let flat_11 = new Flat(type_2, 1857585, region_1, [55.649886, 37.246550]);
flatsArray.push(flat_11);
let flat_12 = new Flat(type_3, 1017956, region_2, [55.754177, 37.598519]);
flatsArray.push(flat_12);
let flat_13 = new Flat(type_3, 1146108, region_2, [55.753439, 37.598898]);
flatsArray.push(flat_13);
let flat_14 = new Flat(type_4, 2600000, region_1, [55.687949, 37.396236]);
flatsArray.push(flat_14);
let flat_15 = new Flat(type_1, 5041016, region_1, [55.649891, 37.247601]);
flatsArray.push(flat_15);
let flat_16 = new Flat(type_3, 2919062, region_1, [55.679935, 37.385780]);
flatsArray.push(flat_16);
let flat_17 = new Flat(type_1, 6500000, region_1, [55.649652, 37.248203]);
flatsArray.push(flat_17);
let flat_18 = new Flat(type_1, 30000000, region_1, [55.649500, 37.249578]);
flatsArray.push(flat_18);
let flat_19 = new Flat(type_3, 1220698, region_1, [55.652735, 37.252156]);
flatsArray.push(flat_19);
let flat_20 = new Flat(type_1, 3750000, region_1, [55.650241, 37.252021]);
flatsArray.push(flat_20);

let mapsFlatsArray = [];

let mainGeoObjects = [];

function init() {

    // Создаём коллекцию геообъектов и приваиваем это к массиву mainGeoObjects
    mainGeoObjects = new ymaps.GeoObjectCollection({}, {});

    // Присваиваем каждому элементу массива геометок квартир метод создания новой метки

    // В массив необходимо записать координаты метки (в квадратные скобки)
    /* mapsFlatsArray[0] = new ymaps.Placemark(flatsArray[0].coordinates, {
        // Текст при наведении мышью на метку
        hintContent: 'Квартира №1',
        // Контент, отображаемый при клике на метку (можно стилизировать)

    }, {
        iconLayout: 'default#image',
        // Путь до иконки метки
        iconImageHref: 'assets/icon.png',
        // Размеры метки
        iconImageSize: [45, 45],
        // Смещение "ножки" метки при увеличении масштаба
        iconImageOffset: [-35, -35]
    }); */


    for (let i = 0; i < flatsArray.length; i++) {
        mapsFlatsArray.push(new ymaps.Placemark(flatsArray[i].coordinates, {}, {
            iconLayout: 'default#image',
            iconImageHref: 'assets/icon.png',
            iconImageSize: [45, 45],
            iconImageOffset: [-35, -35]
        }));
    }

    // Создаём карту
    let mainMap = new ymaps.Map("map", {
        center: [55.679316, 37.381306],
        zoom: 12,
    });

    // Добавляем все елементы массива квартир в коллекцию геообъектов
    for (let i = 0; i < mapsFlatsArray.length; i++) {
        mainGeoObjects.add(mapsFlatsArray[i]);
    }

    // Добавляем на карту коллекцию геообъектов
    mainMap.geoObjects.add(mainGeoObjects);
    // Делаем размер масштаба карты таким, чтобы все точки на карте были видны
    mainMap.setBounds(mainGeoObjects.getBounds());

    // Обработчик событий для кнопки "Применить (фильтры)"
    let filterButton = document.querySelector("#filterButton");
    filterButton.addEventListener("click", function (event) {
        // убираем событые по умолчанию (перезагрузка страницы) для клика по кнопке
        event.preventDefault();
        checkedCheckboxes = [];
        for (let i = 0; i < regionCheckboxes.length; i++) {
            if (regionCheckboxes[i].checked) {
                checkedCheckboxes.push(document.querySelector(`label[for="${regionCheckboxes[i].id}"]`).innerHTML);
            }
        }

        let checkedCheckboxesInnerHTML = JSON.parse(JSON.stringify(checkedCheckboxes)).join(", ");

        if (checkedCheckboxesInnerHTML === "") checkedCheckboxesInnerHTML = "Пусто";

        alert("Категория: " +
            document.querySelector(".selected").innerHTML +
            "\nМинимальная цена: " +
            parseInt(filterPrice.noUiSlider.get()[0].replace(/[^0-9](.+)(.{2})/g, ''), 10) +
            "\nМаксимальная цена: " +
            parseInt(filterPrice.noUiSlider.get()[1].replace(/[^0-9](.+)(.{2})/g, ''), 10) +
            "\nВыбранные районы: " + checkedCheckboxesInnerHTML);


        ////document.getElementById("map").scrollIntoView();
        // С помощью геттера noUiSlider читаем все значения слайдеров в фильтре,
        // далее (из-за того, что с помощью библиотеки wNumb.js мы добавляем в конце чисел ₽ и кв. м.)
        // убираем с помощью регулярного выражения все знаки кроме чисел, и парсим полученное значение в число
        priceMin = parseInt(filterPrice.noUiSlider.get()[0].replace(/[^0-9](.+)(.{2})/g, ''), 10);
        priceMax = parseInt(filterPrice.noUiSlider.get()[1].replace(/[^0-9](.+)(.{2})/g, ''), 10);

        for (let i = 0; i < flatsArray.length; i++) {
            // В if надо прописать условия, при котором метка будет добавлена/останется на карте⁡
            if (!(flatsArray[i].price < priceMin || flatsArray[i].price > priceMax)) {
                if (document.querySelector(".selected").innerHTML === "Все" ||
                    flatsArray[i].categoryName === document.querySelector(".selected").innerHTML) {
                    for (let j = 0; j < checkedCheckboxes.length; j++) {
                        if (flatsArray[i].region === checkedCheckboxes[j]) {
                            mainGeoObjects.add(mapsFlatsArray[i]);
                            console.log("Added");
                        } else {
                            mainGeoObjects.add(mapsFlatsArray[i]);
                            mainGeoObjects.remove(mapsFlatsArray[i]);
                            console.log("Removed");
                        }
                    }
                } else {
                    mainGeoObjects.add(mapsFlatsArray[i]);
                    mainGeoObjects.remove(mapsFlatsArray[i]);
                }
            } else {
                mainGeoObjects.add(mapsFlatsArray[i]);
                mainGeoObjects.remove(mapsFlatsArray[i]);
            }
        }
        // Метод для перерисовки карты
        mainMap.container.fitToViewport();
    });
}

ymaps.ready(init);