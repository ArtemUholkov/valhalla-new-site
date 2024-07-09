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
document.addEventListener('DOMContentLoaded', () => {
  const uniqueSelect = document.getElementById('unique-select');

  // Create options with half-bold, half-normal text
  const uniqueOptions = [
    { bold: 'Option', normal: ' 1', value: '1' },
    { bold: 'Option', normal: ' 2', value: '2' },
    { bold: 'Option', normal: ' 3', value: '3' },
  ];

  uniqueSelect.innerHTML = ''; // Clear existing options

  uniqueOptions.forEach((option) => {
    const opt = document.createElement('option');
    opt.value = option.value;

    const boldPart = document.createElement('span');
    boldPart.className = 'unique-half-bold';
    boldPart.textContent = option.bold;
    opt.appendChild(boldPart);

    const normalPart = document.createTextNode(option.normal);
    opt.appendChild(normalPart);

    uniqueSelect.appendChild(opt);
  });
});
