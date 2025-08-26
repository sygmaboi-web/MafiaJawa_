function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function aksesKasir() {
  let pass = prompt("Masukkan password untuk membuka Mesin Kasir:");
  if (pass === "KELOMPOK1KEREN") {
    showSection('kasir');
    document.getElementById("kasirContent").innerHTML = `
      <p>✅ Akses diterima! Mesin kasir siap digunakan.</p>
      <p>(Nanti di sini fitur kasir ditambahkan)</p>
    `;
  } else {
    alert("❌ Password salah!");
  }
}

function aksesPenjualan() {
  let pass = prompt("Masukkan password untuk membuka Hasil Penjualan:");
  if (pass === "KELOMPOK1KEREN") {
    showSection('penjualan');
    document.getElementById("penjualanContent").innerHTML = `
      <p>✅ Akses diterima! Data penjualan bisa dilihat di sini.</p>
      <p>(Nanti di sini hasil penjualan ditambahkan)</p>
    `;
  } else {
    alert("❌ Password salah!");
  }
}
