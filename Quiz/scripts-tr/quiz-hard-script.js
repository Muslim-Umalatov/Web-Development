'use strict';

/* Переменные */
const numberOfQuestions = 13;
const goal = 400;

let questionCounter = 0;
let score = 0;
let answer;
let wrongAnswerCounter = 0;
let q = [];
q[0] = `90'nın %30'u kaçtır?\n1) 23\n2) 27\n3) 30\n4) 33`;
q[1] = `Demografi nedir?\n1) Halkın kendi kendini yönetme biçimidir\n2) Projelerde bilgisayar grafiklerinin küçük bir önizlemesi \n3) İnsanların nüfusu inceleyen bilim dalıdır.`;
q[2] = `Problem: Bir köyde 7 koca var, her birinin 7 karısı ve her karısının 7 çocuğu var. Köyde kaç kişi yaşıyor?`;
q[3] = `Olimpiyat halkaları hangi renkler ile boyanmıştır?\n1) Mavi, Sarı, Siyah, Yeşil, Kırmızı\n2) Mavi, Mor, Sarı, Yeşil, Kırmızı\n3) Mavi, Sarı, Turuncu, Yeşil, Kırmızı`;
q[4] = `Satranç taşlarından hangisi "Geçerken Alma" kuralıyla taşı alabilir?`;
q[5] = `Ahtapotlarda kaç kalbi var?\n1) Bir kalp var\n2) İki kalbi var\n3) Üç kalbi var\n4) Sekiz kalbi var`;
q[6] = `Periyodik tablosunda gümüşün simgesi nedir?\n1) Ga\n2) Fe\n3) Ag\n4) Al`;
q[7] = `Gürcistan'nın başkenti yazınız`;
q[8] = `Türkiye'nin en yüksek dağı hangisi?\n1) Uludağ\n2) Erciyes Dağı\n3) Ağrı Dağı`;
q[9] = `ABD'de kaç eyalet var?`;
q[10] = `Muhammad, sallalahu aleyhi ve sellem, kaç yaşında peygamber oldu?`;
q[11] = `Açıyı iki eşit açıya bölen çizgiye ne denir?\n1) Ortanca\n2) Köşegen\n3) Açıortay\n4) Kiriş`;
q[12] = `"İmparatorlukların Mezarlığı" olarak bilinen ülkesi hangisi?\n1) İtalya\n2) Vizantiya\n3) Rusya\n4) Afganistan`;
const answerKeys = ["2", "3", "399", "1", "piyon", "3", "3", "tiflis", "3", "50", "40", "3", "4"];
let usersWrongAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/* Главная часть программы */
alert(`Bilgi yarışmasına hoş geldiniz!\n\nHer doğru cevap size 50 puan kazandırıyor.\n\nHedef: ${goal} puan`)

/* Вызов и обработка вопроса */
while((questionCounter < numberOfQuestions) && (answer !== "Q") && (answer !== "q")) {
  let info = `Soru ${questionCounter + 1} / ${numberOfQuestions}     Skor: ${score}     Çıkış: q`;
  answer = window.prompt(`${info}\n\n${q[questionCounter]}`);

  if(answer.toLowerCase() === answerKeys[questionCounter]) {
    score += 50;
  } else {
    usersWrongAnswers[questionCounter]++;
    wrongAnswerCounter++;
  }

  questionCounter++;
}

/* Результаты */
if((answer !== "Q") && (answer !== "q")) {
  if(score === 650) {
    alert(`Tebrikler, ${score} puan alarak kazandınız!\n\nTüm soruları doğru cevapladınız.`);
  } else if(score >= goal && score < 650) {
    alert(`Tebrikler, ${score} puan alarak kazandınız!\n\n${wrongAnswerCounter} soru yanlış cevapladınız.`);
  } else if(score >= 50) {
    alert(`Kazanmak için sadece ${goal - score} puan yetmedi...\n\n${wrongAnswerCounter} soru yanlış cevapladınız.`);
  } else {
    alert(`Oyunu kaybettiniz... Skorunuz: ${score}\n\n${wrongAnswerCounter} soru yanlış cevapladınız`);
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

