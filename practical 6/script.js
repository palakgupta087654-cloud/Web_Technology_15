const products = [

{ id: 1, name: "Jeans", price: 1500 },

{ id: 2, name: "Tops", price: 1000 },

{ id: 3, name: "Tshirt", price: 500 },

{ id: 4, name: "Shoes", price: 15000 }

];

let cart = [];

const productList = document.getElementById("product-list");

const cartList = document.getElementById("cart-list");

const totalPriceEl = document.getElementById("total-price");

function displayProducts() {

productList.innerHTML = products

.map((product) => `

<div class="product-card">

${product.name} - ₹${product.price}

<button onclick="addToCart(${product.id})">

Add to Cart</button>

</div>`)

.join("");

}

function addToCart(id) {

const item = products.find((p) => p.id === id);

cart.push(item);

displayCart();
}
function removeFromCart(id) {

cart = cart.filter((item) => item.id !== id);

displayCart();

}

function calculateTotal() {

return cart.reduce(

(sum, item) => sum + item.price, 0

);

}

function displayCart() {

cartList.innerHTML = cart

.map((item) => `

<li>${item.name} - ₹${item.price}

<button onclick="removeFromCart(${item.id})">

✖</button>

</li>`)

.join("");

totalPriceEl.textContent = calculateTotal();

}

displayProducts();