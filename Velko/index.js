'use strict';
let product = 'name';
let price = '300';
let product_price = `${product}, цена ${price} рублей`;
// eslint-disable-next-line
console.log(product_price);
function randomize(min, max) {
  min = Math.ceil(min); max = Math.floor(max);
  if (min >= max)
    return alert('min больше или равно max')
  else return Math.floor(Math.random() * (max - min + 1)) + min;
}
let min = prompt('Введите min');
let max = prompt('Введите max');
// eslint-disable-next-line
console.log(randomize(min, max));
