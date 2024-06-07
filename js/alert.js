function showAlerts() {
    // テキストボックスの値を取得
    var count = document.getElementById('alertCount').value;
    // 数値に変換
    var num = parseInt(count, 10);

    // 入力が数値かどうか確認
    if (isNaN(num) || num <= 0) {
        alert('正しい数値を入力してください。');
        return;
    }

    // アラートを表示
    for (var i = 0; i < num; i++) {
        alert('アラート ' + (i + 1));
    }
}