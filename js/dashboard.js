const user = document.cookie.split("=")[1]

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

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const {_id, title, price, category, location} = product
    auxProducts += ProductPrivate(_id, title, price, category, location)
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

  const data = {email, companyName, contact, user}
  console.log(data)

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

  document.getElementById("input-email").value = json.email
  document.getElementById("input-company-name").value = json.companyName == undefined ? "" : json.companyName
  document.getElementById("input-contact").value = json.contact == undefined ? "" : json.contact
}