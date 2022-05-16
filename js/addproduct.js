const user = document.cookie.split("=")[1]

var image = null

document.getElementById("form-add-product").addEventListener("submit", async e => {
  e.preventDefault()

  document.getElementById("btn-submit-product").disabled = true
  document.getElementById("btn-submit-product").style.backgroundColor = "#ddd"

  const title = document.getElementById("input-title").value
  const price = document.getElementById("input-price").value
  const category = document.getElementById("select-category").value
  const promotional = document.getElementById("promotional").checked

  const res = await fetch(config.server + "/freesell/api/addproduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({title, price, category, location: "0", user, image, promotional})
  })

  const json = await res.json()

  alert("Producto adicionado com sucesso!")
  window.location.href = "dashboard.html"
  // document.getElementById("input-title").value = ""
  // document.getElementById("input-price").value = ""
  // document.getElementById("btn-submit-product").disabled = false
  // document.getElementById("btn-submit-product").style.backgroundColor = "#10076a"
})

let cs = ''
config.categories.forEach(c => {
  cs += `<option value="${c.id}">${c.label}</option>`
});
document.getElementById("select-category").innerHTML = cs

// Image

document.getElementById('product-cover').addEventListener('click', (evt) => {
  let files = [];
  let reader;

  let input = document.createElement('input');
  input.type = 'file';


  input.onchange = e => {
    files = e.target.files;

    reader = new FileReader();
    reader.onload = async () => {
    const size = files[0].size
    const ext = files[0].type.split('/')[1]

    if(!['png', 'jpg', 'jpeg', 'jfif'].includes(ext)) {
      alert('A extensão do ficheiro não é válida!')
      return
    }

    if(size > 1024000) {
      alert('O tamanho do seu ficheiro é superior ao limite permitido (1 MB)')
      return
    }

    image = {
      data: reader.result,
      ext: ext
    }

    evt.target.style.backgroundImage = `url(${image.data})`

    }
    reader.readAsDataURL(files[0]);
  }

  input.click();
})