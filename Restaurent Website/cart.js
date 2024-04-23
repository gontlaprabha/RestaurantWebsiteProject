document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    
    const cart = []; // Array to store cart items
    
    function updateCart() {
        // Clear the existing cart items
        cartItems.innerHTML = "";
        let total = 0;
        
        cart.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price}Rs</td>
                <td>${item.quantity}</td>
                <td>${item.price * item.quantity}Rs</td>
                <td><button class="remove-from-cart" data-name="${item.name}">Remove</button></td>
            `;
            cartItems.appendChild(row);
            total += item.price * item.quantity;
        });
        
        cartTotal.textContent = total + "Rs";
        
        // Attach event listeners for remove buttons
        const removeButtons = document.querySelectorAll(".remove-from-cart");
        removeButtons.forEach(button => {
            button.addEventListener("click", function () {
                const itemName = button.getAttribute("data-name");
                removeFromCart(itemName);
            });
        });
    }
    
    function addToCart(name, price) {
        // Check if the item is already in the cart
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCart();
    }
    
    function removeFromCart(name) {
        const itemIndex = cart.findIndex(item => item.name === name);
        if (itemIndex !== -1) {
            cart[itemIndex].quantity--;
            if (cart[itemIndex].quantity === 0) {
                cart.splice(itemIndex, 1);
            }
            updateCart();
        }
    }
    
    // Handle "Add to Cart" button clicks
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));
            addToCart(name, price);
        });
    });
});
function showDeliveryStatus() {
    // Simulate order processing by updating the status after a delay
    updateDeliveryStatus("Preparing");

    setTimeout(function() {
        updateDeliveryStatus("Out for Delivery");
    }, 2000);

}

function updateDeliveryStatus(status) {
    // Display the delivery status in the popup
    const deliveryStatusMessage = document.getElementById("delivery-status-message");
    deliveryStatusMessage.innerText = status;

    // Show the popup
    const popupContainer = document.getElementById("delivery-status-popup");
    popupContainer.style.display = "block";
}

function closeDeliveryStatusPopup() {
    const popupContainer = document.getElementById("delivery-status-popup");
    popupContainer.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const searchInput = document.getElementById("search-input");
    const resetButton = document.getElementById("reset-search");
    const menuItems = document.querySelectorAll(".menu-item");

    // Convert NodeList to array for easier manipulation
    const menuItemsArray = Array.from(menuItems);

    // Store original display property of menu items
    const originalDisplays = menuItemsArray.map((item) => item.closest("li").style.display);

    // Add input event listener to the search input
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        // Loop through menu items
        menuItemsArray.forEach((item, index) => {
            const itemName = item.querySelector(".menu-item__name").innerText.toLowerCase();
            const listItem = item.closest("li");

            // Check if item name contains the search term
            if (itemName.includes(searchTerm)) {
                // If yes, display the item
                listItem.style.display = originalDisplays[index];
            } else {
                // If not, hide or remove the entire list item
                listItem.style.display = "none";
            }
        });
    });

    // Add click event listener to the reset button
    resetButton.addEventListener("click", function () {
        // Clear the search input
        searchInput.value = "";

        // Reset the display property of all list items
        menuItemsArray.forEach((item, index) => {
            const listItem = item.closest("li");
            listItem.style.display = originalDisplays[index];
        });
    });
});
