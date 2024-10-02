'use strict';

/* Переменные */
const numberOfQuestions = 13;
const goal = 400;

let questionCounter = 0;
let score = 0;
let answer;
let wrongAnswerCounter = 0;
let q = [];
q[0] = `Сколько будет 30% от 90?\n1) 23\n2) 27\n3) 30\n4) 33`;
q[1] = `Что такое демография?\n1) Форма правления, при которой власть принадлежит народу\n2) Короткая демонстрация возможностей компьютерной графики в проекте\n3) Наука, которая изучает человеческое население`;
q[2] = `Задача: В деревне 7 мужей, у каждого по 7 жен и у каждой жены по 7 детей. Сколько человек проживают в деревне?`;
q[3] = `В какие цвета окрашены 5 олимпийских колец?\n1) Синий, Желтый, Черный, Зеленый, Красный\n2) Синий, Фиолетовый, Желтый, Зеленый, Красный\n3) Синий, Желтый, Оранжевый, Зеленый, Красный`;
q[4] = `Какая фигура в шахматах может бить другую "взятием на проходе"?`;
q[5] = `Сколько сердец у осьминога?\n1) Одно сердце\n2) Два сердца\n3) Три сердца\n4) Восемь сердец`;
q[6] = `Какой химический символ у кремния?\n1) Cu\n2) Zn\n3) Si\n4) Cr`;
q[7] = `Назовите столицу Дании`;
q[8] = `Как называется самая высокая гора в Чечне?\n1) Д1ай-лам\n2) Лазарчу\n3) Т1уьйли-лам`;
q[9] = `Сколько штатов в США?`;
q[10] = `Во сколько лет Пророк Мухаммад, да благословит его Аллах и приветствует, стал пророком?`;
q[11] = `Какая прямая делит угол пополам?\n1) Медиана\n2) Диагональ\n3) Биссектриса\n4) Луч`;
q[12] = `Какую страну называют "кладбищем империй"?\n1) Италия\n2) Византия\n3) Германия\n4) Афганистан`;
const answerKeys = ["2", "3", "399", "1", "пешка", "3", "3", "копенгаген", "3", "50", "40", "3", "4"];
let usersWrongAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/* Главная часть программы */
alert(`Добро пожаловать на викторину!\n\nКаждый правильный ответ приносит вам 50 очков\n\nЗадача: Набрать ${goal} очков`)

/* Вызов и обработка вопроса */
while((questionCounter < numberOfQuestions) && (answer !== "Q") && (answer !== "q")) {
  let info = `Вопрос ${questionCounter + 1} / ${numberOfQuestions}     Счёт: ${score}     Выход: q `;
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
    alert(`Поздравляем, вы победили в викторине со счётом ${score}!\n\nВы ответили верно на все вопросы.`);
  } else if(score >= goal && score < 650) {
    alert(`Поздравляем, вы победили в викторине со счётом ${score}!\n\nВы ответили неверно на ${wrongAnswerCounter === 1 ? `${wrongAnswerCounter} вопрос` : (wrongAnswerCounter > 1 && wrongAnswerCounter < 5) ? `${wrongAnswerCounter} вопроса` : `${wrongAnswerCounter} вопросов`}.`);
  } else if(score >= 50) {
    alert(`Вам не хватило ${goal - score} очков до победы...\n\nВы ответили неверно на ${wrongAnswerCounter === 1 ? `${wrongAnswerCounter} вопрос` : (wrongAnswerCounter > 1 && wrongAnswerCounter < 5) ? `${wrongAnswerCounter} вопроса` : `${wrongAnswerCounter} вопросов`}.`);
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

