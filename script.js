let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =  () =>{
    navbar.classList.toggle('active');
    seacrhForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let seacrhForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =  () =>{
    seacrhForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll= () =>{
    navbar.classList.remove('active');
    seacrhForm.classList.remove('active');
    cartItem.classList.remove('active');
}


$('#contact-now').on('click', function () {
    //get text 
    let name= $('#name').val()
    let number= $('#number').val()
    let email= $('#email').val()
    window.open('https://wa.me/6289508074050/?text=' + "Hallo saya " + name + " Saya tertarik dengan product ini , ini email saya " + email);
})