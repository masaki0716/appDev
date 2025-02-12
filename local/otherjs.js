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

const API_KEY = ""; // 取得済みのAPIキーをセット

async function askChatGPT(question) {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
    };
    const body = JSON.stringify({
        model: "gpt-3.5-turbo", // 最新のモデルに変更可能
        messages: [{ role: "user", content: question }]
    });

    try {
        let response = await fetch(url, { method: "POST", headers, body });
        let data = await response.json();
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error("APIエラー:", error);
        return "エラーが発生しました。もう一度試してください。";
    }
}

async function displayTextAI() {
    let inputText = document.getElementById("単語AI").value;
    let outputDiv = document.getElementById("出力AI");

    if (inputText.trim() !== "") { // 空白を防ぐ
        let newParagraph = document.createElement("p");
        newParagraph.textContent = "質問中..."; // 一時的に表示
        outputDiv.appendChild(newParagraph);

        // 「inputText」が答えになるような問題を生成するリクエストを作成
        let question = `「${inputText}」が答えになるような問題を日本語で50文字以内で出題してください。`;

        let responseText = await askChatGPT(question); // ChatGPTに問い合わせ
        newParagraph.textContent = responseText; // 取得した回答を表示

        document.getElementById("単語AI").value = ""; // 入力欄をクリア
    }
}
