document.getElementById("form-feedback").addEventListener("submit", async e => {
  e.preventDefault()
  const feedback = document.getElementById("textarea-feedback").value
  const email = document.getElementById("input-feedback-email").value

  const res = await fetch(config.server + "/freesell/api/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, feedback})
  })

  const json = await res.json()
  
  alert("Obrigado pelo seu feedback!")
})