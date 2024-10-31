let currentSlide = 0;

const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    items.forEach((item, index) => {
        item.style.display = index === currentSlide ? 'block' : 'none';
    });
}

document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalItems;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalItems) % totalItems;
    updateCarousel();
});

// 初期表示
updateCarousel();

//ハンバーガーメニュー
$(function () {
    var $body = $('.gnav_wrapper,.menu-btn');

    //開閉用ボタンをクリックでクラスの切替え
    $('#js_btn').on('click', function () {
        $body.toggleClass('open');
    });

    //メニュー名以外の部分をクリックで閉じる
    $('a').on('click', function () {
        $body.removeClass('open');
    });
});
