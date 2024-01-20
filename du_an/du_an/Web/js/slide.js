// Slide
var slide = [
    "img/banner1.jpg",
    "img/banner2.jpg",
    "img/banner3.jpg",
    "img/banner4.jpg"
];
var index = 0;
function start() {
    index++;
    if (index == slide.length) {
        index = 0;
    }
    document.getElementById("anh").src = slide[index];
    
}
function back() {
    index--;
    if (index < 0) {
        index = slide.length -1;
    }
    document.getElementById("anh").src = slide[index];
}
setInterval("start()", 3000);
