// Manipulasi Array

// 1.Menambah isi array

// var arr=[];
// arr[0]='yusuf';
// arr[1]='seti';
// arr[2]='awan';
// console.log(arr);

// 2. Menghapus isi array

// var arr = ['Yusuf', 'Seti', 'Awan'];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array

// var arr = ['Yusuf', 'Seti', 'Awan'];

// for (var i=0; i<arr.length; i++){
//     console.log('Mahasiswa ke-' + (i+1) + ' : '+ arr[i]);
// }






// Method pada array
// 1. Join (menggabungkan seluruh isi array dan mengubahnya menjadi string)

// var arr = ['Yusuf', 'Seti', 'Awan'];
// console.log(arr.join('-'));

// 2. Push & Pop
// push digunakan untuk menambah element array pada akhir array
// pop digunakan untuk menghilangkan element terakhir pada array
// arr.push('doddy');
// arr.pop();
// arr.pop();
// console.log(arr.join('-'));

// unshift & shift
// seperti pada push dan pop tapi pada element awal array

// arr.unshift('Doddy');
// arr.shift();
// console.log(arr.join('-'));


// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ....)

var arr = ['Yusuf', 'Seti', 'Awan', 'doddy'];
// arr.splice(2, 0, 'dedi', 'fitri');
// console.log(arr.join('-'));

// 5. Slice
// untuk memotong isi array
// slice (awal, akhir)
var arr2=arr.slice(1,4);

console.log(arr.join('-'));
console.log(arr2.join('-'));
