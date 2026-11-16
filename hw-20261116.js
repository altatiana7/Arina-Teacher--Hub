/* 16.11.2026 · Homework после урока 16 ноября → сдать к уроку 18 ноября (среда).
   1) Word families · кто? что? какой? как? — блок 4 урока 16.11 (слова из пройденных текстов ФИПИ 25–29), 16 слов, выбор нажатием.
   2) Reading · задание 10 · Great apes — блок 10 урока 16.11 (ФИПИ), 7 текстов, 8 заголовков, один лишний.
   3) Spelling cards · 25–29 — блок 11 урока 16.11, карточки Quizlet, открыты всегда.
   4) Mistakes · Future · 14 — блок урока 14.11.
   5) Cards · Future & Passive — карточки урока 14.11, открыты всегда.
   Одна отправка на задание (1, 2, 4); результат уходит учителю (test_id hw1116-*). */
(function(){
'use strict';
const L='Homework · 16 Nov';

/* ---------- 1 · Word families ---------- */
const WF_OPTS=['Кто? · -er / -or / -ist','Что? · -tion / -ment / -ence','Какой? · -al / -ive / -less / -able','Как? · -ly'];
const WF=[['traveller',0],['achievement',1],['traditional',2],['extremely',3],['visitors',0],['collection',1],['effective',2],['certainly',3],
 ['scientists',0],['residence',1],['priceless',2],['recently',3],['population',1],['memorable',2],['alternatively',3],['inventor',0]];
const WF_WHY=['Человек → кто?','Предмет, явление → что?','Признак → какой?','Как делают → как? (-ly)'];
/* порядок как в уроке, но без серии одинаковых ответов подряд */
const WF_ORDER=[0,2,5,3,8,11,1,6,4,9,13,15,7,12,10,14];
W3_TASKS['hw1116-wf']={label:L,part:'C',title:'Word families · кто? что? какой? как?',sub:'16 слов · из текстов ФИПИ 25–29',type:'mc',shared:WF_OPTS,
 intro:'К какому вопросу подходит слово? Смотри на окончание.',
 items:WF_ORDER.map(k=>{const w=WF[k];return ['<b class="h16W">'+w[0]+'</b>',WF_OPTS,w[1],WF_WHY[w[1]]]})};

/* ---------- 2 · Reading · задание 10 · Great apes (ФИПИ) ---------- */
const R10={h:["Almost extinct","Figuratively speaking","Belonging to one group","Living above","Highly social","Similar to people","No meat, please!","Glimpses of history"],
t:["Great apes are members of the family Hominidae, which includes humans, chimps, gorillas, and orangutans. There is one species of humans (Homo sapiens), two species of chimpanzees (common chimpanzee and pygmy chimpanzee, also known as the bonobo), two species of gorillas (western gorilla and eastern gorilla), and three species of orangutans (Bornean orangutan, Sumatran orangutan, and Tapanuli orangutan). However, throughout the last few million years, there have been dozens of other great apes, some of which were arguably as intelligent as modern humans.",
"Great apes are large, tailless primates, distinguished from lesser apes (gibbons) by a larger size and generally less monkey-like anatomical features. Still, within this group there is considerable variation. These apes evolved from African lesser apes about 18 million years ago. Orangutans originated from the rest of the apes about 14 million years ago, and gorillas separated from them about 7 million years ago. Until recently, it was thought that chimps and humans separated between 3 and 5 million years ago, but more fossil finds suggest it happened earlier, between 6 and 7 million years ago.",
"Great apes are all extremely intelligent. Each one is probably smarter than every other member of the animal kingdom. All the great apes can use tools. Their hands allow them to use rocks or sticks for various purposes, including as weapons. Gorillas have been observed testing water depth with sticks. Chimpanzees are known to drive insects out of their nests using sticks. The orangutan is intelligent enough to build leak-proof roofs over their nightly nests. Isn’t that amazing? They are just like us!",
"Great apes play a very important role in their ecosystems. Their presence also supports biodiversity by influencing the distribution and behaviour of other species within their habitat. Unfortunately, most great ape species are considered endangered or even critically endangered due to habitat loss, poaching, and disease. According to the World Wildlife Fund, gorillas and orangutans are particularly at risk, with habitat destruction from logging, mining, and agriculture being the primary threats to their survival.",
"The orangutan, the largest creature in the world living in the trees, has probably never lived anywhere else but in the trees. Wildly mobile shoulder, knee and hip joints create a climbing machine that spends approximately 90% of its life high above ground. They eat, sleep, breed and give birth sometimes hundreds of feet above the ground. The thick forests of Borneo and Sumatra provide the perfect environment for this ape. Orangutans look graceless on the ground, but even the largest male orangutans move elegantly in the trees.",
"Gorillas eat different food, but their diet is mainly vegetarian. In the jungle, more than 85% of a gorilla’s diet is made up of leaves, shoots, stems and vines – and the rest is made up of roots, flowers and fruits. Insects, ants and termites make up less than 1% of a gorilla’s diet in the wild. The specific food of gorillas varies, depending on the presence (or absence) of certain plants in their immediate surrounding. Thus, gorillas are also almost exclusively vegetarian and devote their days to gathering fruit, leaves, roots and flowers.",
"Great apes are no exception when it comes to social interaction. They have complex social relationships that include communication through vocalizations, and body language such as grooming and hugging. Their societies are hierarchical, meaning there are dominant members who have priority access to food and other resources, while subordinate members must work harder to attain them. A new study has revealed that great apes tease one another, including hair pulling, poking, staring in faces, and other playful behaviours."],
a:[3,8,6,1,4,7,5]};
W3_TASKS['hw1116-r10']={label:L,big:true,part:'C',title:'Reading · задание 10 · Great apes',sub:'Открытый банк ФИПИ · 7 текстов · 8 заголовков',type:'read',
 intro:'Задание 10 в формате ЕГЭ: подбери к каждому тексту A–G заголовок 1–8. Один заголовок лишний.',
 sets:(function(){const Ls='ABCDEFG',parts=R10.h.map((h,i)=>(i+1)+'. '+h),
  list='<ol class="rdList">'+R10.h.map(x=>'<li>'+x+'</li>').join('')+'</ol>',
  text=R10.t.map((t,i)=>'<p><b class="rdGapL">'+Ls[i]+'</b> '+t+'</p>').join('');
  return [{title:'Great apes',tab:'10',tid:'hw1116-r10',row:true,dense:true,
   task:'Установите соответствие между текстами A–G и заголовками 1–8. Один заголовок лишний.',note:list,text:text,
   items:Ls.split('').map((c,i)=>[c,['1','2','3','4','5','6','7','8'],R10.a[i]-1,'',parts,'Задание 10 · Great apes · текст '+c])}]})()};

/* ---------- 4 · Mistakes · Future · 14 (урок 14.11) ---------- */
const MF=[
["We ___ our cousins next weekend.","are going to visit",["are visit","going to visit","will visiting"],"Going to берём целиком: am / is / are + going to + глагол."],
["This year I ___ in Brazil for New Year.","am going to be",["have been","will being","am being"],"Это план на этот Новый год → am going to be."],
["I’ll let you know about my impressions when I ___ back.","get",["will get","got","am getting"],"После when про будущее — без will: when I get back."],
["When you ___ in Moscow, you’ll check into the hotel and have some rest.","arrive",["will arive","will arrive","arrives"],"После when — без will. И arrive пишется с двумя R."],
["If she ___ it, it will be easier for her to control her behaviour.","finds",["will find","find","found"],"После if — без will. She → finds (с -s)."],
["If it’s hot — I’ll relax, and if it ___ cold — I’ll wake up.","is",["will be","be","was"],"После if — без will: if it is cold."],
["My intention is to learn Spanish next year. → I ___ Spanish next year.","am going to learn",["am going to","going to learn","will going to learn"],"Не забывай сам глагол: am going to learn."],
["The departure time of the bus is 8.15. → The bus ___ 8.15.","leaves at",["leaves","is leaving","will leave at"],"Расписание → Present Simple. Перед временем нужен предлог at."],
["I refuse to speak to him again. → I ___ to him again.","won’t speak",["won’n speak","won’t to speak","don’t speak"],"Won’t = will not. После него глагол без to."],
["The phone is ringing. — OK, I ___ it.","’ll answer",["’m answering","answer","’m going to answer"],"Решила прямо сейчас → will."],
["I can’t come on Saturday — I ___ my grandmother to the airport. It’s all arranged.","’m taking",["’ll take","take","’m going take"],"Всё договорено → Present Continuous: I’m taking."],
["I’ve decided: I ___ medicine at university.","’m going to study",["’ll study","study","’m going study"],"Уже решила заранее → going to."],
["If it ___ tomorrow, we’ll move the picnic indoors.","rains",["will rain","rain","is raining"],"После if — без will: if it rains."],
["Be careful! You ___ that glass.","are going to drop",["will drop","drop","are dropping"],"Видно, что сейчас случится → going to."]];
W3_TASKS['hw1116-future']={label:L,part:'C',title:'Mistakes · Future · 14',sub:'14 вопросов · предложения из прошлых работ',type:'mc',
 intro:'План или решила сейчас? Расписание? После if и when — без will.',
 items:MF.map((r,i)=>{const o=r[2].slice(),p=(i*3+1)%4;o.splice(p,0,r[1]);return [r[0],o,p,r[3]]})};

/* ---------- 3 и 5 · карточки Quizlet (открыты всегда, ничего не отправляют) ---------- */
const SPELL=[
['achievement','достижение · ACHIEVE','This was quite an achievement for a boy of this age.'],
['scientists','учёные · SCIENCE','The aquarium invites scientists into the galleries.'],
['famous','известный · FAME','Fyodor Konyukhov is famous all over the world.'],
['naturally','естественно, природно · NATURE','The island is naturally beautiful.'],
['perfection','совершенство · PERFECT','Gzhel artists work on every piece to perfection.'],
['collection','коллекция, собрание · COLLECT','The Hermitage can boast a huge collection of works of art.'],
['carefully','осторожно, тщательно · CAREFUL','Tourism is very carefully controlled.'],
['uninhabited','необитаемый · INHABITED','They go on day trips to the remote uninhabited islands.'],
['adventurers','искатели приключений · ADVENTURE','The islands are on the bucket lists of many adventurers.'],
['eruptions','извержения · ERUPT','Several minor eruptions followed.'],
['activities','занятия · ACTIVE','Visitors can enjoy numerous outdoor activities.'],
['violently','сильно, бурно · VIOLENT','Arenal erupted violently in 1968.']];
const FP=[
['am / is / are going to + V1','план, видно, что случится','Be careful! You are going to drop that glass.'],
['will + V1','решила сейчас, пообещала','The phone is ringing. — OK, I’ll answer it.'],
['I’m taking','уже договорено → Present Continuous','I can’t come on Saturday — I’m taking my grandmother to the airport.'],
['The bus leaves at 8.15','расписание → Present Simple + at','The departure time of the bus is 8.15.'],
['if / when + настоящее','после if и when — без will','If it rains tomorrow, we’ll move the picnic indoors.'],
['won’t + V1','отказываюсь · без to','I won’t speak to him again.'],
['would','после «знал, обещал» · if + прошедшее','If you wanted to see everything, it would take you 100 days.'],
['so far · for years','→ have / has been','Millions of tourists have been to Altai so far.'],
['is / are + V3','с чем-то делают всегда','Much of Iceland is covered in lava.'],
['was / were + V3','с чем-то сделали в прошлом','The building was turned into a museum.'],
['worth + -ing','стоит того, чтобы …','Altai caves are worth visiting.'],
['-ist · -or · -er','человек','tourist · visitor · composer']];
W3_TASKS['hw1116-spell']={label:L,part:'C',title:'Spelling cards · 25–29',sub:'12 карточек · слова 25–29 · открыты всегда',type:'cards',cards:SPELL,items:[]};
W3_TASKS['hw1116-cards']={label:L,part:'C',title:'Cards · Future & Passive',sub:'12 карточек · открыты всегда',type:'cards',cards:FP,items:[]};

const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let CD=null;
function cdSay(text){try{if(!('speechSynthesis' in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-GB';u.rate=.85;
 const vs=speechSynthesis.getVoices().filter(v=>/^en-GB/i.test(v.lang));u.voice=vs.find(v=>/natural|online|neural/i.test(v.name))||vs.find(v=>/google/i.test(v.name))||vs[0]||null;speechSynthesis.speak(u)}catch(e){}}
function cdRender(){const box=document.getElementById('h16Cards');if(!box||!CD)return;const t=CD.t,c=t.cards[CD.i],n=t.cards.length;
 box.innerHTML='<div class="h16Card'+(CD.f?' back':'')+'" data-h16="flip">'+(CD.f?'<div class="h16Tr">'+esc(c[1])+'</div><div class="h16Ex">'+esc(c[2])+'</div>':'<div class="h16Front">'+esc(c[0])+'</div>')+'</div>'+
  '<div class="h16Nav"><button type="button" class="h16B" data-h16="-1"'+(CD.i===0?' disabled':'')+'>←</button><span>'+(CD.i+1)+' / '+n+'</span>'+
  '<button type="button" class="h16B" data-h16="say">Listen</button><button type="button" class="h16B" data-h16="1">'+(CD.i===n-1?'Start again':'→')+'</button></div>';
}
function openCards(id){const t=taskDef(id);CD={t:t,i:0,f:false};
 openFullScreen('','<div class="h16" id="h16Root"><div class="plTop"><div><div class="eyebrow">'+t.label+'</div><h1>'+t.title+'</h1></div><div class="plCount">открыто всегда</div></div><div id="h16Cards"></div></div>',cdRender);
 const fb=document.querySelector('#fullScreenPanel .fullScreenBack');if(fb&&typeof openNavigator==='function'){fb.textContent='← Homework';fb.onclick=()=>{try{speechSynthesis.cancel()}catch(e){}openNavigator()}}
}
document.addEventListener('click',e=>{const b=e.target.closest('#h16Root [data-h16]');if(!b||!CD)return;const v=b.dataset.h16,c=CD.t.cards[CD.i];
 if(v==='flip')CD.f=!CD.f;else if(v==='say'){cdSay(CD.f?c[2]:c[0]);return}else{const k=CD.i+(+v);CD.i=k>=CD.t.cards.length?0:Math.max(0,k);CD.f=false}
 cdRender()});
document.addEventListener('keydown',e=>{if(!document.getElementById('h16Root')||!CD)return;
 if(e.key===' '){e.preventDefault();CD.f=!CD.f;cdRender()}else if(e.key==='ArrowRight'){CD.i=CD.i>=CD.t.cards.length-1?0:CD.i+1;CD.f=false;cdRender()}else if(e.key==='ArrowLeft'&&CD.i>0){CD.i--;CD.f=false;cdRender()}});
const baseOpen=window.openW3Task;
window.openW3Task=function(id){let t=null;try{t=taskDef(id)}catch(e){}if(t&&t.type==='cards'){openCards(id);return}return baseOpen.apply(this,arguments)};

const st=document.createElement('style');st.textContent=`
#plRoot .plQ .h16W{font-size:40px;color:#0039A6;letter-spacing:.3px}
.h16{max-width:760px;margin:0 auto}
#h16Cards{max-width:560px;margin:18px auto 0}
.h16Card{border:1px solid #dbe3ee;border-radius:16px;background:#fff;box-shadow:0 4px 14px rgba(20,35,55,.08);min-height:230px;padding:22px 28px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;cursor:pointer;font-family:"PT Serif",Georgia,"Times New Roman",serif;color:#142337}
.h16Card.back{background:#f2f7ff;border-color:#b7c9e8}
.h16Front{font-size:34px;font-weight:700;color:#0039A6}
.h16Tr{font-size:24px;font-weight:700;margin-bottom:8px}
.h16Ex{font-size:20px;line-height:1.45;color:#334155}
.h16Nav{display:flex;align-items:center;justify-content:center;gap:14px;margin-top:14px;font:800 17px/1 "Segoe UI",Arial,sans-serif;color:#0039A6}
.h16B{border:1px solid #b7c9e8;background:#fff;color:#0039A6;border-radius:10px;padding:9px 18px;font:800 17px/1.2 "Segoe UI",Arial,sans-serif;cursor:pointer}
.h16B:disabled{opacity:.4;cursor:default}
`;document.head.appendChild(st);

/* карточки (тренировка) в счёт «задано / не сдано» не идут — они только в списке Homework (hw-list.js, тип open) */
const HW=['hw1116-wf','hw1116-r10','hw1116-future'];
HW.forEach(id=>{if(!ARINA_ASSIGNED_DEFAULT.includes(id))ARINA_ASSIGNED_DEFAULT.push(id)});
(window.ARINA_HW_BATCHES=window.ARINA_HW_BATCHES||[]).push(HW);
try{if(!localStorage.getItem('arinaHwAdd-20261116')){const v=JSON.parse(localStorage.getItem('arinaAssigned')||'null');if(Array.isArray(v)){HW.forEach(id=>{if(!v.includes(id))v.push(id)});localStorage.setItem('arinaAssigned',JSON.stringify(v))}localStorage.setItem('arinaHwAdd-20261116','1')}}catch(e){}
})();
