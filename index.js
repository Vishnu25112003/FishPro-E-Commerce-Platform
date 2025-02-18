document.querySelector(".shortcut-btn").onclick=function(){
    document.querySelector(".nav-halfscreen").classList.toggle("hide");
}

let popup=document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}