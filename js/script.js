// Common JavaScript for the E-Commerce website

// Get all Add to Cart buttons
var addToCartButtons = document.querySelectorAll("button");

// Function to show an alert when a product is added to cart
function addToCart() {
  alert("Product added to cart!");
}

// Attach click event to each Add to Cart button
addToCartButtons.forEach(function(button) {
  if (button.textContent.trim() === "Add to Cart") {
    button.addEventListener("click", addToCart);
  }
});

// Get quantity buttons and quantity values
var quantityButtons = document.querySelectorAll(".quantity-button");

quantityButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var valueElement = this.parentElement.querySelector(".quantity-value");
    var currentValue = Number(valueElement.textContent);

    if (this.textContent === "+") {
      currentValue = currentValue + 1;
    } else if (this.textContent === "-" && currentValue > 1) {
      currentValue = currentValue - 1;
    }

    valueElement.textContent = currentValue;
  });
});

// Get remove buttons and remove cart items
var removeButtons = document.querySelectorAll(".remove-button");

removeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var cartItem = this.closest(".cart-item");

    if (cartItem) {
      cartItem.remove();
    }
  });
});

// Get checkout button and show alert
var checkoutButton = document.querySelector(".checkout-button");

if (checkoutButton) {
  checkoutButton.addEventListener("click", function() {
    alert("Proceeding to checkout!");
  });
}
