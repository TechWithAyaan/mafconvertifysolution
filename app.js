function openMenu(){
    document.getElementsByClassName("sidebar")[0].style.display = "block"
    document.getElementsByClassName("op")[0].style.display = "none"
    document.getElementsByClassName("clo")[0].style.display = "flex"
}
function closeMenu(){
    document.getElementsByClassName("sidebar")[0].style.display = "none"
    document.getElementsByClassName("op")[0].style.display = "inline"
    document.getElementsByClassName("clo")[0].style.display = "none"
}