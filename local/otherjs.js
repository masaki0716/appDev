function switchSheet(index) {
    let tabs = document.querySelectorAll(".tab");
    let sheets = document.querySelectorAll(".sheet");

    // すべてのタブとシートのアクティブ状態をリセット
    tabs.forEach(tab => tab.classList.remove("active"));
    sheets.forEach(sheet => sheet.classList.remove("active"));

    // 選択されたタブとシートをアクティブ化
    tabs[index].classList.add("active");
    sheets[index].classList.add("active");
}
function displayText() {
    let inputText = document.getElementById("単語").value;
    let outputDiv = document.getElementById("出力");

    if (inputText.trim() !== "") { // 空白を防ぐ
        let newParagraph = document.createElement("p");
        newParagraph.textContent = inputText;
        outputDiv.appendChild(newParagraph); // 追加
        document.getElementById("単語").value = ""; // 入力欄をクリア
    }
}