const profilePhoto = document.querySelector('.profile-photo');
let isDragging = false;
let startX, startY, initialX, initialY;

// Ketika klik pada gambar (bukan pada pembungkus)
profilePhoto.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  initialX = profilePhoto.offsetLeft;
  initialY = profilePhoto.offsetTop;

  // Menghentikan peristiwa default agar tidak ada efek lain
  e.preventDefault();
});

// Ketika mouse digerakkan
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const dx = e.clientX - startX; // Selisih gerakan pada sumbu X
  const dy = e.clientY - startY; // Selisih gerakan pada sumbu Y

  // Menghitung posisi baru gambar
  let newX = initialX + dx;
  let newY = initialY + dy;

  // Membatasi agar gambar tetap dalam pembatas kartu
  const profileCard = profilePhoto.parentElement;
  const maxX = profileCard.clientWidth - profilePhoto.clientWidth;
  const maxY = profileCard.clientHeight - profilePhoto.clientHeight;

  // Membatasi pergerakan pada area pembungkus
  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  // Mengatur posisi baru gambar
  profilePhoto.style.left = `${newX}px`;
  profilePhoto.style.top = `${newY}px`;
});

// Ketika mouse dilepas
document.addEventListener('mouseup', () => {
  isDragging = false;
});
