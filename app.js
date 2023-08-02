// トグルメニュー
document.addEventListener("DOMContentLoaded", function () {
  // js-showクラスの要素を取得
  var jsShowElement = document.getElementById("js-show");

  // js-showクラスの要素をクリックしたときの処理
  jsShowElement.addEventListener("click", function () {
    // js-tipsクラスを持つ要素を取得
    var jsTipsElement = document.getElementById("js-tips");

    // js-tipsクラスを持つ要素のスタイルのdisplayプロパティを切り替えることで、表示を切り替える
    if (jsTipsElement.style.display === "none") {
      jsTipsElement.style.display = "block";
    } else {
      jsTipsElement.style.display = "none";
    }
  });
});

const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次の内どれ？",
    tips: "ヒント: 発売日は2004年11月21日",
    answers: [
      "スーパーファミコン",
      "プレステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
    tips: "ヒント: 主人公はネス",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザーズ3",
      "スーパードンキーコング",
      "星のカービィ",
    ],
    correct: "MOTHER2",
  },
  {
    question: "ファイナルファンタジーⅣの主人公の名前は？",
    tips: "ヒント: ラスボスの名前はゼロムス",
    answers: ["フリオニール", "クラウド", "ティーダ", "セシル"],
    correct: "セシル",
  },
];

let tipsIndex = 0;

let quizIndex = 0;
let score = 0;
const quizLength = quiz.length;

// 下記2つの共通定数
const $button = document.getElementsByTagName("button");
const $tips = document.getElementById("js-tips");
const buttonLength = $button.length;

// 定数の文字列をHTMLに反映させる
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  document.getElementById("js-tips").textContent = quiz[quizIndex].tips;
  let buttononIndex = 0;
  while (buttononIndex < buttonLength) {
    $button[buttononIndex].textContent = quiz[quizIndex].answers[buttononIndex];
    buttononIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解");
    score++;
  } else {
    window.alert("不正解");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数がまだあればこちら実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert("終了!あなたの正解数は" + score + "/" + quizLength + "です！");
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
