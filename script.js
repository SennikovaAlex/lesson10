const book = document.querySelector('.books');
const books = document.querySelectorAll('.book');
const bookNames = document.querySelectorAll('a');
const adv = document.querySelector('.adv');
adv.remove();

bookNames[4].textContent = 'Книга 3. this и Прототипы Объектов';
book.prepend(books[1]);
book.append(books[2]);
books[3].before(books[4]);

document.body.style.backgroundImage = 'url(./image/1234.jpg)';

const elems = books[0].querySelectorAll('li');

elems[1].after(elems[3]);
elems[3].after(elems[6]);
elems[6].after(elems[8]);
elems[8].after(elems[4]);
elems[4].after(elems[5]);
elems[5].after(elems[7]);
elems[7].after(elems[9]);
elems[9].after(elems[2]);

const elemsBookFive = books[5].querySelectorAll('li');

elemsBookFive[1].after(elemsBookFive[9]);
elemsBookFive[9].after(elemsBookFive[3]);
elemsBookFive[3].after(elemsBookFive[4]);
elemsBookFive[4].after(elemsBookFive[2]);
elemsBookFive[2].after(elemsBookFive[6]);
elemsBookFive[6].after(elemsBookFive[7]);
elemsBookFive[7].after(elemsBookFive[5]);
elemsBookFive[5].after(elemsBookFive[8]);

const elemBookSix = books[2].querySelector('ul');
const chapterEight = document.createElement('li');
const elemsBookSix = books[2].querySelectorAll('li');

elemBookSix.append(chapterEight);
chapterEight.textContent = 'Глава 8: За пределами ES6';
elemsBookSix[8].after(elemsBookSix[10]);


