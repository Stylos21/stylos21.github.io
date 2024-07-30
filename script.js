if (localStorage.getItem("theme") == undefined){
    localStorage.setItem("theme", 0)
}

const themes = [{ primary: "#000c12", primaryDull: "#000E16", secondaryDull: "#7D7457", secondary: "#D0C292", teritary: "#A1A1A1", polkaDots: "#7d7457" }, { primary: "#BFC1D6", primaryDull: "#b3b5c9", secondary: "#C50E38", secondaryDull: "#c20833", teritary: "#111111", polkaDots: "#c20833" }, { primary: "#101010", primaryDull: "#1A1A1A", secondaryDull: "#818181", secondary: "#afafaf", secondaryDull: "#818181", teritary: "#838383", polkaDots: "#818181" }, { primary: "#DEDEDE", primaryDull: "#BABABA", secondaryDull: "#343434", secondary: "#202020", teritary: "#333333", polkaDots: "#202020" }]

let curTheme = themes[localStorage.getItem("theme")] ?  themes[localStorage.getItem("theme")] : 0;

document.body.style.setProperty("--primary-color", curTheme.primary)
document.body.style.setProperty("--primary-dull-color", curTheme.primaryDull)
document.body.style.setProperty("--secondary-dull-color", curTheme.secondaryDull)
document.body.style.setProperty("--secondary-color", curTheme.secondary)
document.body.style.setProperty("--teritary-color", curTheme.teritary)
document.body.style.setProperty("--polkadot-color", curTheme.polkaDots)


let container = document.getElementsByClassName("container")[0]
let themeButtons = Array.from(document.getElementsByClassName("circle"));
let themeButtonContainers = Array.from(document.getElementsByClassName("theme"));
let menuButton = document.getElementById("navBtn");
let menuContainer = document.getElementsByClassName("navResContainer")[0];


themeButtonContainers[0].style.display = "none";


for (let i = 0; i < themeButtons.length; i++) {

    themeButtons[i].addEventListener("click", () => {
        console.log(i);
        t = i
        console.log(themeButtons[i].classList);
        if (!themeButtons[i].classList.contains("res")) {
            t = t - 4
        }

        console.log(t, themes, themes[t]);

        theme = themes[t];
        console.log(theme);
        document.body.style.setProperty("--primary-color", theme.primary)
        document.body.style.setProperty("--primary-dull-color", theme.primaryDull)
        document.body.style.setProperty("--secondary-dull-color", theme.secondaryDull)
        document.body.style.setProperty("--secondary-color", theme.secondary)
        document.body.style.setProperty("--teritary-color", theme.teritary)
        document.body.style.setProperty("--polkadot-color", theme.polkaDots)

        themeButtonContainers.map(button => {
            button.style.display = "block"
            console.log(button.style)
        })

        themeButtonContainers[i].style.display = "none";
        document.body.style.transition = "1s background";
        localStorage.setItem("theme", t);

    })
}


// themeButtons.forEach((button, i) => button.addEventListener("click", () => {


// }))

menuButton.addEventListener("click", e => {
    e.preventDefault()
    menuButton.style.transformOrigin = "center"
    menuButton.style.transition = ".1s";

    menuContainer.style.display = "flex";
    container.style.display = "none";
})


let homeLink = document.getElementsByClassName("homeLink");

let aboutLink = document.getElementsByClassName("aboutLink");
let workLink = document.getElementsByClassName("workLink");
let contactLink = document.getElementsByClassName("contactLink");

let home = document.getElementById("home")
let about = document.getElementById("about")
let work = document.getElementById("work")
let contact = document.getElementById("contact")



let downBtn = document.getElementById("scrollDown");

for (let i = 0; i < homeLink.length; i++) {
    console.log(homeLink[i]);
    homeLink[i].addEventListener("click", e => {
        menuContainer.style.display = "none";
        container.style.display = "block";
        home.scrollIntoView({ behavior: "smooth" });

    })
}

for (let i = 0; i < aboutLink.length; i++) {
    aboutLink[i].addEventListener("click", e => {
        menuContainer.style.display = "none";
        container.style.display = "block";
        about.scrollIntoView({ behavior: "smooth" });

    })
}


for (let i = 0; i < workLink.length; i++) {
    workLink[i].addEventListener("click", e => {
        menuContainer.style.display = "none";
        container.style.display = "block";
        work.scrollIntoView({ behavior: "smooth" });

    })
}


for (let i = 0; i < contactLink.length; i++) {
    contactLink[i].addEventListener("click", e => {
        menuContainer.style.display = "none";
        container.style.display = "block";
        contact.scrollIntoView({ behavior: "smooth" });

    })
}
