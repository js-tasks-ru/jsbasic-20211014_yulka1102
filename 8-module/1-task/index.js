import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    if(this.elem.offsetWidth) {
      if(document.documentElement.clientWidth <= 767) {
        this.elem.removeAttribute('style')
      };

      let header = document.querySelector('header');
      let headerCoords = header.getBoundingClientRect();
     
      if(window.pageYOffset >= headerCoords.bottom) {
      this.elem.style.position = 'fixed';
      let firstElemContainer = document.querySelector('.container');
      let coords = firstElemContainer.getBoundingClientRect();
      this.elem.style.left = `${coords.right + 20}px`
      this.elem.style.top = `50px`;
      this.elem.style.right = `10px`
      } else {
        this.elem.removeAttribute('style')
      }
      
    }
    
  }
}
