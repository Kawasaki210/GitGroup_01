// js/app.js
document.getElementById('omikuji-button').addEventListener('click', function() {
    const results = ["大吉", "中吉", "小吉", "末吉", "凶"];
    const result = results[Math.floor(Math.random() * results.length)];
    document.getElementById('omikuji-result').innerText = `おみくじの結果は: ${result} です！`;
});

// カウントを保持する変数
let count = 0;

// HTML要素を取得
const countButton = document.getElementById('countButton');
const resetButton = document.getElementById('resetButton');
const countDisplay = document.getElementById('countDisplay');

// カウントボタンのクリックイベントリスナーを追加
countButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

// リセットボタンのクリックイベントリスナーを追加
resetButton.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});