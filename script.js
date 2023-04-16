let back = document.getElementById("back")
let text = document.getElementById("text")
let paragraph = document.getElementById("paragraph")


document.addEventListener('scroll', () =>{
    let value = window.scrollY

    
    text.style.marginTop = value * 0.6 + 'px';
    back.style.top = value * -0.5 + "px";
} );