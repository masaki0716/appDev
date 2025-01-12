// 単語リスト（例）
const words = [
    { question: "apple", answer: "りんごですよねえ" },
    { question: "banana", answer: "バナナ" },
    { question: "grape", answer: "ぶどう" },
  ];
  
  let currentIndex = 0;
  
  // 次の単語を表示する
  function nextWord() {
    currentIndex = (currentIndex + 1) % words.length; // 次の単語へ（ループ）
    document.getElementById("question").textContent = words[currentIndex].question;
    document.getElementById("answer").style.display = "none"; // 答えを隠す
  }
  
  // 答えを表示する
  function showAnswer() {
    document.getElementById("answer").textContent = words[currentIndex].answer;
    document.getElementById("answer").style.display = "block"; // 答えを表示
  }
  
  // 初期化
  nextWord();
  