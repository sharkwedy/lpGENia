// script.js

const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const purchaseForm = document.getElementById('purchase-form');
const purchaseBtns = document.querySelectorAll('.buy-now');

// Open modal
function openModal() {
    modal.style.display = 'block';
}

// Close modal
function closeModalFunc() {
    modal.style.display = 'none';
}

closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModalFunc();
    }
});

// Handle purchase
function purchaseHandler(event) {
    event.preventDefault();
    const formData = new FormData(purchaseForm);
    const name = formData.get('name');
    const whatsapp = formData.get('whatsapp');
    const email = formData.get('email');
    const type = event.target.dataset.type;
    // Perform actions based on purchase type
    switch (type) {
        case 'avista':
            window.location.href = 'link_for_avista_purchase';
            break;
        case 'boleto':
            window.location.href = 'link_for_boleto_purchase';
            break;
        case 'credit-card':
            window.location.href = 'link_for_credit_card_purchase';
            break;
        default:
            break;
    }
}

purchaseForm.addEventListener('submit', purchaseHandler);

purchaseBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
});