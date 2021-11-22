import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.createProductList();
    }

  createProductList() {
    this.elem = createElement(`
    <div class="products-grid">
      <div class="products-grid__inner">
       
      </div>
    </div>`);

    for(let product of this.products) {
      let productList = new ProductCard(product);
      let list = this.elem.querySelector('.products-grid__inner')
      list.append(productList.elem);
    }
  }

  updateFilter(filters) {
    
    Object.assign(this.filters, filters);

    // console.log(this.filters);

    let filteredProducts, 
    filteredProducts1, 
    filteredProducts2;

    if(this.filters.noNuts==true) {
      filteredProducts = this.products.filter(product => !(product.nuts))
    } 
    else {
      filteredProducts = this.products;
    } 

    if(this.filters.vegeterianOnly==true) {
      filteredProducts1 = filteredProducts.filter(product => product.vegeterian==true)
    } else {
      filteredProducts1 = filteredProducts;
    }

    if(this.filters.category) {
      filteredProducts2 = filteredProducts1.filter(product => product.category==this.filters.category);
    } else {
      filteredProducts2 = filteredProducts1;
    }

    if(this.filters.maxSpiciness) {
      this.filteredProducts3 = filteredProducts2.filter(product => product.spiciness<=this.filters.maxSpiciness);
    } else {
      this.filteredProducts3 = filteredProducts2;
    }

    // console.log(this.filteredProducts3)
    let list = this.elem.querySelector('.products-grid__inner')
    list.innerHTML = ''

    for(let item of this.filteredProducts3) {
      let productList = new ProductCard(item);
      list.append(productList.elem);
    }

  }

}
