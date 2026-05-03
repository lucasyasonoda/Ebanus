const categories = [
  {
    slug: "todos",
    label: "Todos",
    title: "Todos os produtos",
    href: "produtos.html",
    description: "A linha completa da Ebanus com tabuas, suportes, bandejas, prateleiras e kits em madeira macica.",
    image: "https://images.unsplash.com/photo-1765120828282-63dc950b6f90?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "tabuas",
    label: "Tabuas",
    title: "Tabuas de madeira",
    href: "tabuas.html",
    description: "Pecas para churrasco, mesa posta e preparo, com canaletas, formas organicas e veios naturais.",
    image: "https://images.unsplash.com/photo-1765120828282-63dc950b6f90?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "suportes",
    label: "Suportes",
    title: "Suportes e organizadores",
    href: "suportes.html",
    description: "Apoios para livros, vinhos, bancadas e cantinhos da casa com estrutura resistente.",
    image: "https://images.unsplash.com/photo-1776267071440-bfc074bfef43?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "bandejas",
    label: "Bandejas",
    title: "Bandejas e petisqueiras",
    href: "bandejas.html",
    description: "Bandejas para cafe, petiscos e decoracao, feitas para servir bem e ficar a mostra.",
    image: "https://images.unsplash.com/photo-1750429431308-96eb0e8b6f6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "prateleiras",
    label: "Prateleiras",
    title: "Prateleiras em madeira",
    href: "prateleiras.html",
    description: "Prateleiras modulares para organizar temperos, loucas, livros e objetos de uso diario.",
    image: "https://images.unsplash.com/photo-1776267071440-bfc074bfef43?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "kits",
    label: "Kits para cozinha",
    title: "Kits para cozinha",
    href: "kits.html",
    description: "Combinacoes prontas para presentear, montar mesa de queijos ou equipar a bancada.",
    image: "https://images.unsplash.com/photo-1765120828282-63dc950b6f90?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "promocoes",
    label: "Promocoes",
    title: "Promocoes",
    href: "promocoes.html",
    description: "Ofertas da semana com desconto, Pix reduzido e algumas pecas com frete gratis.",
    image: "https://images.unsplash.com/photo-1750429431308-96eb0e8b6f6f?auto=format&fit=crop&w=900&q=80",
  },
];

const products = [
  {
    id: "TAB-01",
    slug: "tabua-steak",
    page: "produto-tabua-steak.html",
    name: "Tabua Steak Ebanus em madeira macica",
    category: "tabuas",
    price: 189.9,
    oldPrice: 249.9,
    pix: 170.91,
    image: "https://images.unsplash.com/photo-1765120828282-63dc950b6f90?auto=format&fit=crop&w=900&q=80",
    badge: "24% desconto",
    featured: true,
    bestSeller: true,
    dimensions: "42 x 24 x 2,2 cm",
    material: "Madeira macica com oleo mineral",
    stock: "8 pecas",
    description:
      "Tabua robusta para carnes e grelhados, com acabamento acetinado e bordas confortaveis para pegar na mao.",
  },
  {
    id: "TAB-02",
    slug: "tabua-churrasco",
    page: "produto-tabua-churrasco.html",
    name: "Tabua churrasco sulcada com canaleta",
    category: "tabuas",
    price: 229.9,
    oldPrice: 289.9,
    pix: 206.91,
    image: "https://images.unsplash.com/photo-1765120828282-63dc950b6f90?auto=format&fit=crop&w=900&q=80",
    badge: "lote novo",
    featured: true,
    bestSeller: false,
    dimensions: "48 x 30 x 2,5 cm",
    material: "Madeira macica impermeabilizada",
    stock: "5 pecas",
    description:
      "Canaleta lateral para conter liquidos e superficie ampla para churrasco, assados e preparo de cortes maiores.",
  },
  {
    id: "BAN-03",
    slug: "bandeja-oliva",
    page: "produto-bandeja-oliva.html",
    name: "Bandeja Oliva redonda para cafe",
    category: "bandejas",
    price: 149.9,
    oldPrice: 179.9,
    pix: 134.91,
    image: "https://images.unsplash.com/photo-1750429431308-96eb0e8b6f6f?auto=format&fit=crop&w=900&q=80",
    badge: "17% desconto",
    featured: true,
    bestSeller: true,
    dimensions: "30 cm de diametro",
    material: "Madeira natural encerada",
    stock: "11 pecas",
    description:
      "Bandeja de perfil baixo para cafe, difusores, velas e pequenos arranjos, com desenho discreto e veios aparentes.",
  },
  {
    id: "SUP-04",
    slug: "suporte-livros",
    page: "produto-suporte-livros.html",
    name: "Suporte para livros Nogueira escura",
    category: "suportes",
    price: 269.9,
    oldPrice: 319.9,
    pix: 242.91,
    image: "https://images.unsplash.com/photo-1776267071440-bfc074bfef43?auto=format&fit=crop&w=900&q=80",
    badge: "frete gratis",
    featured: false,
    bestSeller: true,
    dimensions: "55 x 18 x 18 cm",
    material: "Nogueira escurecida e selada",
    stock: "4 pecas",
    description:
      "Suporte para bancada, escritorio ou aparador, pensado para livros, cadernos e objetos de uso cotidiano.",
  },
  {
    id: "PRA-05",
    slug: "prateleira-cumaru",
    page: "produto-prateleira-cumaru.html",
    name: "Prateleira modular Cumaru 60 cm",
    category: "prateleiras",
    price: 199.9,
    oldPrice: 239.9,
    pix: 179.91,
    image: "https://images.unsplash.com/photo-1776267071440-bfc074bfef43?auto=format&fit=crop&w=900&q=80",
    badge: "sob medida",
    featured: false,
    bestSeller: false,
    dimensions: "60 x 18 x 3 cm",
    material: "Cumaru com acabamento fosco",
    stock: "Sob encomenda",
    description:
      "Prateleira reta e resistente para cozinha, sala ou cantinho do cafe. Pode ser produzida em outras medidas.",
  },
  {
    id: "KIT-06",
    slug: "kit-cozinha",
    page: "produto-kit-cozinha.html",
    name: "Kit cozinha colher, base e tabua media",
    category: "kits",
    price: 299.9,
    oldPrice: 379.9,
    pix: 269.91,
    image: "https://images.unsplash.com/photo-1765120828282-63dc950b6f90?auto=format&fit=crop&w=900&q=80",
    badge: "21% desconto",
    featured: true,
    bestSeller: false,
    dimensions: "3 pecas",
    material: "Madeira macica tratada para cozinha",
    stock: "6 kits",
    description:
      "Kit pratico para presentear ou renovar a bancada, com tabua media, apoio e colher artesanal.",
  },
  {
    id: "BAN-07",
    slug: "petisqueira-vale",
    page: "produto-petisqueira-vale.html",
    name: "Petisqueira Vale com cumbucas entalhadas",
    category: "bandejas",
    price: 359.9,
    oldPrice: 429.9,
    pix: 323.91,
    image: "https://images.unsplash.com/photo-1750429431308-96eb0e8b6f6f?auto=format&fit=crop&w=900&q=80",
    badge: "artesanal",
    featured: false,
    bestSeller: false,
    dimensions: "45 x 18 x 4 cm",
    material: "Madeira macica entalhada",
    stock: "3 pecas",
    description:
      "Petisqueira com cavidades entalhadas para castanhas, molhos e aperitivos, feita em lote pequeno.",
  },
  {
    id: "SUP-08",
    slug: "adega-cedro",
    page: "produto-adega-cedro.html",
    name: "Adega de mesa Cedro para 4 garrafas",
    category: "suportes",
    price: 249.9,
    oldPrice: 299.9,
    pix: 224.91,
    image: "https://images.unsplash.com/photo-1776267071440-bfc074bfef43?auto=format&fit=crop&w=900&q=80",
    badge: "16% desconto",
    featured: true,
    bestSeller: true,
    dimensions: "38 x 22 x 20 cm",
    material: "Cedro selado",
    stock: "7 pecas",
    description:
      "Adega compacta para aparador ou bancada, com encaixes para quatro garrafas e acabamento levemente acetinado.",
  },
  {
    id: "KIT-09",
    slug: "kit-mel-queijos",
    page: "produto-kit-mel-queijos.html",
    name: "Kit mel e queijos em tabua organica",
    category: "kits",
    price: 279.9,
    oldPrice: 349.9,
    pix: 251.91,
    image: "https://images.unsplash.com/photo-1765120828282-63dc950b6f90?auto=format&fit=crop&w=900&q=80",
    badge: "20% desconto",
    featured: false,
    bestSeller: true,
    dimensions: "Tabua + pote + espatula",
    material: "Madeira macica e vidro",
    stock: "9 kits",
    description:
      "Kit para mesa de queijos, geleias e mel, com tabua organica e acessorios para servir.",
  },
];

const state = {
  query: "",
  sort: "featured",
  cart: readCart(),
};

const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const app = document.querySelector("#app");
const page = document.body.dataset.page || "home";
const pageCategory = document.body.dataset.category || "todos";
const pageProductSlug = document.body.dataset.product || "";
const params = new URLSearchParams(window.location.search);

function categoryBySlug(slug) {
  return categories.find((category) => category.slug === slug) || categories[0];
}

function productBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

function normalize(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getDiscount(product) {
  return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
}

function readCart() {
  try {
    return JSON.parse(localStorage.getItem("ebanusCart")) || {};
  } catch (error) {
    return {};
  }
}

function saveCart() {
  localStorage.setItem("ebanusCart", JSON.stringify(state.cart));
}

function currentActiveCategory() {
  if (page === "listing") return pageCategory;
  if (page === "product") return productBySlug(pageProductSlug)?.category || "";
  return "";
}

function renderShell() {
  const activeCategory = currentActiveCategory();
  const searchValue = params.get("busca") || "";

  document.querySelector("#siteHeader").innerHTML = `
    <header class="site-header">
      <div class="contact-bar" aria-label="Atendimento">
        <a href="contato.html" class="contact-link">
          <i data-lucide="message-circle" aria-hidden="true"></i>
          Fale Conosco
        </a>
        <span>Telefone: (31) 98888-2026</span>
        <a href="https://wa.me/5531988882026" class="contact-link">
          <i data-lucide="phone" aria-hidden="true"></i>
          WhatsApp: (31) 98888-2026
        </a>
      </div>

      <div class="masthead">
        <button class="icon-button menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">
          <i data-lucide="menu" aria-hidden="true"></i>
        </button>

        <a href="index.html" class="brand" aria-label="Pagina inicial da Ebanus">
          <span class="brand-mark">E</span>
          <span>
            <strong>Ebanus</strong>
            <small>madeira artesanal</small>
          </span>
        </a>

        <form class="search-box" role="search" action="produtos.html">
          <label class="sr-only" for="searchInput">Buscar produtos</label>
          <i data-lucide="search" aria-hidden="true"></i>
          <input id="searchInput" name="busca" type="search" value="${escapeHtml(searchValue)}" placeholder="Buscar tabuas, suportes, bandejas..." autocomplete="off">
        </form>

        <div class="header-actions">
          <a href="contato.html" class="plain-action">
            <i data-lucide="user-round" aria-hidden="true"></i>
            Atendimento
          </a>
          <button class="cart-button" type="button" data-open-cart>
            <i data-lucide="shopping-cart" aria-hidden="true"></i>
            <span>Meu carrinho</span>
            <strong id="cartCount">0</strong>
          </button>
        </div>
      </div>

      <nav class="category-nav" id="categoryNav" aria-label="Categorias principais">
        ${categories
          .map(
            (category) => `
              <a class="nav-chip ${activeCategory === category.slug ? "active" : ""}" href="${category.href}">
                ${category.label}
              </a>
            `
          )
          .join("")}
      </nav>
    </header>
  `;

  // Mobile menu drawer
  const categoryLinks = categories
    .map((category) => {
      const isActive = activeCategory === category.slug ? "active" : "";
      return `<a class="mobile-nav-item ${isActive}" href="${category.href}">${category.label}</a>`;
    })
    .join("");

  const drawerHtml = `
    <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
    <aside class="mobile-menu-drawer" id="mobileMenuDrawer" aria-label="Menu de categorias" aria-hidden="true">
      <div class="mobile-menu-header">
        <p class="eyebrow">Categorias</p>
        <button class="icon-button" type="button" id="mobileMenuClose" aria-label="Fechar menu">
          <i data-lucide="x" aria-hidden="true"></i>
        </button>
      </div>
      <nav class="mobile-menu-nav">
        ${categoryLinks}
      </nav>
    </aside>
  `;

  document.body.insertAdjacentHTML("beforeend", drawerHtml);

  document.querySelector("#siteFooter").innerHTML = `
    <footer class="site-footer" id="contato">
      <div>
        <a href="index.html" class="brand footer-brand" aria-label="Pagina inicial da Ebanus">
          <span class="brand-mark">E</span>
          <span>
            <strong>Ebanus</strong>
            <small>madeira artesanal</small>
          </span>
        </a>
        <p>Loja online de produtos em madeira macica para cozinha, varanda, mesa posta e organizacao.</p>
      </div>
      <div>
        <h3>Atendimento</h3>
        <a href="tel:+5531988882026">(31) 98888-2026</a>
        <a href="mailto:contato@ebanusmadeira.com.br">contato@ebanusmadeira.com.br</a>
        <span>Segunda a sexta, 9h as 18h</span>
      </div>
      <form class="newsletter" id="newsletterForm">
        <h3>Receba novidades</h3>
        <label class="sr-only" for="emailInput">E-mail</label>
        <input id="emailInput" type="email" placeholder="seu@email.com" required>
        <button type="submit">Cadastrar</button>
      </form>
    </footer>
  `;

  document.querySelector("#cartShell").innerHTML = `
    <div class="cart-overlay" id="cartOverlay" hidden></div>
    <aside class="cart-drawer" id="cartDrawer" aria-label="Carrinho de compras" aria-hidden="true">
      <div class="drawer-header">
        <div>
          <p class="eyebrow">Carrinho</p>
          <h2>Produtos adicionados</h2>
        </div>
        <button class="icon-button" type="button" data-close-cart aria-label="Fechar carrinho">
          <i data-lucide="x" aria-hidden="true"></i>
        </button>
      </div>
      <div class="cart-items" id="cartItems"></div>
      <div class="cart-summary">
        <div>
          <span>Total</span>
          <strong id="cartTotal">R$ 0,00</strong>
        </div>
        <a href="carrinho.html" class="secondary-link">Ver carrinho completo</a>
        <a href="https://wa.me/5531988882026" id="checkoutLink" class="primary-button full">
          <i data-lucide="send" aria-hidden="true"></i>
          Finalizar no WhatsApp
        </a>
      </div>
    </aside>
  `;
}

function renderHome() {
  document.title = "Ebanus | Loja de Itens em Madeira";

  app.innerHTML = `
    <section class="home-shell">
      <div class="promo-grid">
        <a class="promo-card promo-main" href="tabuas.html">
          <img src="https://images.unsplash.com/photo-1766299441110-7e431e761a31?auto=format&fit=crop&w=1400&q=80" alt="Madeira sendo preparada na oficina">
          <span class="promo-copy">
            <small>Madeira macica selecionada</small>
            <strong>Tabuas, suportes e bandejas para uma casa mais natural.</strong>
            <em>Comprar lancamentos</em>
          </span>
        </a>
        <a class="promo-card" href="promocoes.html">
          <img src="https://images.unsplash.com/photo-1750429431308-96eb0e8b6f6f?auto=format&fit=crop&w=900&q=80" alt="Bandeja redonda de madeira em composicao de casa">
          <span class="promo-copy">
            <small>Ofertas</small>
            <strong>Ate 24% de desconto</strong>
          </span>
        </a>
        <a class="promo-card" href="contato.html">
          <img src="https://images.unsplash.com/photo-1776267071440-bfc074bfef43?auto=format&fit=crop&w=900&q=80" alt="Prateleira de madeira com itens organizados">
          <span class="promo-copy">
            <small>Sob medida</small>
            <strong>Pecas para o seu espaco</strong>
          </span>
        </a>
      </div>
    </section>

    ${serviceStrip()}
    ${categoryShowcase()}
    ${productSection("Lancamentos", "Pecas adicionadas ao catalogo", products.filter((product) => product.featured), "produtos.html")}
    ${productSection("Mais Vendidos", "Os favoritos para presentear e usar todo dia", products.filter((product) => product.bestSeller), "produtos.html")}
    ${productSection("Destaques", "Itens com desconto e pronta entrega", products.filter((product) => product.oldPrice > product.price).slice(0, 6), "promocoes.html")}
  `;
}

function serviceStrip() {
  return `
    <section class="service-strip" aria-label="Vantagens de compra">
      <div>
        <i data-lucide="truck" aria-hidden="true"></i>
        <strong>Frete gratis</strong>
        <span>acima de R$ 299</span>
      </div>
      <div>
        <i data-lucide="shield-check" aria-hidden="true"></i>
        <strong>Madeira tratada</strong>
        <span>oleo mineral e cera natural</span>
      </div>
      <div>
        <i data-lucide="badge-percent" aria-hidden="true"></i>
        <strong>Ofertas da semana</strong>
        <span>descontos em kits</span>
      </div>
      <div>
        <i data-lucide="package-check" aria-hidden="true"></i>
        <strong>Embalagem segura</strong>
        <span>protecao para envio</span>
      </div>
    </section>
  `;
}

function categoryShowcase() {
  return `
    <section class="category-showcase" aria-labelledby="categoryTitle">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Navegue pela loja</p>
          <h2 id="categoryTitle">Categorias</h2>
        </div>
        <a class="secondary-link" href="produtos.html">Ver todos</a>
      </div>
      <div class="category-grid compact-grid">
        ${categories
          .filter((category) => category.slug !== "todos" && category.slug !== "promocoes")
          .map(
            (category) => `
              <a class="category-card" href="${category.href}">
                <img src="${category.image}" alt="${category.title}">
                <span>${category.title}</span>
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function productSection(title, subtitle, sectionProducts, href) {
  return `
    <section class="product-showcase">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${subtitle}</p>
          <h2>${title}</h2>
        </div>
        <a class="secondary-link" href="${href}">Ver vitrine</a>
      </div>
      <div class="product-grid">
        ${sectionProducts.slice(0, 6).map(productCard).join("")}
      </div>
    </section>
  `;
}

function renderListing() {
  const category = categoryBySlug(pageCategory);
  state.query = params.get("busca") || "";

  if (pageCategory === "todos" && state.query) {
    document.title = `Busca por ${state.query} | Ebanus`;
  } else {
    document.title = `${category.title} | Ebanus`;
  }

  app.innerHTML = `
    <section class="page-hero">
      <nav class="breadcrumb" aria-label="Caminho">
        <a href="index.html">Inicio</a>
        <span>/</span>
        <strong>${category.title}</strong>
      </nav>
      <div>
        <p class="eyebrow">${pageCategory === "promocoes" ? "Oferta por tempo limitado" : "Categoria"}</p>
        <h1>${state.query ? `Busca por "${escapeHtml(state.query)}"` : category.title}</h1>
        <p>${category.description}</p>
      </div>
    </section>

    <section class="listing-layout">
      <aside class="shop-sidebar" aria-label="Categorias da loja">
        <p class="eyebrow">Departamentos</p>
        <h2>Comprar por tipo</h2>
        <div class="sidebar-list">
          ${categories
            .map(
              (item) => `
                <a class="side-filter ${pageCategory === item.slug ? "active" : ""}" href="${item.href}">
                  ${item.label}
                </a>
              `
            )
            .join("")}
        </div>
      </aside>

      <div class="product-area">
        <div class="product-toolbar">
          <div>
            <p class="eyebrow" id="listingCount"></p>
            <h3 id="listingTitle">${category.title}</h3>
          </div>
          <div class="listing-controls">
            <label class="search-mini">
              <span class="sr-only">Filtrar nesta pagina</span>
              <input id="listingSearch" type="search" value="${escapeHtml(state.query)}" placeholder="Filtrar produtos">
            </label>
            <label class="sort-control">
              <span>Ordenar</span>
              <select id="sortSelect">
                <option value="featured">Destaques</option>
                <option value="priceAsc">Menor preco</option>
                <option value="priceDesc">Maior preco</option>
                <option value="discount">Maior desconto</option>
              </select>
            </label>
          </div>
        </div>
        <div class="product-grid" id="listingGrid" aria-live="polite"></div>
        <p class="empty-state" id="emptyState" hidden>Nenhum produto encontrado nessa busca.</p>
      </div>
    </section>
  `;

  document.querySelector("#listingSearch").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderListingGrid();
  });

  document.querySelector("#sortSelect").addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderListingGrid();
  });

  renderListingGrid();
}

function listingProducts() {
  const query = normalize(state.query);

  return products
    .filter((product) => {
      const categoryMatch =
        pageCategory === "todos" ||
        product.category === pageCategory ||
        (pageCategory === "promocoes" && product.oldPrice > product.price);
      const queryMatch = !query || normalize(`${product.name} ${product.id} ${product.category}`).includes(query);
      return categoryMatch && queryMatch;
    })
    .sort((a, b) => {
      if (state.sort === "priceAsc") return a.price - b.price;
      if (state.sort === "priceDesc") return b.price - a.price;
      if (state.sort === "discount") return getDiscount(b) - getDiscount(a);
      return Number(b.featured) - Number(a.featured) || Number(b.bestSeller) - Number(a.bestSeller);
    });
}

function renderListingGrid() {
  const visibleProducts = listingProducts();
  const grid = document.querySelector("#listingGrid");
  const empty = document.querySelector("#emptyState");
  const count = document.querySelector("#listingCount");

  grid.innerHTML = visibleProducts.map(productCard).join("");
  empty.hidden = visibleProducts.length > 0;
  count.textContent = `${visibleProducts.length} produto${visibleProducts.length === 1 ? "" : "s"} encontrado${
    visibleProducts.length === 1 ? "" : "s"
  }`;
}

function renderProduct() {
  const product = productBySlug(pageProductSlug);

  if (!product) {
    app.innerHTML = `
      <section class="page-hero">
        <h1>Produto nao encontrado</h1>
        <p>Volte para a vitrine e escolha outra peca.</p>
        <a class="primary-button compact" href="produtos.html">Ver produtos</a>
      </section>
    `;
    return;
  }

  const category = categoryBySlug(product.category);
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  document.title = `${product.name} | Ebanus`;

  app.innerHTML = `
    <section class="product-detail">
      <nav class="breadcrumb" aria-label="Caminho">
        <a href="index.html">Inicio</a>
        <span>/</span>
        <a href="${category.href}">${category.title}</a>
        <span>/</span>
        <strong>${product.name}</strong>
      </nav>

      <div class="detail-grid">
        <div class="detail-gallery">
          <img src="${product.image}" alt="${product.name}">
          <div class="thumb-row">
            <span>${product.badge}</span>
            <span>${product.stock}</span>
          </div>
        </div>

        <div class="detail-info">
          <p class="sku">${product.id}</p>
          <h1>${product.name}</h1>
          <p>${product.description}</p>
          <div class="detail-prices">
            <span class="old-price">${money.format(product.oldPrice)}</span>
            <strong class="price">${money.format(product.price)}</strong>
            <span class="installments">ate 10x de ${money.format(product.price / 10)} sem juros</span>
            <span class="pix">ou ${money.format(product.pix)} via Pix</span>
          </div>
          <div class="detail-actions">
            <button class="primary-button" type="button" data-add="${product.slug}">
              <i data-lucide="shopping-bag" aria-hidden="true"></i>
              Comprar
            </button>
            <a class="secondary-link boxed" href="${whatsappProductLink(product)}">Tirar duvida no WhatsApp</a>
          </div>
          <dl class="info-table">
            <div>
              <dt>Material</dt>
              <dd>${product.material}</dd>
            </div>
            <div>
              <dt>Medidas</dt>
              <dd>${product.dimensions}</dd>
            </div>
            <div>
              <dt>Disponibilidade</dt>
              <dd>${product.stock}</dd>
            </div>
            <div>
              <dt>Cuidados</dt>
              <dd>Lavar com sabao neutro, secar bem e hidratar periodicamente.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    ${related.length ? productSection("Produtos relacionados", category.title, related, category.href) : ""}
  `;
}

function renderContact() {
  document.title = "Contato | Ebanus";
  app.innerHTML = `
    <section class="page-hero contact-hero">
      <nav class="breadcrumb" aria-label="Caminho">
        <a href="index.html">Inicio</a>
        <span>/</span>
        <strong>Contato</strong>
      </nav>
      <div>
        <p class="eyebrow">Atendimento</p>
        <h1>Fale com a Ebanus</h1>
        <p>Use esta pagina para tirar duvidas, pedir uma peca sob medida ou acompanhar um pedido.</p>
      </div>
    </section>

    <section class="contact-layout">
      <div class="contact-panel">
        <h2>Canais de atendimento</h2>
        <a href="https://wa.me/5531988882026">
          <i data-lucide="message-circle" aria-hidden="true"></i>
          WhatsApp: (31) 98888-2026
        </a>
        <a href="tel:+5531988882026">
          <i data-lucide="phone" aria-hidden="true"></i>
          Telefone: (31) 98888-2026
        </a>
        <a href="mailto:contato@ebanusmadeira.com.br">
          <i data-lucide="mail" aria-hidden="true"></i>
          contato@ebanusmadeira.com.br
        </a>
        <p>Atendimento de segunda a sexta, das 9h as 18h.</p>
      </div>

      <form class="contact-form" id="contactForm">
        <h2>Enviar mensagem</h2>
        <label>
          Nome
          <input type="text" required>
        </label>
        <label>
          E-mail
          <input type="email" required>
        </label>
        <label>
          Assunto
          <select required>
            <option value="">Selecione</option>
            <option>Pedido sob medida</option>
            <option>Duvida sobre produto</option>
            <option>Acompanhar pedido</option>
          </select>
        </label>
        <label>
          Mensagem
          <textarea rows="5" required></textarea>
        </label>
        <button class="primary-button" type="submit">Enviar</button>
      </form>
    </section>
  `;
}

function renderCartPage() {
  document.title = "Carrinho | Ebanus";
  app.innerHTML = `
    <section class="page-hero">
      <nav class="breadcrumb" aria-label="Caminho">
        <a href="index.html">Inicio</a>
        <span>/</span>
        <strong>Carrinho</strong>
      </nav>
      <div>
        <p class="eyebrow">Pedido</p>
        <h1>Meu carrinho</h1>
        <p>Confira as pecas escolhidas e finalize o pedido pelo WhatsApp.</p>
      </div>
    </section>

    <section class="cart-page">
      <div class="cart-page-list" id="cartPageItems"></div>
      <aside class="cart-page-summary">
        <h2>Resumo</h2>
        <div>
          <span>Produtos</span>
          <strong id="cartPageCount">0</strong>
        </div>
        <div>
          <span>Total</span>
          <strong id="cartPageTotal">R$ 0,00</strong>
        </div>
        <a href="https://wa.me/5531988882026" id="cartPageCheckout" class="primary-button full">
          Finalizar no WhatsApp
        </a>
      </aside>
    </section>
  `;

  renderCart();
}

function productCard(product) {
  return `
    <article class="product-card">
      <a class="product-media" href="${product.page}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="badge-row">
          <span class="badge ${product.oldPrice > product.price ? "sale" : ""}">${product.badge}</span>
          ${product.price > 250 ? '<span class="badge">frete gratis</span>' : ""}
        </div>
      </a>
      <div class="product-body">
        <h3><a href="${product.page}">${product.name}</a></h3>
        <span class="sku">${product.id}</span>
        <div class="prices">
          <span class="old-price">${money.format(product.oldPrice)}</span>
          <strong class="price">${money.format(product.price)}</strong>
        </div>
        <span class="installments">ate 10x de ${money.format(product.price / 10)} sem juros</span>
        <span class="pix">ou ${money.format(product.pix)} via Pix</span>
        <div class="card-actions">
          <a class="details-link" href="${product.page}">Ver detalhes</a>
          <button class="buy-button" type="button" data-add="${product.slug}">Comprar</button>
        </div>
      </div>
    </article>
  `;
}

function addToCart(slug) {
  const product = productBySlug(slug);
  if (!product) return;

  state.cart[slug] = (state.cart[slug] || 0) + 1;
  saveCart();
  renderCart();
  openCart();
  showToast(`${product.name} foi adicionado ao carrinho.`);
}

function changeQuantity(slug, amount) {
  const nextQuantity = (state.cart[slug] || 0) + amount;

  if (nextQuantity <= 0) {
    delete state.cart[slug];
  } else {
    state.cart[slug] = nextQuantity;
  }

  saveCart();
  renderCart();
}

function cartEntries() {
  return Object.entries(state.cart)
    .map(([slug, quantity]) => ({
      product: productBySlug(slug),
      quantity,
    }))
    .filter((entry) => entry.product);
}

function renderCart() {
  const entries = cartEntries();
  const totalQuantity = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const total = entries.reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0);
  const cartCount = document.querySelector("#cartCount");
  const cartItems = document.querySelector("#cartItems");
  const cartTotal = document.querySelector("#cartTotal");
  const checkoutLink = document.querySelector("#checkoutLink");

  if (cartCount) cartCount.textContent = totalQuantity;
  if (cartTotal) cartTotal.textContent = money.format(total);
  if (cartItems) cartItems.innerHTML = cartItemsMarkup(entries);
  if (checkoutLink) checkoutLink.href = whatsappCheckoutLink(entries, total);

  const cartPageItems = document.querySelector("#cartPageItems");
  const cartPageCount = document.querySelector("#cartPageCount");
  const cartPageTotal = document.querySelector("#cartPageTotal");
  const cartPageCheckout = document.querySelector("#cartPageCheckout");

  if (cartPageItems) cartPageItems.innerHTML = cartItemsMarkup(entries, true);
  if (cartPageCount) cartPageCount.textContent = String(totalQuantity);
  if (cartPageTotal) cartPageTotal.textContent = money.format(total);
  if (cartPageCheckout) cartPageCheckout.href = whatsappCheckoutLink(entries, total);
}

function cartItemsMarkup(entries, large = false) {
  if (!entries.length) {
    return `
      <div class="cart-empty">
        <p>Seu carrinho esta vazio.</p>
        <a class="primary-button compact" href="produtos.html">Ver produtos</a>
      </div>
    `;
  }

  return entries
    .map(
      ({ product, quantity }) => `
        <article class="cart-item ${large ? "large" : ""}">
          <a href="${product.page}">
            <img src="${product.image}" alt="${product.name}">
          </a>
          <div>
            <h3><a href="${product.page}">${product.name}</a></h3>
            <p>${money.format(product.price)} cada</p>
          </div>
          <div class="quantity" aria-label="Quantidade de ${product.name}">
            <button type="button" data-dec="${product.slug}" aria-label="Diminuir quantidade">-</button>
            <span>${quantity}</span>
            <button type="button" data-inc="${product.slug}" aria-label="Aumentar quantidade">+</button>
          </div>
        </article>
      `
    )
    .join("");
}

function whatsappProductLink(product) {
  const message = `Oi, quero tirar uma duvida sobre ${product.name} (${product.id}).`;
  return `https://wa.me/5531988882026?text=${encodeURIComponent(message)}`;
}

function whatsappCheckoutLink(entries, total) {
  const message = entries.length
    ? `Oi, quero finalizar este pedido na Ebanus:\n${entries
        .map(({ product, quantity }) => `- ${quantity}x ${product.name} (${product.id})`)
        .join("\n")}\nTotal: ${money.format(total)}`
    : "Oi, quero conhecer os produtos da Ebanus.";

  return `https://wa.me/5531988882026?text=${encodeURIComponent(message)}`;
}

function openCart() {
  const drawer = document.querySelector("#cartDrawer");
  const overlay = document.querySelector("#cartOverlay");

  document.body.classList.add("drawer-open");
  overlay.hidden = false;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  const drawer = document.querySelector("#cartDrawer");
  const overlay = document.querySelector("#cartOverlay");

  document.body.classList.remove("drawer-open");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
}

let toastTimer;

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add]");
    const incButton = event.target.closest("[data-inc]");
    const decButton = event.target.closest("[data-dec]");

    if (addButton) {
      event.preventDefault();
      addToCart(addButton.dataset.add);
      return;
    }

    if (incButton) {
      event.preventDefault();
      changeQuantity(incButton.dataset.inc, 1);
      return;
    }

    if (decButton) {
      event.preventDefault();
      changeQuantity(decButton.dataset.dec, -1);
      return;
    }

    if (event.target.closest("[data-open-cart]")) {
      event.preventDefault();
      openCart();
      return;
    }

    if (event.target.closest("[data-close-cart]") || event.target.id === "cartOverlay") {
      event.preventDefault();
      closeCart();
    }
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id === "newsletterForm") {
      event.preventDefault();
      event.target.reset();
      showToast("Cadastro recebido. As novidades da Ebanus chegam em breve.");
    }

    if (event.target.id === "contactForm") {
      event.preventDefault();
      event.target.reset();
      showToast("Mensagem recebida. A Ebanus retorna pelo contato informado.");
    }
  });

  const menuToggle = document.querySelector(".menu-toggle");

  function openMobileMenu() {
    const drawer = document.querySelector("#mobileMenuDrawer");
    const overlay = document.querySelector("#mobileMenuOverlay");
    if (!drawer || !overlay) return;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    overlay.classList.add("open");
    document.body.classList.add("drawer-open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    const drawer = document.querySelector("#mobileMenuDrawer");
    const overlay = document.querySelector("#mobileMenuOverlay");
    if (!drawer || !overlay) return;
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.classList.remove("open");
    document.body.classList.remove("drawer-open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", openMobileMenu);
  }

  document.addEventListener("click", (event) => {
    if (event.target.id === "mobileMenuOverlay" || event.target.closest("#mobileMenuClose")) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCart();
      closeMobileMenu();
    }
  });
}

function boot() {
  renderShell();

  if (page === "listing") renderListing();
  if (page === "product") renderProduct();
  if (page === "contact") renderContact();
  if (page === "cart") renderCartPage();
  if (page === "home") renderHome();

  bindEvents();
  renderCart();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

boot();