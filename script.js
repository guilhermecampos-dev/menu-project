const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMap = document.querySelector('.map')
const buttonAdd = document.querySelector('.add')
const buttonVegan = document.querySelector('.vegan')

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
    return newValue
}

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) => {
        myLi += `
    <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price"> ${formatCurrency(product.price)}</p>
</li>
`
    })
    list.innerHTML = myLi
}

function mapAllItens(){
const newPrice = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
}))

showAll(newPrice)
}

function addAll(){
    const addTotal = menuOptions.reduce((acc, add) => {
        const addPrice = acc +  add.price
        return addPrice
    }, 0)
    list.innerHTML =`
    <li>
        <p>O Valor total dos itens é ${formatCurrency(addTotal)}</p>
</li>
    `
}


function veganFood(){
    const veganFilter = menuOptions.filter(vburguer => {
        if(vburguer.vegan === true)return true
        else return false
    })
    showAll(veganFilter)
}





buttonShowAll.addEventListener('click', () =>  showAll(menuOptions))
buttonMap.addEventListener('click', mapAllItens)
buttonAdd.addEventListener('click', addAll)
buttonVegan.addEventListener('click', veganFood)