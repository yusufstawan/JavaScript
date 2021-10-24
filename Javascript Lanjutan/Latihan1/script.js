// Cara untuk membuat Object pada javascript
// 1. Object Literal
// let mahasiswa1 = {
//   nama: "Sandika",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Sandika",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain`);
//   };

//   return mahasiswa;
// }

// let sandika = Mahasiswa("Sandika", 10);
// let yusuf = Mahasiswa("Yusuf", 20);

// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain`);
  };
}

let sandika = new Mahasiswa("Sandika", 10);

// 4. Object.create
