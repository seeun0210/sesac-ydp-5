const writerName = document.querySelector('.writer');
const content = document.querySelector('.content');
const btn = document.querySelector('.plus');
const table = document.querySelector('table');

let num = 1;
btn.addEventListener('click', (e) => {
  const newTr = document.createElement('tr');
  table.append(newTr);
  const newTd1 = document.createElement('td');
  newTd1.innerText = num;
  const newTd2 = document.createElement('td');
  newTd2.innerText = writerName.value;

  const newTd3 = document.createElement('td');
  newTd3.innerText = content.value;
  const newTd4 = document.createElement('td');
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let date = new Date().getDate();
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  newTd4.textContent = `${year}-${month}-${date} ${hour} : ${min}`;

  newTr.append(newTd1, newTd2, newTd3, newTd4);
});
