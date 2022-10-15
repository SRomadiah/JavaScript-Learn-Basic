var jumlahAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 6;
while (noAngkot <= angkotBeroperasi) {
  console.log("Angot No. " + angkotBeroperasi + " beroperasi dengan baik");
  noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; noAngkot >= jumlahAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " tidak beroperasi dengan baik");
}
