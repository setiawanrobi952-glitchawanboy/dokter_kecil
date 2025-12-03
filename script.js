// SOUND
function playSound() {
    document.getElementById("klikSound").play();
}

// TAMPILKAN SARAN
function tampilkanSaran() {
    playSound();
    const gejala = document.getElementById("gejala").value;
    const hasil = document.getElementById("hasil");
    let saran = "";

    switch (gejala) {
        case "pusing":
            saran = "Istirahat di tempat tenang, minum air, dan hindari layar.";
            break;
        case "batuk":
            saran = "Minum air hangat, hindari minuman dingin.";
            break;
        case "pilek":
            saran = "Cuci hidung dengan air hangat dan banyak minum.";
            break;
        case "tenggorokan":
            saran = "Minum teh madu hangat, hindari makanan berminyak.";
            break;
        case "capek":
            saran = "Istirahat 20 menit dan minum air putih.";
            break;
        case "demam":
            saran = "Istirahat, minum air hangat, kompres hangat.";
            break;
        default:
            saran = "Silakan pilih gejala.";
    }

    hasil.classList.remove("hidden");
    hasil.innerHTML = `<strong>Saran Perawatan:</strong><br>${saran}`;
}

// WARNING
document.getElementById("warningBtn").onclick = function() {
    playSound();
    document.getElementById("warningBox").classList.toggle("hidden");
};

// MODE GELAP
document.getElementById("darkModeBtn").onclick = function() {
    playSound();
    document.body.classList.toggle("dark");
};

// PENGINGAT MINUM AIR: setiap 30 menit
setInterval(() => {
    alert("💧 Waktunya minum air! Jaga tubuh tetap terhidrasi ya.");
}, 1800000); // 30 menit

// GRAFIK SEDERHANA
const canvas = document.getElementById("grafik").getContext("2d");
let data = [2, 3, 4, 3, 5, 4];

function drawGraph() {
    canvas.clearRect(0, 0, 400, 200);
    canvas.beginPath();
    canvas.moveTo(0, 200 - data[0] * 20);

    for (let i = 1; i < data.length; i++) {
        canvas.lineTo(i * 70, 200 - data[i] * 20);
    }

    canvas.strokeStyle = "#007acc";
    canvas.lineWidth = 3;
    canvas.stroke();
}

drawGraph();
