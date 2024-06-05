// js/app.js
document.getElementById('omikuji-button').addEventListener('click', function() {
    const results = ["大吉", "中吉", "小吉", "末吉", "凶"];
    const result = results[Math.floor(Math.random() * results.length)];
    document.getElementById('omikuji-result').innerText = `おみくじの結果は: ${result} です！`;
});
