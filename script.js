const passwordKasir = "KELOMPOK1KEREN";
let penjualan = [];
let stok = {
  corndogKecil: 50,
  corndogBesar: 50,
  toxicRed: 50
};
let harga = {
  corndogKecil: 4000,
  corndogBesar: 7000,
  toxicRed: 4000
};

function loginKasir() {
  const input = document.getElementById("passwordInput").value;
  if (input === passwordKasir) {
    document.getElementById("loginKasir").style.display = "none";
    document.getElementById("kasirContent").classList.remove("hidden");
  } else {
    alert("Password salah!");
  }
}

function tambahTransaksi() {
  const produk = document.getElementById("produkSelect").value;
  const jumlah = parseInt(document.getElementById("jumlahInput").value);

  if (stok[produk] < jumlah) {
    alert("Stok tidak cukup!");
    return;
  }

  stok[produk] -= jumlah;
  const total = harga[produk] * jumlah;
  const transaksi = { produk, jumlah, total };
  penjualan.push(transaksi);

  cetakStruk(transaksi);
  updateRekap();
}

function cetakStruk(transaksi) {
  const strukDiv = document.getElementById("struk");
  const namaProduk = {
    corndogKecil: "Corndog Kecil",
    corndogBesar: "Corndog Besar",
    toxicRed: "Toxic Red"
  };

  strukDiv.innerHTML = `
    <h3>🧾 Struk Pembelian</h3>
    <p>Produk: ${namaProduk[transaksi.produk]}</p>
    <p>Jumlah: ${transaksi.jumlah}</p>
    <p>Total: Rp${transaksi.total.toLocaleString()}</p>
    <hr>
  `;
}

function updateRekap() {
  const rekapDiv = document.getElementById("rekapPenjualan");
  if (penjualan.length === 0) {
    rekapDiv.innerHTML = "<p>Belum ada data penjualan</p>";
    return;
  }

  let totalSemua = 0;
  let html = "<ul>";
  penjualan.forEach((p, index) => {
    html += `<li>${index+1}. ${p.produk} x ${p.jumlah} = Rp${p.total.toLocaleString()}</li>`;
    totalSemua += p.total;
  });
  html += `</ul><h3>Total Pendapatan: Rp${totalSemua.toLocaleString()}</h3>`;
  rekapDiv.innerHTML = html;
}


