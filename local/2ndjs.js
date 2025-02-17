function switchSheet(sheetNumber) {
    document.querySelectorAll('.tab').forEach((tab, index) => {
        tab.classList.toggle('active', index === sheetNumber - 1);
    });

    document.querySelectorAll('.sheet').forEach((sheet, index) => {
        sheet.classList.toggle('active', index === sheetNumber - 1);
    });

}
//h1タグを変数１とし、全てtxtを成功にする。
let 変数1=document.querySelectorAll('h1');
変数1.forEach(function(変数name){変数name.textContent="成功"});
//関数省略型
document.querySelectorAll("h1").forEach((因数)=>{因数.textContent="失敗"})
//id="re"タグを取得し、"out"テキストを入れる
function 関数名(){document.getElementById('re').textContent="out";}
//実行
関数名();
//変数contentにid='content'挿入
let content = document.getElementById('content');
//
document.getElementById('toggleButton').addEventListener(
    'click',function() {content.classList.toggle('hidden',true);}
);

