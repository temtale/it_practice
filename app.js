const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲームは次のうちどれ？',
    answers: [
      'スーファミ',
      '任天堂DS',
      'プレステ',
      'ゲームキューブ'
    ],
    correct: '任天堂DS'
  },{
    question: 'このまま？',
    answers: [
      'ｄこか',
      'とおく',
      'つれってて',
      'くれないか'
    ],
    correct: 'くれないか'
  },{
    question: '君は？',
    answers: [
      '君こそは',
      '日曜日',
      'よりの',
      '使者'
    ],
    correct: '君こそは'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

//クリックされたら正誤判定

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('残念！');
  }

  quizIndex++;

  if (quizIndex < quizLength){
    //問題がまだあればこの命令を実行
    setupQuiz();
  } else {
    //もうなければこっちを実行
    window.alert(score + '点だったよ');
  }
};

let handleIndex = 0;
while (handleIndex < buttonLength){
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
};
