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

const initApp = () => {
    fetch("products.json")
        .then(response => response.json())
        .then(data => {
            listProducts = data
            console.log(listProducts)
        })
}
initApp()