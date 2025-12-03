// helper: safe play sound after user gesture
function playSound() {
  const s = document.getElementById("klikSound");
  if (!s) return;
  try { s.currentTime = 0; s.play().catch(()=>{}); } catch(e) {}
}

// saran mapping (non-diagnostic)
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
  const klik = document.getElementById("klikSound");

  // attach click-sound to interactive elements (graceful)
  function attachSoundTo(el) {
    if(!el) return;
    el.addEventListener('click', ()=> {
      if(klik) { try{ klik.currentTime = 0; klik.play().catch(()=>{});}catch(e){} }
    });
  }
  [btn, warnBtn, darkBtn].forEach(attachSound);

  // tombol saran
  btn.addEventListener("click", function(){
    playSound();
    const g = sel.value;
    const saran = rekomendasi[g] || "Silakan pilih gejala terlebih dahulu.";
    hasil.classList.remove("hidden");
    hasil.classList.add("show");
    hasil.innerHTML = `<strong>Saran Perawatan:</strong><br>${saran}`;
  });

  // warning toggle
  warnBtn.addEventListener("click", function(){
    playSound();
    if(warnBox.classList.contains("hidden")) {
      warnBox.classList.remove("hidden");
      warnBox.style.display = "block";
    } else {
      warnBox.classList.add("hidden");
      warnBox.style.display = "none";
    }
  });

  // dark mode toggle
  darkBtn.addEventListener("click", function(){
    playSound();
    const isDark = document.body.classList.toggle("dark");
    darkBtn.setAttribute("aria-pressed", String(isDark));
  });

  // reminder minum air (aktif setelah 1 klik pengguna)
  let reminderSet = false;
  function initReminderOnce() {
    if(reminderSet) return;
    reminderSet = true;
    setInterval(()=> {
      alert("💧 Waktunya minum air! Tetap terhidrasi ya.");
    }, 1800000); // 30 menit
  }
  // enable reminder after first user gesture (click anywhere)
  document.body.addEventListener("click", function onFirstClick() {
    initReminderOnce();
    document.body.removeEventListener("click", onFirstClick);
  }, { once: true });

  // grafik sederhana
  const canvas = document.getElementById("grafik");
  if(canvas && canvas.getContext) {
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
