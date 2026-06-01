function getBurgerTemplates(product) {
    return ` <div class="burger-content-main">
                <div class="main-img-burger">
                  <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="content-burger-text">
                  <div class="content-titel-burger">
                    <h2>${product.name}</h2>
                    <p>${product.description}}</p>
                  </div>
                  <div class="content-burger-price">
                    <p>${product.price.toFixed(2)}€}</p>
                    <button>Added to basket</button>
                  </div>
                </div>
              </div>`
}

function getPizzaTemplates(product) {
    return `<div class="pizza-content-main">
                <div class="main-img-pizza">
                  <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="content-pizza-text">
                  <div class="content-titel-pizza">
                    <h2>${product.name}</h2>
                    <p>${product.description}}</p>
                  </div>
                  <div class="content-pizza-price">
                    <p>${product.price.toFixed(2)}€}</p>
                    <button>Added to basket</button>
                  </div>
                </div>
              </div>`
}

function getSaladTemplates(product) {
    return `<div class="salad-content-main">
                <div class="main-img-salad">
                  <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="content-salad-text">
                  <div class="content-titel-salad">
                    <h2>${product.name}</h2>
                    <p>${product.description}}</p>
                  </div>
                  <div class="content-salad-price">
                    <p>${product.price.toFixed(2)}€}</p>
                    <button>Added to basket</button>
                  </div>
                </div>
              </div>`
}

function getBasketMenuTemplate() {
    return `<div class="menu-text-basket">
                    <p>1 x Veggie mushroom black burger</p>
                    <button>
                      <img src="./assets/icons/delete.svg" alt="Trash" />
                    </button>
                  </div>
                  <div class="menu-price-basket">
                    <div class="menu-button-basket">
                      <button>-</button>
                      <p>1</p>
                      <button>+</button>
                    </div>
                    <div>
                      <p class="content-price-basket">16,90€</p>
                    </div>
                  </div>`
}

function getBasketTemplate() {
    return `<div class="basket">
              <div class="basket-content">
                <h2>Your Basket</h2>
                <!-- MENU -->
                <div class="menu-basket"></div>
                <div class="price-content">
                  <div class="subtotal-content">
                    <p><span>Subtotal</span></p>
                    <p>0</p>
                  </div>
                  <div class="delivery-content">
                    <p><span>Delivery fee</span></p>
                    <p>4,99€</p>
                  </div>
                  <div class="white-line"></div>
                  <div class="total-content">
                    <p>Total</p>
                    <p>0€</p>
                  </div>
                </div>
                <button class="button-basket">Buy now (0)</button>
              </div>
            </div>`
}