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
  const res = await fetch(config.server + "/freesell/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({limit, category})
  })

  const json = await res.json()
  const products = json.products

  let auxProducts = ""

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const {_id, title, price, category, location, description, contact, date} = product
    auxProducts += Product(_id, title, price, category, location, description, contact, date)
  }

  limit += limitPlus
  document.getElementById("products").innerHTML = auxProducts
  

  document.getElementById("btn-more-loader").style.display = "none"
  document.getElementById("btn-more").disabled = false

  if(!json.limitReached) {
    document.getElementById("btn-more").style.display = "block"
  } else {
    document.getElementById("btn-more").style.display = "none"
  }
}

let categories = `<a href="#" id="">Todas</a>`

config.categories.forEach(c => {
  categories += `<a href="#" id="${c.id}">${c.label}</a>`
})

document.getElementById("categories").innerHTML = categories


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



document.getElementById("input-search").addEventListener("keyup", async e => {
  const text = e.target.value
  if(text == "") {
    limit -= limitPlus
    getProducts() 
    return
  }

  if(text.length > 2) {
    const res = await fetch(config.server + "/freesell/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text})
    })
  
    const json = await res.json()
    const products = json.products
    
    if(products.length > 0) {
      let auxProducts = ""
  
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const {_id, title, price, category, location, description, contact, date} = product
        auxProducts += Product(_id, title, price, category, location, description, contact, date)
      }
    
      document.getElementById("products").innerHTML = auxProducts
      document.getElementById("btn-more").style.display = "none"
    } else {
      document.getElementById("products").innerHTML = ""
      document.getElementById("btn-more").style.display = "none"
    }
  }
})

document.getElementById("input-search-mobile").addEventListener("keyup", async e => {
  const text = e.target.value
  if(text == "") {
    limit -= limitPlus
    getProducts() 
    return
  }

  if(text.length > 2) {
    const res = await fetch(config.server + "/freesell/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text})
    })
  
    const json = await res.json()
    const products = json.products
    
    if(products.length > 0) {
      let auxProducts = ""
  
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const {_id, title, price, category, location, description, contact, date} = product
        auxProducts += Product(_id, title, price, category, location, description, contact, date)
      }
    
      document.getElementById("products").innerHTML = auxProducts
      document.getElementById("btn-more").style.display = "none"
    } else {
      document.getElementById("products").innerHTML = ""
      document.getElementById("btn-more").style.display = "none"
    }
  }
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


// Slider
document.getElementById("slider-container").addEventListener("click", e => {
  if(e.target.id == "slider-container") {
    $("#slider").animate({left: "-80%"}, () => {
      $("#slider-container").fadeOut()
    })
    $("body").css("overflow-y", "scroll")
  }
})

$("#btn-menu").click(() => {
  $("#slider-container").fadeIn(() => {
    $("#slider").animate({left: "0"})
  })

  $("body").css("overflow-y", "hidden")
})

let cs = `<option value="">Todas categorias</option>`
config.categories.forEach(c => {
  cs += `<option value="${c.id}">${c.label}</option>`
});
document.getElementById("select-category-slider").innerHTML = cs

document.getElementById("select-category-slider").addEventListener("change", e => {
  category = e.target.value
  limit -= limitPlus
  getProducts() 
})
