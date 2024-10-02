'use strict';

/* Переменные */
const numberOfQuestions = 10;
const goal = 300;

let questionCounter = 0;
let score = 0;
let answer;
let wrongAnswerCounter = 0;
let q = [];
q[0] = `Toplamda kaç farklı kan grubu vardır?\n1) 2 kan grubu\n2) 3 kan grubu\n3) 4 kan grubu\n4) 5 kan grubu`;
q[1] = `Aşağıdakilerden hangisi Wehrmacht tanklarından biri değildir?\n1) Panther\n2) Çita\n3) Fil (Elefant)\n4) Gergedan`;
q[2] = `Amper ile ne ölçülür?\n1) Gerilim\n2) Akım\n3) Elektrik yükü\n4) Kapasite (Sığa)`;
q[3] = `Türkiye'nin en fazla yağış alan ili hangisidir?\n1) Zonguldak\n2) Ordu\n3) Rize\n4) Trabzon `;
q[4] = `Pakistan'nın başkenti nedir?\n1) İslamabad\n2) Aşkabat\n3) Bağdat\n4) Amman`;
q[5] = `Çeyrek saat kaç dakika?\n1) 10\n2) 12\n3) 15\n4) 20`;
q[6] = `Kırmızı kan hücreleri ne sağlar?\n1) Kanın pıhtılaşmasını sağlar\n2) Bağışıklık \n3) Doku ve organlara oksijen taşınması sağlar\n4) Vücutta besinlerin dağılımı sağlar`;
q[7] = `Pisa Kulesi hangi ülkede yer alır?\n1) Norveç\n2) Yunanistan\n3) Portekiz\n4) İtalya`;
q[8] = `Muhammed'in, sallalahu aleyhi ve sellem, ve Mekke'li müslümanların Mekke'den Medine'ye göcüne verilen isim nedir?\n1) Siyer\n2) Hicret\n3) Safar\n4) Fetih`;
q[9] = `Güneş Sisteminde kaç gezegen vardır?\n1) 6\n2) 7\n3) 8\n4) 9`;
const answerKeys = ["3", "2", "2", "3", "1", "3", "2", "4", "2", "3"];
let usersWrongAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


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
  if(score === 500) {
    alert(`Tebrikler, ${score} puan alarak kazandınız!\n\nTüm soruları doğru cevapladınız.`);
  } else if(score >= goal && score < 500) {
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
