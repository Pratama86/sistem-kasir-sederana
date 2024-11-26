let keranjangBelanja = [];

function tambahBarang() {
    const namaBarang = document.getElementById("namaBarang").value;
    const hargaBarang = parseInt(document.getElementById("hargaBarang").value);

    if (namaBarang && !isNaN(hargaBarang) && hargaBarang > 0) {
        keranjangBelanja.push({ nama: namaBarang, harga: hargaBarang });
        document.getElementById("namaBarang").value = '';
        document.getElementById("hargaBarang").value = '';
        tampilkanKeranjang();
        alert(`Barang ${namaBarang} berhasil ditambahkan!`);
    } else {
        alert("Masukkan nama dan harga barang yang valid.");
    }
}

function tampilkanKeranjang() {
    const keranjangList = document.getElementById("keranjangBelanja");
    keranjangList.innerHTML = ''; // Kosongkan dulu

    keranjangBelanja.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${item.nama} - Rp${item.harga}`;
        keranjangList.appendChild(li);
    });
}

function hitungTotal() {
    let total = 0;
    keranjangBelanja.forEach(item => total += item.harga);
    
    document.getElementById("totalHarga").textContent = `Total: Rp${total}`;
}
