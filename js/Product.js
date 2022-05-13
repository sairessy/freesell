const showMoreInfo = (title, price, location, description, contact) => {
  document.querySelector(".product-details-popup-container").style.display = "block"
  document.querySelector(".product-details-popup-title").innerText = title
  document.querySelector(".product-details-popup-description").innerText = ""
  document.querySelector(".product-details-popup-location").innerText = "Local: " + location
  document.querySelector(".product-details-popup-contact").innerText = "Contacto: " + contact
}

const Product = (id, title, price, category, location, description, contact, date, user, companyName, image) => {
  const locationLabel = config.locations.filter(l => l.id == location)[0].label
  const d = new Date(parseInt(date))
  console.log(d)
  const img = image == null ? "assets/img/image.svg" : image
  return(`
    <div class="product">
      <div class="product-cover" style="background-image: url(${img});">
        
      </div>
      <div class="product-details">
        <div>
          <p class="product-title">${title}</p>
          <p class="product-price">$ ${price}</p>
          ${companyName != "" ? `<a href="seller.html?s=${user}" style="font-family: tt;" class="product-owner" id="${user}">${companyName}</a>` : ""}
          <p class="product-locatiton">${locationLabel}</p>
          <p class="product-date">${d}</p>
        </div>
        <div class="product-more-details" onclick="showMoreInfo('${title}', '${price}', '${locationLabel}', '${description}', '${contact}')"><span><i class="la la-angle-right"></i></span></div>
      </div>
    </div>
  `)
}