const products = [
    { name: 'Manchester United Home Jersey 25/26', price: 99.99 },
    { name: 'Manchester United Away Jersey 25/26', price: 70.99 },
    { name: 'Manchester United Third Jersey 25/26', price: 70.99 },
    { name: 'Manchester United Home Jersey 24/25', price: 50.00 },
    { name: 'Manchester United Away Jersey 24/25', price: 40.00 },
    { name: 'Manchester United Third Jersey 24/25', price: 35.00 }
];

document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(products[index]);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        var total = parseInt(localStorage.getItem('checkout')) || 0;
        total++;
        localStorage.setItem('checkout', total);
        document.querySelector('#cart-count').innerHTML = total;
    });
});
 
function displayCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsContainer = document.querySelector('#cart-items');
        cartItemsContainer.innerHTML = '';
        
        let total = 0;
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; padding: 40px; font-size: 18px;">Your cart is empty</p>';
            document.querySelector('#checkout-btn').disabled = true;
            document.querySelector('#checkout-btn').style.opacity = '0.5';
        } else {
            let html = '<table class="cart-table"><thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Action</th></tr></thead><tbody>';
            
            // Count quantities
            const itemCounts = {};
            cart.forEach(item => {
                itemCounts[item.name] = (itemCounts[item.name] || 0) + 1;
            });
            
            // Get unique items
            const uniqueItems = [];
            const seen = new Set();
            cart.forEach(item => {
                if (!seen.has(item.name)) {
                    uniqueItems.push(item);
                    seen.add(item.name);
                }
            });
            
            uniqueItems.forEach((item, index) => {
                const quantity = itemCounts[item.name];
                const itemTotal = item.price * quantity;
                html += `<tr>
                    <td>${item.name}</td>
                    <td>€${item.price.toFixed(2)}</td>
                    <td>${quantity}</td>
                    <td><button class="btn-remove" onclick="removeItem('${item.name}')">Remove</button></td>
                </tr>`;
                total += itemTotal;
            });
            
            html += '</tbody></table>';
            cartItemsContainer.innerHTML = html;
        }
        
        document.querySelector('#total-price').innerHTML = total.toFixed(2);
    }
    
    function removeItem(itemName) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.name !== itemName);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update count
        const checkoutCount = cart.length;
        localStorage.setItem('checkout', checkoutCount);
        document.querySelector('#cart-count').innerHTML = checkoutCount;
        
        displayCart();
    }
    
    function goToCheckout() {
        window.location.href = '/checkout';
    }
    
    function continueShopping() {
        window.location.href = '/shop';
    }
    
    displayCart();

    function displayCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsContainer = document.querySelector('#cart-items');
        cartItemsContainer.innerHTML = '';
        
        let total = 0;
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; padding: 20px;">Your cart is empty</p>';
        } else {
            let html = '<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;"><thead><tr><th style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #f44336; color: white;">Product</th><th style="border: 1px solid #ddd; padding: 12px; text-align: left; background-color: #f44336; color: white;">Price</th></tr></thead><tbody>';
            
            cart.forEach(item => {
                html += `<tr><td style="border: 1px solid #ddd; padding: 12px;">${item.name}</td><td style="border: 1px solid #ddd; padding: 12px;">€${item.price.toFixed(2)}</td></tr>`;
                total += item.price;
            });
            
            html += '</tbody></table>';
            cartItemsContainer.innerHTML = html;
        }
        
        document.querySelector('#total-price').innerHTML = total.toFixed(2);
    }
    
    displayCart();