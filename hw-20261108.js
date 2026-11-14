/* 08.11.2026 · Homework после урока 1 недели 5 (комплект Татьяны):
   чтение вслух · 10 текстов (всегда открыто), письмо 37 · Ann (Family) + чек-лист, Passive · 20, Future · 20.
   Одна отправка на задание; результат уходит учителю (test_id w5l1-hw-*). */
(function(){
'use strict';
const L5='Week 5 · Lesson 1';
const PASSIVE=[["The bridge ___ in 1932. <span class=\"r5Key\">BUILD</span>", ["was built", "is built", "built", "has been built"], 0, "Год в прошлом → Past Simple Passive: was + V3."], ["English ___ in many countries. <span class=\"r5Key\">SPEAK</span>", ["speaks", "is spoken", "was spoken", "is speaking"], 1, "Факт вообще → Present Simple Passive: is + V3."], ["The letters ___ yesterday. <span class=\"r5Key\">SEND</span>", ["was sent", "sent", "were sent", "are sent"], 2, "Letters — множественное → were; yesterday → прошлое."], ["This museum ___ in 1852. <span class=\"r5Key\">OPEN</span>", ["is opened", "was opened", "was opening", "has been opened"], 1, "Год в прошлом → was + V3."], ["The room ___ every day. <span class=\"r5Key\">CLEAN</span>", ["cleans", "is cleaning", "is cleaned", "was cleaned"], 2, "Every day → Present Simple Passive."], ["The cake ___ by my mum. <span class=\"r5Key\">MAKE</span>", ["was made", "made", "was making", "has made"], 0, "By my mum — кто сделал; торт сделан → was + V3."], ["The tickets ___ online. <span class=\"r5Key\">BUY</span>", ["buy", "are buying", "is bought", "are bought"], 3, "Tickets — множественное → are + V3."], ["The car ___ last week. <span class=\"r5Key\">REPAIR</span>", ["is repaired", "was repaired", "repaired", "has been repaired"], 1, "Last week → Past Simple; с конкретным прошлым Present Perfect нельзя."], ["The books ___ to the library. <span class=\"r5Key\">RETURN</span>", ["were returned", "was returned", "returned", "are returning"], 0, "Books — множественное → were + V3."], ["The window ___ by the wind. <span class=\"r5Key\">BREAK</span>", ["was broke", "broke", "was broken", "is breaking"], 2, "V3 от break — broken."], ["The new school ___ next year. <span class=\"r5Key\">BUILD</span>", ["will build", "will be built", "is built", "was built"], 1, "Next year → will be + V3."], ["The results ___ tomorrow. <span class=\"r5Key\">ANNOUNCE</span>", ["will announce", "were announced", "are announcing", "will be announced"], 3, "Результаты объявят (не они сами) → will be + V3."], ["The homework ___ already. <span class=\"r5Key\">DO</span>", ["has been done", "has done", "is doing", "did"], 0, "Already → Present Perfect Passive: has been + V3."], ["The city ___ by tourists every summer. <span class=\"r5Key\">VISIT</span>", ["visits", "is visited", "was visited", "is visiting"], 1, "Every summer → Present Simple Passive."], ["The problem ___ at the meeting. <span class=\"r5Key\">DISCUSS</span>", ["discussed", "is discussing", "was discussed", "were discussed"], 2, "Problem — единственное → was + V3."], ["The food ___ in the fridge. <span class=\"r5Key\">KEEP</span>", ["keeps", "is kept", "is keeping", "are kept"], 1, "Food — неисчисляемое, единственное → is kept."], ["The song ___ by millions of people. <span class=\"r5Key\">HEAR</span>", ["hears", "is hearing", "are heard", "is heard"], 3, "Song — единственное → is heard."], ["The letter ___ by post. <span class=\"r5Key\">SEND</span>", ["was sent", "sent", "was send", "were sent"], 0, "Letter — единственное; V3 от send — sent."], ["The machine ___ in Germany. <span class=\"r5Key\">PRODUCE</span>", ["produces", "are produced", "is produced", "is producing"], 2, "Машину производят → is + V3."], ["The house ___ in the last century. <span class=\"r5Key\">DESTROY</span>", ["is destroyed", "was destroyed", "destroyed", "has been destroyed"], 1, "Прошлый век → Past Simple Passive."]], FUTURE=[["I think it ___ tomorrow. <span class=\"r5Key\">RAIN</span>", ["will rain", "is raining", "rains", "rained"], 0, "I think → мнение о будущем → will."], ["Look at the clouds! It ___. <span class=\"r5Key\">RAIN</span>", ["will rain", "is going to rain", "rains", "rained"], 1, "Есть признак сейчас (тучи) → be going to."], ["I ___ you tomorrow. <span class=\"r5Key\">CALL</span>", ["call", "called", "will call", "have called"], 2, "Обещание, решение → will."], ["We ___ to the cinema tonight. <span class=\"r5Key\">GO</span>", ["go", "are going", "went", "have gone"], 1, "Договорённость на вечер → Present Continuous."], ["She ___ 18 next month. <span class=\"r5Key\">BE</span>", ["will be", "is", "was", "has been"], 0, "Факт будущего, от нас не зависит → will."], ["They ___ a party on Saturday. <span class=\"r5Key\">HAVE</span>", ["had", "has", "are having", "have had"], 2, "Запланировано на субботу → Present Continuous."], ["I promise I ___ late again. <span class=\"r5Key\">NOT BE</span>", ["am not", "won’t be", "wasn’t", "am not being"], 1, "I promise → will / won’t."], ["The train ___ at 9. <span class=\"r5Key\">LEAVE</span>", ["leaves", "left", "has left", "leave"], 0, "Расписание → Present Simple."], ["When I ___ home, I’ll call you. <span class=\"r5Key\">GET</span>", ["will get", "get", "got", "am getting"], 1, "После when в будущем — Present Simple, без will."], ["If it ___, we’ll stay in. <span class=\"r5Key\">RAIN</span>", ["will rain", "rained", "rains", "is rain"], 2, "После if в будущем — Present Simple, без will."], ["By this time tomorrow I ___. <span class=\"r5Key\">LEAVE</span>", ["will leave", "will have left", "left", "am leaving"], 1, "By … → действие закончится к моменту → will have + V3."], ["This time next week I ___ on the beach. <span class=\"r5Key\">LIE</span>", ["will be lying", "will lie", "am lying", "lie"], 0, "This time next week → процесс в момент будущего → will be + -ing."], ["Don’t worry, I ___ you. <span class=\"r5Key\">HELP</span>", ["help", "will help", "helped", "am helping"], 1, "Предложение помощи, решение сейчас → will."], ["I’ve decided: I ___ medicine. <span class=\"r5Key\">STUDY</span>", ["will study", "study", "am going to study", "studied"], 2, "Решение принято заранее → be going to."], ["The phone is ringing. — I ___ it. <span class=\"r5Key\">ANSWER</span>", ["am going to answer", "will answer", "answer", "answered"], 1, "Решение в момент речи → will."], ["Look out! You ___. <span class=\"r5Key\">FALL</span>", ["will fall", "fall", "fell", "are going to fall"], 3, "Видно, что сейчас случится → be going to."], ["We ___ dinner at 7. <span class=\"r5Key\">HAVE</span>", ["are having", "had", "has", "have had"], 0, "Договорённость на сегодня → Present Continuous."], ["The bus ___ at 8:15. <span class=\"r5Key\">ARRIVE</span>", ["arrived", "arrives", "has arrived", "arrive"], 1, "Расписание → Present Simple."], ["I ___ you tomorrow. <span class=\"r5Key\">SEE</span>", ["see", "saw", "have seen", "will see"], 3, "Будущее, без плана по расписанию → will."], ["By 2030 I ___ a doctor. <span class=\"r5Key\">BE</span>", ["am", "will be", "was", "have been"], 1, "Будущее → will be."]], TEXTS=[["Family", "My family is very important to me. / We usually spend weekends together, / either at home or visiting relatives. // My parents work hard, / but they always find time for us. // I have a younger brother, / and we often play games or watch films together. // Family traditions help us stay close. / Every Sunday we have dinner together / and talk about our week. // I think family support is very important, / especially during difficult times. //"], ["School", "School is a big part of every teenager’s life. / We spend many hours there every day, / learning new things and meeting friends. // My favourite subjects are English and history. / I enjoy learning about other countries and cultures. // After school I usually do my homework / and then relax with my family. // Sometimes we go for a walk / or watch a film together. // I think school helps us prepare for the future. //"], ["Travelling", "Travelling is one of my favourite activities. / I enjoy visiting new places / and learning about different cultures. // Last summer I went to the sea with my family. / We spent two weeks there / and visited many interesting places. // I took a lot of photos / and bought souvenirs for my friends. // Travelling helps us relax / and see the world from a different angle. // I hope to travel more in the future. //"], ["Technology", "Technology plays a big role in our lives. / We use smartphones, computers and the Internet every day. // They help us study, work and communicate. / But sometimes we spend too much time online. // It is important to find a balance. / I try to put my phone away / when I do my homework. // Technology is useful, / but we should not forget about real life. //"], ["Friends", "Friends are very important for teenagers. / They support us / and help us feel less lonely. // I have a few close friends / whom I trust completely. // We spend time together after school, / go for walks or watch films. // I think a good friend is someone / who listens and understands. // Friendship is one of the most valuable things in life. //"], ["Hobbies", "Everyone needs a hobby. / It helps us relax / and do something we enjoy. // My hobby is reading. / I like detective stories and historical novels. // Reading helps me learn new words / and understand the world better. // Some people prefer sports or music. / It does not matter what you choose, / as long as you enjoy it. //"], ["Health", "Health is very important. / We should take care of our bodies / and eat healthy food. // Regular exercise helps us stay fit / and feel better. // I try to walk every day / and drink enough water. // Sleep is also important. / Teenagers need about eight hours of sleep / to feel good. // A healthy lifestyle helps us study better. //"], ["Environment", "The environment is a big topic today. / Pollution, plastic waste and climate change / are serious problems. // We can all do something to help. / For example, we can recycle / and use less plastic. // Small actions matter. / If everyone tries, / we can make a difference. // I think it is our responsibility / to protect the planet. //"], ["Future plans", "After school I want to continue my education. / I am not sure yet / what profession to choose. // But I know that I want to do something / I really enjoy. // I am thinking about medicine or IT. / Both are interesting fields. // I hope to find my path / and build a successful career. //"], ["Russia", "Russia is a big and beautiful country. / It has many cities, / rivers and mountains. // I live in Russia / and I am proud of its history and culture. // There are many interesting places to visit, / like Moscow, St Petersburg and Sochi. // I think everyone should travel around their own country / and learn more about it. //"]];
W3_TASKS['w5l1-hw-passive']={label:L5,part:'C',title:'Passive · 20',sub:'20 вопросов · выбери форму',type:'mc',
 intro:'Выбери форму Passive. Смотри на время (yesterday, every day, next year, already) и на число: is / are, was / were.',items:PASSIVE};
W3_TASKS['w5l1-hw-future']={label:L5,part:'C',title:'Future · 20',sub:'20 вопросов · will / going to / Present',type:'mc',
 intro:'Выбери форму будущего. Решение сейчас → will; признак или план заранее → going to; договорённость → Present Continuous; расписание и после when / if → Present Simple.',items:FUTURE};
const CHECK=[['Dear Ann,',1],['Thanks for your email! / It was great to hear from you.',1],['Ответы на все 3 вопроса Ann',1],['3 вопроса о cooking course',1],['I hope to hear from you soon.',0],['Best wishes, + имя',0],['100–140 слов',0],['Неформальный стиль: сокращения можно, сленг нельзя',0],['Без повторов слов, 2–3 связки',0],['Орфография и пунктуация проверены',0]];
W3_TASKS['w5l1-hw-letter']={label:L5,part:'C',title:'Письмо 37 · чек-лист · Ann',sub:'1 письмо · 100–140 слов · проверяет учитель',type:'write',letter:true,
 intro:'Напиши письмо полностью. Перед отправкой пройди чек-лист под письмом: отметь каждый пункт.',
 items:[['<span class="plEy">Family · письмо 37</span><span class="plFrom">You have received an email message from your English-speaking pen-friend Ann:</span><span class="plLet">… We have a special tradition in our family. The last weekend of every month we cook and have a meal together: my parents, my sister Jenny and me. How do you spend time with your family? When do you give each other presents? What do you do to help your parents about the house?<br>By the way, Jenny has just started a cooking course …</span><span class="plFrom">Write an email to Ann. In your message answer her questions and ask 3 questions about the cooking course. Write 100–140 words.</span>',
  '','Dear Ann,',14]]};
W3_TASKS['w5l1-hw-read']={label:L5,part:'C',title:'Чтение вслух · 10 текстов',sub:'устная часть · задание 1 · 1,5 + 1,5 минуты',type:'speak',ra:true,
 intro:'Каждый текст: 1,5 минуты читаешь про себя, потом читаешь вслух не дольше 1,5 минуты. Прочитай каждый текст 3 раза. Черта — короткая пауза, двойная черта — длинная.',
 items:TEXTS.map(t=>[t[0],''])};

const st=document.createElement('style');st.textContent=`
.r5Page{width:100%;max-width:1100px;margin:0 auto}
.r5Wrap{display:grid;grid-template-columns:minmax(0,1fr) 190px;gap:16px;align-items:start;margin-top:8px}
.r5Pick{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 10px}
.r5Pick button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:9px;padding:6px 11px;font:700 14px/1.2 Arial,sans-serif;cursor:pointer}
.r5Pick button.on{background:#0039A6;color:#fff;border-color:#0039A6}
.r5Text{font-family:"PT Serif",Georgia,serif;font-size:20px;line-height:1.75;color:#142337;background:#fff;border:1px solid #dbe3ee;border-left:5px solid #0039A6;border-radius:12px;padding:14px 18px;margin:0}
.r5Text .p1,.r5Text .p2{color:#b08a3e;font-weight:700;margin:0 4px}.r5Text .p2{color:#b8636c}
.r5Text.clean .p1,.r5Text.clean .p2{display:none}
.r5Side{display:flex;flex-direction:column;align-items:center;gap:9px}
.r5Ring{width:140px;height:140px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#0039A6 calc(var(--p)*1%),#e5ebf3 0)}
.r5Ring>div{width:110px;height:110px;border-radius:50%;background:#fff;display:grid;place-items:center}
.r5Ring b{font-size:34px;color:#0039A6}.r5Ring.end{background:#D52B1E}
.r5Ph{font:800 14px/1.3 Arial,sans-serif;color:#0039A6;text-align:center;min-height:36px}
.r5Btns{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
.r5Btns button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:9px;padding:7px 12px;font:800 14px/1.2 Arial,sans-serif;cursor:pointer}
.r5Btns button.prim{background:#0039A6;color:#fff}
.r5Reads{display:flex;gap:6px}.r5Reads span{width:30px;height:30px;border-radius:50%;border:2px solid #b7c9e8;display:grid;place-items:center;font:800 14px Arial;color:#94a3b8}
.r5Reads span.on{background:#5b8f65;border-color:#5b8f65;color:#fff}
.r5Key{font:800 14px/1 Arial,sans-serif;letter-spacing:.6px;color:#64748b;margin-left:10px;vertical-align:middle}
.r5Done{margin-top:12px;padding:10px 14px;border-radius:10px;background:#e3f4e7;color:#2f7d45;font:700 16px/1.4 Arial,sans-serif;text-align:center}
.c5{margin-top:12px}.c5 h3{margin:0 0 8px;font-size:17px;color:#0039A6}
.c5List{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.c5List button{display:flex;align-items:center;gap:10px;text-align:left;border:2px solid #dbe3ee;background:#fff;border-radius:10px;padding:8px 11px;font:600 15px/1.3 Arial,sans-serif;color:#142337;cursor:pointer}
.c5List button i{flex:0 0 22px;height:22px;border-radius:6px;border:2px solid #94a3b8;display:grid;place-items:center;font:900 14px Arial;font-style:normal;color:#fff}
.c5List button.key{border-color:#e6cf9f;background:#fbf4e6}
.c5List button.on{border-color:#3f9a57;background:#e3f4e7}.c5List button.on i{background:#3f9a57;border-color:#3f9a57}
.c5List button.on i:after{content:"✓"}
.c5Res{margin-top:8px;padding:8px 12px;border-radius:10px;background:#f2f6fc;font:700 15px/1.4 Arial,sans-serif;color:#0039A6;text-align:center}
.c5Res.bad{background:#f8e6e6;color:#b04848}.c5Res.ok{background:#e3f4e7;color:#2f7d45}
.c5Count{font:700 15px Arial,sans-serif;color:#0039A6;margin:6px 2px 0}.c5Count.warn{color:#b04848}
@media(max-width:760px){.r5Wrap{grid-template-columns:1fr}.c5List{grid-template-columns:1fr}}`;
document.head.appendChild(st);

/* ---- чтение вслух ---- */
const mark=x=>x.replace(/\s*\/\/\s*/g,' \u0002 ').replace(/\s*\/\s*/g,' \u0001 ').replace(/\u0002/g,'<span class="p2">||</span>').replace(/\u0001/g,'<span class="p1">|</span>');
const PH=[['Подготовка · про себя',90],['Чтение вслух',90]];
let ph=0,left=90,tm=null,cur=0;
const RK0='arinaRA-20261108';let TX=TEXTS; /* тексты того задания, которое сейчас открыто */
const rk=()=>(PL&&PL.t&&PL.t.texts)?RK0+':'+PL.id:RK0; /* у каждого задания на чтение свой счётчик прочтений */
const readsGet=()=>{try{return JSON.parse(localStorage.getItem(rk())||'{}')}catch(e){return {}}};
const readsSet=(i,n)=>{const r=readsGet();r[i]=n;try{localStorage.setItem(rk(),JSON.stringify(r))}catch(e){}};
const box=()=>document.querySelector('.r5Wrap');
function draw(){const b=box();if(!b)return;const r=b.querySelector('.r5Ring'),p=PH[Math.min(ph,1)],R=readsGet(),n=R[cur]||0;
 r.style.setProperty('--p',Math.max(0,left)/p[1]*100);r.classList.toggle('end',ph>=PH.length);
 r.querySelector('b').textContent=Math.floor(Math.max(0,left)/60)+':'+String(Math.max(0,left)%60).padStart(2,'0');
 b.querySelector('.r5Ph').textContent=ph>=PH.length?'Время вышло':p[0];
 b.querySelectorAll('.r5Reads span').forEach((s,k)=>s.classList.toggle('on',k<n));
 b.querySelectorAll('.r5Pick button').forEach((x,k)=>{x.classList.toggle('on',k===cur);x.textContent=(k+1)+' · '+TX[k][0]+((R[k]||0)>=3?' ✓':'')})}
function stop(){if(tm){clearInterval(tm);tm=null}}
function go(p){stop();ph=p;left=PH[p][1];draw();tm=setInterval(()=>{if(!box()){stop();return}left--;
 if(left<=0){if(ph===1)readsSet(cur,Math.min(3,(readsGet()[cur]||0)+1));ph++;if(ph<PH.length)left=PH[ph][1];else stop()}draw()},1000)}
function show(i){stop();cur=i;ph=0;left=90;const b=box();if(!b)return;
 b.querySelector('.r5Text').innerHTML='<b>'+TX[i][0]+'.</b> '+mark(TX[i][1]);b.querySelector('[data-r5="start"]').textContent='Старт';draw()}
function readHTML(done){stop();cur=0;ph=0;left=90;
 return '<div class="r5Wrap"><div><div class="r5Pick">'+TX.map((t,k)=>'<button type="button" data-r5t="'+k+'">'+(k+1)+' · '+t[0]+'</button>').join('')+'</div>'+
 '<p class="r5Text"><b>'+TX[0][0]+'.</b> '+mark(TX[0][1])+'</p></div>'+
 '<div class="r5Side"><div class="r5Ring" style="--p:100"><div><b>1:30</b></div></div><div class="r5Ph">'+PH[0][0]+'</div>'+
 '<div class="r5Btns"><button type="button" class="prim" data-r5="start">Старт</button><button type="button" data-r5="skip">Читать</button><button type="button" data-r5="stop">Стоп</button></div>'+
 '<div class="r5Reads"><span>1</span><span>2</span><span>3</span></div>'+
 '<div class="r5Btns"><button type="button" data-r5="marks">Паузы</button><button type="button" data-r5="read">+1 прочтение</button></div></div></div>'+
 (done?'<div class="r5Done">✓ Отмечено у учителя · '+done+'</div>':'<div class="plNav"><span></span><button type="button" class="plBtn plMain" onclick="plSubmit()">Я прочитала все тексты · отметить у учителя</button></div><div class="plMsg" id="plMsg"></div>')}

/* ---- чек-лист и счётчик слов под письмом ---- */
const CK='arinaCheck-20261108';
const cl=()=>(PL&&PL.t&&PL.t.check)||CHECK, ckKey=()=>(PL&&PL.t&&PL.t.check)?CK+':'+PL.id:CK; /* у каждого письма свой чек-лист */
const ckGet=()=>{try{return JSON.parse(localStorage.getItem(ckKey())||'[]')}catch(e){return []}};
function checkHTML(){const on=ckGet();
 return '<div class="c5"><h3>Чек-лист перед отправкой</h3><div class="c5List">'+cl().map((c,k)=>'<button type="button" data-c5="'+k+'" class="'+(c[1]?'key':'')+(on[k]?' on':'')+'"><i></i><span>'+c[0]+'</span></button>').join('')+'</div><div class="c5Res"></div></div>'}
function checkRes(){const w=document.querySelector('.c5');if(!w)return;const C=ckGet(),on=cl().map((_,k)=>!!C[k]),key=on.slice(0,4).every(Boolean),all=on.every(Boolean);
 const r=w.querySelector('.c5Res');r.className='c5Res'+(all?' ok':key?'':' bad');
 r.textContent=all?'Все '+on.length+' пунктов отмечены — можно отправлять.':key?'Обязательные пункты есть. Осталось: '+on.filter(x=>!x).length+'.':'Жёлтые пункты обязательны: без них письмо переписывается.'}
function words(v){return (String(v).trim().match(/\b[\w]+(?:['’\-][\w]+)*\b/g)||[]).length}
function countDraw(){const f=document.getElementById('plField'),c=document.querySelector('.c5Count');if(!f||!c)return;const n=words(f.value);c.textContent=n+' words · норма 100–140';c.classList.toggle('warn',n<100||n>140)}

document.addEventListener('click',e=>{
 const t=e.target.closest('.r5Wrap [data-r5t]');if(t){show(+t.dataset.r5t);return}
 const a=e.target.closest('.r5Wrap [data-r5]');if(a){const k=a.dataset.r5;
  if(k==='start'){go(0);a.textContent='Заново'}else if(k==='skip'){go(1)}else if(k==='stop'){stop()}
  else if(k==='marks'){box().querySelector('.r5Text').classList.toggle('clean')}
  else if(k==='read'){const n=readsGet()[cur]||0;readsSet(cur,n>=3?0:n+1);draw()}return}
 const c=e.target.closest('.c5 [data-c5]');if(c){const on=ckGet();on[+c.dataset.c5]=!on[+c.dataset.c5];try{localStorage.setItem(ckKey(),JSON.stringify(on))}catch(x){}c.classList.toggle('on');checkRes()}
});
document.addEventListener('input',e=>{if(e.target&&e.target.id==='plField'&&PL&&PL.t&&PL.t.letter)countDraw()});

const baseRender=plRender;
plRender=function(){
 const root=document.getElementById('plRoot');
 if(root&&PL&&PL.t&&PL.t.ra){const d=w3Get(PL.id).done;root.classList.remove('plWide');
  TX=PL.t.texts||TEXTS;
  root.innerHTML='<div class="r5Page">'+plHead(TX.length+' текстов')+'<p class="plIntro">'+PL.t.intro+'</p>'+readHTML(d?d.date:'')+'</div>';draw();return}
 baseRender();
 if(root&&PL&&PL.t&&PL.t.letter&&PL.mode==='solve'&&root.querySelector('#plField')){
  root.querySelector('#plField').insertAdjacentHTML('afterend','<div class="c5Count"></div>'+checkHTML());countDraw();checkRes()}
};

/* назначить домашку (как в прошлых неделях: и по умолчанию, и в уже сохранённом списке) */
const HW=['w5l1-hw-read','w5l1-hw-letter','w5l1-hw-passive','w5l1-hw-future'];
HW.forEach(id=>{if(!ARINA_ASSIGNED_DEFAULT.includes(id))ARINA_ASSIGNED_DEFAULT.push(id)});
(window.ARINA_HW_BATCHES=window.ARINA_HW_BATCHES||[]).push(HW); /* новое — сверху */
try{if(!localStorage.getItem('arinaHwAdd-20261108')){const v=JSON.parse(localStorage.getItem('arinaAssigned')||'null');if(Array.isArray(v)){HW.forEach(id=>{if(!v.includes(id))v.push(id)});localStorage.setItem('arinaAssigned',JSON.stringify(v))}localStorage.setItem('arinaHwAdd-20261108','1')}}catch(e){}
})();
