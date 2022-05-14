const config = {
  title: "Open$store",
  version: "1.0.0",
  //  server: "https://controller-backend.herokuapp.com",
  server: "https://controller-backend.glitch.me",
  //  server: "http://localhost:3000",
  //  server: "http://192.168.43.5:3000",
  colors: {
    primary: "#10076a",
    bodyColor: "#fff"
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
    {id: 0, label: "Maputo"},
    {id: 1, label: "Matola"},
    {id: 2, label: "Baixa"},
    {id: 3, label: "Museu"},
    {id: 4, label: "Malhangalene"},
  ],
  companyType: [
    {id: 0, label: "Loja"},
    {id: 1, label: "Farmácia"},
    {id: 2, label: "Ferragem"}
  ],
  quantities: [
    {id: 0, label: "Stock"},
    {id: 1, label: "Artigo único"}
  ]
}