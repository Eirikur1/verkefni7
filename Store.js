let products = [];
let cart = [];

function addProduct(name, price) {
  products.push({name, price});
}

function showProducts() {
  console.info(products);
}

function addProductToCart(name, quantity) {
  let product = products.find(p => p.name === name);
  if (product) {
    cart.push({name: product.name, price: product.price, quantity});
  } else {
    console.error('Product not found');
  }
}

function showCart() {
  console.info(cart);
}

function checkout() {
  let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  console.info(`Total: ${total}`);
  cart = []; 
}
