// Elementos HTML
const $list = document.getElementById('list');
const $error = document.getElementById('error');
const $loading = document.getElementById('loading');
const $loadMore = document.getElementById('loadMore');
const $categoryFilter = document.getElementById('categoryFilter');

const API = 'https://dummyjson.com/products';
let currentPage = 0;
const limit = 8;
let allProducts = []; // armazena produtos carregados

// Configurar container flex
$list.style.display = 'flex';
$list.style.flexWrap = 'wrap';
$list.style.gap = '1rem';
$list.style.justifyContent = 'center';

function showError(msg) {
    $error.textContent = msg || '';
}

function renderPosts(products, append = false) {
    const html = products.map(product => `
        <div class="card" style="width:220px; border:1px solid #ddd; border-radius:8px; padding:1rem; box-sizing:border-box; display:flex; flex-direction:column; gap:0.3rem;">
            <img src="${product.thumbnail}" alt="${product.title}" style="width:100%; border-radius:6px;">
            <strong style="word-wrap: break-word;">${product.title}</strong>
            <p class="category" style="margin:0;"><i class="bi bi-tag-fill"></i> ${product.category}</p>
            <p class="price" style="margin:0;"><i class="bi bi-cash-coin"></i> $${product.price}</p>
            <p class="rating" style="margin:0;"><i class="bi bi-star-half"></i> ${product.rating}</p>
            <p class="stock" style="margin:0;"><i class="bi bi-box-seam-fill"></i> ${product.stock}</p>
        </div>
    `).join('');

    if (append) {
        $list.innerHTML += html;
    } else {
        $list.innerHTML = html;
    }
}

async function getPosts(append = false) {
    showError('');
    $loading.style.display = 'block';
    $loadMore.style.display = 'none';

    try {
        const skip = currentPage * limit;
        const res = await fetch(`${API}?limit=${limit}&skip=${skip}`);
        if (!res.ok) throw new Error(`Erro HTTP ${res.status}`);
        const data = await res.json();

        allProducts = append ? allProducts.concat(data.products) : data.products;

        renderPosts(applyFilter(allProducts), false);
        populateCategories(allProducts);

        if (skip + limit < data.total) {
            $loadMore.style.display = 'block';
        } else {
            $loadMore.style.display = 'none';
        }

        $loading.style.display = 'none';
        $list.style.display = 'flex';

    } catch (err) {
        showError(err.message ?? 'Falha ao buscar dados');
        $loading.style.display = 'none';
    }
}

// Inicialização
getPosts(false);

// Botão "Carregar mais"
$loadMore.addEventListener('click', () => {
    currentPage++;
    getPosts(true);
});

// Filtrar por categoria
$categoryFilter.addEventListener('change', () => {
    renderPosts(applyFilter(allProducts), false);
});

// Função de filtro
function applyFilter(products) {
    const selected = $categoryFilter.value;
    return selected ? products.filter(p => p.category === selected) : products;
}

// Preenche select com categorias únicas
function populateCategories(products) {
    const categories = [...new Set(products.map(p => p.category))];
    $categoryFilter.innerHTML = '<option value="">Todas as categorias</option>' +
        categories.map(c => `<option value="${c}">${c}</option>`).join('');
}








