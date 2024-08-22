let cartCount = 0; 
function addToCart() {
    cartCount++; 
    document.getElementById('cart-count').innerText = cartCount; 
    alert('เพิ่มลงในรถเข็นแล้วงับอ้วน'); 
}
function learnMore() {
    alert('Thank you for your interest!'); 
}

window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
function openModal(title, image, description, price) {
    document.getElementById('modal-product-title').innerText = title;
    document.getElementById('modal-product-image').src = image;
    document.getElementById('modal-product-description').innerText = description;
    document.getElementById('modal-product-price').innerText = `Price: ${price}`;
    
    document.getElementById('product-modal').style.display = "block"; 
}

function closeModal() {
    document.getElementById('product-modal').style.display = "none"; 
}

function showProductDetails(item) {
    const title = item.querySelector('h3').innerText;
    const image = item.querySelector('img').src;
    const description = "Your product description here.";
    const price = item.querySelector('p').innerText;

    openModal(title, image, description, price);
}

document.querySelectorAll('.about-item img').forEach((img) => {
    img.addEventListener('click', function() {
        showProductDetails(this.closest('.about-item'));
    });
});
