// menangkap pilihan player
var p = prompt("pilih : gajah, semut, orang");

// menangkap pilihan computer

// membangkitkan pilihan random
var comp = Math.random();
if (comp < 0.34) {
  comp = "gajah";
} else if (comp >= 0.34 && comp < 0.67) {
  comp = "orang";
} else {
  comp = "semut";
}
var result = "";
// menentukan rules
if (p == comp) {
  result = "SERI";
} else if (p == "gajah") {
  // if (comp == "orang") {
  //   result = "WIN";
  // } else {
  //   result = "LOSER";
  // }
  result = comp == "orang" ? "WIN" : "LOSER";
} else if (p == "orang") {
  // if (comp == "gajah") {
  //   result = "LOSER";
  // } else {
  //   result = "WIN";
  // }
  result = comp == "gajah" ? "LOSER" : "WIN";
} else if (p == "semut") {
  result = comp == "orang" ? "LOSER" : "WIN";
} else {
  result = "wrong choice";
}
// tampilkan hasil
alert("kamu memilih : " + p + " & komputer memilih : " + comp + "\n maka hasilnya : " + result);
