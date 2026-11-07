// Sayt muvaffaqiyatli ochilganini bildiruvchi kichik skript
console.log("Bunyodbek 3001 sayti muvaffaqiyatli ishga tushdi! 🥐");

// Sahifadagi istalgan kartochkaga bosganda xabar chiqishi uchun
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        console.log("Tanlangan mahsulot: " + this.querySelector('h3').innerText);
    });
});