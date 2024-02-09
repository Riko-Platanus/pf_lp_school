document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // フォームの送信処理

    // メッセージを表示
    document.getElementById('message').classList.remove('hidden');
    // メッセージを非表示にする
    setTimeout(function() {
        document.getElementById('message').classList.add('hidden');
    }, 5000); // 5秒後に非表示にする
});