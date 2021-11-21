export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
    let product, productId, amount;
    this.addProduct(product);
    this.updateProductCount(productId, amount);
    this.isEmpty();
  }

  addProduct(product) {
    let target = this.cartItems.find(item => item.product.id == product.id);
    let cartItem, count;
    if(target) {
      for(cartItem of this.cartItems) {
        if(cartItem.product.id == product.id) cartItem.count++
      }
    } else {
      cartItem = {};
      Object.assign(cartItem, product, count = 1)
      
      this.cartItems.push(cartItem);
    }

    if(product==null || product==undefined) {
      this.cartItems;
    }

    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    if(productId==undefined || amount==undefined) {
      this.cartItems;
    }
    
    for(let cartItem of this.cartItems) {
      if(cartItem.product.id == productId) {
        cartItem.count + amount;
        if(cartItem.count == 0) {
          this.cartItems.filter(item => item.count > 0)
        }
      }
    }

    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    if(this.cartItems.length == 0) return true;
    if(this.cartItems.length > 0) return false;
  }

  getTotalCount() {
    let totalCount = 0;
    for(let i = 0; i < this.cartItems.length; i++) {
      totalCount += this.cartItems[i].count;
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for(let i = 0; i < this.cartItems.length; i++) {
      totalPrice += this.cartItems[i].product.price * this.cartItems[i].count;
    }
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

