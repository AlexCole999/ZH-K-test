const button = document.getElementById("button");
button.addEventListener("click", addElemRow);

function addElemRow() {
    addElem();
    addElem();
    addElem();
};

function addElem() {
    var clone = document.getElementsByClassName("elem")[0].cloneNode(true);
    button.before(clone);
}

const distance_view = document.getElementsByClassName("distance__right")[0];
distance_view.addEventListener("click", function () {
    document.getElementsByClassName("grid-container")[0].classList.toggle("nonedisplay");
    distance_view.classList.toggle("rotate");
});

const deadline_view = document.getElementsByClassName("deadline__right")[0];
deadline_view.addEventListener("click", function () {
    document.getElementsByClassName("deadline-container")[0].classList.toggle("nonedisplay");
    deadline_view.classList.toggle("rotate");
});

const options_view = document.getElementsByClassName("options__right")[0];
options_view.addEventListener("click", function () {
    document.getElementsByClassName("options-container")[0].classList.toggle("nonedisplay");
    options_view.classList.toggle("rotate");
});

const options = document.getElementsByClassName("checkbox__inner");
for (i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () { this.classList.toggle("clicked") });
};

const distance = document.getElementsByClassName("grid__inner");
for (i = 0; i < options.length; i++) {
    distance[i].addEventListener("click", function () {
        this.classList.toggle("changed");
    });
};

const deadline = document.getElementsByClassName("deadline__input");
for (elem of deadline) {
    elem.addEventListener("click", function () {
        for (elem of deadline) { elem.classList.remove("deadline__elem__clicked") };
        this.classList.toggle("deadline__elem__clicked");
    })
};

const totalDischange = document.getElementsByClassName("discharge")[0];
totalDischange.addEventListener("click", function () {
    for (elem of deadline) { elem.classList.remove("deadline__elem__clicked") };
    for (elem of distance) { elem.classList.remove("changed") };
    for (elem of options) { elem.classList.remove("clicked") };
});

var element = document.getElementsByClassName("elem")[0]
element.addEventListener("click", function () {
    element.style.width = "50%";
    setTimeout(() => {
        element.style.width = "270px"
    }, 1000);
    console.log(element.style[0]);
})