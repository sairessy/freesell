const user = document.cookie.split("=")[1]

if(user != undefined && user != null) {
  window.location.href = "dashboard.html"
}

document.getElementById("form-login").addEventListener("submit", async e => {
  e.preventDefault()
  document.getElementById("btn-submit-login").disabled = true
  document.getElementById("btn-submit-login").style.backgroundColor = "#ddd"

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

  if(json != null) {
    document.cookie = "user=" + json._id
    window.location.href = "dashboard.html"
  } else {
    $(".error-msg span").fadeIn()
    setTimeout(() => {
      $(".error-msg span").fadeOut()
    }, 2000);
    document.getElementById("btn-submit-login").disabled = false
    document.getElementById("btn-submit-login").style.backgroundColor = "#10076a"
  }
})

document.getElementById("checkbox-show-pass").addEventListener("change", e => {
  document.getElementById("input-pass").type = e.target.checked ? "text" : "password"
})