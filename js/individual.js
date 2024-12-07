document.addEventListener('DOMContentLoaded', () => {
    const priceElement = document.querySelector('.price');
    const quantityButtons = document.querySelectorAll('.quantity-controls button');
    const defaultButton = document.querySelector('.small');
    if (defaultButton) {
        defaultButton.classList.add('selected');
        priceElement.textContent = `$${defaultButton.getAttribute('data-price')}`;
    } else {
        console.error('The small button is missing.');
    }


    quantityButtons.forEach(button => {
        button.addEventListener('click', () => {
            quantityButtons.forEach(btn => btn.classList.remove('selected'));
            
            button.classList.add('selected');
            
            const newPrice = button.getAttribute('data-price');
            priceElement.textContent = `$${newPrice}`;
        });
    });
});