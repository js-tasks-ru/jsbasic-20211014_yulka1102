import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.createProductList();
    this.updateFilter();
    
  }

  createProductList() {
    this.elem = createElement(`
    <div class="products-grid">
      <div class="products-grid__inner">
       
      </div>
    </div>`);
    
    // for(let product of this.products) {
    //   let productList = new ProductCard(product);
    //   let list = this.elem.querySelector('.products-grid__inner');
    //   list.append(productList.elem);
    // }
  }

  updateFilter(filters) {
    
    Object.assign(this.filters, filters);
    console.log(this.filters);

    
    for(let product of this.products) {

      if(this.filters.noNuts) {
        if(!product.nuts) {
          let productItem = new ProductCard(product);
          let list = this.elem.querySelector('.products-grid__inner');
          list.append(productItem.elem);
        }
      } else {
        let productItem = new ProductCard(product);
        let list = this.elem.querySelector('.products-grid__inner');
        list.append(productItem.elem);
      }
    
    
    // if(this.filters.noNuts) {
    //   this.products.map((item, i, filteredProducts) => { 
    //     if(!item[i].nuts) filteredProducts.push(item[i])
    //   });
    //   for(let product of filteredProducts) {
    //       let productList = new ProductCard(product);
    //       let list = this.elem.querySelector('.products-grid__inner');
    //       list.append(productList.elem);

    //     }
    //   } else {
    //   for(let product of this.products) {
    //       let productList = new ProductCard(product);
    //       let list = this.elem.querySelector('.products-grid__inner');
    //       list.append(productList.elem);
    //     }
    }
    
  }

}
