// navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;
  // jika halaman di scroll maka..
  if (window.pageYOffset > fixNav) {
    // kelas navbar-fixed aktif jika halaman di scroll ke bawah
    header.classList.add("navbar-fixed");
  } else {
    // kelas navbar-fixed nonaktif jika halaman kembali ke posisi awal
    header.classList.remove("navbar-fixed");
  }
};
// hamburger menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
// saat hamburger menu aktif maka jalankan function berikut
hamburger.addEventListener("click", function () {
  // kelas hamburger-active ditambahkan
  hamburger.classList.toggle("hamburger-active");
  // kelas hidden ditambahkan
  navMenu.classList.toggle("hidden");
});
