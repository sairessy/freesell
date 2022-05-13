document.getElementById("a-recovery").addEventListener("click", async () => {
  const email = prompt("Introduza o email")
  
  if(email === null) {
    return
  }

  const res = await fetch(config.server + "/freesell/api/sendrecoverycode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email})
  })

  const json = await res.json()

  
  if(json.err !== undefined) {
    alert("Houve um erro, certifique-se de introduzir correctamente o email!")
    return
  }

  alert("Enviamos o link de recuperação para o seu email!")

})