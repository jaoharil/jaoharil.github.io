function showLoading(event, url) {
  event.preventDefault();

  const loadingOverlay = document.querySelector('.fullscreen-loading-overlay');

  // Tampilkan overlay loading fullscreen
  loadingOverlay.classList.add('show');

  // Tunggu beberapa detik, lalu arahkan ke link
  setTimeout(() => {
    window.location.href = url;
  }, 1000); // Waktu loading 1 detik
}
