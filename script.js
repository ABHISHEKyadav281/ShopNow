
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}




// nav

// document.querySelector("#h").addEventListener("click",()=>{
//     document.querySelector("#h").style.boxShadow= "0px 6px 15px #00ff7f";
//     // document.querySelector("#p").style.boxShadow= "0px 6px 15px #ff523b";
//     // document.querySelector("#a").style.boxShadow= "0px 6px 15px #ff523b";
//     // document.querySelector("#l").style.boxShadow= "0px 6px 15px #ff523b";
// });
// document.querySelector("#p").addEventListener("click",()=>{
//     document.querySelector("#p").style.boxShadow= "0px 6px 15px #00ff7f";
//     // document.querySelector("#h").style.boxShadow= "0px 6px 15px #ff523b";
//     // document.querySelector("#a").style.boxShadow= "0px 6px 15px #ff523b";
//     // document.querySelector("#l").style.boxShadow= "0px 6px 15px #ff523b";
// });
// document.querySelector("#a").addEventListener("click",()=>{
//     document.querySelector("#a").style.boxShadow= "0px 6px 15px #00ff7f";
//     // document.querySelector("#h").style.boxShadow= "0px 6px 15px #ff523b";
//     // document.querySelector("#p").style.boxShadow= "0px 6px 15px #ff523b";
//     // document.querySelector("#l").style.boxShadow= "0px 6px 15px #ff523b";
// });
// document.querySelector("#l").addEventListener("click",()=>{
//     document.querySelector("#l").style.boxShadow= "0px 6px 15px #00ff7f";
//     // document.querySelector("#h").style.boxShadow= "0px 6px 15px #ff523b";
//     // document.querySelector("#p").style.boxShadow= "0px 6px 15px #ff523b";
//     // document.querySelector("#a").style.boxShadow= "0px 6px 15px #ff523b";
// });

// ============js acc section================

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");

var Indicator = document.getElementById("Indicator");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}
function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}


// <!-- ------------- product-detail ----------------- -->
var productImg = document.getElementById("productImg");
var SmallImg = document.getElementById("smallImg");

smallImg[0].onclick = function () {
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    productImg.src = smallImg[3].src;
}

