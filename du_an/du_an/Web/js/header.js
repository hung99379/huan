// header
const header = document.querySelector("header")
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
})
// -----------------------cartegory------------------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li");
itemsliderbar.forEach(function (menu, index) {
    menu.addEventListener("click",function () {
        menu.classList.toggle("block");
    }) 
})
// ------------------------Product-------------------

const bigImg = document.querySelector(".product-content-left-big-img img")
const smalImg = document.querySelectorAll(".product-content-left-small-img img")
smalImg.forEach(function(imgItem, x){
    imgItem.addEventListener("click", function(){
        bigImg.src = imgItem.src
    })
})



const chevron = document.querySelector(".chevron")
const chitiet = document.querySelector(".chitiet")
const thongso = document.querySelector(".thongso")
if (chevron) {
    chevron.addEventListener("click", function() {
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}
if (chitiet) {
    chitiet.addEventListener("click", function() {
        document.querySelector(".product-content-right-bottom-content-thongso").style.display="none"
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display="block"
    })
}
if (thongso) {
    thongso.addEventListener("click", function() {
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display="none"
        document.querySelector(".product-content-right-bottom-content-thongso").style.display="block"
    })
}
