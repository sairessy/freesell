const showMoreInfo = (title, price, location, description, contact) => {
  document.querySelector(".product-details-popup-container").style.display = "block"
  document.querySelector(".product-details-popup-title").innerText = title
  document.querySelector(".product-details-popup-description").innerText = ""
  document.querySelector(".product-details-popup-location").innerText = "Local: " + location
  document.querySelector(".product-details-popup-contact").innerText = "Contacto: " + contact
  // alert(title)
}

const Product = (id, title, price, category, location, description, contact, date) => {
  const locationLabel = config.locations.filter(l => l.id == location)[0].label
  const d = new Date(parseInt(date))
  return(`
    <div class="product">
      <div class="product-cover">
        <p class="product-date">${d.getDay()} de ${d.getMonth() + 1} de ${d.getFullYear()} </p>
      </div>
      <div class="product-details">
        <div>
          <p class="product-title">${title}</p>
          <p class="product-price">${price} Mt</p>
          <p class="product-locatiton">${locationLabel}</p>
        </div>
        <div class="product-more-details" onclick="showMoreInfo('${title}', '${price}', '${locationLabel}', '${description}', '${contact}')"><span><i class="la la-angle-right"></i></span></div>
      </div>
    </div>
  `)
}