const currQty = document.getElementById("qty");
const addQty = document.getElementById("add-qty");
const removeQty = document.getElementById("remove-qty");
const pincode = document.getElementById("pincode");
const checkAvailabiltu = document.getElementById("check");
const addToCart = document.getElementById("add-to-cart");
let quantity = 1;
const price = 2599;
let userPincode = "";

addQty.addEventListener("click", (e) => {
	e.preventDefault();
	currQty.innerText = ++quantity;
	addToCart.innerHTML = `Add to Cart ₹${price * quantity}`;
});

removeQty.addEventListener("click", (e) => {
	e.preventDefault();
	if (quantity > 1) {
		currQty.innerText = --quantity;
		addToCart.innerHTML = `Add to Cart ₹${price * quantity}`;
	}
});

pincode.addEventListener("change", (e) => {
	if (e.target.value !== "560017" && e.target.value !== "560103") {
		addToCart.disabled = true;
	}
});
