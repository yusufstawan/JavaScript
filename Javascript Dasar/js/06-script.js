// var angka=prompt('Masukkan angka:');

// if(angka%2===0){
//     alert(angka + ' adalah bilangan GENAP');
// } else if (angka%2===1){
//     alert(angka + ' adalah bilangan GANJIL');
// } else {
//     alert(angka + ' Ini bukan sebuah angka')
// }

var jmlAngkot=10;
var angkotBeroperasi=7;
var noAngkot=1;

for (noAngkot; noAngkot<=jmlAngkot; noAngkot++){
    if (noAngkot<=6 && noAngkot !== 5){
        console.log('Angkot No. ' +noAngkot +' beroperasi dengan baik.');
    }
    else if (noAngkot===8 || noAngkot===10 || noAngkot===5){
        console.log('Angkot No. ' +noAngkot+ ' sedang lembur');
    } else {
        console.log('Angkot No. ' +noAngkot + ' sedang tidak beroperasi')
    }
}
