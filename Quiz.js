const quiz = [
    {
        question: 'Q1. 僕の苗字はなんですか',
        choices: [
            '斎藤',
            '斉藤',
            '佐藤',
            '齋藤'
        ],
        correct: '佐藤'
    },
    {
        question: 'Q2. 僕は埼玉の何という市に住んでいるでしょうか？',
        choices: [
            '川越市',
            '深谷市',
            '鶴ヶ島市',
            '坂戸市'
        ],
        correct: '川越市'
    },
    {
        question: 'Q3. 僕の趣味であるアニメの特に好きなジャンルではないものは？',
        choices: [
            '異世界系',
            'ジャンプ系',
            '日常系',
            '物語系'
        ],
        correct: '物語系'
    },
    {
        question: 'Q4. この中で僕の趣味であるゲームの好きなジャンルは？',
        choices: [
            'ストラテジーゲーム',
            'トレーディングカードゲーム',
            'シューティングゲーム',
            'シミュレーションゲーム'
        ],
        correct: 'シミュレーションゲーム'
    },
    {
        question: 'Q5. 2023年現在の僕の大学の学年は？',
        choices: [
            '2年生',
            '3年生',
            '4年生',
            '留年'
        ],
        correct: '3年生'
    },
    {
        question: '自己紹介ページのプロフィール画像はどの場面で撮ったものか？',
        choices: [
            '文化祭（高麗祭）にいたとき',
            '坂戸市役所を訪れたとき',
            '落ち葉拾いに参加したとき',
            '公立の図書館に行ったとき'
        ],
        correct: '文化祭（高麗祭）にいたとき'
    },
    {
        question: 'Q7. 前問Q6で（画像正面から見て）左側にいたマスコットキャラクターの名前は？',
        choices: [
            'コバトン',
            'さかろん',
            'さ吉くん',
            'さのまる'
        ],
        correct: 'さかろん'
    },
    {
        question: 'Q8. 前問Q6で（画像正面から見て）右側の彼が手で持っているものは？',
        choices: [
            'りんご飴',
            'フランクフルト',
            'チョコバナナ',
            'アメリカンドック'
        ],
        correct: 'チョコバナナ'
    },
    {
        question: 'Q9. 漫画「呪術廻戦」で登場するキャラクター、五条悟の術式「無下限呪術」の能力は？',
        choices: [
            '相手の五感全てを奪う',
            '無限を現実に持ってくる',
            '平衡感覚を逆にする',
            '純粋な身体能力の強化'
        ],
        correct: '無限を現実に持ってくる'
    },
    {
        question: 'Q10. 漫画「呪術廻戦」で登場するキャラクター、三輪霞の年齢は？',
        choices: [
            '16歳',
            '17歳',
            '18歳',
            '19歳'
        ],
        correct: '17歳'
    },
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setupQuiz = () => {
    document.getElementById('question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
}

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
