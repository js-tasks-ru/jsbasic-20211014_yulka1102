import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

import Modal from '../../7-module/2-task/index.js';

export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;

    this.addEventListeners();
    this.modal = new Modal;
  }

  addProduct(product) {
    let cartItem = {};

    if(product==null || product==undefined || null || undefined) {
      cartItem = null;
    } else {
      cartItem.product = product;
    cartItem.count = 1;

    if(this.cartItems.length > 0) {
      let target = this.cartItems.find(item => item.product.id == cartItem.product.id);
      if(target) {
        this.cartItems.map(item => (item.product.id == product.id) ? item.count++ : item.count)
      } else {
        this.cartItems.push(cartItem);
      }
      
    } else {
      this.cartItems.push(cartItem);
    }
    }
    this.onProductUpdate(cartItem); 
  }

  updateProductCount(productId, amount) {
    if(productId==undefined || amount==undefined) {
      this.cartItems;
    } 

    let cartItem = this.cartItems.find(item => item.product.id == productId);
    
      if(cartItem.count >= 1) {
      cartItem.count += amount;
      if(cartItem.count == 0) {
        this.cartItems = this.cartItems.filter(item => item.count !== 0);
      }
      console.log(this.cartItems)
        this.onProductUpdate(cartItem);
    }
        
   
  }

  isEmpty() {
    if(this.cartItems.length == 0) return true;
    if(this.cartItems.length > 0) return false;
  }

  getTotalCount() {
    let totalCount = 0;

    if(this.cartItems.length > 0) {
      for(let i = 0; i < this.cartItems.length; i++) {
      totalCount += this.cartItems[i].count;
    }
    }
    
    return totalCount;
  }

  getTotalPrice() {
    let totalPrice = 0;

    if (this.cartItems.length > 0) {

     for(let i = 0; i < this.cartItems.length; i++) {
      totalPrice += this.cartItems[i].product.price * this.cartItems[i].count;
    } 
    }
    
    return totalPrice;
  }

  renderProduct(product, count) {
    return createElement(`
    <div class="cart-product" data-product-id="${
      product.id
    }">
      <div class="cart-product__img">
        <img src="/assets/images/products/${product.image}" alt="product">
      </div>
      <div class="cart-product__info">
        <div class="cart-product__title">${escapeHtml(product.name)}</div>
        <div class="cart-product__price-wrap">
          <div class="cart-counter">
            <button type="button" class="cart-counter__button cart-counter__button_minus">
              <img src="/assets/images/icons/square-minus-icon.svg" alt="minus">
            </button>
            <span class="cart-counter__count">${count}</span>
            <button type="button" class="cart-counter__button cart-counter__button_plus">
              <img src="/assets/images/icons/square-plus-icon.svg" alt="plus">
            </button>
          </div>
          <div class="cart-product__price">€${product.price.toFixed(2)}</div>
        </div>
      </div>
    </div>`);
  }

  renderOrderForm() {
    return createElement(`<form class="cart-form">
      <h5 class="cart-form__title">Delivery</h5>
      <div class="cart-form__group cart-form__group_row">
        <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
        <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
        <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
      </div>
      <div class="cart-form__group">
        <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
      </div>
      <div class="cart-buttons">
        <div class="cart-buttons__buttons btn-group">
          <div class="cart-buttons__info">
            <span class="cart-buttons__info-text">total</span>
            <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(
              2
            )}</span>
          </div>
          <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
        </div>
      </div>
    </form>`);
  }

  renderModal() {
    this.modal.setTitle('Your order');
    let div = document.createElement('div');
  
    for(let cartItem of this.cartItems) {
      
      let product = cartItem.product;
      let count = cartItem.count;
      let node = this.renderProduct(product, count);
      div.append(node);
    }

    let form = this.renderOrderForm();
    div.append(form);
    this.modal.setBody(div);
    this.modal.open();

    div.addEventListener('click', (event) => {
      let button = event.target.closest('.cart-counter__button');
      if (!button) {
        return;
      }
      let amount;
      if(button.classList.contains('cart-counter__button_minus')) {
        amount = -1;
      } else {
        amount = 1;
      }
      let targetDiv = event.target.closest('div.cart-product');
      let productId = targetDiv.dataset.productId;

      this.updateProductCount(productId, amount)
      
    });

    form.addEventListener('submit', this.onSubmit);
  }

  onProductUpdate(cartItem) {
    this.cartIcon.update(this);
    
    if(this.cartItems.length == 0) this.modal.close();

    if(document.body.classList.contains('is-modal-open')) {
      let modalBody = document.querySelector('.modal__body');
      let productId = cartItem.product.id;
      let productCount = modalBody.querySelector(`[data-product-id="${productId}"] .cart-counter__count`); 
      let productPrice = modalBody.querySelector(`[data-product-id="${productId}"] .cart-product__price`);
      if(cartItem.count == 0) {
        let item = modalBody.querySelector(`div[data-product-id="${cartItem.product.id}"]`);
        item.remove();
      } 
      productCount.innerHTML = cartItem.count;
      productPrice.innerHTML = `€${(cartItem.product.price*cartItem.count).toFixed(2)}`
      let infoPrice = modalBody.querySelector(`.cart-buttons__info-price`);
      infoPrice.innerHTML = `€${this.getTotalPrice().toFixed(2)}`

    }
    
  }

  onSubmit = (event) => {
    event.preventDefault();
    let button = document.querySelector('button[type="submit"]');
    button.classList.add('is-loading');
    let form = document.querySelector('.cart-form');
    let formData = new FormData(form);
    let url = 'https://httpbin.org/post';
    
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(() => {
      this.modal.setTitle('Success!');
      let node = createElement(`<div class="modal__body-inner">
      <p>
        Order successful! Your order is being cooked :) <br>
        We’ll notify you about delivery time shortly.<br>
        <img src="/assets/images/delivery.gif">
      </p>
    </div>`)
      this.modal.setBody(node);
      this.cartItems.length = 0;
      this.cartIcon.update(this);
    })
   
  };

  addEventListeners() {
    this.cartIcon.elem.onclick = () => this.renderModal();
  }
}

