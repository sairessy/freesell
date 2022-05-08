document.getElementById("form-login").addEventListener("submit", async e => {
  e.preventDefault()
  const email = document.getElementById("input-email").value
  const pass = document.getElementById("input-pass").value
  const cPass = document.getElementById("input-c-pass").value

  if(pass != cPass) {
    alert("As senhas não coincidem!")
    return
  }

  const res = await fetch(config.server + "/freesell/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, pass})
  })

  const json = await res.json()

  alert("Registado com sucesso!")
  window.location.href = "login.html"
})

document.getElementById("checkbox-show-pass").addEventListener("change", e => {
  document.getElementById("input-pass").type = e.target.checked ? "text" : "password"
  document.getElementById("input-c-pass").type = e.target.checked ? "text" : "password"
})