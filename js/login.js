document.getElementById("form-login").addEventListener("submit", async e => {
  e.preventDefault()
  const email = document.getElementById("input-email").value
  const pass = document.getElementById("input-pass").value

  const res = await fetch(config.server + "/freesell/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, pass})
  })

  const json = await res.json()

  if(json.success) {
    window.location.href = "dashboard.html"
  } else {
    alert("Usuário ou senha inválida!")
  }
})

document.getElementById("checkbox-show-pass").addEventListener("change", e => {
  document.getElementById("input-pass").type = e.target.checked ? "text" : "password"
})