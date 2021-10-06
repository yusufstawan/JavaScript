//  DOM Selection //

// documen.getElementById -> mengembalikan element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Yusuf Setiyawan';

// document.getElementsByTagName() -> mengembalikan HTML Collection
// const p = document.getElementsByTagName('p');

// for(let i = 0; i <p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// document.getElementsByClassName () -> mengembalikan HTML Collection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Ini diubah dari javascript';

// =========================
// querySelector() -> hasilnya sebuah element

const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// querySelectorAll() -> hasilnya node list 
const p = document.querySelectorAll('p');
p[2].style.backgroundColor = 'lightblue';