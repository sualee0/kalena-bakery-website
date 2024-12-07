document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("cart-overlay");
  const priceElement = document.querySelector(".price");

  const quantityButtons = document.querySelectorAll(
    ".quantity-controls button"
  );
  const defaultButton = document.querySelector(".small");
  if (defaultButton) {
    defaultButton.classList.add("selected");
    priceElement.textContent = `$${defaultButton.getAttribute("data-price")}`;
  } else {
    console.error("The small button is missing.");
  }
  const addToCartButton = document.getElementById("add-to-cart");
  const cartItems = [];

  // update price when quantity changes
  quantityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      quantityButtons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      const newPrice = button.getAttribute("data-price");
      priceElement.textContent = `$${newPrice}`;
    });
  });

  // add item to cart
  addToCartButton?.addEventListener("click", () => {
    const productName = document.querySelector(".product-text h3").textContent;
    const selectedQuantity = document.querySelector(
      ".quantity-controls .selected"
    )?.textContent;
    const productPrice = priceElement.textContent;

    // add product to cart
    const cartItem = {
      name: productName,
      price: productPrice,
      quantity: selectedQuantity,
    };

    cartItems.push(cartItem);
    overlay.classList.add("active");
    updateCart();
  });

  // update cart modal
  function updateCart() {
    const cartItemContainer = document.querySelector(".cart-item");
    cartItemContainer.innerHTML = "";

    cartItems.forEach((item) => {
      const cartItemHTML = `
            <div class="item-details">
                <div>
                    <div class="item-name">${item.name}</div>
                    <div class="item-quantity">${item.quantity}</div>
                </div>
                <div class="item-price">${item.price}</div>
            </div>
            <div class="item-actions">
                <button class="remove-item" onclick="removeItem('${item.name}')">Remove</button>
            </div>
        `;
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("cart-item");
      cartItemElement.innerHTML = cartItemHTML;

      cartItemContainer.appendChild(cartItemElement);
    });

    updateCartSummary();
  }

  function updateCartSummary() {
    const subtotal = cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price;
    }, 0);

    // update subtotal
    document.querySelector(".summary-value").textContent = `$${subtotal.toFixed(
      2
    )}`;

    // update estimated total
    document.querySelector(
      ".summary-row.total .summary-value"
    ).textContent = `$${subtotal.toFixed(2)}`;
  }

  window.removeItem = function (name) {
    const index = cartItems.findIndex((item) => item.name === name);
    if (index > -1) {
      cartItems.splice(index, 1);
      updateCart();
    }
  };
});
