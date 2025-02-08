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
