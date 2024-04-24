// Ambil data acara yang disimpan (contoh: dari localStorage)
function ambilDataAcara() {
    const dataAcaraString = localStorage.getItem('dataAcara');
    return dataAcaraString ? JSON.parse(dataAcaraString) : [];
  }
  
  // Tampilkan daftar acara
  function tampilkanDaftarAcara() {
    const dataAcara = ambilDataAcara();
    const daftarAcaraList = document.getElementById('daftar-acara-list');
  
    daftarAcaraList.innerHTML = ''; // Kosongkan daftar sebelum menambahkan
  
    dataAcara.forEach(acara => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span class="tanggal">${acara.tanggal}</span>
        <span class="jam">${acara.jam}</span> - 
        <span class="judul">${acara.judul}</span>
        <p class="deskripsi">${acara.deskripsi}</p>
      `;
      daftarAcaraList.appendChild(listItem);
    });
  }
  
  // Jalankan fungsi saat halaman dimuat
  window.addEventListener('DOMContentLoaded', tampilkanDaftarAcara);
  