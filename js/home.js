// Mengatur efek animasi saat berpindah halaman
const links = document.querySelectorAll('.navbar a');

for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');

    const content = document.querySelector('.content');
    content.classList.remove('fade-in');
    content.classList.add('slide-out');

    setTimeout(() => {
      // Setelah animasi selesai, ganti konten
      window.location.href = href;
    }, 600); // Sesuaikan dengan durasi animasi
  });
}

// Memastikan animasi masuk saat halaman dimuat
window.onload = function () {
  const content = document.querySelector('.container');
  content.classList.remove('slide-out');
  content.classList.add('fade-in');

  startTypingAnimation(); // Memulai animasi ngetik
};

// Animasi ngetik dan menghilang
const texts = ['I am a Frontend Web Dev', 'I am a Laravel Dev'];
let index = 0;
let typingElement = document.getElementById('typing');

function startTypingAnimation() {
  typingElement.textContent = ''; // Kosongkan teks sebelumnya
  typeWriter(texts[index], 0);
}

function typeWriter(text, i) {
  if (i < text.length) {
    typingElement.textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 100); // Waktu antar huruf
  } else {
    setTimeout(() => {
      eraseWriter(text, text.length);
    }, 2000); // Tunggu sebelum menghapus teks
  }
}

function eraseWriter(text, i) {
  if (i >= 0) {
    typingElement.textContent = text.substring(0, i);
    setTimeout(() => eraseWriter(text, i - 1), 50); // Waktu antar huruf saat menghapus
  } else {
    index = (index + 1) % texts.length; // Pindah ke teks berikutnya
    setTimeout(startTypingAnimation, 500); // Tunggu sebelum memulai ngetik teks berikutnya
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('role-text');
  const roles = ['Frontend Dev', 'Laravel Dev'];
  let currentRole = 0;
  let currentCharIndex = 0;

  function type() {
    if (currentCharIndex < roles[currentRole].length) {
      textElement.innerHTML += roles[currentRole].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(type, 100); // adjust speed here
    } else {
      setTimeout(erase, 2000); // hold the text before erasing
    }
  }

  function erase() {
    if (currentCharIndex > 0) {
      textElement.innerHTML = roles[currentRole].substring(0, currentCharIndex - 1);
      currentCharIndex--;
      setTimeout(erase, 50); // adjust erase speed here
    } else {
      currentRole = (currentRole + 1) % roles.length;
      setTimeout(type, 500); // start typing the next role
    }
  }

  type(); // start the typing animation
});
