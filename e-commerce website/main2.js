document.addEventListener('DOMContentLoaded', () => {
    // Get references to the elements
    let cartIcon = document.querySelector("#cart-icon");
    let cart = document.querySelector(".cart");
    let closeCart = document.querySelector("#close-cart");

    // Open Cart - Adds the 'active' class to the cart when the cart icon is clicked
    cartIcon.onclick = () => {
        cart.classList.add("active");
    };

    // Close Cart - Removes the 'active' class from the cart when the close icon is clicked
    closeCart.onclick = () => {
        cart.classList.remove("active");
    };
});
