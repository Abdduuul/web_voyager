// Inisialisasi Lucide Icons
// Pastikan script Lucide sudah dimuat di HTML sebelum script ini dijalankan
lucide.createIcons();

// Logika untuk Mobile Menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Pastikan elemen ditemukan sebelum menambahkan event listener
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        // Toggle class 'hidden' untuk menampilkan atau menyembunyikan menu
        mobileMenu.classList.toggle('hidden');
    });
}
