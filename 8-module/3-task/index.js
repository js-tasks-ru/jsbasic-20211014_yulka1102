export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
    // this.getTotalCount();
    // this.getTotalPrice();
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
    // console.log(this.cartItems);
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
        let check = this.cartItems.filter(item => item.product.id !== productId)
         if(check.length < 1) {
           this.cartItems = [];
         }
       }
    }
    console.log(this.cartItems);
        
   this.onProductUpdate(cartItem);
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

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

