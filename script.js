document.addEventListener('DOMContentLoaded', async () => {
    const catalogContainer = document.getElementById('catalog-container');
    const response = await fetch('/api/catalog');
    const catalogItems = await response.json();

    catalogItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('catalog-item');
        itemElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <h2>${item.name}</h2>
