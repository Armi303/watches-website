/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')


/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}


// Login and register
document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.getElementById('user');
    const formContainer = document.getElementById('login-register-form');
    
    userIcon.addEventListener('click', function() {
        formContainer.classList.toggle('active');
    });
});

/*=============== CART FUNCTIONALITY ===============*/
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    var removeButtons = document.getElementsByClassName('cart__amount-trash');
    for (var i = 0; i < removeButtons.length; i++) {
        var button = removeButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityMinusButtons = document.getElementsByClassName('bx-minus');
    for (var i = 0; i < quantityMinusButtons.length; i++) {
        var button = quantityMinusButtons[i];
        button.addEventListener('click', decreaseQuantity);
    }

    var quantityPlusButtons = document.getElementsByClassName('bx-plus');
    for (var i = 0; i < quantityPlusButtons.length; i++) {
        var button = quantityPlusButtons[i];
        button.addEventListener('click', increaseQuantity);
    }
    
    document.getElementsByClassName('checkout')[0].addEventListener('click', buyButtonClicked);
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updateTotal();
}

function decreaseQuantity(event) {
    var minusButton = event.target;
    var quantityElement = minusButton.parentElement.nextElementSibling;
    var currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 1) {
        quantityElement.innerText = currentQuantity - 1;
    }
    updateTotal();
}

function increaseQuantity(event) {
    var plusButton = event.target;
    var quantityElement = plusButton.parentElement.previousElementSibling;
    var currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
    updateTotal();
}

function buyButtonClicked() {

}

function addToCart(event) {
    const product = event.target.closest('.products__card');
    const title = product.querySelector('.products__title').textContent;
    const price = parseFloat(product.querySelector('.products__price').textContent.replace('$', ''));

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <img src="${product.querySelector('.products__img').src}" alt="" class="cart-item__img">
        <div class="cart-item__info">
            <h3 class="cart-item__title">${title}</h3>
            <span class="cart-item__price">$${price.toFixed(2)}</span>
            <div class="cart-item__quantity">
                <i class='bx bx-minus'></i>
                <span class="item-quantity">1</span>
                <i class='bx bx-plus'></i>
            </div>
            <i class='bx bx-trash-alt cart-item__remove'></i>
        </div>
    `;

    cartItems.appendChild(cartItem);

    updateCartTotal();
    }

function updateTotal() {
    var cartCards = document.getElementsByClassName("cart__card");
    var totalItems = 0;
    var totalPrice = 0;

    for (var i = 0; i < cartCards.length; i++) {
        var cartCard = cartCards[i];
        var title = cartCard.getElementsByClassName("cart__title")[0].innerText;
        var price = parseFloat(cartCard.getElementsByClassName("cart__price")[0].innerText.replace("$", ""));
        var quantity = parseInt(cartCard.getElementsByClassName("cart__amount-number")[0].innerText);

        totalItems += quantity;
        totalPrice += price * quantity;
    }

    document.getElementsByClassName("cart__prices-item")[0].innerText = totalItems + " items";
    document.getElementsByClassName("cart__prices-total")[0].innerText = "$" + totalPrice.toFixed(2);
}





// Initialize event listeners
ready();
updateTotal();
