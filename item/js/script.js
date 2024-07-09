let currentCount = document.querySelector('.product_item_count_current');
const minusCount = document.querySelector('.minus-one');
const plusCount = document.querySelector('.plus-one');
let value = 1;

minusCount.addEventListener('click', () => {
  if (value >= 2) {
    value = value - 1;
    currentCount.innerHTML = value;
  }
});
plusCount.addEventListener('click', () => {
  value = value + 1;
  currentCount.innerHTML = value;
});
