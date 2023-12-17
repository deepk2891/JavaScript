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
let listProducts = []

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
        alert(product_id)
    }
})

const initApp = () => {
    fetch("products.json")
        .then(response => response.json())
        .then(data => {
            listProducts = data
            console.log(listProducts)
            addDataToHTML()
        })
}
initApp()