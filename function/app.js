// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;

// console.log(total);

// function jumlahDuaKubus(a, b) {
//   var total, volumeA, volumeB;

//   volumeA = a * a * a;
//   volumeB = b * b * b;
//   total = volumeA + volumeB;
//   return total;
// }
// jumlahDuaKubus(8, 3);

// function tambah(a, b) {
//   return a + b;
// }
// var a = parseInt(prompt("Masukkan angka 1 :"));
// var b = parseInt(prompt("Masukkan angka 2 :"));
// var hasil = tambah(a * 3, b * 3);
// console.log(hasil);

// function tambah(a, b) {
//   return a + b;
// }
// function kali(a, b) {
//   return a * b;
// }
// var hasil = kali(tambah(2, 3), tambah(2, 3));
// console.log(hasil);

// pseudo arguments
// arguments adalah sebuah wadah yang menyimpan array di dalamnya

function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var coba = tambah(1, 2, 3, 4);
console.log(coba);
