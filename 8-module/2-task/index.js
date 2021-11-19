import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.createProductList();
    let productList = new ProductCard(this.products);
    this.list = this.elem.querySelector('.products-grid__inner');
    list.append(productList);
  }

  createProductList() {
    this.elem = createElement(`
    <div class="products-grid">
      <div class="products-grid__inner">
       
      </div>
    </div>`);
  }
}
