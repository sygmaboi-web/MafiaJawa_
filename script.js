let cart = [];
let stok = {
  "Corndog Kecil": 20,
  "Corndog Besar": 15,
  "Toxic Red": 25
};
let penjualan = {};

// Login Kasir
function loginKasir() {
  const pass = document.getElementById("password").value;
  if (pass === "KELOMPOK1KEREN") {
    document.getElementById("kasir-app").classList.remove("hidden");
    document.getElementById("kasir-msg").innerText = "Login berhasil ✅";
  } else {
    document.getElementById("kasir-msg").innerText = "Password salah ❌";
  }
}

// Tambah ke Keranjang
function tambah(item) {
  if (stok[item] > 0) {
    cart.push(item);
    stok[item]--;
    updateCart();
  } else {
    alert(item + " sudah habis!");
  }
}

// Update Keranjang
function updateCart() {
  let cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "<h3>Keranjang</h3>";
  cart.forEach((item, i) => {
    cartDiv.innerHTML += `<p>${item} <button onclick="hapus(${i})">❌</button></p>`;
  });
}

// Hapus Item
function hapus(index) {
  let item = cart[index];
  stok[item]++;
  cart.splice(index, 1);
  updateCart();
}

// Bayar
function bayar(metode) {
  if (cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }
  let total = 0;
  cart.forEach(item => {
    if (item === "Corndog Kecil") total += 4000;
    if (item === "Corndog Besar") total += 7000;
    if (item === "Toxic Red") total += 4000;

    if (!penjualan[item]) penjualan[item] = 0;
    penjualan[item]++;
  });

  let strukDiv = document.getElementById("struk");
  strukDiv.innerHTML = `
    <h3>🧾 Struk Pembelian</h3>
    <p>Barang: ${cart.join(", ")}</p>
    <p>Total: Rp${total.toLocaleString()}</p>
    <p>Metode: ${metode}</p>
    <p>Terima kasih telah membeli di Mafia Jawa!</p>
  `;

  if (metode === "QRIS") {
    document.getElementById("qris-img").classList.remove("hidden");
  }

  cart = [];
  updateCart();
  updateHasil();
}

// Update Hasil Penjualan
function updateHasil() {
  let hasilDiv = document.getElementById("hasil");
  hasilDiv.innerHTML = "<h3>Rekap Penjualan</h3>";
  for (let item in penjualan) {
    hasilDiv.innerHTML += `<p>${item}: ${penjualan[item]} pcs</p>`;
  }
}
