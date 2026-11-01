const formWorkshop = document.getElementById("formWorkshop");

const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");

const jumlahNama = document.getElementById("jumlahNama");
const ringkasanSesi = document.getElementById("ringkasanSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");

const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Menghitung jumlah karakter nama
namaWorkshop.addEventListener("input", function () {
    jumlahNama.textContent = namaWorkshop.value.length;
});

// Menampilkan sesi yang dipilih
sesiWorkshop.addEventListener("change", function () {
    ringkasanSesi.textContent =
        "Sesi yang dipilih: " + sesiWorkshop.value;
});

// Memeriksa data pendaftaran
formWorkshop.addEventListener("submit", function (event) {

    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = sesiWorkshop.value;

    if (nama === "") {
        pesanWorkshop.textContent = "Nama wajib diisi.";

    } else if (!polaEmail.test(email)) {
        pesanWorkshop.textContent = "Email tidak valid.";

    } else if (sesi === "") {
        pesanWorkshop.textContent = "Silakan pilih sesi workshop.";

    } else {
        pesanWorkshop.textContent =
            "Pendaftaran berhasil. Terima kasih!";
    }

});

// Menghapus isi form
formWorkshop.addEventListener("reset", function () {
    jumlahNama.textContent = "0";
    ringkasanSesi.textContent = "";
    pesanWorkshop.textContent = "";
});