function displayProducts(){

let grid=document.getElementById("product-grid");

if(!grid) return;

grid.innerHTML="";

products.forEach(p=>{

grid.innerHTML+=`

<div class="product">

<img src="${p.images[0]}" onclick="openPopup(${p.id})">

<h3>${p.name}</h3>

<div class="rating">
${"⭐".repeat(p.rating)}
</div>

<p class="price">Tsh ${p.price}</p>

<button onclick="addToCart(${p.id})">Add to Cart</button>

<a href="https://wa.me/255715029419?text=I want ${p.name}" target="_blank">
<button>WhatsApp</button>
</a>

</div>

`;

});

}

function openPopup(id){

let product=products.find(p=>p.id===id);

let popup=document.getElementById("popup");

popup.innerHTML=`

<div class="popup-content">

<img src="${product.images[0]}">

<h2>${product.name}</h2>

<p>Tsh ${product.price}</p>

<button onclick="addToCart(${product.id})">Add to Cart</button>

<button onclick="closePopup()">Close</button>

</div>

`;

popup.style.display="flex";

}

function closePopup(){
document.getElementById("popup").style.display="none";
}

displayProducts();
