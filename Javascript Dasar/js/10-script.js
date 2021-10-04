// berikut adalah menggunakan fungsi secara normal dengan inputan dirubah menjadi integer

// function tambah(a,b){
//     return a+b;
// }

// var a= parseInt (prompt ('masukkan nilai 1: '));
// var b= parseInt (prompt ('masukkan nilai 2: '));
// var hasil = tambah(a*2,b*2);
// console.log(hasil);

// berikut adalah menggunakan fungsi di dalam fungsi

// function tambah(a,b){
//     return a+b;
// }

// function kali(a,b){
//     return a*b;
// }

// var hasil = kali (tambah(1,2), tambah(3,4));
// console.log(hasil);
 
// berkut adalah menggunakan arguments dalam bentuk array karena argument melebihi parameter

function tambah(){
    var hasil = 0;
    for (var i = 0; i<arguments.length ; i++){
        hasil += arguments[i];
    }
    return hasil;
}
var coba = tambah (1,2,3,4,5);
console.log(coba);
