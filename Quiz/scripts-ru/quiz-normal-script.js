'use strict';

/* Переменные */
const numberOfQuestions = 10;
const goal = 300;

let questionCounter = 0;
let score = 0;
let answer;
let wrongAnswerCounter = 0;
let q = [];
q[0] = `Сколько групп крови?\n1) 2 группы\n2) 3 группы\n3) 4 группы\n4) 5 групп`;
q[1] = `Какой из нижеперечисленных танков не является танком Вермахта?\n1) Пантера\n2) Слон\n3) Гепард\n4) Носорог`;
q[2] = `Что измеряют в амперах?\n1) Напряжение\n2) Сила тока\n3) Электрический заряд\n4) Электроемкость`;
q[3] = `Какой абрек родом из Харачоя?\n1) Сулумбек Сагопшинский\n2) Али Хильский\n3) Зелимхан Гушмазукаев`;
q[4] = `Назовите столицу Пакистана\n1) Исламабад\n2) Ашхабад\n3) Багдад\n4) Амман`;
q[5] = `Сколько минут в четверти часа?\n1) 10\n2) 12\n3) 15\n4) 20`;
q[6] = `За что отвечают эритроциты'?\n1) Свертывание крови\n2) Иммунитет\n3) Транспортировка кислорода в ткани и органы\n4) Распределение питательных веществ по организму`;
q[7] = `В какой стране находится Пизанская башня?\n1) Норвегия\n2) Греция\n3) Португалия\n4) Италия`;
q[8] = `Как называется переселение Пророка Мухаммада, да благословит его Аллах и приветствует, и его общины из Мекки в Медину?\n1) Сира\n2) Хиджра\n3) Сафар\n4) Фатх`;
q[9] = `Сколько планет в Солнечной системе?\n1) 6\n2) 7\n3) 8\n4) 9`;
const answerKeys = ["3", "3", "2", "3", "1", "3", "3", "4", "2", "3"];
let usersWrongAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
  if(score === 500) {
    alert(`Поздравляем, вы победили в викторине со счётом ${score}!\n\nВы ответили верно на все вопросы.`);
  } else if(score >= goal && score < 500) {
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
