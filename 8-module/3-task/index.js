export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
    this.addProduct();
    this.updateProductCount();
    this.isEmpty();
  }

  addProduct(product) {
    let target = this.cartItems.find(item => item.product.id == product.id);
    if(target) {
      for(let cartItem of this.cartItems) {
        if(cartItem.product.id == product.id) cartItem.count++
      }
    } else {
      let cartItem = {};
      cartItem.product = product;
      cartItem.count = 1;
      this.cartItems.push(cartItem);
    }

    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    for(let cartItem of this.cartItems) {
      if(cartItem.product.id == productId) {
        cartItem.count + amount;
        if(cartItem.count == 0) {
          delete cartItem;
        }
      }
    }

    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    if(this.cartItems.length == 0) return true;
    if(this.cartItem.length > 0) return false;
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
      totalPrice += this.cartItems[i].product.price;
    }
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

