// Mengimpor fungsi-fungsi dari file calculator.js
const kalkulator = require('./calculator');

// Menggunakan fungsi tambah
const hasilPenjumlahan = kalkulator.tambah(5, 3);
console.log('Hasil penjumlahan:', hasilPenjumlahan);

// Menggunakan fungsi konversiSuhu
const suhuCelsius = 100;
const suhuFahrenheit = kalkulator.konversiSuhu(suhuCelsius);
console.log(`${suhuCelsius}°C sama dengan ${suhuFahrenheit}°F`);
