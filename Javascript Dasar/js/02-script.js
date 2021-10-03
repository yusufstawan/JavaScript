// alert('halo');
// alert('nama');
// alert('saya');
// alert('yusuf setiyawan');

// var nama = prompt('masukkan nama:');
// alert(nama);

// var tes = confirm('kamu yakin??');
// if(tes===true){
//     alert('user menekan OK!');
// } else {
//     alert('user menekan cancel!');
// }

alert('Selamat datang');
var lagi = true;

while(lagi===true){
    var nama = prompt('masukkan nama: ');
    alert('Halo' + nama);

    lagi = confirm('coba lagi');
}

alert('terima kasih');