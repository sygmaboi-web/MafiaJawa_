// Navigasi
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

// Login Kasir
function loginKasir() {
  const pass = document.getElementById("kasirPassword").value;
  if (pass === "KELOMPOK1KEREN") {
    document.getElementById("loginKasir").classList.add("hidden");
    document.getElementById("kasirApp").classList.remove("hidden");
  } else {
    alert("Password salah!");
  }
}

// Data penjualan
let totalKecil = 0, totalBesar = 0, totalRed = 0, totalPendapatan = 0;

function tambahPenjualan(e) {
  e.preventDefault();
  let kecil = parseInt(document.getElementById("corndogKecil").value) || 0;
  let besar = parseInt(document.getElementById("corndogBesar").value) || 0;
  let red = parseInt(document.getElementById("redPoison").value) || 0;

  let total = (kecil * 4000) + (besar * 7000) + (red * 4000);

  // Update total
  totalKecil += kecil;
  totalBesar += besar;
  totalRed += red;
  totalPendapatan += total;

  // Tampilkan struk
  let strukText = `=== STRUK MAFIA JAWA ===
Corndog Kecil: ${kecil} x Rp4.000
Corndog Besar: ${besar} x Rp7.000
Red Poison: ${red} x Rp4.000
------------------------
Total: Rp${total}
========================
Terima Kasih!`;

  document.getElementById("struk").innerText = strukText;

  // Update rekap
  document.getElementById("rekapPenjualan").innerHTML = `
    <p>Total Corndog Kecil: ${totalKecil}</p>
    <p>Total Corndog Besar: ${totalBesar}</p>
    <p>Total Red Poison: ${totalRed}</p>
    <p><b>Total Pendapatan: Rp${totalPendapatan}</b></p>
  `;
}

