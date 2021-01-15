/*!!!СЕЛЕКТОРЫ ЭЛЕМЕНТОВ!!!*/
const distance_view = document.getElementById("distance__right");           //селектор флага "близость к метро"
const deadline_view = document.getElementById("deadline__right");           //селектор флага "срок сдачи"
const options_view = document.getElementById("options__right");             //селектор флага "дополнительные опции"
const button = document.getElementById("button");                           //селектор кнопки "показать еще"
const totalDischangeButton = document.getElementById("discharge");          //селектор кнопки "сбросить фильтры"
/*!!!СЕЛЕКТОРЫ ЭЛЕМЕНТОВ!!!*/


/*!!!СЛУШАТЕЛИ СОБЫТИЙ ЭЛЕМЕНТОВ!!!*/
/*создание слушателя событий клика для кнопки "показать еще" --> добавление элемента три раза*/
button.addEventListener('click', addElemRow);

/*создание слушателя событий клика для флага "Близость к метро" --> поворот каретки*/
distance_view.addEventListener("click", toggleRotate);
/*создание слушателя событий клика для флага "Срок сдачи" --> поворот каретки*/
deadline_view.addEventListener("click", toggleRotate);
/*создание слушателя событий клика для "Дополнительные опции" --> поворот каретки*/
options_view.addEventListener("click", toggleRotate);

/*создание слушателя событий клика для флага "Близость к метро" --> сокрытие вложенных элементов*/
distance_view.addEventListener("click", toggleNoneDisplay);
/*создание слушателя событий клика для флага "Срок сдачи" --> сокрытие вложенных элементов*/
deadline_view.addEventListener("click", toggleNoneDisplay);
/*создание слушателя событий клика для флага "Дополнительные опции" --> сокрытие вложенных элементов*/
options_view.addEventListener("click", toggleNoneDisplay);

/*создание слушателя событий клика для кнопки "Сбросить фильтры" --> отмена выбранных settings*/
totalDischangeButton.addEventListener("click", totalDischange);

/*создание слушателя событий клика для вложенных элементов "Близость к метро" --> подсветка выбора*/
const distance = document.getElementsByClassName("grid__inner");
for (i = 0; i < distance.length; i++) {
    distance[i].addEventListener("click", function () {
        this.classList.toggle("changed");
    });
};
/*создание слушателя событий клика для вложенных элементов "Срок сдачи" --> подсветка выбора (удаление подсветки у невыбранных элементов)*/
const deadline = document.getElementsByClassName("deadline__input");
for (elem of deadline) {
    elem.addEventListener("click", function () {
        for (elem of deadline) { elem.classList.remove("deadline__elem__clicked") };
        this.classList.toggle("deadline__elem__clicked");
    })
};
/*создание слушателя событий клика для вложенных элементов "Дополнительные опции" --> подсветка выбора*/
const options = document.getElementsByClassName("checkbox__inner");
for (i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () { this.classList.toggle("clicked") });
};
/*!!!СЛУШАТЕЛИ СОБЫТИЙ ЭЛЕМЕНТОВ!!!*/


/*!!!ФУНКЦИИ И ЛОГИКА!!!*/
/*функция добавления элемента при нажатии на кнопку "Показать еще"*/
function addElem() {
    var clone = document.getElementsByClassName("elem")[0].cloneNode(true);
    button.before(clone);
};
/* функция добавления элемента при нажатии на кнопку "Показать еще" три раза*/
function addElemRow() {
    addElem();
    addElem();
    addElem();
};
/*функция поворота каретки при клике на флаги "близость к метро","срок сдачи","дополнительные опции"*/
function toggleRotate() {
    this.classList.toggle("rotate");
};
/*функция скрытия видимости вложенных элементов*/
function toggleNoneDisplay() {
    this.parentNode.parentNode.children[1].classList.toggle("nonedisplay");
};
/*функция удаления всех выбранных изменений во всем классе "settings"*/
function totalDischange() {
    for (elem of deadline) { elem.classList.remove("deadline__elem__clicked") };
    for (elem of distance) { elem.classList.remove("changed") };
    for (elem of options) { elem.classList.remove("clicked") };
};
/*!!!ФУНКЦИИ И ЛОГИКА!!!*/
