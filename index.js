let btnlogin_poopup = document.querySelector(".btnlogin-poopup");
let cross = document.querySelector(".cross");
let form = document.querySelector("form");
let login_btn = document.querySelector(".login-btn");
let register_btn = document.querySelector(".register-btn");
let bars = document.querySelector(".bears")

bars.onclick = ()=>{
    document.querySelector(".navbar").classList.toggle("active");
}




btnlogin_poopup.onclick = () => {
    document.querySelector(".home").classList.add("active")
}

cross.onclick = () => {
    document.querySelector(".home").classList.remove("active")

}

login_btn.onclick = () => {
    // alert("yes");
    login_btn.classList.add("active") ;
    register_btn.classList.remove("active");
    document.querySelector(".login-form").classList.add("active");
    document.querySelector(".register-form").classList.remove("active");

}






register_btn.onclick = () => {
    // alert("yes");
    login_btn.classList.remove("active") ;
    register_btn.classList.add("active");
    document.querySelector(".login-form").classList.remove("active");
    document.querySelector(".register-form").classList.add("active");
}



window.onload = () =>{
// alert("ytyg")
// login_btn.classList.remove("active") ;
// document.querySelector(".login-form").classList.remove("active");
// register_btn.classList.remove("active");
// document.querySelector(".register-form").classList.remove("active");
document.querySelector(".navbar").classList.remove("active");

}