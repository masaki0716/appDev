function switchSheet(sheetNumber) {
    document.querySelectorAll('.tab').forEach((tab, index) => {
        tab.classList.toggle('active', index === sheetNumber - 1);
    });

    document.querySelectorAll('.sheet').forEach((sheet, index) => {
        sheet.classList.toggle('active', index === sheetNumber - 1);
    });

}
//switchSheet(1)を選択 => sheetNumber = 1
//sheet1{index:0} => 0===1-1=0 => 等しいためtrue
//sheet2{index:1} => 1===1-1=0 => 等しくないためFalse
//sheet3{index:2} => 2===1-1=0 => 等しくないためFalse

//switchSheet(3)を選択 => sheetNumber = 3
//sheet1{index:0} => 0===3-1=2 => 等しくないためFalse
//sheet2{index:1} => 1===3-1=2 => 等しくないためFalse
//sheet3{index:2} => 2===3-1=2 => 等しいためtrue

function fun(){
    let doc = document.getElementById("ID")
    if(doc.textContent == "サンプル 1"){doc.textContent="変換";}
    else{doc.textContent="サンプル 1"}
}
















// //h1タグを変数１とし、全てtxtを成功にする。
// let 変数1=document.querySelectorAll('h1');
// 変数1.forEach(function(変数name){変数name.textContent="成功"});
// //関数省略型
// document.querySelectorAll("h1").forEach((因数)=>{因数.textContent="失敗"})
// //id="re"タグを取得し、"out"テキストを入れる
// function 関数名(){document.getElementById('re').textContent="out";}
// //実行
// 関数名();
// //変数contentにid='content'挿入
// let content = document.getElementById('content');
// //id='toggleButton'がclickされたら関数実行
// //クリックされたらクラスを追加・削除する（条件がtrueか１のとき）
// document.getElementById('toggleButton').addEventListener(
//     'click',function() {content.classList.toggle('hidden',true);}
// );
// //カウント関数
// function num関数(){
//     const numC=document.getElementById("num");
//     let intnum=parseInt(numC.textContent);
//     intnum += 1;
//     if (intnum == 10){
//         intnum = 0;}
//     numC.textContent=intnum;
// }

// function アクティブ選択(){
//     let タブタグ = document.querySelectorAll(".タブ");
//     タブタグ.forEach((いん)=>{
//         if(いん.classList.contains("アクティブ")){}
//         else{いん.classList.add("hidden")}})
// }