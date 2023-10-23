
const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")
 

 menuIcon.addEventListener("click", () => {  //mam mene nez 780px (jinak se mi nezobrazila ikona) a kliknu na menu-icon
    if (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.add("fa-xmark")
        hamburgerIcon.classList.remove("fa-bars")
        menuList.style.display = "block"
    } else {
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-xmark")
        menuList.style.display = "none"
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        menuList.style.display = "block"
    } else {
        menuList.style.display = "none"
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-xmark")
    }

})

// Dark/Light mode
// Načtení prvků, pro které budeme měnit barvy
const body = document.querySelector("body")

let mode = "dark"
body.style.backgroundColor = "white"
body.style.color = "black"

const buttonMode = document.querySelector(".clickMode")

buttonMode.addEventListener("click", () => {
    if (mode == "dark") {
        mode = "light"
        body.style.backgroundColor = "black"
        body.style.color = "white"
    } else if (mode == "light") {
        mode = "dark"
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }

})


const imagesToResize = document.querySelectorAll(".section-applications-box")

imagesToResize.forEach((imageToResize) => {
imageToResize.addEventListener("mouseenter", () => {
    imageToResize.style.transform = "scale(1.1)"
})

imageToResize.addEventListener("mouseleave", () => {
    imageToResize.style.transform = "scale(1)"
})
})

const pass1 = document.querySelector(".passwd1")
const pass2 = document.querySelector(".passwd2")
const paragraphText = document.querySelector(".result-text")

//pole pro heslo
pass1.addEventListener("input", () => {
    const pass1Value = pass1.value
    const pass2Value = pass2.value

    if (pass1Value == pass2Value) {
        paragraphText.textContent = "Hesla jsou shodná"
        paragraphText.classList.add("valid")
        paragraphText.classList.remove("invalid")
    } else {
        paragraphText.textContent = "Hesla nejsou shodná"
        paragraphText.classList.add("invalid")
        paragraphText.classList.remove("valid")
    }
})

//kontrolní pole pro heslo
pass2.addEventListener("input", () => {
    const pass1Value = pass1.value
    const pass2Value = pass2.value

    if (pass1Value == pass2Value) {
        paragraphText.textContent = "Hesla jsou shodná"
        paragraphText.classList.add("valid")
        paragraphText.classList.remove("invalid")
    } else {
        paragraphText.textContent = "Hesla nejsou shodná"
,        paragraphText.classList.add("invalid")
        paragraphText.classList.remove("valid")
    }
})

// Tlacitko nahoru
let mybutton = document.getElementById("myBtn");

// tlacitko zpet nahoru zobrazime jen pri odscrolovani alespon kousek dolu (10px)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// funkce ktera vrati uzivatele zpet nahoru
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



