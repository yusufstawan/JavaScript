function jumlahVolumeDuaKubus(a,b){
    var volumeA;
    var volumeB;
    var total;

    volumeA=a*a*a;
    volumeB=b*b*b;

    total=volumeA+volumeB;

    return total;
}

console.log (jumlahVolumeDuaKubus(8,3));
console.log (jumlahVolumeDuaKubus(9,3));
console.log (jumlahVolumeDuaKubus(2,3));
console.log (jumlahVolumeDuaKubus(3,3));
console.log (jumlahVolumeDuaKubus(4,3));
console.log (jumlahVolumeDuaKubus(5,3));