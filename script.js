// PLAY SOUND
function playSound() {
    const sound = document.getElementById("klikSound");
    sound.currentTime = 0;
    sound.play();
}

// TAMPILKAN SARAN AMAN
function tampilkanSaran() {
    playSound();

    const gejala = document.getElementById("gejala").value;
    const hasil = document.getElementById("hasil");
    let saran = "";

    const rekomendasi = {
        pusing: "Istirahat di tempat tenang dan minum air putih.",
        batuk: "Minum air hangat dan istirahat cukup.",
        pilek: "Minum air hangat dan jaga kebersihan tangan.",
        tenggorokan: "Minum minuman hangat seperti teh madu.",
        capek: "Istirahat 20–30 menit dan minum air putih.",
        demam: "Istirahat, banyak minum, dan gunakan kompres hangat."
    };

    saran = rekomendasi[gejala] || "Silakan pilih gejala.";

    hasil.classList.remove("hidden");
    hasil.innerHTML = `<strong>Saran Perawatan:</strong><br>${saran}`;
}

// WARNING
document.getElementById("warningBtn").onclick = function () {
    playSound();
    document.getElementById("warningBox").classList.toggle("hidden");
};

// MODE GELAP
document.getElementById("darkModeBtn").onclick = function () {
    playSound();
    document.body.classList.toggle("dark");
};

// PENGINGAT MINUM AIR (30 menit)
setInterval(() => {
    alert("💧 Waktunya minum air! Tubuh kamu butuh hidrasi.");
}, 1800000);

// GRAFIK SEDERHANA
const ctx = document.getElementById("grafik").getContext("2d");
let data = [2, 3, 4, 3, 5, 4];

function drawGraph() {
    ctx.clearRect(0, 0, 400, 200);

    ctx.beginPath();
    ctx.moveTo(0, 200 - data[0] * 20);

    for (let i = 1; i < data.length; i++) {
        ctx.lineTo(i * 70, 200 - data[i] * 20);
    }

    ctx.strokeStyle = "#007acc";
    ctx.lineWidth = 3;
    ctx.stroke();
}

drawGraph();
