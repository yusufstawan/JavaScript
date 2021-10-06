// Membuat Object

// Object Literal
var mhs1 = {
    nama : 'Yusuf Setiyawan',
    nrp : '043040023',
    email : 'yusufsetiyawan@gmail.com',
    jurusan : 'Pendidikan Tekneik Elektronika'
}

var mhs2 = {
    nama : 'Yusuf Setiyawan',
    nrp : '043040023',
    email : 'yusufsetiyawan@gmail.com',
    jurusan : 'Pendidikan Tekneik Elektronika'
}

//  Function Declaration

function buatObjectMahasiswa(nama, nrp, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Yusuf', '11211221', 'asasaas@gmail.com', 'Teknik Elektro')

// Constructor

function Mahasiswa(nama, nrp, email, jurusan, cek){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    this.cek = cek;
}

var mhs4 = new Mahasiswa('Yusuf', '13232232', 'yusuf@email.com', 'Teknik Mesin', 'adadad');

