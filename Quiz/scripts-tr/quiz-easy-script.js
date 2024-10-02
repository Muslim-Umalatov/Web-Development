'use strict';

/* Переменные */
const numberOfQuestions = 7;
const goal = 200;

let questionCounter = 0;
let score = 0;
let answer;
let wrongAnswerCounter = 0;
let q = [];

q[0] = `Dünya'da kaç okyanus var?\n1) 3\n2) 4\n3) 5\n4) 6`;
q[1] = `Sayının karesi alındığında sonuç 256 çıkıyor. Hangi sayıdan bahsediliyor?\n1) 16\n2) 18\n3) 20\n4) 22`;
q[2] = `Erzurum milyondan fazla nüfusu olan şehirlerden biri mi?\n1) Evet\n2) Hayır`;
q[3] = `Satranç tahtasında hangi kare yoktur?\n1) k6\n2) h8\n3) g5\n4) b7`;
q[4] = `Hollanda'nın başkenti nedir?\n1) Kopenhag\n2) Madrid\n3) Lizbon\n4) Amsterdam`;
q[5] = `Kur'anı Kerim'in en uzun süresi hangisi?\n1) Al-i İmran\n2) İhlas\n3) Tevbe Süresi\n4) Bakara Süresi`;
q[6] = `İlk akkor ampülü kim tarafından icat edilmiştir?\n1) Thomas Edison\n2) Galileo Galilei\n3) Michael Faraday\n4) Albert Einstein`;
const answerKeys = ["2", "1", "2", "1", "4", "4", "1"];
let usersWrongAnswers = [0, 0, 0, 0, 0, 0, 0];

/* Главная часть программы */
alert(`Bilgi yarışmasına hoş geldiniz!\n\nHer doğru cevap size 50 puan kazandırıyor.\n\nHedef: ${goal} puan`)

/* Вызов и обработка вопроса */
while((questionCounter < numberOfQuestions) && (answer !== "Q") && (answer !== "q")) {
  let info = `Soru ${questionCounter + 1} / ${numberOfQuestions}     Skor: ${score}     Çıkış: q`;
  answer = window.prompt(`${info}\n\n${q[questionCounter]}`);

  if(answer === answerKeys[questionCounter]) {
    score += 50;
  } else {
    usersWrongAnswers[questionCounter]++;
    wrongAnswerCounter++;
  }

  questionCounter++;
}

/* Результаты */
if((answer !== "Q") && (answer !== "q")) {
  if(score === 350) {
    alert(`Tebrikler, ${score} puan alarak kazandınız!\n\nTüm soruları doğru cevapladınız.`);
  } else if(score >= goal && score < 350) {
    alert(`Tebrikler, ${score} puan alarak kazandınız!\n\n${wrongAnswerCounter} soru yanlış cevapladınız.`);
  } else if(score >= 50) {
    alert(`Kazanmak için sadece ${goal - score} puanınız yetmedi...\n\n${wrongAnswerCounter} soru yanlış cevapladınız.`);
  } else {
    alert(`Oyunu kaybettiniz... Skorunuz: ${score}\n\n${wrongAnswerCounter} soru yanlış cevapladınız.`);
  }

  /* Ошибочные вопросы */
  questionCounter = 0;

  while(wrongAnswerCounter > 0) {
    if(usersWrongAnswers[questionCounter] !== 0) {
      alert(`Bu soruyu yanlış cevapladınız:\n${q[questionCounter]}\n\nDoğru cevap: ${answerKeys[questionCounter]}`);
      wrongAnswerCounter--;
    }
    questionCounter++;
  }
}
