function showProducts() {
    const selectedCategory = document.getElementById('category').value;
    const productContainers = document.querySelectorAll('.productContainer');

    productContainers.forEach(container => {
        container.style.display = 'none';
    });

    const selectedContainer = document.getElementById(`category${selectedCategory.toLowerCase()}`);
    if (selectedContainer) {
        selectedContainer.style.display = 'block';
    }
}