let iconCart = document.querySelector(".icon-cart")
let closeCart = document.querySelector(".close")
let body = document.querySelector("body")

iconCart.addEventListener('click',() => {
    body.classList.toggle("showCart")
})
closeCart.addEventListener('click',() => {
    body.classList.toggle("showCart")
})

let listProductHTML = document.querySelector(".listProduct")
let listCartHTML = document.querySelector('.listCart')
let iconCartSpan = document.querySelector(".icon-cart span");
let listProducts = []
let carts = []

const addDataToHTML = () => {
    listProductHTML.innerHTML = ''
    if (listProducts.length > 0)
    {
        listProducts.forEach(product => {
            let newProduct = document.createElement('div')
            newProduct.classList.add('item')
            newProduct.dataset.id = product.id

            newProduct.innerHTML = `
                        <img src="${ product.image }" alt="image"/>
                        <h2>${ product.name }</h2>
                        <div class="price">₹${ product.price }</div>
                        <button class="addCart">
                            Add To Cart
                        </button>
                    `
            listProductHTML.appendChild(newProduct)
        })
    }
}

listProductHTML.addEventListener('click',(event) => {
    let positionClick = event.target
    if (positionClick.classList.contains("addCart"))
    {
        let product_id = positionClick.parentElement.dataset.id
        addToCart(product_id)
    }
})

const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id)
    if (carts.length <= 0)
    {
        carts = [ {
            product_id: product_id,
            quantity: 1
        }
        ]
    }
    else if (positionThisProductInCart < 0)
    {
        carts.push({
            product_id: product_id,
            quantity: 1
        })
    }
    else
    {
        carts[ positionThisProductInCart ].quantity += 1

    }
    console.log(carts)

    addCartToHTML()
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = ''

    if (carts.length > 0)
    {
        carts.forEach((cart) => {
            let newCart = document.createElement("div")
            newCart.classList.add("item")

            let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id)
            let info = listProducts[ positionProduct ]

            newCart.innerHTML = `
                <div class="image">
                    <img src="${ info.image }" alt="${ info.name }" />
                </div>
                <div class="name">${ info.name }</div>
                <div>₹${ info.price * cart.quantity }</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>${ cart.quantity }</span>
                    <span class="plus">+</span>
                </div>
            `
            listCartHTML.appendChild(newCart)
        })
    }
    iconCartSpan.innerText = carts.length;
}

const initApp = () => {
    fetch("products.json")
        .then(response => response.json())
        .then(data => {
            listProducts = data
            console.log(listProducts)
            addDataToHTML()
            addCartToHTML()
        })
}
initApp()