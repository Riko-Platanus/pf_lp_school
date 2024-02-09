window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrolled = window.scrollY > 0; // スクロール位置が0より大きいかどうかを判定

    if (scrolled) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});