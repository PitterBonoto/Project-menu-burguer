
const products = document.querySelector('.list-products')
const buttonDisplayProducts = document.querySelector('.display-products')
const valueTotal = document.querySelector('.valor-total')



function displayProducts(myArray) {
    let myLi = ''
    myArray.forEach(product => {
        myLi += `
        <li class="product">
            <img class= "img-product" src=${product.src}>
            <p class="descrition">${product.name}</p>
            <p class="value">R$ ${(product.price).toFixed(2)}</p>
        </li>
    `
    })

    products.innerHTML = myLi
}





function discount() {
    const discountPrice = menuOptions.map (value => ({
        ...value,
        price: value.price - (value.price * 0.1)
       
    }))
    
    displayProducts(discountPrice)
}





function vegan() {
    const veganProduct = menuOptions.filter(product => {
        if (product.vegan === true) {
            return true
        } else {
            return false
        }
    })

    displayProducts(veganProduct)
}


function total() {
    const totalValue = menuOptions.reduce((acc, valorAtual) => {
       return acc + valorAtual.price
    }, 0)

    valueTotal.innerHTML = `A soma de todos os itens do menu é:<br> <span class="span-value">R$ ${totalValue.toFixed(2)}</span> 
    <br><br> Na promoção:<br> <span class="span-value">R$ ${(totalValue * 0.9).toFixed(2)}</span> `
}








