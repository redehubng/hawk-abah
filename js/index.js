var menuIcon = document.getElementById("menu-icon-img");
var menuIconAbout = document.getElementById("menu-icon");

// icons to interchange
const menu = "./images/menu.svg";


// menu list
var AboutMenu = document.getElementById("menu-list-about");


// function to toggle the  menu home page
const homeFunction = ()=> {
    var x = document.getElementById("menu-list");
    if (x.style.display === "none") {
        x.style.display = "block";
        menuIcon.setAttribute('src', "./images/Close.svg")
    } else {
        x.style.display = "none";
        menuIcon.setAttribute('src', "./images/menu.svg")
    }
}


// function to toggle the  menu about page
const aboutFunction = ()=> {
    var y = document.getElementById("menu-list-about");
  if (y.style.display === "none") {
    y.style.display = "block";
    menuIconAbout.setAttribute('src', "./images/Close.svg")
  } else {
    y.style.display = "none";
    menuIconAbout.setAttribute('src', "./images/circle-arrow.svg")
  }
}

// menuIcon.addEventListener('click', homeFunction)
// menuIconAbout.addEventListener('click', aboutFunction)
// menuIconAbout.addEventListener('click', myFunction(AboutMenu, aboutarrow))