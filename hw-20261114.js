/* 14.11.2026 · Homework после урока 14 ноября (эссе 38 разбирали на уроке по лёгкому шаблону Татьяны).
   1) Эссе 38 · Environment · диаграмма — задание из банка формата ФИПИ учительского сайта (тема Environment, 38.2), шаблон Татьяны под кнопкой, чек-лист.
   2) Passive · мои ошибки · 19 и 3) Past · мои ошибки · 20 — те же предложения, в которых Арина ошиблась (Error Log от 14.11.2026), новых текстов нет.
   Одна отправка на задание; результат уходит учителю (test_id hw1114-*). */
(function(){
'use strict';
const L='Homework · 14 Nov';
const K=w=>' <span class="r5Key">'+w+'</span>';

const PASSIVE=[
["English ___ in many countries."+K('SPEAK'),["is speaking","is spoken","speaks","was spoken"],1,"Факт вообще; на языке говорят (с ним делают) → is + V3."],
["The letters ___ yesterday."+K('SEND'),["was sent","sent","are sent","were sent"],3,"Letters — их много → were; yesterday → прошлое."],
["The room ___ every day."+K('CLEAN'),["is cleaned","cleans","is cleaning","was cleaned"],0,"Комнату убирают (сама она не убирает) → is + V3; every day → настоящее."],
["The tickets ___ online."+K('BUY'),["are buying","buy","are bought","is bought"],2,"Билеты покупают; tickets — их много → are + V3."],
["The books ___ to the library."+K('RETURN'),["was returned","were returned","returned","are returning"],1,"Books — их много → were + V3."],
["The window ___ by the wind."+K('BREAK'),["was broke","broke","was breaking","was broken"],3,"После was нужна третья форма: break – broke – broken."],
["The city ___ by tourists every summer."+K('VISIT'),["visits","is visited","is visiting","was visited"],1,"By tourists — город посещают → is + V3; every summer → настоящее."],
["The problem ___ at the meeting."+K('DISCUSS'),["is discussing","discussed","was discussed","has discussed"],2,"Проблему обсудили (с ней делали) → was + V3."],
["The machine ___ in Germany."+K('PRODUCE'),["is produced","produces","is producing","produced"],0,"Машину производят → is + V3."],
["Vincent van Gogh. Now his pictures ___ masterpieces and cost a lot of money."+K('CONSIDER'),["consider","are considering","were considered","are considered"],3,"Картины считают шедеврами (не они считают); now → are + V3."],
["Monowi. It ___ in 1903 by immigrants from Europe."+K('FOUND'),["was found","was founded","founded","is founded"],1,"Found (основывать) – founded – founded. Was found = был найден (от find)."],
["The results ___ tomorrow."+K('ANNOUNCE'),["will announce","are announced","will be announced","will be announcing"],2,"Результаты объявят (с ними сделают); tomorrow → will be + V3."],
["The homework ___ already."+K('DO'),["has done","has been done","is doing","was done"],1,"Already → Present Perfect; работу сделали → has been + V3."],
["The Palace of Westminster is the meeting place of the UK Parliament, where important laws and rules ___."+K('MAKE'),["made","make","are making","are made"],3,"Законы принимают (с ними делают); факт вообще → are + V3."],
["Есть ли ошибка?<br>The city was found around the 8th century BC and became famous because of its high-quality pottery.",["Верно","Ошибка"],1,"Город основали: was founded. Was found = был найден."],
["Есть ли ошибка?<br>They are also able to produce a lot of sounds, which is used by them to express a huge variety of feelings and emotions.",["Верно","Ошибка"],1,"Sounds — их много → which are used."],
["Есть ли ошибка?<br>These creatures are given human qualities as they can talk, think and act like humans.",["Верно","Ошибка"],0,"Существам дают качества → are given. Всё верно."],
["Есть ли ошибка?<br>People have been used henna for centuries.",["Верно","Ошибка"],1,"Люди сами используют хну → актив: have used / have been using."],
["Есть ли ошибка?<br>They are allowed to take whatever they could carry themselves.",["Верно","Ошибка"],1,"Дальше прошлое (could) → were allowed."]
];

const PAST=[
["I ___ to Oslo when I was twenty-one, and I’ve been working there for quite a while now."+K('MOVE'),["had moved","have moved","moved","was moving"],2,"When I was twenty-one — просто момент в прошлом → Past Simple. Had здесь лишний."],
["Last summer my uncle ___ to fly to Sochi for a conference."+K('PLAN'),["planned","had planned","has planned","was planning"],0,"Last summer → Past Simple. Had нужен, только если есть второе, более позднее действие."],
["Two years ago our family ___ to a smaller town."+K('MOVE'),["had moved","has moved","was moving","moved"],3,"Two years ago → Past Simple."],
["I ___ my first phone when I was ten."+K('GET'),["had got","got","have got","was getting"],1,"When I was ten → Past Simple."],
["Last night I ___ a great film."+K('WATCH'),["have watched","had watched","watched","was watched"],2,"Last night → Past Simple."],
["Boris Kustodiev was a famous Soviet painter. One day two young scientists ___ to see him."+K('COME'),["were coming","came","had come","come"],1,"One day + одно законченное действие → Past Simple."],
["Still, people ___ seriously interested in horoscopes only in the 17th century."+K('BECOME'),["was becoming","have become","become","became"],3,"In the 17th century → Past Simple: become – became."],
["At this time last Sunday we ___ in the sea."+K('SWIM'),["had swum","were swimming","swam","have swum"],1,"At this time last Sunday — были в процессе → were + -ing."],
["Other kids ___ lawns for their summer money, and my brother and I were making fishing gear."+K('MOW'),["were mowing","moved","had mown","mow"],0,"Два процесса шли рядом: were mowing … were making."],
["At that moment our neighbours ___ a snowman in the yard."+K('BUILD'),["are building","built","had built","were building"],3,"At that moment (в рассказе о прошлом) → were + -ing."],
["It ___ under a bench and looked frightened."+K('SIT'),["was sat","sits","was sitting","has sat"],2,"Процесс в прошлом → was + -ing (не was + V3)."],
["Somebody ___ it there a few hours earlier."+K('LEAVE'),["had leave","had left","has left","was leaving"],1,"A few hours earlier — раньше другого прошлого → had + V3: leave – left – left."],
["When I got to the station, I realised that I ___ my ticket."+K('FORGET'),["had forgot","forgot","had forgotten","have forgotten"],2,"Забыла раньше, чем поняла → had + V3: forget – forgot – forgotten."],
["I couldn’t pay for lunch because I ___ my wallet at home."+K('LEAVE'),["left","have left","was leaving","had left"],3,"Оставила раньше, чем не смогла заплатить → had left."],
["I ___ so happy for a long time."+K('NOT FEEL'),["had not felt","had not feelt","did not felt","was not feeling"],0,"Had + V3: feel – felt – felt."],
["It was the first time most of us ___ such an ancient city."+K('SEE'),["saw","have seen","had seen","were seeing"],2,"It was the first time → had + V3."],
["We ___ for forty minutes when the bus finally came."+K('WAIT'),["were waiting","had been waiting","waited","have been waiting"],1,"Ждали уже 40 минут к моменту в прошлом → had been + -ing."],
["The ground was white in the morning: it ___ all night."+K('SNOW'),["was snowing","snowed","has been snowing","had been snowing"],3,"Шёл всю ночь до утра (до момента в прошлом) → had been + -ing."],
["They ___ for three hours before they found the right road."+K('DRIVE'),["had been driving","had driven","were driving","drove"],0,"Ехали три часа до другого прошлого действия → had been + -ing."],
["When she finally came inside, she was exhausted: she ___ in the garden since breakfast."+K('WORK'),["have been working","has been working","had been working","was working"],2,"Рассказ в прошлом (came, was) → had been + -ing, не has / have."]
];

W3_TASKS['hw1114-passive']={label:L,part:'C',title:'Passive · мои ошибки · 19',sub:'19 вопросов · предложения из прошлых работ',type:'mc',
 intro:'Это предложения, в которых раньше были ошибки. Спроси себя: предмет делает сам или с ним делают? Потом смотри на время и число: is / are, was / were.',items:PASSIVE};
W3_TASKS['hw1114-past']={label:L,part:'C',title:'Past · мои ошибки · 20',sub:'20 вопросов · предложения из прошлых работ',type:'mc',
 intro:'Это предложения, в которых раньше были ошибки. Had нужен только тогда, когда одно прошлое действие было раньше другого. Yesterday, last summer, two years ago → Past Simple.',items:PAST};

/* ---- эссе 38 ---- */
const ROWS=[['Saving water and electricity',33,'#5b7fa6'],['Sorting rubbish',28,'#7fa98a'],['Using their own bags in shops',21,'#d9b872'],['Cycling instead of driving',11,'#c98f7e'],['Taking part in clean-ups',7,'#9a8fb8']];
let acc=0;const stops=ROWS.map(r=>{const a=acc;acc+=r[1];return r[2]+' '+a+'% '+acc+'%'}).join(',');
const TPL=[
'I am currently doing a project on ________ <i>(тема из задания)</i>. I have found a pie chart / table with the results of a survey conducted among ________ <i>(аудитория из задания)</i> and I am going to comment on this data and give my opinion on the subject of my project.',
'As can be seen from the table / pie chart, there are a lot of <i>(reasons for, kinds of ____)</i> that Zetlanders consider when … <i>(общее название опций – смотрим на вопрос)</i>. It is evident that the respondents choose the option «…..» as ….. <i>(в качестве чего, для чего)</i> (%). The responses «…..» and «…..» are also popular with those surveyed (% and % respectively), whereas the option «…..» appears to be the least common choice (%).',
'Based on the table / pie chart, <i>(the option)</i> ________ (%) is (10)% more popular than <i>(the option)</i> ________ (%). It is not surprising because ________.',
'Unfortunately, some problems can arise with ________ <i>(смотрим на 4 пункт плана)</i>. One of them is that ________. The best solution is to ________.',
'In conclusion, I believe that ________ because ________.'];
const PROMPT='<span class="e14"><span class="plEy">Эссе 38 · Environment · диаграмма</span>'+
 '<span class="e14P">Imagine that you are doing a project on <b>what people in Zetland do to help the environment</b>. You have found some data on the subject – the results of the opinion polls (see the pie chart below).<br>Comment on the data in the pie chart and give your opinion on the subject of the project.</span>'+
 '<span class="e14Chart"><span class="e14Pie" style="background:conic-gradient('+stops+')"></span><span class="e14Leg">'+ROWS.map(r=>'<span><i style="background:'+r[2]+'"></i>'+r[0]+' – <b>'+r[1]+'%</b></span>').join('')+'</span></span>'+
 '<span class="e14P">Write <b>200–250 words</b>. Use the following plan:<br>– make an opening statement on the subject of the project;<br>– select and report 2–3 facts;<br>– make 1–2 comparisons where relevant and give your comments;<br>– outline a problem that can arise with sorting rubbish at home and suggest a way of solving it;<br>– conclude by giving and explaining your opinion on the importance of eco-friendly habits.</span>'+
 '<details class="e14T"><summary>Шаблон</summary>'+TPL.map(p=>'<span class="e14Tp">'+p+'</span>').join('')+'</details></span>';
W3_TASKS['hw1114-essay']={label:L,part:'C',title:'Эссе 38 · Environment · диаграмма',sub:'1 эссе · 200–250 слов · проверяет учитель',type:'write',letter:true,essay:true,
 intro:'Напиши эссе полностью по шаблону с урока. Перед отправкой пройди чек-лист под текстом: отметь каждый пункт.',
 check:[['Вступление: тема проекта — словами из задания',1],['2–3 факта с цифрами из диаграммы',1],['1–2 сравнения и комментарий: It is not surprising because …',1],['Проблема и её решение (4-й пункт плана)',1],['Заключение: I believe that … because …',0],['5 абзацев',0],['200–250 слов',0],['Нейтральный стиль: без сокращений (do not, а не don’t)',0],['Связки: As can be seen, whereas, Unfortunately, In conclusion',0],['Орфография и пунктуация проверены',0]],
 items:[[PROMPT,'','I am currently doing a project on …',16]]};

const st=document.createElement('style');st.textContent=`
.e14{display:block;text-align:left;font-size:17px;line-height:1.5;color:#142337}
.e14P{display:block;margin:0 0 10px}
.e14Chart{display:flex;align-items:center;gap:22px;flex-wrap:wrap;margin:4px 0 12px;padding:10px 14px;border:1px solid #dbe3ee;border-radius:12px;background:#fff}
.e14Pie{width:150px;height:150px;border-radius:50%;flex:none;border:1px solid #cfd8e3}
.e14Leg{display:grid;gap:5px;font-size:17px}
.e14Leg span{display:flex;align-items:center;gap:8px}
.e14Leg i{width:14px;height:14px;border-radius:3px;flex:none}
.e14T{border-left:4px solid #0039A6;background:#f2f7ff;border-radius:0 10px 10px 0;padding:8px 14px;margin:0 0 4px}
.e14T summary{cursor:pointer;font:800 15px/1.4 Arial,sans-serif;color:#0039A6}
.e14Tp{display:block;margin:8px 0 0;font-size:16px;line-height:1.5}
.e14Tp i{color:#64748b;font-size:14px}
`;document.head.appendChild(st);

/* у эссе своя норма слов и своё слово в подсказке чек-листа */
const words=v=>(String(v).trim().match(/\b[\w]+(?:['’\-][\w]+)*\b/g)||[]).length;
const isEssay=()=>typeof PL!=='undefined'&&PL&&PL.t&&PL.t.essay;
function fix(){if(!isEssay())return;
 const f=document.getElementById('plField'),c=document.querySelector('.c5Count');
 if(f&&c){const n=words(f.value);c.textContent=n+' words · норма 200–250';c.classList.toggle('warn',n<180||n>275)}
 const r=document.querySelector('.c5Res');if(r)r.textContent=r.textContent.replace('письмо переписывается','эссе переписывается')}
document.addEventListener('input',e=>{if(e.target&&e.target.id==='plField')fix()});
document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('.c5 [data-c5]'))fix()});
const baseRender=plRender;
plRender=function(){baseRender();fix()};

const HW=['hw1114-essay','hw1114-passive','hw1114-past'];
HW.forEach(id=>{if(!ARINA_ASSIGNED_DEFAULT.includes(id))ARINA_ASSIGNED_DEFAULT.push(id)});
(window.ARINA_HW_BATCHES=window.ARINA_HW_BATCHES||[]).push(HW); /* новое — сверху */
try{if(!localStorage.getItem('arinaHwAdd-20261114')){const v=JSON.parse(localStorage.getItem('arinaAssigned')||'null');if(Array.isArray(v)){HW.forEach(id=>{if(!v.includes(id))v.push(id)});localStorage.setItem('arinaAssigned',JSON.stringify(v))}localStorage.setItem('arinaHwAdd-20261114','1')}}catch(e){}
})();
