document.querySelector(".shortcut-btn").onclick=function(){
    document.querySelector(".nav-halfscreen").classList.toggle("hide");
}

let popup_buy=document.getElementById("popup-buy");
function openPopup_buy() {
    popup_buy.style.visibility = "visible";
    popup_buy.style.transform = "translate(-50%, -50%) scale(1)";
}
function closePopup_buy() {
    setTimeout(() => {
        popup_buy.style.visibility = "hidden";
    }, 100); 
}
let popup_cart=document.getElementById("popup-cart");
function openPopup_cart() {
    popup_cart.style.visibility = "visible";
    popup_cart.style.transform = "translate(-50%, -50%) scale(1)";
}
function closePopup_cart() {
    setTimeout(() => {
        popup_cart.style.visibility = "hidden";
    }, 100); 
}
