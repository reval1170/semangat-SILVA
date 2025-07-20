const motivasiList = [
  "Kamu hebat, SILVANI!",
  "Jangan menyerah, SILVANI!",
  "Setiap hari adalah kesempatan baru!",
  "Semangat terus, SILVANI!",
  "Kegagalan adalah awal kesuksesan!",
  "Percaya diri dan terus melangkah!",
  "SILVANI, kamu bisa!",
  "Langit bukan batasnya!",
  "Usaha tidak akan mengkhianati hasil!",
  "Tetap tersenyum dan berjuang!",
  "Sukses menanti di depan!",
  "Jadilah versi terbaik dirimu!",
  "Semangatmu menular!",
  "Jangan takut bermimpi besar!",
  "Kamu inspirasi banyak orang!",
  "Ayo, SILVANI! Waktunya bersinar!",
  "Setiap langkahmu berarti!",
  "Kamu tidak sendiri!",
  "Terus berusaha, hasil pasti datang!",
  "Hari ini milikmu, SILVANI!"
];

function randomPos() {
  const area = document.getElementById('motivasi-area');
  const w = area.offsetWidth;
  const h = area.offsetHeight;
  const x = Math.random() * (w - 120);
  const y = Math.random() * (h - 40);
  return {x, y};
}

function terbangkanMotivasi(text) {
  const area = document.getElementById('motivasi-area');
  const div = document.createElement('div');
  div.className = 'motivasi';
  div.textContent = text;
  const {x, y} = randomPos();
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  area.appendChild(div);
  setTimeout(() => div.remove(), 9000);

  // Animasi emoji love dan bunga
  for (let i = 0; i < 2; i++) {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.textContent = Math.random() > 0.5 ? '💖' : '🌸';
    const ex = Math.random() * (area.offsetWidth - 40);
    const ey = Math.random() * (area.offsetHeight - 40);
    emoji.style.left = `${ex}px`;
    emoji.style.top = `${ey}px`;
    area.appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
  }
}
// ...existing code...

function tambahMotivasi() {
  const text = motivasiList[Math.floor(Math.random() * motivasiList.length)];
  terbangkanMotivasi(text);
}

// Otomatis terbangkan motivasi setiap 2 detik
setInterval(() => {
  tambahMotivasi();
}, 2000);
