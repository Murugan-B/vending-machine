
let totalCost = 0;
const totalCostContainer = document.querySelector('.cost');

document.querySelector('.machine').addEventListener('click', (event) => {
   
    if (event.target && event.target.classList.contains('buy-button')) {
        const product = event.target.closest('.product');  
        const priceText = product.querySelector('.price').textContent;
        const price = parseInt(priceText.replace('PRICE:', '').trim()); 
        totalCost += price;
        totalCostContainer.textContent = totalCost;
    }
});

const resetButton = document.getElementById('resetbutton');



resetButton.addEventListener('click', () => {
    totalCost = 0;  
    totalCostContainer.textContent = totalCost;
});
