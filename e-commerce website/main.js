document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const cart = document.querySelector(".cart-content");
    const closeCart = document.getElementById("close-cart");
    const addCartButtons = document.querySelectorAll(".add-cart");
    const cartContent = document.querySelector(".cart-content");
    const totalPriceElement = document.querySelector(".total .total-price");
    const totalCartQuantity = document.querySelector("#cart-icon");

    // Open and close cart
    cartIcon.addEventListener("click", () => {
        cart.classList.add("cart-active");
    });

    closeCart.addEventListener("click", () => {
        cart.classList.remove("cart-active");
    });

    // Add to cart functionality
    addCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const product = button.closest(".product-box");
            const productTitle = product.querySelector(".product-title").innerText;
            const productPrice = product.querySelector(".price").innerText.replace("R", "");
            const productImg = product.querySelector(".product-img").src;

            addProductToCart(productTitle, productPrice, productImg);
            updateTotal();
        });
    });

    function addProductToCart(title, price, img) {
        const cartItemTitles = cartContent.querySelectorAll(".cart-product-title");

        // Check if product is already in the cart
        for (let i = 0; i < cartItemTitles.length; i++) {
            if (cartItemTitles[i].innerText === title) {
                alert("This item is already added to the cart.");
                return;
            }
        }

        const cartBox = document.createElement("div");
        cartBox.classList.add("cart-box");
        cartBox.innerHTML = `
            <img src="${img}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">R${price}</div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <i class="bx bx-trash-alt cart-remove"></i>
        `;

        cartContent.appendChild(cartBox);
        cartBox.querySelector(".cart-remove").addEventListener("click", removeCartItem);
        cartBox.querySelector(".cart-quantity").addEventListener("change", quantityChanged);

        updateCartIconQuantity();
    }

    // Remove item from cart
    function removeCartItem(event) {
        const buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updateTotal();
        updateCartIconQuantity();
    }

    // Quantity changed
    function quantityChanged(event) {
        const input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updateTotal();

       // Add Cart Function
       function addCartClicked(event){
        var button = event.target;
        var shopProducts = button.parentElement;
        var shopProducts =button.parentElement;
        var title = shopProducts.getElementsByClassName(product-title).innerText;
        var price = shopProducts.getElementsByClassName("price").innerText;
        var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
        addProductToCart(title,price,productImg);
        updateTotal();
       }



    }



    

    // Update total
    function updateTotal() {
        const cartBoxes = cartContent.querySelectorAll(".cart-box");
        let total = 0;

        console.log("Calculating total..."); // Debug log

        cartBoxes.forEach((cartBox) => {
            const priceElement = cartBox.querySelector(".cart-price");
            const quantityElement = cartBox.querySelector(".cart-quantity");

            console.log("Price Element:", priceElement.innerText); // Debug log
            console.log("Quantity Element:", quantityElement.value); // Debug log

            const price = parseFloat(priceElement.innerText.replace("R", ""));
            const quantity = parseInt(quantityElement.value);

            console.log("Parsed Price:", price); // Debug log
            console.log("Parsed Quantity:", quantity); // Debug log

            total += price * quantity;
        });

        console.log(`Total: R${total.toFixed(2)}`); // Debug log
        totalPriceElement.innerText = `R${total.toFixed(2)}`;
    }

    // Update cart icon quantity
    function updateCartIconQuantity() {
        const cartBoxes = cartContent.querySelectorAll(".cart-box");
        let totalQuantity = 0;

        cartBoxes.forEach((cartBox) => {
            const quantityElement = cartBox.querySelector(".cart-quantity");
            totalQuantity += parseInt(quantityElement.value);
        });

        totalCartQuantity.setAttribute("data-quantity", totalQuantity);
        totalCartQuantity.dataset.quantity = totalQuantity;
        console.log(`Total Quantity: ${totalQuantity}`); // Debug log
    }
});


 
