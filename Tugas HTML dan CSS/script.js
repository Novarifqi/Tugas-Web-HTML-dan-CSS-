// Simpan data acara
let dataAcara = [];

// Function untuk menambahkan acara baru
function addAcara(tanggal, jam, judul, deskripsi) {
  // Buat object acara baru
  const acara = {
    tanggal,
    jam,
    judul,
    deskripsi,
  };

  // Tambahkan object acara ke array dataAcara
  dataAcara.push(acara);

  // Simpan data acara ke localStorage
  localStorage.setItem('dataAcara', JSON.stringify(dataAcara));

  // Tampilkan daftar acara
  tampilkanDaftarAcara();
}

// Function untuk menampilkan daftar acara
function tampilkanDaftarAcara() {
}