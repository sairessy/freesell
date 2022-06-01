const config = {
  // title: "Market$pace",
  // title: "free$ell",
  title: "Openstore",
  version: "1.0.0",
  // server: "http://localhost:3000",
  //  server: "http://192.168.137.1:3000",
  // serverHost: "http://localhost:5000/freesell",
  //  server: "https://controller-backend.herokuapp.com",
  server: "https://controller-backend.glitch.me",
  serverHost: "https://openstore.gq",
  colors: {
    // primary: "#10076a",
    primary: "#d00a7e",
    bodyColor: "#f9f9f9"
  },
  categories: [
    {id: 0, label: "Computadores e Informática"},
    {id: 1, label: "Celulares e Tablets"},
    {id: 2, label: "Mobília e Jardim"},
    {id: 3, label: "Veiculos"},
    {id: 4, label: "Calçado e vestuário"},
    {id: 5, label: "Games e lazer"},
    {id: 6, label: "Consumíveis"},
    {id: 7, label: "Encomendas e eventos"},
    {id: 8, label: "Construção"},
    {id: 9, label: "Serviços"},
  ], locations: [
    {id: "", label: "Local indefinido"},
    {id: 0, label: "Matola"},
    {id: 1, label: "Baixa"},
    {id: 2, label: "Museu"},
    {id: 3, label: "Maxava"},
    {id: 4, label: "Malhangalene"},
    {id: 5, label: "Alto Maé"},
  ],
  companyType: [
    {id: 0, label: "Loja"},
    {id: 1, label: "Farmácia"},
    {id: 2, label: "Ferragem"},
    {id: 3, label: "Livraria"},
    {id: 4, label: "Mercearia"},
    {id: 5, label: "Talho"}
  ],
  quantities: [
    {id: 0, label: "Stock"},
    {id: 1, label: "Artigo único"}
  ]
}