let light = document.querySelector(".fa-sun");
let dark = document.querySelector(".fa-moon");
light.addEventListener("click",()=>{
    document.querySelector("footer").classList.remove("dark");
    document.querySelector("footer").classList.add("light");
    let boxes = document.querySelectorAll(".boxes");
    boxes[2].classList.remove("dark")
    boxes[0].classList.remove("dark")
    boxes[2].classList.add("light")
    boxes[0].classList.add("light")
    let qoraal = document.querySelector(".qoraal");
    qoraal.style.background="#fff"
    qoraal.style.color="#000"
    let header = document.querySelector(".header");
    header.classList.remove("dark")
    header.classList.add("light")
    logo = document.querySelectorAll("h2")[0];
    logo.style.color="#000"
    let icons= document.querySelectorAll(".fa");
    for(let i=0; i< icons.length; i++){
        icons[i].style.color = "#2e2d2a";
        icons[i].style.borderColor = "#2e2d2a";
    }
    let a = document.querySelectorAll("a");
    for(let i=0; i< a.length; i++){
        a[i].style.color = "#000";
    }
});
dark.addEventListener("click",()=>{
    document.querySelector("footer").classList.remove("light");
    document.querySelector("footer").classList.add("dark");
    let boxes = document.querySelectorAll(".boxes");
    boxes[2].classList.remove("light")
    boxes[0].classList.remove("light")
    boxes[2].classList.add("dark")
    boxes[0].classList.add("dark")
    let qoraal = document.querySelector(".qoraal");
    qoraal.style.background="#2e2d2a"
    qoraal.style.color="#fff"
    let header = document.querySelector(".header");
    header.classList.remove("light")
    header.classList.add("dark")
    logo = document.querySelectorAll("h2")[0];
    logo.style.color="#fff";
    let icons= document.querySelectorAll(".fa");
    for(let i=0; i< icons.length; i++){
        icons[i].style.color = "#fff";
        icons[i].style.borderColor = "#fff";
    }
    let a = document.querySelectorAll("a");
    for(let i=0; i< a.length; i++){
        a[i].style.color = "#fff";
    }
    
})
let menu = document.querySelector(".fa-bars");
menu.addEventListener("click", ()=>{
    let side = document.querySelector(".side");
    side.style.display="block";
})
let xmark = document.querySelector(".fa-xmark");
xmark.addEventListener("click",()=>{
    let side = document.querySelector(".side");
    if(side.style.display="block"){
        side.style.display="none";
    }
    let navbar = document.querySelector(".navbar");
    navbar.style.display = "block";
    side.appendChild(navbar);
    if(window.innerWidth > 700){
        if(side.contains(navbar)){
            side.removeChild(navbar)
        }
       
    }
    else{
        if(!side.contains(navbar)){
            side.appendChild(navbar)
        }
    }
})
