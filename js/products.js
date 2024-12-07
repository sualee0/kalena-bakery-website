const categories = {
  TREATS: [
    "Almond Cupcakes",
    "Chocolate Cupcakes",
    "S'Mores Cupcakes",
    "Strawberry Crunch Cupcakes",
    "Cupcake and Strawberry Bundle",
  ],
  "FRUIT SPECIALS": [
    "Assorted Chocolate Dipped Strawberries",
    "Chocolate Covered Strawberry Bouquet",
    "Fruit Cake",
    "Strawberry Crunch Waffle Cones",
  ],
  "SWEET SNACKS": [
    "Cinnamon Roll",
    "Macaron Bundle",
    "Mint Chocolate Macarons",
  ],
};

const contentData = [
  {
    title: "Almond Cupcakes",
    description:
      "Light and fluffy almond-flavored cupcakes topped with a creamy frosting",
    image: "images/products/almond_cupcake.png",
    rating: 3,
  },
  {
    title: "Assorted Chocolate Dipped Strawberries",
    description:
      "Fresh strawberries dipped in premium chocolate, perfect for gifting",
    image: "images/products/assorted_chocolate_dipped_strawberries.png",
    rating: 4,
  },
  {
    title: "Chocolate Covered Strawberry Bouquet",
    description:
      "A delightful bouquet of chocolate-dipped strawberries, beautifully arranged",
    image: "images/products/chocolate_covered_strawberry_bouquet.png",
    rating: 4,
  },
  {
    title: "Chocolate Cupcakes",
    description:
      "Rich and moist chocolate cupcakes topped with decadent chocolate frosting",
    image: "images/products/chocolate_cupcake.png",
    rating: 4,
  },
  {
    title: "Cinnamon Roll",
    description:
      "Warm, gooey cinnamon rolls drizzled with cream cheese frosting",
    image: "images/products/cinnamon_roll.png",
    rating: 4,
  },
  {
    title: "Cupcake and Strawberry Bundle",
    description:
      "A combination of sweet cupcakes and chocolate-dipped strawberries",
    image: "images/products/cupcake_and_strawberry_bundle.png",
    rating: 4,
  },
  {
    title: "Fruit Cake",
    description:
      "A classic holiday fruit cake packed with dried fruits and nuts",
    image: "images/products/fruit_cake.png",
    rating: 4,
  },
  {
    title: "Macaron Bundle",
    description:
      "An assortment of delicate and colorful French macarons in various flavors",
    image: "images/products/macaron_bundle.png",
    rating: 4,
  },
  {
    title: "Mint Chocolate Macarons",
    description:
      "Mint-flavored macarons with a smooth chocolate ganache filling",
    image: "images/products/mint_chocolate_macaron.png",
    rating: 3,
  },
  {
    title: "S'Mores Cupcakes",
    description:
      "Chocolate cupcakes with a graham cracker crust, topped with toasted marshmallow frosting",
    image: "images/products/s_mores_cupcake.png",
    rating: 4,
  },
  {
    title: "Strawberry Crunch Cupcakes",
    description:
      "Moist strawberry cupcakes with a crunchy topping, bursting with flavor",
    image: "images/products/strawberry_crunch_cupcake.png",
    rating: 5,
  },
  {
    title: "Strawberry Crunch Waffle Cones",
    description:
      "Crispy waffle cones coated in strawberry crunch and filled with creamy goodness",
    image: "images/products/strawberry_crunch_waffle_cones.png",
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

    imageWrapper.addEventListener("click", () => {
      window.location.href = "individual.html";
    });

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

renderProducts(contentData);

const circles = document.querySelectorAll(".circle");
circleElements.forEach((circle) => {
  circle.addEventListener("click", () => {
    circles.forEach((c) => c.classList.remove("active"));
    circle.classList.add("active");

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
