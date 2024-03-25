// HTML要素を定数に取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされた時の動作を定義
btn.addEventListener('click',function () {
text.textContent = "ボタンをクリックしました";
});