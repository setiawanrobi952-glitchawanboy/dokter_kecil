function tampilkanSaran() {
    const gejala = document.getElementById("gejala").value;
    const hasil = document.getElementById("hasil");

    let saran = "";

    if (gejala === "pusing") {
        saran = "Cobalah istirahat, minum air, dan jauhi layar sebentar.";
    } else if (gejala === "batuk") {
        saran = "Minum air hangat, hindari minuman dingin, dan istirahat cukup.";
    } else if (gejala === "pilek") {
        saran = "Gunakan air hangat, mandi hangat, dan banyak minum air.";
    } else if (gejala === "tenggorokan") {
        saran = "Minum air hangat atau teh madu, hindari makanan pedas.";
    } else if (gejala === "capek") {
        saran = "Istirahat minimal 20 menit dan minum cukup air.";
    } else if (gejala === "demam") {
        saran = "Istirahat, minum air hangat, gunakan kompres hangat.";
    } else {
        saran = "Silakan pilih gejala terlebih dahulu.";
    }

    hasil.style.display = "block";
    hasil.innerHTML = "<strong>Saran:</strong><br>" + saran;
}

document.getElementById("warningBtn").onclick = function() {
    const box = document.getElementById("warningBox");
    box.classList.toggle("hidden");
};
