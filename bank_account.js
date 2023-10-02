let saldo = 5000000 // Inisialisasi saldo awal
class SaldoManager {
    constructor(initialSaldo) {
        this.saldoAwal = initialSaldo;//inisialisasi saldo awal
    }

    tambahanSaldo() {// metode
        let isDone = false;
        while (!isDone) {
            let inputSaldo = window.prompt('Silahkan Masukan Jumlah Saldo Tambahan Anda');
            if (!isNaN(inputSaldo) && !inputSaldo.includes('+') && !inputSaldo.includes('-')) {
                let saldoTambahan = Number(inputSaldo);
                this.saldoAwal += saldoTambahan;
                alert('TERIMA KASIH TELAH MENAMBAHKAN SALDOMU');
                updateTampilanSaldo(this.saldoAwal);
                alert('Saldo Berhasil ditambahkan');
                var choose = prompt("Apakah ingin menambahkan saldo lagi? (Y/N)").toUpperCase();
                if (choose !== "Y") {
                    isDone = true;
                }
            } else {
                alert('Input Tidak Valid');
                alert('Tolong Masukan Angka Yang Valid');
            }
        }
        return(this.saldoAwal);
    }

    kuranginSaldo() { //metode
        let isDone = false;
        while (!isDone) {
            let inputSaldo = window.prompt('Silahkan Masukan Jumlah Saldo Yang Ingin Dikurangi');
            if (!isNaN(inputSaldo) && !inputSaldo.includes('+') && !inputSaldo.includes('-')) {
                let saldoKurang = Number(inputSaldo);
                if (saldoKurang === this.saldoAwal) {
                    alert('Maaf, Anda tidak bisa mengurangkan saldo dengan jumlah yang sama dengan saldo saat ini.');
                } else if (saldoKurang < this.saldoAwal) {
                    this.saldoAwal -= saldoKurang;
                    alert('TERIMA KASIH TELAH MENGURANGI SALDOMU');
                    updateTampilanSaldo(this.saldoAwal);
                    alert('Update Saldo Telah Berhasil Dikurangi');
                    var choose = prompt("Apakah ingin menambahkan saldo lagi? (Y/N)").toUpperCase();
                    if (choose !== "Y") {
                        isDone = true;
                    }
                } else {
                    alert('Maaf, saldo tidak cukup untuk mengurangkan');
                }
            } else {
                alert('Input Tidak Valid');
                alert('Tolong Masukan Angka Yang Valid');
            }
        }
        return(this.saldoAwal);
    }
}

// Inisialisasi objek SaldoManager dengan saldo awal
const saldoManager = new SaldoManager(saldo);

function updateTampilanSaldo(saldoAwal) { //fungsi
    document.getElementById("saldo").textContent = saldoAwal
}

function tambahSaldo() {
    saldoManager.tambahanSaldo(function (newSaldo) {
        saldoManager.saldoAwal = newSaldo;
    });
}

function kurangiSaldo() {
    saldoManager.kuranginSaldo(function (newSaldo) {
        saldoManager.saldoAwal = newSaldo;
    });
}

    




  