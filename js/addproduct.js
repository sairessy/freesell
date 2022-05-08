const user = document.cookie.split("=")[1]

document.getElementById("form-add-product").addEventListener("submit", async e => {
  e.preventDefault()

  document.getElementById("btn-submit-product").disabled = true
  const title = document.getElementById("input-title").value
  const price = document.getElementById("input-price").value
  const category = document.getElementById("select-category").value
  const location = document.getElementById("select-location").value

  const res = await fetch(config.server + "/freesell/api/addproduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({title, price, category, location, user})
  })

  const json = await res.json()

  alert("Producto adicionado com sucesso!")
  document.getElementById("input-title").value = ""
  document.getElementById("input-price").value = ""
  document.getElementById("btn-submit-product").disabled = false
})

let cs = ''
config.categories.forEach(c => {
  cs += `<option value="${c.id}">${c.label}</option>`
});
document.getElementById("select-category").innerHTML = cs