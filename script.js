// Simpan data acara (contoh: di localStorage)
function simpanDataAcara(dataAcara) {
  localStorage.setItem('dataAcara', JSON.stringify(dataAcara));
}

// Ambil data acara (contoh: dari localStorage)
function ambilDataAcara() {
  const dataAcara = JSON.parse(localStorage.getItem('dataAcara')) || [];
}