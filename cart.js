let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){
document.getElementById("cart-count").innerText = cart.length;
}

updateCartCount();

function addToCart(product){

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert(product.name + " added to cart");

}

function removeFromCart(index){

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

displayCart();

updateCartCount();

}

function displayCart(){

const cartContainer = document.getElementById("cart-items");

if(!cartContainer) return;

cartContainer.innerHTML = "";

cart.forEach((item,index)=>{

cartContainer.innerHTML += `

<div class="product">

<img src="${item.image}" width="100">

<h3>${item.name}</h3>

<p>TSh ${item.price}</p>

<button onclick="removeFromCart(${index})">❌ Remove</button>

</div>

`;

});

}

displayCart();
