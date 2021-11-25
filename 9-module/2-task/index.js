import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
    
  }

  async render() {
    this.carousel = new Carousel(slides);
    let divCarousel = document.querySelector('div[data-carousel-holder]');
    divCarousel.append(this.carousel.elem);

    this.ribbonMenu = new RibbonMenu(categories);
    let divRibbonMenu = document.querySelector('div[data-ribbon-holder]');
    divRibbonMenu.append(this.ribbonMenu.elem);

    this.stepSlider = new StepSlider({steps: 5, value: 3});
    let divStepSlider = document.querySelector('div[data-slider-holder]');
    divStepSlider.append(this.stepSlider.elem);

    this.cartIcon = new CartIcon();
    let divCartIcon = document.querySelector('div[data-cart-icon-holder]');
    divCartIcon.append(this.cartIcon.elem);

    this.cart = new Cart(this.cartIcon);

    await fetch('./products.json')
    .then(response => response.json())
    .then(products => this.products = products);

    let div = document.querySelector('div[data-products-grid-holder]');
    div.innerHTML = '';
    this.productsGrid = new ProductsGrid(this.products);
    div.append(this.productsGrid.elem);
    
    this.productsGrid.updateFilter({
      noNuts: document.getElementById('nuts-checkbox').checked,
      vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
      maxSpiciness: this.stepSlider.value,
      category: this.ribbonMenu.value
    });

    document.body.addEventListener('product-add', (event) => {
      let productId = event.detail;
      let product = this.products.find(item => item.id == productId);
      this.cart.addProduct(product);
    })

    document.body.addEventListener('slider-change', (event) => {
      let value = event.detail;
      this.productsGrid.updateFilter({
        maxSpiciness: value
      })
    })

    document.body.addEventListener('ribbon-select', (event) => {
      let categoryId = event.detail;
      this.productsGrid.updateFilter({
        category: categoryId
      })
    })

    let noNutsBtn = document.getElementById('nuts-checkbox');
    noNutsBtn.addEventListener('change', (event) => {
      if(noNutsBtn.checked) {
        this.productsGrid.updateFilter({
          noNuts: true
        });
      } else {
        this.productsGrid.updateFilter({
          noNuts: false
        })
      }
    })

    let vegeBtn = document.getElementById('vegeterian-checkbox');
    vegeBtn.addEventListener('change', (event) => {
      if(vegeBtn.checked) {
        this.productsGrid.updateFilter({
          vegeterianOnly: true
        })
      } else {
        this.productsGrid.updateFilter({
          vegeterianOnly: false
        })
      }
    })

  }
}
