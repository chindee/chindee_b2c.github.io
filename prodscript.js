let cartCount = 0;
let cartItems = [];

function addToCart(item, price) {
    cartCount++; 
    document.getElementById('cartCount').innerText = cartCount; 
    cartItems.push({ item: item, price: price }); 
    alert('เพิ่ม ' + item + ' เข้ารถเข็นสำเร็จ'); 
}

function viewCart() {
    if (cartItems.length === 0) {
        alert('รถเข็นของคุณว่างเปล่า');
    } else {
        let cartContent = 'สินค้าที่คุณเพิ่มเข้ารถเข็น:\n';
        cartItems.forEach(function(cartItem, index) {
            cartContent += (index + 1) + '. ' + cartItem.item + ' - ' + cartItem.price + '\n';
        });
        alert(cartContent);
    }
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function confirmPurchase(modalId, itemName) {
    const quantity = document.getElementById(`quantity${modalId.charAt(modalId.length - 1)}`).value;
    const size = document.getElementById(`size${modalId.charAt(modalId.length - 1)}`).value;
    alert('คุณได้เลือก ' + itemName + ' จำนวน ' + quantity + ' ชิ้น และไซต์ ' + size);
    closeModal(modalId);
}
