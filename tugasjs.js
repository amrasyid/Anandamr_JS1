// if,else,nestedif 
var nilai = 50;

if (nilai >= 100) {
  console.log("Rank Anda Immortal");
} else if (nilai >= 50) {
  console.log("Rank Anda Glory");
} else if (nilai >= 25) {
  console.log("Rank Anda Honor");
}else {
  console.log("Rank Anda Poke");
}
  if (nilai < 25) {
    console.log("Anda perlu tryhard lebih keras!");
  } else {
    console.log("Anda Sudah Tryhard tapi masih poke dikit");
  }



// switch case 
var hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari kerja.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari ini adalah hari libur.");
    break;
  default:
    console.log("Hari ini adalah hari biasa.");
}

// for statement 
for (var i = 0; i < 5; i++) {
  console.log("Istri ke-" + (i + 1));
}

// while, do while
var angka = 1;

while (angka <= 10) {
  console.log("Angka: " + angka);
  angka++;
}

var bilangan = 5;

do {
  console.log("Bilangan: " + bilangan);
  bilangan--;
} while (bilangan >= 1);

// function 
function kali(a, b) {
  return a * b;
}

var hasil = kali(4, 5);
console.log("Hasil perkalian: " + hasil);