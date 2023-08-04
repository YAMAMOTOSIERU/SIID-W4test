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
    number: "今は一問目です",
    question: "ゲーム市場、最も売れたゲーム機は次の内どれ？",
    tips: "ヒント: 発売日は2004年11月21日",
    answers: [
      "スーパーファミコン",
      "プレステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
    img: "./images/game1.png",
  },
  {
    number: "今は二問目です",
    question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
    tips: "ヒント: 主人公はネス",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザーズ3",
      "スーパードンキーコング",
      "星のカービィ",
    ],
    correct: "MOTHER2",
    img: "./images/game2.png",
  },
  {
    number: "今は三問目です",
    question: "ファイナルファンタジーⅣの主人公の名前は？",
    tips: "ヒント: ラスボスの名前はゼロムス",
    answers: ["フリオニール", "クラウド", "ティーダ", "セシル"],
    correct: "セシル",
    img: "./images/game3.jpeg",
  },
];
document.write;
let tipsIndex = 0;
let quizIndex = 0;
let score = 0;
const quizLength = quiz.length;

// 下記2つの共通定数
const $button = document.getElementsByTagName("button");
let number = 0;
const buttonLength = $button.length;

// 定数の文字列をHTMLに反映させる
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  document.getElementById("js-tips").textContent = quiz[quizIndex].tips;
  document.getElementById("js-img").src = quiz[quizIndex].img;
  number + 1 + "/" + quizLength;
  number++;
  let buttononIndex = 0;
  while (buttononIndex < buttonLength) {
    $button[buttononIndex].textContent = quiz[quizIndex].answers[buttononIndex];
    buttononIndex++;
  }
};
setupQuiz();

const $reset = document.getElementById("js-reset");

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
    $reset.hidden = false;
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
