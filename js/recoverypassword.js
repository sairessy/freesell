document.getElementById("form-recovery-pass").addEventListener("submit", async e => {
  e.preventDefault()
  document.getElementById("btn-submit-recovery").disabled = true
  document.getElementById("btn-submit-recovery").style.backgroundColor = "#ddd"

  const pass = document.getElementById("input-new-pass").value
  const newPass = document.getElementById("input-confirm-new-pass").value

  const url = new URL(window.location.href)
  const user = url.searchParams.get("u")
  const code = url.searchParams.get("c")

  if(pass != newPass) {
    alert("As senhas não coincidem!")
    document.getElementById("btn-submit-recovery").disabled = false
    document.getElementById("btn-submit-recovery").style.backgroundColor = config.colors.primary
    return
  }


  const res = await fetch(config.server + "/freesell/api/changepassword", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({pass, user, code})
  })

  const json = await res.json()
  if(json.success) {
    alert("Senha alterada com sucesso!")
    window.location.href = "login.html"
  } else {
    alert("Houve um erro, o link pode ter sido invalidado!")
  }

  document.getElementById("btn-submit-recovery").disabled = false
  document.getElementById("btn-submit-recovery").style.backgroundColor = config.colors.primary

})

document.getElementById("checkbox-show-pass").addEventListener("change", e => {
  document.getElementById("input-new-pass").type = e.target.checked ? "text" : "password"
  document.getElementById("input-confirm-new-pass").type = e.target.checked ? "text" : "password"
})