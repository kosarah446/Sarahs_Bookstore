
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log("Initial cart state:", cart);

function addToCart(itemName, itemPrice, itemImage) {
    console.log("=== ADD TO CART OPERATION ===");
    console.log("Adding item:", { itemName, itemPrice, itemImage });
    
    try {
        const cartString = localStorage.getItem("cart");
        console.log("Raw cart from localStorage:", cartString);
        
        cart = cartString ? JSON.parse(cartString) : [];
        console.log("Parsed cart:", cart);
        
        const existingItem = cart.find(item => 
            item.name.toLowerCase() === itemName.toLowerCase()
        );
        
        if (existingItem) {
            alert("This item is already in your cart!");
            return;
        }
        
        const item = { 
            name: itemName, 
            price: itemPrice, 
            image: itemImage,
            addedAt: new Date().toISOString()
        };
        cart.push(item);
        
        const cartToSave = JSON.stringify(cart);
        console.log("Saving to localStorage:", cartToSave);
        localStorage.setItem("cart", cartToSave);
        
        const savedCart = localStorage.getItem("cart");
        console.log("Verified saved cart:", savedCart);
        
        alert(`${itemName} added to cart!`);
    } catch (error) {
        console.error("Error in addToCart:", error);
    }
}

function updateCart() {
    console.log("=== UPDATE CART DISPLAY ===");
    const cartItemsElement = document.getElementById("cartItems");
    
    if (!cartItemsElement) {
        console.error("cartItems element not found!");
        console.log("Current HTML:", document.body.innerHTML);
        return;
    }
    
    try {
        const cartString = localStorage.getItem("cart");
        console.log("Cart string from localStorage:", cartString);
        
        cart = cartString ? JSON.parse(cartString) : [];
        console.log("Parsed cart data:", cart);
        
        cartItemsElement.innerHTML = "";
        
        if (!cart || cart.length === 0) {
            console.log("Cart is empty, displaying empty message");
            const emptyMessage = document.createElement("p");
            emptyMessage.textContent = "Your cart is empty!";
            cartItemsElement.appendChild(emptyMessage);
            return;
        }
        
        let total = 0;
        
        cart.forEach((item, index) => {
            console.log(`Rendering item ${index}:`, item);
            
            const li = document.createElement("li");
            li.classList.add("cart-item");
            
            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 100px">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <button onclick="removeItem(${index}, '${item.name}')">Remove</button>
            `;
            
            cartItemsElement.appendChild(li);
            total += item.price;
        });
        
        const totalDiv = document.createElement("div");
        totalDiv.classList.add("cart-total");
        totalDiv.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
        cartItemsElement.appendChild(totalDiv);
        
        console.log("Cart display updated successfully");
    } catch (error) {
        console.error("Error in updateCart:", error);
    }
}

function removeItem(index, itemName) {
    console.log("=== REMOVE ITEM ===");
    console.log("Removing item:", { index, itemName });
    
    try {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        
        console.log("Cart after removal:", cart);
        console.log("localStorage after removal:", localStorage.getItem("cart"));
        
        updateCart();
        
        alert(`${itemName} removed from cart. You can add it again from the items page.`);
    } catch (error) {
        console.error("Error in removeItem:", error);
    }
}

function checkout() {
    console.log("=== CHECKOUT ===");
    
    try {
        cart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log("Cart at checkout:", cart);
        
        if (cart.length > 0) {
            const items = cart.map(item => item.name).join(", ");
            
            alert("You have completed your purchase. Thank you!");
            
            cart = []; 
            localStorage.removeItem("cart");
            console.log("Cart cleared after checkout");
            updateCart(); 
        } else {
            alert("Your cart is empty!");
            console.log("Attempted checkout with empty cart");
        }
    } catch (error) {
        console.error("Error in checkout:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("=== PAGE LOADED ===");
    console.log("Current page:", window.location.pathname);
    console.log("localStorage cart:", localStorage.getItem("cart"));
    
    const cartItemsElement = document.getElementById("cartItems");
    if (cartItemsElement) {
        console.log("Cart element found, initializing cart display");
        updateCart();
    } else {
        console.log("Not on cart page (no cartItems element found)");
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); 

            const confirmationMessage = document.createElement('p');
            confirmationMessage.textContent =
                'Message has been delivered. We will be in contact with you shortly.';
            confirmationMessage.style.color = 'green';
            confirmationMessage.style.fontWeight = 'bold';
            confirmationMessage.style.marginTop = '10px';

            const existingMessage = document.querySelector('.confirmation');
            if (existingMessage) {
                existingMessage.remove(); 
            }

            confirmationMessage.classList.add('confirmation');
            form.parentElement.appendChild(confirmationMessage); 

            form.reset();
        });
    }
});