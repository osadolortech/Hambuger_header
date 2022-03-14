const div_display = document.querySelector(".menuhead");
const openMenu = document.querySelector(".hambuger");


openMenu.addEventListener("click", openWindow);

function openWindow(){
    div_display.style.display = 'flex';
    

}