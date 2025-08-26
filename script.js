const PASSWORD = "KELOMPOK1KEREN";
let penjualan = [];
let totalBarang = {
  "Corndog Kecil": 0,
  "Corndog Besar": 0,
  "Red Poison": 0
};

function login() {
  const pw = document.getElementById("password").value;
  if (pw === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("kasir-content").style.display = "block";
  } else {
    alert("Password salah!");
  }
}

function tambahTransaksi() {
  const produk = document.getElementById("produk").value;
  const jumlah = parseInt(document.getElementById("jumlah").value);
  let harga = produk === "Corndog Besar" ? 7000 : 4000;

  penjualan.push({produk, jumlah, harga: harga * jumlah});
  totalBarang[produk] += jumlah;

  let keranjang = document.getElementById("keranjang");
  let li = document.createElement("li");
  li.textContent = `${jumlah} x ${produk} = Rp${harga * jumlah}`;
  keranjang.appendChild(li);
}

function cetakStruk() {
  let struk = "=== STRUK PEMBELIAN ===\n";
  let total = 0;

  penjualan.forEach(p => {
    struk += `${p.jumlah} x ${p.produk} = Rp${p.harga}\n`;
    total += p.harga;
  });

  struk += `\nTOTAL: Rp${total}\n`;
  struk += "Terima kasih sudah belanja di Mafia Jawa!";

  alert(struk);

  // update laporan
  let laporan = "<h3>Rekap Penjualan:</h3><ul>";
  for (let key in totalBarang) {
    laporan += `<li>${key}: ${totalBarang[key]}</li>`;
  }
  laporan += "</ul>";
  document.getElementById("laporan").innerHTML = laporan;
}

