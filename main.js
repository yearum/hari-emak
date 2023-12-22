// main.js
document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk mekar bunga
    function mekarBunga() {
        const bunga = document.querySelector('.bunga img');
        bunga.style.animation = 'mekar 5s ease infinite';
    }

    // Panggil fungsi mekarBunga setelah halaman dimuat
    mekarBunga();
});

// main.js
document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk mengendalikan audio
    function kontrolAudio() {
        const audio = document.querySelector('audio');

        // Fungsi untuk menghentikan audio
        function hentikanAudio() {
            audio.pause();
        }

        // Panggil fungsi hentikanAudio setelah 10 detik
        setTimeout(hentikanAudio, 10000);
    }

    // Panggil fungsi kontrolAudio setelah halaman dimuat
    kontrolAudio();
});