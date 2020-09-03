/*global $, document, prompt, console, alert*/
/*loading*/

let lodSec = document.getElementById("lod");

window.onload = function () {
    "use strict";
    document.body.style.overflow = "visible";
    document.body.removeChild(lodSec);
};

/*loading*/

/*optin*/

let
    colorBox = document.getElementById("box-color"),
    colorSwitch = document.querySelectorAll(".color-switch li"),
    optionBtn = document.querySelector(".option-box button"),
    coloLink = document.getElementById("color-tem");

console.log(coloLink.getAttribute("href"));
optionBtn.addEventListener("click", function () {
    "use strict";
    colorBox.classList.toggle("hide");
});

for (let i = 0; i < colorSwitch.length; i++){
     colorSwitch[i].addEventListener("click", function () {
         "use strict"
         coloLink.setAttribute("href", this.getAttribute("data-color"));
     } ); 
}
/*optin*/

/*TO TOP*/
let
    toTop = document.querySelector(".to-top");

toTop.onclick = function () {
    "use strict";
    window.scrollTo(0,0)
    
};

window.onscroll = function () {
    "use strict";
    if (window.pageYOffset > 500){
        toTop.style.display ="";
    } else {
        toTop.style.display ="none";
    }

};

$('.carousel').carousel({
  interval: 0
})
/*TO TOP*/
                                
