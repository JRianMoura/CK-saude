AOS.init();

function iniciarAnimacao() {
    var box = document.querySelector(".products-cards, .card-sale");
    box.classList.add("sale-card:hover, card-inner");
    setTimeout(function() {
        box.classList.remove("sale-card:hover, card-inner");
    }, 1000); 
}