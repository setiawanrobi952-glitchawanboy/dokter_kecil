// helper: safe play sound after user gesture
function playSound() {
  const s = document.getElementById("klikSound");
  if(!s) return;
  try { s.currentTime = 0; s.play().catch(()=>{}); } catch(e) {}
}

// saran mapping
const rekomendasi = {
  pusing: "Istirahat di tempat tenang dan minum air putih.",
  batuk: "Minum air hangat dan istirahat cukup.",
  pilek: "Bersihkan hidung dengan air hangat dan istirahat.",
  tenggorokan: "Minum teh madu hangat, hindari makanan berminyak.",
  capek: "Istirahat 20–30 menit dan minum air putih.",
  demam: "Istirahat, minum banyak cairan, kompres hangat."
};

document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("btnSaran");
  const sel = document.getElementById("gejala");
  const hasil = document.getElementById("hasil");
  const warnBtn = document.getElementById("warningBtn");
  const warnBox = document.getElementById("warningBox");
  const darkBtn = document.getElementById("darkModeBtn");

  // tombol saran (juga memicu sound sehingga browser mengizinkan audio)
  btn.addEventListener("click", function(){
    playSound();
    const g = sel.value;
    const saran = rekomendasi[g] || "Silakan pilih gejala terlebih dahulu.";
    hasil.classList.remove("hidden");
    hasil.innerHTML = `<strong>Saran Perawatan:</strong><br>${saran}`;
  });

  // warning toggle
  warnBtn.addEventListener("click", function(){
    playSound();
    warnBox.classList.toggle("hidden");
  });

  // dark mode
  darkBtn.addEventListener("click", function(){
    playSound();
    document.body.classList.toggle("dark");
    // minor fix: ensure hasil/warning tetap kontras
    const card = document.getElementById("hasil");
    if(card && !card.classList.contains("hidden")) {
      // no-op; CSS handles colors. keeping for future tweaks.
    }
  });

  // reminder minum air (interval) - optional
  // only set if user interacts (so it's less annoying)
  let reminderSet = false;
  document.body.addEventListener("click", function once() {
    if(!reminderSet) {
      reminderSet = true;
      // every 30 minutes -> 1800000 ms
      setInterval(()=> {
        // friendly browser alert
        alert("💧 Waktunya minum air! Jaga hidrasi ya.");
      }, 1800000);
    }
    // remove listener after first user gesture
    document.body.removeEventListener("click", once);
  }, { once: true });

  // simple grafik (non-interactive)
  const canvas = document.getElementById("grafik");
  if(canvas) {
    const ctx = canvas.getContext("2d");
    const data = [2,3,4,3,5,4];
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.moveTo(20, canvas.height - data[0]*30);
    for(let i=1;i<data.length;i++){
      ctx.lineTo(20 + i*70, canvas.height - data[i]*30);
    }
    ctx.strokeStyle = "#007acc";
    ctx.lineWidth = 3;
    ctx.stroke();
  }
});
