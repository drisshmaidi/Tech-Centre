const data = [
  {
    id: 12,
    name: "Soundcore Q30",
    img: "https://m.media-amazon.com/images/I/61+WYAjltpL._AC_SX425_.jpg",
    price: 79,
    cat: "Headphones",
  },

  {
    id: 12,
    name: "Apple 2022 iPad",
    img: "https://m.media-amazon.com/images/I/61BM28s7EhL._AC_SX679_.jpg",
    price: 484,
    cat: "Tablets",
  },

  {
    id: 1,
    name: "Samsung 50 Inch Q60B QLED",
    img: "https://m.media-amazon.com/images/I/71BgOBT+wKL._AC_SX425_.jpg",
    price: 740,
    cat: "Televisions",
  },

  {
    id: 15,
    name: "HUAWEI Matebook D15 ",
    img: "https://m.media-amazon.com/images/I/512yR00lkPS._AC_SX425_.jpg",
    price: 619,
    cat: "Laptops",
  },

  {
    id: 10,
    name: "Apple iPhone 14",
    img: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SX679_.jpg",
    price: 769,
    cat: "Smart Phones",
  },

  {
    id: 5,
    name: "Huawei GT 3 Pro Smartwatch",
    img: "https://m.media-amazon.com/images/I/51NvRsTONRL._AC_SL1024_.jpg",
    price: 249,
    cat: "Smart Watches",
  },

  {
    id: 11,
    name: "Sony WH-1000XM5",
    img: "https://m.media-amazon.com/images/I/41qwg67HMlL._AC_SY879_.jpg",
    price: 329,
    cat: "Headphones",
  },

  {
    id: 13,
    name: "Fire HD 8",
    img: "https://m.media-amazon.com/images/I/61Ldckc2QmL._AC_SX679_.jpg",
    price: 99,
    cat: "Tablets",
  },

  {
    id: 3,
    name: "Sony BRAVIA KD-55X80K",
    img: "https://m.media-amazon.com/images/I/61uY+bGxWfL._AC_SL1000_.jpg",
    price: 500,
    cat: "Televisions",
  },

  {
    id: 7,
    name: "Apple M2 MacBook",
    img: "https://m.media-amazon.com/images/I/710-zIN6mML._AC_SX679_.jpg",
    price: 1129,
    cat: "Laptops",
  },

  {
    id: 9,
    name: "Samsung Galaxy S23 Ultra",
    img: "https://m.media-amazon.com/images/I/71EJy5YCZJL._AC_SL1500_.jpg",
    price: 1200,
    cat: "Smart Phones",
  },

  {
    id: 6,
    name: "Apple Watch Ultra",
    img: "https://m.media-amazon.com/images/I/91z5KuonXrL._AC_SX679_.jpg",
    price: 249,
    cat: "Smart Watches",
  },

  {
    id: 16,
    name: "Bose 700",
    img: "https://m.media-amazon.com/images/I/512UYXU-68L._AC_SX679_.jpg",
    price: 279,
    cat: "Headphones",
  },

  {
    id: 14,
    name: "Microsoft Surface Pro 7+ ",
    img: "https://m.media-amazon.com/images/I/71NFp6QHCCL._AC_SX425_.jpg",
    price: 499,
    cat: "Tablets",
  },

  {
    id: 2,
    name: "LG LED UQ75 50",
    img: "https://m.media-amazon.com/images/I/A18G42QsP6L._AC_SL1500_.jpg",
    price: 375,
    cat: "Televisions",
  },

  {
    id: 8,
    name: "Lenovo V15",
    img: "https://m.media-amazon.com/images/I/61iSrLofORL._AC_SL1500_.jpg",
    price: 649,
    cat: "Laptops",
  },

  {
    id: 17,
    name: "HUAWEI P30",
    img: "https://m.media-amazon.com/images/I/51lUPfM5TDL._AC_SY741_.jpg",
    price: 649,
    cat: "Smart Phones",
  },

  {
    id: 17,
    name: "Fitbit Sense 2 ",
    img: "https://m.media-amazon.com/images/I/61cQI+zl2qL._AC_SX679_.jpg",
    price: 199,
    cat: "Smart Watches",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
       <div class="product">
          <img
          src=${product.img}
          alt=""
          />
          <span class="name">${product.name}</span>
          <span class="priceText">£${product.price}</span>
        </div>
    `
    )
    .join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "All Products",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
      <span class="cat">${cat}</span>
    `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "All Products"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "£" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

setCategories();
setPrices();
