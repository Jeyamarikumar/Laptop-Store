/*document.addEventListener('DOMContentLoaded', function() {
    // Product data
    const products = [
        {
            id: 1,
            name: 'MacBook Pro 16"',
            brand: 'apple',
            description: 'Apple M1 Pro chip, 16GB RAM, 512GB SSD',
            price: 191990,
            image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 2,
            name: 'Dell XPS 15',
            brand: 'dell',
            description: 'Intel Core i7, 16GB RAM, 1TB SSD, 4K Display',
            price: 243240,
            image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 3,
            name: 'HP Spectre x360',
            brand: 'hp',
            description: 'Intel Core i7, 16GB RAM, 512GB SSD, 2-in-1 Convertible',
            price: 180000,
            image: 'hp.jpeg'
        },
        {
            id: 4,
            name: 'Lenovo ThinkPad X1 Carbon',
            brand: 'lenovo',
            description: 'Intel Core i5, 8GB RAM, 256GB SSD, Ultra Lightweight',
            price: 155590,
            image: 'lenovo.jpeg'
        },
        {
            id: 5,
            name: 'Asus ROG Zephyrus G14',
            brand: 'asus',
            description: 'AMD Ryzen 9, 16GB RAM, 1TB SSD, RTX 3060',
            price: 168290,
            image: 'as2.jpeg'
        },
        {
            id: 6,
            name: 'MacBook Air M1',
            brand: 'apple',
            description: 'Apple M1 chip, 8GB RAM, 256GB SSD',
            price: 85994,
            image: 'mac.jpeg'
        },
        {
            id: 7,
            name: 'Dell Inspiron 15',
            brand: 'dell',
            description: 'Intel Core i5, 8GB RAM, 256GB SSD',
            price: 53299,
            image: 'dell.jpeg'
        },
        {
            id: 8,
            name: 'HP Pavilion 15',
            brand: 'hp',
            description: 'AMD Ryzen 5, 8GB RAM, 512GB SSD',
            price: 75000,
            image: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    ];

    // Shopping cart
    let cart = [];

    // DOM elements
    const productGrid = document.getElementById('product-grid');
    const cartCount = document.querySelector('.cart-count');
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const closeCart = document.querySelector('.close-cart');
    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');

    // Display products
    function displayProducts(productsToDisplay) {
        productGrid.innerHTML = '';
        
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">₹${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" data-id="${product.id}">More Details</button>
                    <button class="Book" data-id="${product.id}">Purchase</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Add event listeners to add to cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    // Filter products
    function filterProducts() {
        const brand = brandFilter.value;
        const priceRange = priceFilter.value;
        
        let filteredProducts = products;
        
        // Filter by brand
        if (brand !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.brand === brand);
        }
        
        // Filter by price
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            if (priceRange.endsWith('+')) {
                filteredProducts = filteredProducts.filter(product => product.price >= min);
            } else {
                filteredProducts = filteredProducts.filter(product => product.price >= min && product.price <= max);
            }
        }
        
        displayProducts(filteredProducts);
    }

    
    // Load cart from localStorage
    function loadCart() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCart();
        }
    }

    // Event listeners
    cartIcon.addEventListener('click', () => {
        displayCartItems();
        cartModal.style.display = 'flex';
    });

    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    brandFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);

   
   

    // Initialize
    displayProducts(products);
    loadCart();


});*/

       /* document.addEventListener('DOMContentLoaded', function() {
            // Product data
            const products = [
                {
                    id: 1,
                    name: 'MacBook Pro 16"',
                    brand: 'apple',
                    description: 'Apple M1 Pro chip, 16GB RAM, 512GB SSD',
                    price: 191990,
                    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    details: 'The MacBook Pro 16" features a stunning Liquid Retina XDR display, up to 10-core CPU, up to 32-core GPU, and up to 64GB of unified memory. With up to 21 hours of battery life, it\'s the most powerful MacBook Pro ever.'
                },
                {
                    id: 2,
                    name: 'Dell XPS 15',
                    brand: 'dell',
                    description: 'Intel Core i7, 16GB RAM, 1TB SSD, 4K Display',
                    price: 243240,
                    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    details: 'The Dell XPS 15 features a 15.6-inch 4K Ultra HD+ (3840 x 2400) InfinityEdge touch display, 11th Gen Intel Core i7-11800H processor, NVIDIA GeForce RTX 3050 Ti graphics, and a premium aluminum and carbon fiber design.'
                },
                {
                    id: 3,
                    name: 'HP Spectre x360',
                    brand: 'hp',
                    description: 'Intel Core i7, 16GB RAM, 512GB SSD, 2-in-1 Convertible',
                    price: 180000,
                    image: 'hp.jpeg',
                    details: 'The HP Spectre x360 is a premium 2-in-1 convertible laptop with a 13.5-inch 3K2K OLED touch display, 11th Gen Intel Core i7 processor, Intel Iris Xe graphics, and a sleek gem-cut design with all-day battery life.'
                },
                {
                    id: 4,
                    name: 'Lenovo ThinkPad X1 Carbon',
                    brand: 'lenovo',
                    description: 'Intel Core i5, 8GB RAM, 256GB SSD, Ultra Lightweight',
                    price: 155590,
                    image: 'lenovo.jpeg',
                    details: 'The ThinkPad X1 Carbon Gen 9 features a 14-inch FHD display, 11th Gen Intel Core i5 processor, integrated Intel UHD graphics, and weighs just 2.49 lbs. It\'s MIL-SPEC tested for durability and offers legendary ThinkPad keyboard quality.'
                },
                {
                    id: 5,
                    name: 'Asus ROG Zephyrus G14',
                    brand: 'asus',
                    description: 'AMD Ryzen 9, 16GB RAM, 1TB SSD, RTX 3060',
                    price: 168290,
                    image: 'as2.jpeg',
                    details: 'The ROG Zephyrus G14 is a powerful gaming laptop with a 14-inch QHD 120Hz display, AMD Ryzen 9 5900HS processor, NVIDIA GeForce RTX 3060 graphics, and an ultra-slim design with AniMe Matrix LED display on the lid.'
                },
                {
                    id: 6,
                    name: 'MacBook Air M1',
                    brand: 'apple',
                    description: 'Apple M1 chip, 8GB RAM, 256GB SSD',
                    price: 85994,
                    image: 'mac.jpeg',
                    details: 'The MacBook Air with M1 chip features an 8-core CPU, up to 8-core GPU, 13.3-inch Retina display, and up to 18 hours of battery life. It\'s fanless, silent, and delivers incredible performance in a thin and light design.'
                },
                {
                    id: 7,
                    name: 'Dell Inspiron 15',
                    brand: 'dell',
                    description: 'Intel Core i5, 8GB RAM, 256GB SSD',
                    price: 53299,
                    image: 'dell.jpeg',
                    details: 'The Dell Inspiron 15 3000 features a 15.6-inch FHD display, 11th Gen Intel Core i5-1135G7 processor, Intel Iris Xe graphics, and a sleek design with narrow borders. It offers great performance for everyday computing tasks.'
                },
                {
                    id: 8,
                    name: 'HP Pavilion 15',
                    brand: 'hp',
                    description: 'AMD Ryzen 5, 8GB RAM, 512GB SSD',
                    price: 75000,
                    image: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    details: 'The HP Pavilion 15 features a 15.6-inch FHD IPS micro-edge display, AMD Ryzen 5 5500U processor, AMD Radeon graphics, and a sleek design with backlit keyboard. It offers great performance for work and entertainment.'
                }
            ];

            // DOM elements
            const productGrid = document.getElementById('product-grid');
            const cartCount = document.querySelector('.cart-count');
            const cartIcon = document.querySelector('.cart-icon');
            const brandFilter = document.getElementById('brand-filter');
            const priceFilter = document.getElementById('price-filter');
            const productModal = document.getElementById('product-modal');
            const productDetailsContent = document.getElementById('product-details-content');
            const closeModal = document.querySelector('.close');

            // Display products
            function displayProducts(productsToDisplay) {
                productGrid.innerHTML = '';
                
                productsToDisplay.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';
                    productCard.innerHTML = `
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="product-info">
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
                            <button class="add-to-cart" data-id="${product.id}">More Details</button>
                            <button class="Book" data-id="${product.id}">Purchase</button>
                        </div>
                    `;
                    productGrid.appendChild(productCard);
                });

                // Add event listeners to buttons
                document.querySelectorAll('.add-to-cart').forEach(button => {
                    button.addEventListener('click', showProductDetails);
                });
                
                document.querySelectorAll('.Book').forEach(button => {
                    button.addEventListener('click', purchaseProduct);
                });
            }

            // Show product details
            function showProductDetails(event) {
                const productId = parseInt(event.target.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                
                if (product) {
                    productDetailsContent.innerHTML = `
                        <h2>${product.name}</h2>
                        <img src="${product.image}" alt="${product.name}">
                        <p><strong>Brand:</strong> ${product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}</p>
                        <p><strong>Price:</strong> ₹${product.price.toLocaleString('en-IN')}</p>
                        <p><strong>Description:</strong> ${product.description}</p>
                        <p><strong>Details:</strong> ${product.details}</p>
                        <button class="Book" data-id="${product.id}" style="margin-top: 1rem;">Purchase Now</button>
                    `;
                    
                    // Add event listener to the purchase button in the modal
                    productDetailsContent.querySelector('.Book').addEventListener('click', purchaseProduct);
                    
                    productModal.style.display = 'flex';
                }
            }

            // Purchase product
            function purchaseProduct(event) {
                const productId = parseInt(event.target.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                
                if (product) {
                    alert(`You have purchased ${product.name} for ₹${product.price.toLocaleString('en-IN')}. Thank you for your order!`);
                    productModal.style.display = 'none';
                }
            }

            // Close modal
            closeModal.addEventListener('click', function() {
                productModal.style.display = 'none';
            });

            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === productModal) {
                    productModal.style.display = 'none';
                }
            });

            // Filter products
            function filterProducts() {
                const selectedBrand = brandFilter.value;
                const selectedPrice = priceFilter.value;
                
                let filteredProducts = products;
                
                // Filter by brand
                if (selectedBrand !== 'all') {
                    filteredProducts = filteredProducts.filter(product => product.brand === selectedBrand);
                }
                
                // Filter by price
                if (selectedPrice !== 'all') {
                    const [min, max] = selectedPrice.split('-');
                    
                    if (max) {
                        filteredProducts = filteredProducts.filter(product => 
                            product.price >= parseInt(min) && product.price <= parseInt(max)
                        );
                    } else {
                        // For "200000+" case
                        filteredProducts = filteredProducts.filter(product => 
                            product.price >= parseInt(min.replace('+', ''))
                        );
                    }
                }
                
                displayProducts(filteredProducts);
            }

            // Event listeners for filters
            brandFilter.addEventListener('change', filterProducts);
            priceFilter.addEventListener('change', filterProducts);

            // Initialize the page
            displayProducts(products);
        });*/

document.addEventListener('DOMContentLoaded', function() {
    // Product data
    const products = [
        {
            id: 1,
            name: 'MacBook Pro 16"',
            brand: 'apple',
            description: 'Apple M1 Pro chip, 16GB RAM, 512GB SSD',
            price: 191990,
            image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            details: 'The MacBook Pro 16" features a stunning Liquid Retina XDR display, up to 10-core CPU, up to 32-core GPU, and up to 64GB of unified memory. With up to 21 hours of battery life, it\'s the most powerful MacBook Pro ever.'
        },
        {
            id: 2,
            name: 'Dell XPS 15',
            brand: 'dell',
            description: 'Intel Core i7, 16GB RAM, 1TB SSD, 4K Display',
            price: 243240,
            image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            details: 'The Dell XPS 15 features a 15.6-inch 4K Ultra HD+ (3840 x 2400) InfinityEdge touch display, 11th Gen Intel Core i7-11800H processor, NVIDIA GeForce RTX 3050 Ti graphics, and a premium aluminum and carbon fiber design.'
        },
        {
            id: 3,
            name: 'HP Spectre x360',
            brand: 'hp',
            description: 'Intel Core i7, 16GB RAM, 512GB SSD, 2-in-1 Convertible',
            price: 180000,
            image: 'hp.jpeg',
            details: 'The HP Spectre x360 is a premium 2-in-1 convertible laptop with a 13.5-inch 3K2K OLED touch display, 11th Gen Intel Core i7 processor, Intel Iris Xe graphics, and a sleek gem-cut design with all-day battery life.'
        },
        {
            id: 4,
            name: 'Lenovo ThinkPad X1 Carbon',
            brand: 'lenovo',
            description: 'Intel Core i5, 8GB RAM, 256GB SSD, Ultra Lightweight',
            price: 155590,
            image: 'lenovo.jpeg',
            details: 'The ThinkPad X1 Carbon Gen 9 features a 14-inch FHD display, 11th Gen Intel Core i5 processor, integrated Intel UHD graphics, and weighs just 2.49 lbs. It\'s MIL-SPEC tested for durability and offers legendary ThinkPad keyboard quality.'
        },
        {
            id: 5,
            name: 'Asus ROG Zephyrus G14',
            brand: 'asus',
            description: 'AMD Ryzen 9, 16GB RAM, 1TB SSD, RTX 3060',
            price: 168290,
            image: 'as2.jpeg',
            details: 'The ROG Zephyrus G14 is a powerful gaming laptop with a 14-inch QHD 120Hz display, AMD Ryzen 9 5900HS processor, NVIDIA GeForce RTX 3060 graphics, and an ultra-slim design with AniMe Matrix LED display on the lid.'
        },
        {
            id: 6,
            name: 'MacBook Air M1',
            brand: 'apple',
            description: 'Apple M1 chip, 8GB RAM, 256GB SSD',
            price: 85994,
            image: 'mac.jpeg',
            details: 'The MacBook Air with M1 chip features an 8-core CPU, up to 8-core GPU, 13.3-inch Retina display, and up to 18 hours of battery life. It\'s fanless, silent, and delivers incredible performance in a thin and light design.'
        },
        {
            id: 7,
            name: 'Dell Inspiron 15',
            brand: 'dell',
            description: 'Intel Core i5, 8GB RAM, 256GB SSD',
            price: 53299,
            image: 'dell.jpeg',
            details: 'The Dell Inspiron 15 3000 features a 15.6-inch FHD display, 11th Gen Intel Core i5-1135G7 processor, Intel Iris Xe graphics, and a sleek design with narrow borders. It offers great performance for everyday computing tasks.'
        },
        {
            id: 8,
            name: 'HP Pavilion 15',
            brand: 'hp',
            description: 'AMD Ryzen 5, 8GB RAM, 512GB SSD',
            price: 75000,
            image: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            details: 'The HP Pavilion 15 features a 15.6-inch FHD IPS micro-edge display, AMD Ryzen 5 5500U processor, AMD Radeon graphics, and a sleek design with backlit keyboard. It offers great performance for work and entertainment.'
        }
    ];

    // DOM elements
    const productGrid = document.getElementById('product-grid');
    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');
    const productModal = document.createElement('div');
    productModal.className = 'product-modal';
    productModal.innerHTML = `
        <div class="product-modal-content">
            <span class="close-product-modal">&times;</span>
            <div class="product-details" id="product-details-content">
                <!-- Product details will be inserted here -->
            </div>
        </div>
    `;
    document.body.appendChild(productModal);
    const closeProductModal = document.querySelector('.close-product-modal');
    const productDetailsContent = document.getElementById('product-details-content');

    // Display products
    function displayProducts(productsToDisplay) {
        productGrid.innerHTML = '';
        
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
                    <div class="product-actions">
                        <button class="details-btn" data-id="${product.id}">More Details</button>
                        <button class="purchase-btn" data-id="${product.id}">Purchase</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Add event listeners to buttons
        document.querySelectorAll('.details-btn').forEach(button => {
            button.addEventListener('click', showProductDetails);
        });
        
        document.querySelectorAll('.purchase-btn').forEach(button => {
            button.addEventListener('click', purchaseProduct);
        });
    }

    // Show product details
    function showProductDetails(event) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        
        if (product) {
            productDetailsContent.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-details-image">
                <div class="product-details-info">
                    <h2>${product.name}</h2>
                    <div class="product-details-price">₹${product.price.toLocaleString('en-IN')}</div>
                    <p class="product-details-description"><strong>Description:</strong> ${product.description}</p>
                    <p class="product-details-full">${product.details}</p>
                    <button class="modal-purchase-btn" data-id="${product.id}">Purchase Now</button>
                </div>
            `;
            
            // Add event listener to the purchase button in the modal
            productDetailsContent.querySelector('.modal-purchase-btn').addEventListener('click', purchaseProduct);
            
            productModal.style.display = 'flex';
        }
    }

    // Purchase product
    function purchaseProduct(event) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        
        if (product) {
            alert(`You have purchased ${product.name} for ₹${product.price.toLocaleString('en-IN')}. Thank you for your order!`);
            productModal.style.display = 'none';
        }
    }

    // Close modal
    closeProductModal.addEventListener('click', function() {
        productModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === productModal) {
            productModal.style.display = 'none';
        }
    });

    // Filter products
    function filterProducts() {
        const selectedBrand = brandFilter.value;
        const selectedPrice = priceFilter.value;
        
        let filteredProducts = products;
        
        // Filter by brand
        if (selectedBrand !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.brand === selectedBrand);
        }
        
        // Filter by price
        if (selectedPrice !== 'all') {
            const [min, max] = selectedPrice.split('-');
            
            if (max) {
                filteredProducts = filteredProducts.filter(product => 
                    product.price >= parseInt(min) && product.price <= parseInt(max)
                );
            } else {
                // For "300000+" case
                filteredProducts = filteredProducts.filter(product => 
                    product.price >= parseInt(min.replace('+', ''))
                );
            }
        }
        
        displayProducts(filteredProducts);
    }

    // Event listeners for filters
    brandFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('text').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            alert(`Thank you for your message, ${name}! We'll get back to you soon at ${email}.`);
            contactForm.reset();
        });
    }
    // Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});



    // Initialize the page
    displayProducts(products);
});
