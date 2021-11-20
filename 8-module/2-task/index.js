import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.createProductList();
    this.createList();
  }

  createProductList() {
    this.elem = createElement(`
    <div class="products-grid">
      <div class="products-grid__inner">
       
      </div>
    </div>`);
  }

  createList() {
    for(let product of this.products) {
      let productList = new ProductCard(product);
      let list = this.elem.querySelector('.products-grid__inner');
      list.append(productList.elem);
    }
  }
}
