document.addEventListener('DOMContentLoaded', () => {
    const priceElement = document.querySelector('.price');
    const quantityButtons = document.querySelectorAll('.quantity-controls button');
    
    quantityButtons.forEach(button => {
        button.addEventListener('click', () => {
            quantityButtons.forEach(btn => btn.classList.remove('selected'));
            
            button.classList.add('selected');
            
            const newPrice = button.getAttribute('data-price');
            priceElement.textContent = `$${newPrice}`;
        });
    });
});