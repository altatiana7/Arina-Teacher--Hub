/* Homework 22 Nov 2026 · краткий повтор ошибок 21 ноября. 12 вопросов, автопроверка и отправка. */
(function(){
'use strict';
const L='Homework · 22 Nov · Error Check';
const Q=[
["At 9 p.m. yesterday, my sister ___ for her English exam.",["studied","was studying","had studied","has studied"],1,"Конкретный момент в прошлом, действие в процессе → was studying."],
["She ___ her ankle while she was playing basketball.",["was hurting","had hurt","hurt","has hurt"],2,"Однократное событие на фоне длительного действия → Past Simple: hurt."],
["While we ___ around the old town, we saw a famous actor.",["was walking","had walked","have walked","were walking"],3,"We → were; процесс на фоне события saw → were walking."],
["The spacecraft ___ in orbit for exactly 12 hours and then returned to Earth.",["stayed","was staying","has stayed","had been staying"],0,"Законченный период и последовательность событий → stayed."],
["By the time the engineers finished the machine, they ___ on it continuously for six hours.",["were working","had been working","have worked","are working"],1,"Длительность до другого события в прошлом → had been working."],
["Today, this national celebration ___ Spring Festival in English-language guidebooks.",["called","was called","is called","is calling"],2,"Название сейчас → Present Simple Passive: is called."],
["The young scientist ___ one of the most talented researchers in her field.",["considers","is considering","considered","is considered"],3,"Её считают → Present Simple Passive: is considered."],
["The railway bridge opened in 2010. Its construction ___ five years.",["took","takes","was taking","has taken"],0,"Законченная история строительства → took."],
["I ___ whether artificial intelligence will change how we learn languages.",["worry","wonder","consider","expect"],1,"Wonder whether = интересно, произойдёт ли; worry = переживать."],
["Maria decided to ___ a scholarship at a British university.",["enter","attend","apply for","join"],2,"Устойчивое сочетание apply for a scholarship."],
["Our teacher had no ___ to changing the exam date.",["exception","objection","reaction","attention"],1,"Have no objection to + noun / -ing; не exception."],
["He was ___ about the interview because he had never applied for a job before.",["wondered","worried","considered","applied"],1,"Be worried about = беспокоиться о чём-либо."]
];
W3_TASKS['hw1122-error-check']={label:L,part:'C',big:true,title:'Error Check · 12 вопросов',sub:'15 минут · Past Tenses · Passive · Vocabulary 30–36',type:'mc',
intro:'Короткий тест по ошибкам прошлых работ. Выбери один вариант в каждом предложении. Выполняй самостоятельно, без подсказок.',
items:Q};
const id='hw1122-error-check';
if(!ARINA_ASSIGNED_DEFAULT.includes(id))ARINA_ASSIGNED_DEFAULT.unshift(id);
(window.ARINA_HW_BATCHES=window.ARINA_HW_BATCHES||[]).unshift([id]);
try{const key='arinaHwAdd-20261122';if(!localStorage.getItem(key)){const v=JSON.parse(localStorage.getItem('arinaAssigned')||'null');if(Array.isArray(v)&&!v.includes(id)){v.unshift(id);localStorage.setItem('arinaAssigned',JSON.stringify(v))}localStorage.setItem(key,'1')}}catch(e){}
})();
