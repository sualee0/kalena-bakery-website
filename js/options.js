const categories = {
  BESTSELLERS: ["Chocolate Chip Cookies", "Croissants"],
  "BAKED GOODS": ["Blueberry Muffins", "Scones", "Carrot Cake"],
  DESSERTS: ["Strawberry Shortcake", "Cheesecake", "Cinnamon Rolls"],
};

const contentData = [
  {
    title: "Chocolate Chip Cookies",
    description: "Freshly baked chocolate chip cookies",
    image:
      "https://images.unsplash.com/photo-1504472893907-7f577b7c9beb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwY2hpcCUyMGNvb2tpZXN8ZW58MHx8MHx8fDA%3D",
    rating: 3,
  },
  {
    title: "Strawberry Shortcake",
    description: "Delightful strawberry shortcake with whipped cream",
    image:
      "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    title: "Blueberry Muffins",
    description: "Warm, fluffy blueberry muffins",
    image:
      "https://plus.unsplash.com/premium_photo-1711684803646-27c1a0fed58b?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    title: "Lemon Bars",
    description: "Tangy and sweet lemon bars",
    image:
      "https://images.unsplash.com/photo-1528252941458-c1d19f902318?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    title: "Carrot Cake",
    description: "Moist and flavorful carrot cake",
    image:
      "https://plus.unsplash.com/premium_photo-1714669889975-90386fbb03e4?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    title: "Red Velvet Cupcakes",
    description: "Indulgent red velvet cupcakes with cream cheese frosting",
    image:
      "https://images.unsplash.com/photo-1621303838226-5dc7130d5e19?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    title: "Apple Pie",
    description: "Classic apple pie with a flaky crust",
    image:
      "https://images.unsplash.com/photo-1601000938181-925c9bc969fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    title: "Cheesecake",
    description: "Creamy and smooth New York-style cheesecake",
    image:
      "https://images.unsplash.com/photo-1676300185983-d5f242babe34?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    title: "Cinnamon Rolls",
    description: "Warm, gooey cinnamon rolls with cream cheese frosting",
    image:
      "https://images.unsplash.com/photo-1650626106432-7865c4ca697e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3,
  },
  {
    title: "Macarons",
    description: "Delicate and colorful French macarons",
    image:
      "https://images.unsplash.com/photo-1515164664657-6ba669e028f3?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    title: "Croissants",
    description: "Buttery and flaky classic French croissants",
    image:
      "https://images.unsplash.com/photo-1529978215771-45f0bcc12de3?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    title: "Scones",
    description: "Tender and flaky British-style scones",
    image:
      "https://plus.unsplash.com/premium_photo-1715514974066-8be810fbfa12?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3,
  },
];

const contentSectionContainer = document.querySelector(
  ".content-section-container"
);

const circleElements = document.querySelectorAll(".circle");
const renderProducts = (products) => {
  contentSectionContainer.innerHTML = "";
  products.forEach((data) => {
    const contentSection = document.createElement("div");
    contentSection.classList.add("content-section");

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("content-image-wrapper");

    const imageElement = document.createElement("img");
    imageElement.src = data.image;
    imageElement.alt = data.title;
    imageElement.classList.add("content-image");
    imageWrapper.appendChild(imageElement);

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = data.title;

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = data.description;

    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("rating-container");

    for (let i = 0; i < 5; i++) {
      const starElement = document.createElement("i");
      starElement.classList.add("fa", "fa-star");
      if (i < data.rating) {
        starElement.classList.add("active");
      }
      ratingContainer.appendChild(starElement);
    }

    contentSection.appendChild(imageWrapper);
    contentSection.appendChild(title);
    contentSection.appendChild(description);
    contentSection.appendChild(ratingContainer);

    contentSectionContainer.appendChild(contentSection);
  });
};

// default render all products
renderProducts(contentData);

// filter functionality
const circles = document.querySelectorAll(".circle");
circleElements.forEach((circle) => {
  circle.addEventListener("click", () => {
    const category = circle.dataset.category;
    if (category == "ALL") {
      renderProducts(contentData);
    }
    const filteredProducts = contentData.filter((product) =>
      categories[category].includes(product.title)
    );
    renderProducts(filteredProducts);
  });
});
