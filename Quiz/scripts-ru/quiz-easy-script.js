'use strict';

/* Переменные */
const numberOfQuestions = 7;
const goal = 200;

let questionCounter = 0;
let score = 0;
let answer;
let wrongAnswerCounter = 0;
let q = [];
q[0] = `Сколько океанов на Земле?\n1) 3\n2) 4\n3) 5\n4) 6`;
q[1] = `Число возвели в квадрат и получилось 256, что это за число?\n1) 16\n2) 18\n3) 20\n4) 22`;
q[2] = `Является ли Грозный городом миллионником?\n1) Да, является\n2) Нет, не является`;
q[3] = `Какой клетки нет на шахматной доске?\n1) k6\n2) h8\n3) g5\n4) b7`;
q[4] = `Назовите столицу Турции?\n1) Измир\n2) Стамбул\n3) Трабзон\n4) Анкара`;
q[5] = `Как называется самая большая сура в Коране?\n1) Аль-Имран\n2) Аль-Ихляс\n3) Ат-Тауба\n4) Аль-Бакара`;
q[6] = `Кто изобрел лампу накаливания?\n1) Томас Эдисон\n2) Галилео Галилей\n3) Майкл Фарадей\n4) Альберт Эйнштейн`;
const answerKeys = ["2", "1", "2", "1", "4", "4", "1"];
let usersWrongAnswers = [0, 0, 0, 0, 0, 0, 0];

/* Главная часть программы */
alert(`Добро пожаловать на викторину!\n\nКаждый правильный ответ приносит вам 50 очков\n\nЗадача: Набрать ${goal} очков`)

/* Вызов и обработка вопроса */
while((questionCounter < numberOfQuestions) && (answer !== "Q") && (answer !== "q")) {
  let info = `Вопрос ${questionCounter + 1} / ${numberOfQuestions}     Счёт: ${score}     Выход: q `;
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
    alert(`Поздравляем, вы победили в викторине со счётом ${score}!\n\nВы ответили верно на все вопросы.`);
  } else if(score >= goal && score < 350) {
    alert(`Поздравляем, вы победили в викторине со счётом ${score}!\n\nВы ответили неверно на ${wrongAnswerCounter === 1 ? `${wrongAnswerCounter} вопрос` : (wrongAnswerCounter > 1 && wrongAnswerCounter < 5) ? `${wrongAnswerCounter} вопроса` : `${wrongAnswerCounter} вопросов`}.`);
  } else if(score >= 50) {
    alert(`Вам не хватило всего ${goal - score} очков до победы...\n\nВы ответили неверно на ${wrongAnswerCounter === 1 ? `${wrongAnswerCounter} вопрос` : (wrongAnswerCounter > 1 && wrongAnswerCounter < 5) ? `${wrongAnswerCounter} вопроса` : `${wrongAnswerCounter} вопросов`}.`);
  } else {
    alert(`Вы проиграли... Ваш счёт: ${score}\n\nВы ответили неверно на ${wrongAnswerCounter === 1 ? `${wrongAnswerCounter} вопрос` : (wrongAnswerCounter > 1 && wrongAnswerCounter < 5) ? `${wrongAnswerCounter} вопроса` : `${wrongAnswerCounter} вопросов`}.`);
  }

  /* Ошибочные вопросы */
  questionCounter = 0;

  while(wrongAnswerCounter > 0) {
    if(usersWrongAnswers[questionCounter] !== 0) {
      alert(`В этом вопросе была ошибка:\n${q[questionCounter]}\n\nПравильный ответ: ${answerKeys[questionCounter]}`);
      wrongAnswerCounter--;
    }
    questionCounter++;
  }
}
