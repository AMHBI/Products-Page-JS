const nameInput = document.getElementById("search-name-input");
const categoryButtons = document.querySelectorAll(".filter-button");
const products = document.querySelectorAll(".product-item");

const nameShowHandler = (event) => {
  const searchedName = event.target.value.toLowerCase().trim();
  console.log(searchedName);
  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(searchedName)) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
};
const selectClassHandler = (filter) => {
  categoryButtons.forEach((btn) => {
    if (btn.dataset.filter === filter) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
};
const btnHandler = (e) => {
  const filterValue = e.currentTarget.dataset.filter;
  selectClassHandler(filterValue);
  products.forEach((product) => {
    if (filterValue === "all") {
      product.style.display = "flex";
    } else {
      product.dataset.category === filterValue
        ? (product.style.display = "flex")
        : (product.style.display = "none");
    }
  });
};
nameInput.addEventListener("keyup", nameShowHandler);
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", btnHandler);
});
