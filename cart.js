let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id){

let product = products.find(p=>p.id===id);

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartBadge();

alert("Added to cart");

}

function updateCartBadge(){

let badge=document.getElementById("cart-count");

if(badge){
badge.innerText=cart.length;
}

}

updateCartBadge();
