const all = document.getElementById("btt-all")
const pop = document.getElementById("btt-pop")
const mpb = document.getElementById("btt-mpb")
const forro = document.getElementById("btt-forro")
const samba = document.getElementById("btt-samba")
const baiao = document.getElementById("btt-baiao")
const rap = document.getElementById("btt-rap")
const hiphop = document.getElementById("btt-hiphop")
const rock = document.getElementById("btt-rock")
const reggae = document.getElementById("btt-reggae")
const country = document.getElementById("btt-country")
const gospel = document.getElementById("btt-gospel")
const cards = document.querySelector(".cards__ul")

function showCards(array) {
    cards.innerHTML = ""
    array.forEach((el, index) => {
        const list = document.createElement("li")
        const img = document.createElement("img")
        const listDiv = document.createElement("div")
        const listTitle = document.createElement("div")
        const band = document.createElement("p")
        const year = document.createElement("p")
        const title = document.createElement("h2")
        const buy = document.createElement("div")
        const price = document.createElement("p")
        const btt = document.createElement("button")

        list.classList.add("li-cards")
        listDiv.classList.add("div-li")
        listTitle.classList.add("div-li-title")
        title.classList.add("title-second-out-margin-bt")
        buy.classList.add("div-li-buy")

        list.id = index
        img.src = el.img
        band.innerText = el.band
        year.innerText = el.year
        title.innerText = el.title
        price.innerText = `R$${el.price}`
        btt.innerText = `Comprar`

        listTitle.append(band, year)
        buy.append(price, btt)
        listDiv.append(listTitle, title, buy)
        list.append(img, listDiv)
        cards.append(list)
    });
}
showCards(products)

all.addEventListener("click", (event) => {
    event.preventDefault()
    const filterAll = products.filter((elem) => {
        return elem
    })
    pushInput(filterAll)
    showCards(filterAll)
})

pop.addEventListener("click", (event) => {
    event.preventDefault()
    const filterPop = products.filter((elem) => {
        return elem.category === 4
    })
    pushInput(filterPop)
    showCards(filterPop)
})

mpb.addEventListener("click", (event) => {
    event.preventDefault()
    const filterMpb = products.filter((elem) => {
        return elem.category <= 3
    })
    pushInput(filterMpb)
    showCards(filterMpb)
})

samba.addEventListener("click", (event) => {
    event.preventDefault()
    cards.innerHTML = ""
    alert("Nenhum produto encontrado")
})

forro.addEventListener("click", (event) => {
    event.preventDefault()
    cards.innerHTML = ""
    alert("Nenhum produto encontrado")
})

baiao.addEventListener("click", (event) => {
    event.preventDefault()
    cards.innerHTML = ""
    alert("Nenhum produto encontrado")
})

rap.addEventListener("click", (event) => {
    event.preventDefault()
    cards.innerHTML = ""
    alert("Nenhum produto encontrado")
})

hiphop.addEventListener("click", (event) => {
    event.preventDefault()
    cards.innerHTML = ""
    alert("Nenhum produto encontrado")
})

rock.addEventListener("click", (event) => {
    event.preventDefault()
    cards.innerHTML = ""
    alert("Nenhum produto encontrado")
})

reggae.addEventListener("click", (event) => {
    event.preventDefault()
    cards.innerHTML = ""
    alert("Nenhum produto encontrado")
})

country.addEventListener("click", (event) => {
    event.preventDefault()
    cards.innerHTML = ""
    alert("Nenhum produto encontrado")
})

gospel.addEventListener("click", (event) => {
    event.preventDefault()
    cards.innerHTML = ""
    alert("Nenhum produto encontrado")
})

const input = document.getElementById("input-price")
const priceValue = document.querySelector(".price")
priceValue.innerText = `Até R$${input.value}`

function pushInput(arr) {
    input.addEventListener("input", (event) => {
        event.preventDefault()
        priceValue.innerText = `Até R$${input.value}`
        const filterPrice = arr.filter((elem) => {
            return elem.price <= input.value
        })
        showCards(filterPrice)
    })
}
pushInput(products)








