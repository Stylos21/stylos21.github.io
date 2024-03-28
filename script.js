
let homeLink = document.getElementById("homeLink");
let aboutLink = document.getElementById("aboutLink");
let workLink = document.getElementById("workLink");
let contactLink = document.getElementById("contactLink");

let home = document.getElementById("home")
let about = document.getElementById("about")
let work = document.getElementById("work")
let contact = document.getElementById("contact")

let themeChanger = document.getElementById("themeChanger");

localStorage.getItem("theme") == "light" ?  document.body.className = "light" : "dark";

themeChanger.addEventListener("click", e => {
    if(document.body.className === "dark"){
        document.body.className = "light";
        themeChanger.classList.remove("fa-moon")
        themeChanger.classList.add("fa-sun")
        localStorage.setItem("theme", "light");
    } else {
        document.body.className = "dark";
        themeChanger.classList.add("fa-moon")
        themeChanger.classList.remove("fa-sun");
        localStorage.setItem("theme", "dark");

    }
})

let downBtn = document.getElementById("scrollDown");

homeLink.addEventListener("click", e => {
    home.scrollIntoView({ behavior: "smooth" });
})

aboutLink.addEventListener("click", e => {
    about.scrollIntoView({ behavior: "smooth" });
})

downBtn.addEventListener("click", e => {
    about.scrollIntoView({ behavior: "smooth" });
})

workLink.addEventListener("click", e => {
    work.scrollIntoView({ behavior: "smooth" });
})

contactLink.addEventListener("click", e => {
    contact.scrollIntoView({ behavior: "smooth" });
})