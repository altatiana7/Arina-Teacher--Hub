/* 09.11.2026 · Homework после урока 5 недели 4 (Passive + Word formation · Review), задано Татьяной:
   Family · Task 2 (реклама, 4 вопроса) и Task 3 (2 интервью) — перенесены из темы Family в домашку;
   ЕГЭ 19–24 · A school science club; ЕГЭ 25–29 · 3 текста (EXAM недели 4 · Word Formation 2, 3, 4);
   Чтение · задание 11 · Veliky Novgorod; Vocabulary 30–36 · 2 текста (EXAM недели 4 · Vocabulary 1, 2).
   Тексты в этих заданиях крупнее (класс plBig). Одна отправка на задание; результат уходит учителю (test_id w4l5-hw-*). */
(function(){
'use strict';
const L='Week 4 · Lesson 5';
const SCI=[{"title": "A school science club · 19–21", "start": 19, "lines": [["Our school science club ___ every Thursday after lessons.", "MEET", ["meets"], ""], ["At the moment the members ___ on a project about clean water.", "WORK", ["are working"], ""], ["So far they ___ more than fifty water samples from local rivers.", "COLLECT", ["have collected"], ""]]}, {"title": "A school science club · 22–24", "start": 22, "lines": [["Anna, the club leader, ___ the data since early morning, so she looks tired.", "ANALYSE", ["has been analysing", "has been analyzing"], ""], ["She ___ that the results will surprise everyone.", "BELIEVE", ["believes"], ""], ["This is the ___ project the club has ever done.", "INTERESTING", ["most interesting"], ""]]}];
const WF=[{"title": "The printing press · 25–27", "start": 25, "lines": [["Before the 15th century, the ___ of a book by hand took months.", "PRODUCE", ["production"], ""], ["Gutenberg's machine made books ___ to ordinary people.", "ACCESS", ["accessible"], ""], ["It was a ___ moment in history.", "REVOLUTION", ["revolutionary"], ""]]}, {"title": "The printing press · 28–29", "start": 28, "lines": [["The ___ of reading grew quickly.", "POPULAR", ["popularity"], ""], ["As a result, ___ spread across Europe.", "LITERATE", ["literacy"], ""]]}, {"title": "Using a digital library · 25–27", "start": 25, "lines": [["Digital libraries can be accessed from any computer or device with an internet connection. It means that there is no need for ___ to physically visit the library or store materials to access them.", "USE", ["users"], ""], ["That is why digital libraries are used by public libraries, university libraries and private companies. The software you will need to access a digital library is ___ free to use.", "USUAL", ["usually"], ""], ["However, some libraries require specific plugins or software installed, otherwise it will be ___ to view the content.", "POSSIBLE", ["impossible"], ""]]}, {"title": "Using a digital library · 28–29", "start": 28, "lines": [["The advantages of using a digital library include access to an expensive ___ of materials and increased convenience.", "COLLECT", ["collection"], ""], ["Digital libraries also offer a more engaging experience with ___ elements, as well as social media-like features for connecting with others and exploring topics in new ways.", "INTERACT", ["interactive"], ""]]}, {"title": "The city of the future · 25–27", "start": 25, "lines": [["Many ___ believe that cities will look very different in fifty years.", "RESEARCH", ["researchers"], ""], ["Cars will be driven ___ by computers.", "COMPLETE", ["completely"], ""], ["Air ___ will no longer be a serious problem.", "POLLUTE", ["pollution"], ""]]}, {"title": "The city of the future · 28–29", "start": 28, "lines": [["Life in such a city will be safe and ___.", "COMFORT", ["comfortable"], ""], ["However, some people find these ideas ___.", "REAL", ["unrealistic"], ""]]}];
const VOC=[{"t": "A new house", "p": ["When Martha got to the Mansfield Mansion by taxi the next morning, she stood at the gate for a long moment. She was trying to absorb the fact that this was now her home. She couldn’t relate to it, or even understand it, as the realtor opened the gate and she walked into the courtyard, {{30}} up at the elegant windows and the dignified architecture. She had to {{31}} it was one of the most beautiful houses she’d ever seen. Walking through it took her breath away. There was room after room of century-old grandeur, remarkable workmanship, exquisite moldings and carvings. She enjoyed the graceful splendor of the ballroom – {{32}} she had no idea what they’d do with it. She couldn’t imagine living in a house that size.", "And in defiance of all reason, the house had begun to feel like theirs by the time she had gone floor to floor, opened every closet and explored every nook and cranny, and figured out which rooms to put the children in. And she earmarked a room on the floor above, with an amazing {{33}} of the lake, as her office. She began {{34}} lists of what they needed – electronics, Wi-Fi, Internet connections for all of them. She noticed that most of the antique curtains were still in surprisingly good {{35}} and decided to continue using them. She had come to the conclusion that the house didn’t need any work, {{36}} paint and a lot of furniture."], "o": [["seeing", "watching", "observing", "looking"], ["admit", "accept", "approve", "assume"], ["moreover", "although", "otherwise", "therefore"], ["glance", "view", "look", "stare"], ["taking", "holding", "making", "putting"], ["condition", "position", "location", "situation"], ["even", "still", "yet", "just"]], "a": [4, 1, 2, 2, 3, 1, 4]}, {"t": "Sunday", "p": ["Gloria Wald sat back in her chair with a small sigh. She was trying to relax listening to her favourite classical music. She had to {{30}} that she was tired today. Sundays always tired her. Sometimes she thought she did more work at home than she did at the office. She always spent Sundays answering her personal correspondence, looking over the books kept by the cook and the housekeeper. She made lists of what she had noticed needed to be {{31}} around the apartment and of items needed to complete her wardrobe. {{32}}, she had to plan menus for the week. It was tedious work, but she had done it for years, even before she’d begun to run the business.", "Once she’d taken over from her husband, she had still spent her Sundays {{33}} to the household. She was also {{34}} care of her grandson on the nurse’s day off. Those Sundays had been precious, a few hours with her grandson without anyone interfering, anyone taking him away. She {{35}} those days. A tiny bright tear crept into her lashes. How she loved that child. She would have done anything for him. And she had. She {{36}} to maintain the family business empire for him, carried the legacy from one generation to the next. It was her most valuable gift for him. And she had come to love the business almost as much as she loved her grandson."], "o": [["allow", "admit", "approach", "approve"], ["repeated", "remained", "received", "repaired"], ["Moreover", "However", "Although", "Nevertheless"], ["visiting", "focusing", "attending", "concentrating"], ["making", "taking", "keeping", "holding"], ["reminded", "remembered", "recognised", "recorded"], ["achieved", "succeeded", "managed", "accomplished"]], "a": [2, 4, 1, 3, 2, 2, 3]}];
const NOV={"title": "Veliky Novgorod", "p": ["Veliky Novgorod, one of the most ancient cities of Russia, was founded in the 9-10th centuries. Veliky Novgorod was a political centre of vast territories stretching up from Baltic lands to the Urals. For a long time the city had been the largest centre of culture in Russia, {{A}}. Many outstanding monuments of medieval architecture and painting have been preserved in the city.", "The Kremlin is one of the most popular sights. It was built in 1044 by order of Prince Jaroslav the Wise. It is surrounded by a wall 1487 metres long. It once had 12 towers, {{B}}. The particular characteristic of the Kremlin is a large number of churches on the area. The architecture represents the style of the 15th century. The area around the Kremlin is very well-kept {{C}}. From the bastions one will have a wonderful view over the whole city.", "The outdoor Vitoslavlitsy Museum of Folk Wooden Architecture is a haven to the people {{D}} with massive skyscrapers, business centres and shopping malls. The museum presents some excellent examples of wooden structures from different parts and suburbs of Veliky Novgorod. The scenery here is so quiet {{E}} and will just enjoy the stunning view of the Russian village.", "The visit to the city helps to get acquainted with the history and the way of life of common country folk {{F}} in different times."], "parts": ["and has a lot of green places", "but now only 9 of them still exist", "that they are protected by the state", "where chronicles and books were created", "who are tired of modern urban architecture", "that one will easily forget about all the troubles", "who lived on the territory of Novgorod principality"], "a": [4, 2, 1, 5, 6, 7]};
const IV=[[["How many people are there in your family, and who are you closest to?", "Образец: There are four of us: my parents, my younger brother and me. I am closest to my mum because I can tell her absolutely everything, and she never judges me.", "https://altatiana7.github.io/Tatyana-English-Hub/card-audio/202b5mffx5y.mp3?v=1"], ["What household chores do you usually do at home?", "Образец: I usually do the washing up and take out the rubbish. At weekends I also help my dad with the shopping, which I don’t mind at all because we chat on the way.", "https://altatiana7.github.io/Tatyana-English-Hub/card-audio/1876chbsk21.mp3?v=1"], ["How do the members of your family usually spend their free time together?", "Образец: We often watch films together on Friday evenings and go for long walks in the park. In summer we usually go to the countryside to visit my grandparents.", "https://altatiana7.github.io/Tatyana-English-Hub/card-audio/z5nutzfz6d.mp3?v=1"], ["What family traditions would you like to keep when you have your own family?", "Образец: I would definitely keep our tradition of having a big family dinner every Sunday. It is the only time when everybody puts their phones away and really talks to each other.", "https://altatiana7.github.io/Tatyana-English-Hub/card-audio/28t0x5gxw3u.mp3?v=1"], ["What advice would you give to teenagers who often argue with their parents?", "Образец: I would advise them to stay calm and try to see the situation through their parents’ eyes. It also helps to choose the right moment for a serious talk instead of arguing in a hurry.", "https://altatiana7.github.io/Tatyana-English-Hub/card-audio/5laj2x1sio.mp3?v=1"]], [["What qualities do you value most in a friend?", "Образец: Above all, I value honesty and loyalty. A real friend tells you the truth even when it is unpleasant and supports you when things go wrong.", "https://altatiana7.github.io/Tatyana-English-Hub/card-audio/22uxokm79gu.mp3?v=1"], ["How did you meet your best friend?", "Образец: We met at a summer camp when we were eleven. We were in the same team, discovered that we had a lot in common, and we have been inseparable ever since.", "https://altatiana7.github.io/Tatyana-English-Hub/card-audio/1ij9qrcmuco.mp3?v=1"], ["Do you prefer to spend time with one close friend or with a group of friends? Why?", "Образец: I prefer spending time with one close friend because we can have deep conversations. In a big group people often just chat about unimportant things.", "https://altatiana7.github.io/Tatyana-English-Hub/card-audio/o069r0arpc.mp3?v=1"], ["What do you usually do when you fall out with a friend?", "Образец: First I take some time to calm down, and then I try to talk to my friend face to face. Usually we make up quickly because neither of us likes holding a grudge.", "https://altatiana7.github.io/Tatyana-English-Hub/card-audio/510bahf029.mp3?v=1"], ["Do you think it is possible to stay friends with someone who lives in another country? Why or why not?", "Образец: I am sure it is possible, thanks to video calls and messengers. However, such a friendship needs more effort, because you have to find time to talk despite the time difference.", "https://altatiana7.github.io/Tatyana-English-Hub/card-audio/1ylo3rzy054.mp3?v=1"]]];
const ADS=[{"title": "Family Memories Photo Studio", "sub": "Professional photo sessions for the whole family", "intro": "You are considering having a family photo session and now you’d like to get more information.", "points": ["location of the studio", "price of a session", "discounts for large families", "number of photos you get"], "key": ["Where is the studio located?", "How much does a session cost?", "Are there any discounts for large families?", "How many photos are included in the price?"]}, {"title": "Family Weekend Camp", "sub": "Two days of fun for parents and children", "intro": "You are considering going to the camp with your family and now you’d like to get more information.", "points": ["dates of the next camp", "activities for parents and children", "accommodation", "price for a family of four"], "key": ["What are the dates of the next camp?", "What activities are there for parents and children?", "What kind of accommodation do you offer?", "How much does the camp cost for a family of four?"]}];

/* ---------- Family · Task 2 · реклама ---------- */
W3_TASKS['w4l5-hw-fam-t2']={label:L,part:'C',title:'Family · Task 2 · Questions about an advert',sub:'2 рекламы · по 4 вопроса · 1,5 мин подготовка + 20 секунд на вопрос',type:'speak',ad:true,
 intro:'Как на экзамене: 1,5 минуты на подготовку, потом на каждый вопрос 20 секунд. Задай прямой вопрос по каждому пункту и запиши его голосом.',
 items:ADS.flatMap(a=>a.points.map(p=>[a.title+' · '+p,'']))};

/* ---------- Family · Task 3 · интервью (озвучка — британский голос, как на уроке 7 ноября) ---------- */
W3_TASKS['w4l5-hw-fam-iv1']={label:L,part:'C',title:'Family · Task 3 · Interview 1 · Family life',sub:'5 вопросов на слух · 40 секунд на ответ',type:'speak',card:true,
 intro:'Как на экзамене: вопрос только звучит. Ответ — 2–3 полных предложения. Образец ответа — на обороте карточки.',items:IV[0]};
W3_TASKS['w4l5-hw-fam-iv2']={label:L,part:'C',title:'Family · Task 3 · Interview 2 · Friendship',sub:'5 вопросов на слух · 40 секунд на ответ',type:'speak',card:true,
 intro:'Как на экзамене: вопрос только звучит. Ответ — 2–3 полных предложения. Образец ответа — на обороте карточки.',items:IV[1]};

/* ---------- ЕГЭ 19–24 и 25–29 ---------- */
W3_TASKS['w4l5-hw-science']={label:L,tight:true,big:true,part:'C',title:'ЕГЭ 19–24 · A school science club',sub:'6 пропусков · по 3 на экране',type:'gap',
 intro:'Алгоритм: личная форма? актив или пассив? когда? один или много?',sets:SCI};
W3_TASKS['w4l5-hw-wf']={label:L,tight:true,big:true,part:'C',title:'ЕГЭ 25–29 · словообразование · 3 текста',sub:'The printing press · Using a digital library · The city of the future · 15 пропусков',type:'gap',
 intro:'Сначала реши, какая часть речи нужна в пропуске, и только потом образуй слово. Проверь число и приставку.',sets:WF};

/* ---------- Чтение · задание 11 · Veliky Novgorod ---------- */
W3_TASKS['w4l5-hw-r11']={label:L,big:true,part:'C',title:'Чтение · задание 11 · Veliky Novgorod',sub:'Открытый банк ФИПИ · 6 пропусков',type:'read',
 intro:'Задание 11 в формате ЕГЭ: заполни пропуски A–F частями 1–7. Одна часть лишняя.',
 sets:(function(){const Ls='ABCDEF',parts=NOV.parts.map((h,i)=>(i+1)+'. '+h),
  list='<ol class="rdList">'+NOV.parts.map(x=>'<li>'+x+'</li>').join('')+'</ol>',
  text=NOV.p.map(t=>'<p>'+t.replace(/\{\{([A-F])\}\}/g,'<b class="rdGapL">$1 ______</b>')+'</p>').join('');
  return [[0,6]].map(r=>({title:NOV.title,tab:'11',tid:'w4l5-hw-r11',row:true,
   task:'Заполните пропуски '+Ls[r[0]]+'–'+Ls[r[1]-1]+' частями 1–7. Одна часть лишняя.',note:list,text:text,
   items:Ls.slice(r[0],r[1]).split('').map((c,i)=>[c,['1','2','3','4','5','6','7'],NOV.a[r[0]+i]-1,'',parts,'Задание 11 · '+NOV.title+' · пропуск '+c])}))})()};

/* ---------- Vocabulary 30–36 · 2 текста ---------- */
W3_TASKS['w4l5-hw-voc']={label:L,big:true,part:'C',title:'Vocabulary 30–36 · 2 текста',sub:'A new house · Sunday · 14 пропусков',type:'read',
 intro:'Задания 30–36 в формате ЕГЭ: выбери слово, которое подходит по смыслу и по сочетанию со словами рядом.',
 sets:(function(){const out=[];
  VOC.forEach((v,vi)=>{const text=v.p.map(t=>'<p>'+t.replace(/\{\{(\d\d)\}\}/g,'<b class="rdGapL">$1 ______</b>')+'</p>').join('');
   [[0,7]].forEach(r=>out.push({title:v.t,tab:'30',tid:'w4l5-hw-voc-'+vi,cols:2,
    task:'Выберите слово для пропусков '+(30+r[0])+'–'+(29+r[1])+'.',text:text,
    items:v.o.slice(r[0],r[1]).map((o,i)=>['<b>'+(30+r[0]+i)+'</b>',o,v.a[r[0]+i]-1,'',o,'30–36 · '+v.t+' · '+(30+r[0]+i)])}))});
  return out})()};

/* ---------- крупный текст в этих заданиях + экран рекламы ---------- */
const st=document.createElement('style');st.textContent=`
#plRoot.plBig .plSetTitle{font-size:20px}
#plRoot.plBig .plText p{font-family:"PT Serif",Georgia,"Times New Roman",serif;font-size:21px!important;line-height:1.75!important}
#plRoot.plBig .plText .w3Gap input{font-size:19px;width:200px}
#plRoot.plBig .plText .w3Gap small{font-size:14px}#plRoot.plBig .plText .w3Gap em{font-size:15px!important}
#plRoot.plBig .rdText h3{font-size:20px}
#plRoot.plBig .rdText p{font-family:"PT Serif",Georgia,"Times New Roman",serif;font-size:20px!important;line-height:1.6!important}
#plRoot.plBig .rdText .rdGapL{font-size:20px}
#plRoot.plBig .rdQ p{font-size:18px!important}#plRoot.plBig .rdOpts button{font-size:17px!important;min-height:36px!important}
#plRoot.plBig .rdList{font-size:18px!important;line-height:1.45!important}
.adWrap{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:18px;align-items:start;max-width:1180px;margin:0 auto}
.adTabs{display:flex;gap:8px;margin-bottom:10px}
.adTabs button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:9px;padding:7px 14px;font:800 15px/1.2 Arial,sans-serif;cursor:pointer}
.adTabs button.on{background:#0039A6;color:#fff;border-color:#0039A6}
.adCard{border:1px solid #dbe3ee;border-left:6px solid #0039A6;border-radius:14px;background:#fff;padding:18px 20px}
.adCard h3{margin:0 0 4px;font:700 26px/1.25 "PT Serif",Georgia,serif;color:#142337}
.adCard .adSub{margin:0 0 12px;font:italic 19px/1.4 "PT Serif",Georgia,serif;color:#475569}
.adCard .adIntro{margin:0 0 10px;font:17px/1.5 "PT Serif",Georgia,serif;color:#142337}
.adCard ol{margin:0;padding-left:24px;font:19px/1.7 "PT Serif",Georgia,serif;color:#142337}
.adCard li.on{color:#0039A6;font-weight:700}
.adKey{margin-top:12px;padding:10px 14px;border-radius:10px;background:#f2f7ff;font:16px/1.5 Arial,sans-serif;color:#142337}
.adSide{display:flex;flex-direction:column;align-items:center;gap:10px}
.adRing{width:150px;height:150px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#0039A6 calc(var(--p)*1%),#e5ebf3 0)}
.adRing>div{width:118px;height:118px;border-radius:50%;background:#fff;display:grid;place-items:center}
.adRing b{font-size:36px;color:#0039A6}.adRing.end{background:#D52B1E}
.adPh{font:800 16px/1.3 Arial,sans-serif;color:#0039A6;text-align:center;min-height:22px}
.adBtns{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
.adBtns button{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:9px;padding:8px 14px;font:800 15px/1.2 Arial,sans-serif;cursor:pointer}
.adBtns button.prim{background:#0039A6;color:#fff}
.adQs{display:flex;gap:6px}.adQs button{width:38px;height:38px;border-radius:50%;border:1px solid #b7c9e8;background:#fff;color:#0039A6;font:800 16px Arial;cursor:pointer}
.adQs button.on{background:#0039A6;color:#fff}
.adRec{width:100%}
.adDone{margin-top:12px;padding:10px 14px;border-radius:10px;background:#e3f4e7;color:#2f7d45;font:700 16px/1.4 Arial,sans-serif;text-align:center}
@media(max-width:760px){.adWrap{grid-template-columns:1fr}}`;
document.head.appendChild(st);

const PH=[['Подготовка',90],['Вопрос 1',20],['Вопрос 2',20],['Вопрос 3',20],['Вопрос 4',20]];
let ad=0,q=0,ph=-1,left=90,tm=null,key=false;
const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
function stop(){if(tm){clearInterval(tm);tm=null}}
const box=()=>document.querySelector('.adWrap');
function draw(){const b=box();if(!b)return;const r=b.querySelector('.adRing'),tot=ph<0?90:PH[Math.min(ph,4)][1];
 r.style.setProperty('--p',ph>=PH.length?0:Math.max(0,left)/tot*100);r.classList.toggle('end',ph>=PH.length);
 r.querySelector('b').textContent=ph>=PH.length?'0:00':fmt(Math.max(0,left));
 b.querySelector('.adPh').textContent=ph<0?'Нажми «Старт»':ph>=PH.length?'Время вышло':PH[ph][0];
 b.querySelectorAll('.adCard li').forEach((li,k)=>li.classList.toggle('on',ph>=1&&ph<PH.length&&k===ph-1));
 b.querySelectorAll('.adQs button').forEach((x,k)=>x.classList.toggle('on',k===q))}
function go(){stop();ph=0;left=PH[0][1];draw();tm=setInterval(()=>{if(!box()){stop();return}left--;
 if(left<=0){ph++;if(ph<PH.length){left=PH[ph][1];setQ(ph-1)}else stop()}draw()},1000)}
function recBox(){const t=W3_TASKS['w4l5-hw-fam-t2'],a=ADS[ad];
 return recorderHTML(w3RecKey('w4l5-hw-fam-t2')+(ad*4+q+1),L+' · '+t.title+' · '+a.title+' · Q'+(q+1),'Ask about: '+a.points[q])}
function setQ(k){q=k;const b=box();if(!b)return;b.querySelector('.adRec').innerHTML=recBox();draw()}
function adHTML(done){const a=ADS[ad];
 return '<div class="adWrap"><div><div class="adTabs">'+ADS.map((x,k)=>'<button type="button" data-ad="'+k+'" class="'+(k===ad?'on':'')+'">Advert '+(k+1)+'</button>').join('')+'</div>'+
  '<div class="adCard"><h3>'+a.title+'</h3><p class="adSub">'+a.sub+'</p><p class="adIntro">'+a.intro+' In 1.5 minutes you are to ask four direct questions to find out about the following:</p><ol>'+a.points.map(p=>'<li>'+p+'</li>').join('')+'</ol>'+
  (key?'<div class="adKey"><b>Образец вопросов</b><br>'+a.key.map((k,i)=>(i+1)+') '+k).join('<br>')+'</div>':'')+'</div></div>'+
  '<div class="adSide"><div class="adRing" style="--p:100"><div><b>1:30</b></div></div><div class="adPh"></div>'+
  '<div class="adBtns"><button type="button" class="prim" data-adk="start">Старт</button><button type="button" data-adk="stop">Стоп</button><button type="button" data-adk="key">'+(key?'Скрыть образец':'Образец вопросов')+'</button></div>'+
  '<div class="adQs">'+[0,1,2,3].map(k=>'<button type="button" data-adq="'+k+'">'+(k+1)+'</button>').join('')+'</div>'+
  '<div class="adRec">'+recBox()+'</div></div></div>'+
  (done?'<div class="adDone">✓ Отмечено у учителя · '+done+'</div>':'<div class="plNav"><span></span><button type="button" class="plBtn plMain" onclick="plSubmit()">Я задала все вопросы по двум рекламам · отметить у учителя</button></div><div class="plMsg" id="plMsg"></div>')}
function paintAd(){const root=document.getElementById('plRoot');if(!root||!PL||!PL.t||!PL.t.ad)return;const d=w3Get(PL.id).done;
 root.classList.remove('plWide','plBig');root.innerHTML='<div class="adPage">'+plHead('2 рекламы')+'<p class="plIntro">'+PL.t.intro+'</p>'+adHTML(d?d.date:'')+'</div>';draw()}

document.addEventListener('click',e=>{
 const t=e.target.closest('.adWrap [data-ad]');if(t){stop();ad=+t.dataset.ad;q=0;ph=-1;left=90;paintAd();return}
 const k=e.target.closest('.adWrap [data-adk]');if(k){const v=k.dataset.adk;if(v==='start'){setQ(0);go();k.textContent='Заново'}else if(v==='stop'){stop()}else if(v==='key'){key=!key;stop();ph=-1;left=90;paintAd()}return}
 const n=e.target.closest('.adWrap [data-adq]');if(n){setQ(+n.dataset.adq)}
});

const baseRender=plRender;
plRender=function(){
 const root=document.getElementById('plRoot');
 if(root&&PL&&PL.t&&PL.t.ad){paintAd();return}
 stop();baseRender();
 const r=document.getElementById('plRoot');if(r)r.classList.toggle('plBig',!!(PL&&PL.t&&PL.t.big));
};

/* выполнено в домашке → отмечено и в теме Family (вкладка WORDS · SPEAKING) */
const FAM={'w4l5-hw-fam-t2':['t2-1','t2-2'],'w4l5-hw-fam-iv1':['iv1'],'w4l5-hw-fam-iv2':['iv2']};
const baseSubmit=plSubmit;
plSubmit=function(){const id=PL&&PL.id;stop();const r=baseSubmit.apply(this,arguments);
 if(FAM[id]){try{const o=JSON.parse(localStorage.getItem('arinaFamily:done')||'{}')||{};FAM[id].forEach(x=>{if(!o[x])o[x]=Date.now()});localStorage.setItem('arinaFamily:done',JSON.stringify(o))}catch(e){}}
 return r};

/* назначить домашку (и по умолчанию, и в уже сохранённом списке) */
const HW=['w4l5-hw-fam-t2','w4l5-hw-fam-iv1','w4l5-hw-fam-iv2','w4l5-hw-science','w4l5-hw-wf','w4l5-hw-r11','w4l5-hw-voc'];
HW.forEach(id=>{if(!ARINA_ASSIGNED_DEFAULT.includes(id))ARINA_ASSIGNED_DEFAULT.push(id)});
(window.ARINA_HW_BATCHES=window.ARINA_HW_BATCHES||[]).push(HW); /* новое — сверху */
/* урок 9 ноября в «Моих уроках» (неделя 4 · урок 3 на сайте Арины) — там же видна эта домашка */
try{if(weeks[3]&&weeks[3].l[2])weeks[3].l[2][0]='Passive + Word formation · Review';}catch(e){}
ARINA_LESSONS['3-2']={intro:'Урок 9 ноября: пассив и словообразование. Homework: устная часть Family (задания 2 и 3), 19–24, 25–29, чтение 11 и лексика 30–36.',parts:[
 ['Устная часть · Family',[['task','w4l5-hw-fam-t2'],['task','w4l5-hw-fam-iv1'],['task','w4l5-hw-fam-iv2']],'home'],
 ['Грамматика и словообразование',[['task','w4l5-hw-science'],['task','w4l5-hw-wf']],'home'],
 ['Чтение и лексика',[['task','w4l5-hw-r11'],['task','w4l5-hw-voc']],'home']]};
if(!ARINA_OPEN_LESSONS.includes(2))ARINA_OPEN_LESSONS.push(2);
try{if(!localStorage.getItem('arinaHwAdd-20261109')){const v=JSON.parse(localStorage.getItem('arinaAssigned')||'null');if(Array.isArray(v)){HW.forEach(id=>{if(!v.includes(id))v.push(id)});localStorage.setItem('arinaAssigned',JSON.stringify(v))}localStorage.setItem('arinaHwAdd-20261109','1')}}catch(e){}
})();
