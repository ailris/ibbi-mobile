// Mengimpor fungsi-fungsi dari file calculator.js
const kalkulator = require('./calculator');

// Menggunakan fungsi tambah
const hasilPenjumlahan = kalkulator.tambah(5, 3);
console.log('Hasil penjumlahan:', hasilPenjumlahan);

// Menggunakan fungsi konversiSuhu
const suhuCelsius = 100;
const suhuFahrenheit = kalkulator.konversiSuhu(suhuCelsius);
console.log(`${suhuCelsius}°C sama dengan ${suhuFahrenheit}°F`);

// Menggunakan fungsi luasLingkaran
const jariJari = 7;
const luasLingkaran = kalkulator.luasLingkaran(jariJari);
console.log(`Luas lingkaran dengan jari-jari ${jariJari} adalah ${luasLingkaran} cm²`);

// Menggunakan fungsi luasLingkaran2
const jariJari2 = 5;
const luasLingkaran2 = kalkulator.luasLingkaran2(jariJari2);
console.log(`Luas lingkaran dengan jari-jari ${jariJari2} adalah ${luasLingkaran2} cm²`);

// Menggunakan fungsi tambah2
const hasiltambah2 = kalkulator.tambah2(10, 5);
console.log(`Hasil penjumlahan adalah ${hasiltambah2}`);


