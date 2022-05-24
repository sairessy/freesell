let category = ""
let limit = 12
const limitPlus = 12
let limitReached = false

const user = document.cookie.split("=")[1]

if(user != undefined && user != null) {
  document.getElementById("a-sell").href = "dashboard.html"
}

getProducts()

async function getProducts() {
  const url = new URL(window.location.href)
  const seller = url.searchParams.get("s")
  const res = await fetch(config.server + "/freesell/api/products/seller", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({limit, category, seller})
  })

  const json = await res.json()
  const products = json


  let auxProducts = ""

  document.querySelector("#banner h1").innerText = products[0].companyName

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const userChecked = true
    const image = product.image != null ? product.image.data : null
    const {_id, title, price, category, location, description, contact, date, user, companyName} = product
    auxProducts += Product(_id, title, price, category, location, description, contact, date, user, companyName, image, userChecked)
  }

  limit += limitPlus
  document.getElementById("products").innerHTML = auxProducts
  

  // document.getElementById("btn-more-loader").style.display = "none"
  // document.getElementById("btn-more").disabled = false

  // if(!json.limitReached) {
  //   document.getElementById("btn-more").style.display = "block"
  // } else {
  //   document.getElementById("btn-more").style.display = "none"
  // }
}

async function checkAuth() {
  const res = await fetch(config.server + "/freesell/api/checkauth") 
  const json = await res.json()

  if(json.success) {
    document.getElementById("a-sell").href = "dashboard.html"
  }
}

document.getElementById("btn-more").addEventListener("click", (e) => {
  e.target.disabled = true
  document.getElementById("btn-more-loader").style.display = "inline-block"
  getProducts()
})

document.querySelectorAll("#categories a").forEach(l => {
  l.addEventListener("click", e => {
    category = e.target.id
    document.querySelectorAll("#categories a").forEach(ll => {
      ll.style.borderLeft = "1px solid #fcfcfc"
    })

    e.target.style.borderLeft = "1px solid #10076a"

    limit -= limitPlus
    getProducts() 
  })
})

document.querySelector(".product-details-popup-container").addEventListener("click", e => {
  if(e.target.className == "product-details-popup-container" || e.target.id == "btn-close-popup-details") {
    document.querySelector(".product-details-popup-container").style.display = "none"
  }
})