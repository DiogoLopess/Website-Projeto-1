let logo = document.getElementById("logo-header")
let icon = document.getElementById("icon-header")
let burger = document.getElementById("burger-icon")
let html = document.getElementById("html-content")

const iWindow = html.contentWindow;
const iDocument = iWindow.document;

let darkmode = true

icon.addEventListener("click", function(){
    HeaderTheme()
})


function HeaderTheme(){

    if(darkmode) {
        logo.src = "assets/logo_black.png"
        darkmode = false;
    }else {
        logo.src = "assets/logo_white.png"
        darkmode = true;
    }

    document.body.classList.toggle("light")
    iDocument.body.classList.toggle("light")

    console.log(iDocument)

    if(document.body.classList.toggle == "light"){
        burger.innerHTML = `
        <path d="M4 18L20 18" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path d="M4 12L20 12" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path d="M4 6L20 6" stroke="black" stroke-width="2" stroke-linecap="round"/>`
    }
}