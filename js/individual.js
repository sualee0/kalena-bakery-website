document.addEventListener("DOMContentLoaded", () => {
  const priceElement = document.querySelector(".price");
  const quantityButtons = document.querySelectorAll(
    ".quantity-controls button"
  );
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

document.addEventListener("DOMContentLoaded", () => {
  const reviewContainer = document.querySelector(".review-container");
  const reviewTitle = reviewContainer.querySelector(".review-title");

  const reviews = [
    {
      rating: 5,
      date: "Dec 3rd, 2024",
      text: "Best cupcakes ever!",
    },
    {
      rating: 5,
      date: "Nov 11th, 2024",
      text: "Better than the ones at the store!",
    },
    {
      rating: 4,
      date: "Oct 22nd, 2024",
      text: "This is a great cupcake! I love the almond flavor and the frosting is delicious. The only downside is that it's a bit too sweet for me.",
    },
    {
      rating: 5,
      date: "Oct 19th, 2024",
      text: "Definitely recommend these cupcakes! They're moist and flavorful, and the frosting is perfect.",
    },
    {
      rating: 5,
      date: "Sep 21th, 2024",
      text: "These cupcakes are amazing! I'll be back for more!",
    },
  ];

  function generateStarIcons(rating) {
    return Array.from(
      { length: 5 },
      (_, i) => `<i class="fas fa-star${i < rating ? "" : " far"}"></i>`
    ).join("");
  }

  reviews.forEach((review) => {
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    reviewItem.innerHTML = `
            <div class="stars">
                ${generateStarIcons(review.rating)}
            </div>
            <span class="review-date">${review.date}</span>
            <p class="review-text">${review.text}</p>
        `;

    reviewTitle.insertAdjacentElement("afterend", reviewItem);
  });
});
