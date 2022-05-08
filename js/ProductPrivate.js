const remove = async (p) => {
  const res = await fetch(config.server + "/freesell/api/removeproduct/" + p)
  const json = await res.json()
  console.log(json)
  if(json.success) {
    window.location.href = "dashboard.html"
  }

}

const ProductPrivate = (id, title, price, category, location) => {
  

  return(`
    <div class="product">
      <div class="product-cover">
        <div class="product-controlls">
          <i class="la la-remove" onClick="remove('${id}')"></i>
        </div>
      </div>
      <div class="product-details">
        <div>
          <p class="product-title">${title}</p>
          <p class="product-price">${price} Mt</p>
          <p class="product-locatiton">${config.locations.filter(l => l.id == location)[0].label}</p>
        </div>
        <div class="product-more-details"><span><i class="la la-angle-right"></i></span></div>
      </div>
    </div>
  `)
}