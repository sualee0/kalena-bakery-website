document.addEventListener('DOMContentLoaded', () => {
    const priceElement = document.querySelector('.price');
    const quantityButtons = document.querySelectorAll('.quantity-controls button');
    
    quantityButtons.forEach(button => {
        button.addEventListener('click', () => {
            quantityButtons.forEach(btn => btn.classList.remove('selected'));
            
            button.classList.add('selected');
            
            const newPrice = button.getAttribute('data-price');
            priceElement.textContent = `$${newPrice}`;
        });
    });
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