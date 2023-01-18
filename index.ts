import products from './products';

const productName: string = products[0].name;

const product = products.filter(product => product.name === productName)[0];
//console.log(product);

if (product.preOrder === 'true') {
  console.log('We will send you a message when your order is on its way.');
}

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = '575 Broadway, New York City, New York';

if (Number(product.price) > 25) {
  shipping = 0;
  console.log('We will provide free shipping for this product.');
} else {
  shipping = 5;
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05
}
//Alternative way (Using ternary operator)
//shippingAddress.match('New York') ? taxPercent = 0.1 : 0.05;

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`
Product:      ${productName.toUpperCase()};
Address:      ${shippingAddress};
Price:        $${product.price};
Tax:          $${taxTotal.toFixed(2)};
Shipping:     $${shipping.toFixed(2)};
Total Amount: $${total.toFixed(2)};
`);
