// Mock Data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    stockCount: 15,
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation."
  },
  {
    id: 2,
    name: "Minimalist Silver Laptop",
    price: 1299.0,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    rating: 4.9,
    reviews: 892,
    inStock: true,
    stockCount: 8,
    description: "Sleek, powerful, and designed for productivity with stunning visuals and ultra-thin design."
  },
  {
    id: 3,
    name: "Eco-Friendly Tote Bag",
    price: 45.0,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    rating: 4.6,
    reviews: 324,
    inStock: true,
    stockCount: 42,
    description: "Sustainable and stylish made from 100% organic cotton with reinforced handles."
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: 199.0,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    rating: 4.7,
    reviews: 567,
    inStock: true,
    stockCount: 23,
    description: "Track your health and fitness goals with advanced monitoring and GPS tracking."
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 39.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
    rating: 4.4,
    reviews: 234,
    inStock: true,
    stockCount: 67,
    description: "Fast wireless charging for all compatible devices with sleek design and LED indicator."
  },
  {
    id: 6,
    name: "Leather Messenger Bag",
    price: 189.99,
    originalPrice: 249.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    stockCount: 12,
    description: "Premium genuine leather messenger bag perfect for work or travel."
  },
  {
    id: 7,
    name: "Smartphone Stand",
    price: 29.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
    rating: 4.5,
    reviews: 445,
    inStock: true,
    stockCount: 89,
    description: "Adjustable smartphone and tablet stand with premium aluminum construction."
  },
  {
    id: 8,
    name: "Wool Scarf",
    price: 79.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1601762603332-db5e4b90cc5d?w=400",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    stockCount: 34,
    description: "Luxurious merino wool scarf with timeless design and exceptional warmth."
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 89.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    rating: 4.3,
    reviews: 678,
    inStock: true,
    stockCount: 56,
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design."
  },
  {
    id: 10,
    name: "Ceramic Coffee Mug",
    price: 24.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400",
    rating: 4.7,
    reviews: 234,
    inStock: true,
    stockCount: 78,
    description: "Handcrafted ceramic coffee mug with ergonomic handle and microwave safe."
  },
  {
    id: 11,
    name: "Running Shoes",
    price: 149.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    rating: 4.5,
    reviews: 891,
    inStock: true,
    stockCount: 45,
    description: "Lightweight running shoes with advanced cushioning and breathable mesh upper."
  },
  {
    id: 12,
    name: "Desk Lamp",
    price: 69.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    rating: 4.4,
    reviews: 345,
    inStock: true,
    stockCount: 67,
    description: "LED desk lamp with adjustable brightness and USB charging port."
  },
  {
    id: 13,
    name: "Sunglasses",
    price: 119.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    rating: 4.6,
    reviews: 567,
    inStock: true,
    stockCount: 23,
    description: "UV protection sunglasses with polarized lenses and lightweight frame."
  },
  {
    id: 14,
    name: "Power Bank",
    price: 49.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609598223644-39126c3c6d89?w=400",
    rating: 4.3,
    reviews: 423,
    inStock: true,
    stockCount: 91,
    description: "High-capacity power bank with fast charging and multiple device compatibility."
  },
  {
    id: 15,
    name: "Yoga Mat",
    price: 39.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    rating: 4.5,
    reviews: 278,
    inStock: true,
    stockCount: 52,
    description: "Non-slip yoga mat with excellent cushioning and eco-friendly materials."
  }
]

// Cart State
const cart = JSON.parse(localStorage.getItem("cart")) || []

// Wishlist State
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

// Search and Filter State
let currentFilter = 'all'
let currentSearch = ''

// Render Products
function renderProducts(list = products) {
  const grid = document.getElementById("product-grid")
  if (!grid) return
  
  // Filter products based on current filter and search
  let filteredProducts = list
  if (currentFilter !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === currentFilter.toLowerCase())
  }
  if (currentSearch) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(currentSearch.toLowerCase())
    )
  }
  
  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-20 space-y-4">
        <div class="w-24 h-24 mx-auto bg-neutral-100 rounded-full flex items-center justify-center">
          <svg class="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-neutral-600">No products found</h3>
        <p class="text-neutral-500">Try adjusting your search or filter criteria</p>
        <button onclick="clearFilters()" class="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary/90 transition-all">
          Clear Filters
        </button>
      </div>
    `
    return
  }
  
  grid.innerHTML = filteredProducts
    .map(
      (product) => `
    <div class="group relative space-y-4 animate-in fade-in zoom-in duration-500 cursor-pointer" onclick="window.location.href='product-detail.html?id=${product.id}'">
      <div class="aspect-square rounded-3xl overflow-hidden bg-neutral-100 relative">
        <img src="${product.image}" alt="${product.name}" class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110">
        ${product.originalPrice ? `<div class="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">${Math.round((1 - product.price/product.originalPrice) * 100)}% OFF</div>` : ''}
        ${!product.inStock ? `<div class="absolute inset-0 bg-black/50 flex items-center justify-center"><span class="bg-white text-black px-4 py-2 rounded-full font-bold">Out of Stock</span></div>` : ''}
        <div class="absolute top-4 right-4 flex flex-col gap-2">
          <button onclick="event.stopPropagation(); toggleWishlist(${product.id})" class="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-all">
            <svg class="w-5 h-5 ${wishlist.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
        </div>
        <button onclick="event.stopPropagation(); addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''} class="absolute bottom-4 right-4 bg-white text-primary p-4 rounded-2xl shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all active:scale-90 ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </button>
      </div>
      <div class="space-y-1">
        <p class="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">${product.category}</p>
        <h3 class="font-bold text-lg leading-tight">${product.name}</h3>
        <div class="flex items-center gap-2">
          <div class="flex items-center">
            ${Array.from({length: 5}, (_, i) => `
              <svg class="w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            `).join('')}
            <span class="text-xs text-gray-500 ml-1">(${product.reviews})</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <p class="text-primary font-bold text-xl">$${product.price.toFixed(2)}</p>
          ${product.originalPrice ? `<p class="text-sm text-gray-400 line-through">$${product.originalPrice.toFixed(2)}</p>` : ''}
        </div>
        <p class="text-sm text-gray-600 line-clamp-2">${product.description}</p>
      </div>
    </div>
  `,
    )
    .join("")
}

// Cart Logic
window.addToCart = (id) => {
  const product = products.find((p) => p.id === id)
  if (!product || !product.inStock) {
    showToast('Product is out of stock!')
    return
  }
  
  const existing = cart.find((item) => item.id === id)
  if (existing) {
    existing.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }
  updateCart()
  showToast(`${product.name} added to cart!`)
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  const badge = document.getElementById("cart-count")

  if (count > 0) {
    badge.textContent = count
    badge.classList.remove("hidden")
  } else {
    badge.classList.add("hidden")
  }
}

// Wishlist Functions
window.toggleWishlist = (id) => {
  const product = products.find((p) => p.id === id)
  const existing = wishlist.find((itemId) => itemId === id)
  
  if (existing) {
    // Remove from wishlist
    const index = wishlist.indexOf(id)
    wishlist.splice(index, 1)
    showToast(`${product.name} removed from wishlist`)
  } else {
    // Add to wishlist
    wishlist.push(id)
    showToast(`${product.name} added to wishlist`)
  }
  
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
  
  // Re-render products to update heart icons
  renderProducts()
}

function updateWishlistIcons() {
  const wishlistButtons = document.querySelectorAll('[data-wishlist-id]')
  wishlistButtons.forEach(button => {
    const productId = parseInt(button.getAttribute('data-wishlist-id'))
    const heartIcon = button.querySelector('svg')
    
    if (wishlist.includes(productId)) {
      heartIcon.classList.add('text-red-500', 'fill-current')
      heartIcon.classList.remove('text-gray-400')
    } else {
      heartIcon.classList.remove('text-red-500', 'fill-current')
      heartIcon.classList.add('text-gray-400')
    }
  })
}

// Search Functionality
function setupSearch() {
  const searchBtn = document.getElementById('search-btn')
  const searchInput = document.getElementById('search-input')
  
  if (searchBtn && !searchInput) {
    // Create search modal
    const searchModal = document.createElement('div')
    searchModal.id = 'search-modal'
    searchModal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden'
    searchModal.innerHTML = `
      <div class="flex items-start justify-center min-h-screen p-4 pt-20">
        <div class="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl">
          <div class="flex items-center gap-4 mb-6">
            <div class="flex-1 relative">
              <input type="text" id="search-input" placeholder="Search products..." 
                     class="w-full pl-12 pr-4 py-4 rounded-2xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg">
              <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <button onclick="closeSearch()" class="p-4 hover:bg-neutral-100 rounded-2xl transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div id="search-suggestions" class="space-y-2 max-h-60 overflow-y-auto">
            <!-- Search suggestions will appear here -->
          </div>
        </div>
      </div>
    `
    
    document.body.appendChild(searchModal)
    
    searchBtn.addEventListener('click', openSearch)
    
    // Search input event listeners
    searchModal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSearch()
      }
    })
  }
}

function openSearch() {
  const modal = document.getElementById('search-modal')
  const searchInput = document.getElementById('search-input')
  
  modal.classList.remove('hidden')
  searchInput.focus()
  
  // Search functionality
  searchInput.addEventListener('input', handleSearch)
}

function closeSearch() {
  const modal = document.getElementById('search-modal')
  const searchInput = document.getElementById('search-input')
  
  modal.classList.add('hidden')
  searchInput.value = ''
  currentSearch = ''
  renderProducts()
}

function handleSearch(e) {
  currentSearch = e.target.value
  
  if (currentSearch.length > 0) {
    // Show search suggestions
    const suggestions = products.filter(p => 
      p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(currentSearch.toLowerCase())
    ).slice(0, 5)
    
    const suggestionsContainer = document.getElementById('search-suggestions')
    suggestionsContainer.innerHTML = suggestions.map(product => `
      <div onclick="selectSearchSuggestion('${product.name}')" class="flex items-center gap-4 p-4 hover:bg-neutral-50 rounded-xl cursor-pointer transition-colors">
        <img src="${product.image}" alt="${product.name}" class="w-12 h-12 object-cover rounded-lg">
        <div class="flex-1">
          <h4 class="font-semibold">${product.name}</h4>
          <p class="text-sm text-neutral-500">${product.category}</p>
        </div>
        <p class="font-bold text-primary">$${product.price.toFixed(2)}</p>
      </div>
    `).join('')
  } else {
    document.getElementById('search-suggestions').innerHTML = ''
  }
  
  renderProducts()
}

function selectSearchSuggestion(productName) {
  const searchInput = document.getElementById('search-input')
  searchInput.value = productName
  currentSearch = productName
  closeSearch()
  renderProducts()
}

// Filter Functionality
function setupFilters() {
  const filterBtns = document.querySelectorAll("[data-category]")
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active filter button
      filterBtns.forEach(b => b.classList.remove('bg-primary', 'text-white'))
      filterBtns.forEach(b => b.classList.add('border', 'border-border', 'text-sm', 'hover:bg-secondary', 'transition-colors'))
      
      btn.classList.remove('border', 'border-border', 'text-sm', 'hover:bg-secondary', 'transition-colors')
      btn.classList.add('bg-primary', 'text-white')
      
      const category = btn.getAttribute("data-category")
      currentFilter = category
      
      // Filter products
      const filtered = category === "all" ? products : products.filter((p) => p.category.toLowerCase() === category.toLowerCase())
      renderProducts(filtered)
    })
  })
}

// Clear all filters
window.clearFilters = () => {
  currentFilter = 'all'
  currentSearch = ''
  
  // Reset filter buttons
  const filterBtns = document.querySelectorAll("[data-category]")
  filterBtns.forEach(b => b.classList.remove('bg-primary', 'text-white'))
  filterBtns.forEach(b => b.classList.add('border', 'border-border', 'text-sm', 'hover:bg-secondary', 'transition-colors'))
  
  // Set "All" as active
  const allBtn = document.querySelector("[data-category='all']")
  if (allBtn) {
    allBtn.classList.remove('border', 'border-border', 'text-sm', 'hover:bg-secondary', 'transition-colors')
    allBtn.classList.add('bg-primary', 'text-white')
  }
  
  renderProducts()
}

// Apply category filter (for dropdown menu)
window.applyCategoryFilter = (category) => {
  currentFilter = category
  currentSearch = ''
  
  // Reset filter buttons
  const filterBtns = document.querySelectorAll("[data-category]")
  filterBtns.forEach(b => b.classList.remove('bg-primary', 'text-white'))
  filterBtns.forEach(b => b.classList.add('border', 'border-border', 'text-sm', 'hover:bg-secondary', 'transition-colors'))
  
  // Set active button
  const activeBtn = document.querySelector(`[data-category='${category}']`)
  if (activeBtn) {
    activeBtn.classList.remove('border', 'border-border', 'text-sm', 'hover:bg-secondary', 'transition-colors')
    activeBtn.classList.add('bg-primary', 'text-white')
  }
  
  renderProducts()
}

// Authentication Functions
function isLoggedIn() {
  return localStorage.getItem('currentUser') !== null
}

function getCurrentUser() {
  const user = localStorage.getItem('currentUser')
  return user ? JSON.parse(user) : null
}

function logout() {
  localStorage.removeItem('currentUser')
  window.location.href = 'index.html'
}

// Set active filter button
function setActiveFilter() {
  const allBtn = document.querySelector("[data-category='all']")
  if (allBtn) {
    allBtn.classList.add('bg-primary', 'text-white')
  }
}

function showToast(msg) {
  const toast = document.createElement("div")
  toast.className =
    "fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-8 py-4 rounded-2xl shadow-2xl font-bold text-sm animate-in slide-in-from-bottom-10 z-[100]"
  toast.textContent = msg
  document.body.appendChild(toast)
  setTimeout(() => toast.remove(), 3000)
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProducts()
  updateCart()
  setupSearch()
  setupFilters()
  setActiveFilter()
})
