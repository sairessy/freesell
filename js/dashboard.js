const user = document.cookie.split("=")[1]

if(user == undefined || user == null) {
  window.location.href = "login.html"
}

document.getElementById("a-link").innerText = "Link do estabelecimento"
document.getElementById("a-link").href = config.serverHost + "/seller.html?s=" + user

getProducts()

async function getProducts() {
  const res = await fetch(config.server + "/freesell/api/productsuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({user})
  })

  const json = await res.json()
  const products = json

  let auxProducts = ""

  document.querySelector("#banner h1").innerText = products[0].companyName

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const {_id, title, price, category, location} = product
    const image = product.image != null ? product.image.data : null
    auxProducts += ProductPrivate(_id, title, price, category, location, image)
  }

  document.getElementById("products").innerHTML = auxProducts
}

document.getElementById("a-logout").addEventListener("click", async () => {
  document.cookie = "user=;expires=Thu, 01 Jan 1970 00:00:00 UTC;"
  window.location.href = "index.html"
})

document.getElementById("form-update-profile").addEventListener("submit", async e => {
  e.preventDefault()
  const email = document.getElementById("input-email").value
  const companyName = document.getElementById("input-company-name").value
  const contact = document.getElementById("input-contact").value
  const location = document.getElementById("select-location").value
  const companyType = document.getElementById("select-company-type").value

  const data = {email, companyName, companyType, contact, location, user}

  const res = await fetch(config.server + "/freesell/api/updateuserprofile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })

  const json = await res.json()
  alert("Perfil actualizado com sucesso!")
})

getUserInfo()

async function getUserInfo() {
  const res = await fetch(config.server + "/freesell/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({user})
  })

  
  const json = await res.json()
  document.getElementById("select-company-type").value = json.companyType
  document.getElementById("select-location").value = json.location == undefined ? "" : json.location

  document.getElementById("input-email").value = json.email
  document.getElementById("input-company-name").value = json.companyName == undefined ? "" : json.companyName
  document.getElementById("input-contact").value = json.contact == undefined ? "" : json.contact
}

// Select

let lcs = ''
config.locations.forEach(l => {
  lcs += `<option value="${l.id}">${l.label}</option>`
});
document.getElementById("select-location").innerHTML = lcs

let cTypes = ''
config.companyType.forEach(ct => {
  cTypes += `<option value="${ct.id}">${ct.label}</option>`
});
document.getElementById("select-company-type").innerHTML = cTypes