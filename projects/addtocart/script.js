const products = [
    {
        image: "https://dummyimage.com/420x260",
        category: "MEN",
        name: "SlimFit T-shirt",
        price: 799,
    },
    {
        image: "https://dummyimage.com/420x260",
        category: "WOMEN",
        name: "Saree",
        price: 1499,
    },
    {
        image: "https://dummyimage.com/420x260",
        category: "MEN",
        name: "Track pant",
        price: 599,
    },
    {
        image: "https://dummyimage.com/420x260",
        category: "WOMEN",
        name: "Kurti",
        price: 899,
    },
]

const productsContainer = document.getElementById('productsContainer')

products.forEach(product => {
    const newRowHTML = `
        <div class="product-div sm:w-2/4 md:w-1/3 lg:w-1/4 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="${ product.image }" />
            </a>
            <div class="mt-4">
                <h3 class="product-category text-indigo-500 text-xs tracking-widest title-font mb-1">${ product.category }</h3>
                <h2 class="product-name title-font text-lg text-gray-900 font-medium">${ product.name }</h2>
                <p class="mt-1">₹${ product.price }</p>
                <div class="flex md:mt-4 mt-6">
                    <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">Buy now</button>
                    <button class="text-indigo-500 inline-flex items-center ml-4 add-to-cart-btn">
                        Add to cart
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>  
    `;
    productsContainer.innerHTML += newRowHTML;
});

productsContainer.addEventListener('click',function (event) {
    const addToCartButton = event.target.closest('.add-to-cart-btn');
    if (addToCartButton)
    {
        const productContainer = addToCartButton.closest('.product-div');
        const index = Array.from(productsContainer.children).indexOf(productContainer);
        addToCart(index);
    }
});

let cart = []

function addToCart (index) {
    const product = products[ index ];
    cart.push(product);
    console.log(cart);
}
