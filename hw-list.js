/* ЕДИНЫЙ СПИСОК ДОМАШЕК АРИНЫ — его читают оба сайта:
   · сайт Арины (экран «Домашка» по датам уроков),
   · учительский сайт (карточка «Домашка Арины»: что задано, что сдано, что ждём).

   КАК ДОБАВИТЬ НОВУЮ ДОМАШКУ: дописать ОДНУ запись в начало ARINA_HW_LIST:
     given  — день, когда домашка выдана (ГГГГ-ММ-ДД);
     tasks  — [id задания (тот же test_id, что уходит в базу), название, тип].
              тип: 'auto' — проверяется само, 'write' — письмо/эссе, 'speak' — устное с записью голоса,
              'open'  — тренировка, открыта всегда (в «осталось» не считается).
   Даты урока и срока считаются сами: уроки Арины — понедельник, среда, суббота.
   «Урок» = последний день занятий не позже given, «сдать к» = следующий день занятий. */
(function(){
'use strict';
/* 0 = вс, 1 = пн … 6 = сб */
var DAYS=[1,3,6];
function d0(x){var d=x instanceof Date?new Date(x.getTime()):(function(s){var p=String(s).split('-');return new Date(+p[0],+p[1]-1,+p[2])})(x);d.setHours(0,0,0,0);return d}
function iso(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function isLesson(x){return DAYS.indexOf(d0(x).getDay())>-1}
function lessonOnOrBefore(x){var d=d0(x);while(!isLesson(d))d.setDate(d.getDate()-1);return d}
function nextLessonAfter(x){var d=d0(x);do{d.setDate(d.getDate()+1)}while(!isLesson(d));return d}
/* урок, к которому сейчас готовимся: сегодня, если сегодня день занятий, иначе ближайший следующий */
function currentLesson(now){var d=d0(now||new Date());return isLesson(d)?d:nextLessonAfter(d)}
function ru(x,opt){return d0(x).toLocaleDateString('ru-RU',opt||{day:'numeric',month:'long'})}
function ruDay(x){return ru(x,{weekday:'long',day:'numeric',month:'long'})}
function ruShort(x){return ru(x,{day:'numeric',month:'long'})+' · '+ru(x,{weekday:'short'})}
window.ArinaCal={DAYS:DAYS,d0:d0,iso:iso,isLesson:isLesson,lessonOnOrBefore:lessonOnOrBefore,nextLessonAfter:nextLessonAfter,currentLesson:currentLesson,ru:ru,ruDay:ruDay,ruShort:ruShort};

window.ARINA_HW_LIST=[
 {given:'2026-11-12',tasks:[
  ['hw1112-letter-sammy','Письмо 37 · Sammy','write'],
  ['hw1112-letter-dan','Письмо 37 · Dan','write'],
  ['hw1112-letter-susan','Письмо 37 · Susan','write'],
  ['hw1112-g19','ЕГЭ 19–24 · ФИПИ · 4 текста','auto'],
  ['hw1112-wf','ЕГЭ 25–29 · словообразование · 4 текста','auto']]},
 {given:'2026-11-09',tasks:[
  ['w4l5-hw-fam-t2','Family · Task 2 · Questions about an advert','speak'],
  ['w4l5-hw-fam-iv1','Family · Task 3 · Interview 1 · Family life','speak'],
  ['w4l5-hw-fam-iv2','Family · Task 3 · Interview 2 · Friendship','speak'],
  ['w4l5-hw-science','ЕГЭ 19–24 · A school science club','auto'],
  ['w4l5-hw-wf','ЕГЭ 25–29 · словообразование · 3 текста','auto'],
  ['w4l5-hw-r11','Чтение · задание 11 · Veliky Novgorod','auto'],
  ['w4l5-hw-voc','Vocabulary 30–36 · 2 текста','auto']]},
 {given:'2026-11-08',tasks:[
  ['w5l1-hw-letter','Письмо 37 · чек-лист · Ann','write'],
  ['w5l1-hw-passive','Passive · 20','auto'],
  ['w5l1-hw-future','Future · 20','auto'],
  ['w5l1-hw-read','Чтение вслух · 10 текстов','open']]},
 {given:'2026-11-02',tasks:[
  ['hw1102-read','Чтение вслух · 5 текстов','speak'],
  ['hw1102-iv1','Interview 1 · Everyday reading','speak'],
  ['hw1102-iv2','Interview 2 · School and learning','speak'],
  ['hw1102-iv3','Interview 3 · Technology and free time','speak'],
  ['hw1102-grammar','Грамматика · 30 · Present / Past','auto']]}
];

/* готовый расчёт: каждая домашка с датой урока и сроком, новые сверху */
window.arinaHwBatches=function(){
 return (window.ARINA_HW_LIST||[]).map(function(b){var les=lessonOnOrBefore(b.given),due=nextLessonAfter(les);
  return {given:b.given,lesson:iso(les),due:iso(due),tasks:b.tasks.map(function(t){return {id:t[0],title:t[1],kind:t[2]||'auto'}})}})
  .sort(function(a,b){return a.given<b.given?1:-1});
};
})();
