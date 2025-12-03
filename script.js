function tampilkanSaran() {
    const gejala = document.getElementById("gejala").value;
    const hasil = document.getElementById("hasil");

    let saran = "";

    switch (gejala) {
        case "pusing":
            saran = "Istirahat di tempat tenang, minum air, dan hindari layar sementara.";
            break;
        case "batuk":
            saran = "Minum air hangat, hindari minuman dingin, dan istirahat cukup.";
            break;
        case "pilek":
            saran = "Cuci hidung dengan air hangat dan banyak minum air.";
            break;
        case "tenggorokan":
            saran = "Minum teh madu hangat dan hindari makanan berminyak.";
            break;
        case "capek":
            saran = "Istirahat 20–30 menit dan minum air putih.";
            break;
        case "demam":
            saran = "Istirahat, minum air hangat, dan gunakan kompres hangat.";
            break;
        default:
            saran = "Silakan pilih gejala terlebih dahulu.";
    }

    hasil.classList.remove("hidden");
    hasil.innerHTML = `<strong>Saran Perawatan:</strong><br>${saran}`;
}

document.getElementById("warningBtn").onclick = function() {
    const box = document.getElementById("warningBox");
    box.classList.toggle("hidden");
};
