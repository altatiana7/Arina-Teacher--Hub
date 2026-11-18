/* 18.11.2026 · Homework после урока 18 ноября (к уроку 21 ноября), выдано Татьяной 18.11.
   По слабым темам из Progress (верно из всех ответов): Past Continuous 2/4, Past Perfect 3/5, Past Simple и формы глагола 5/7,
   Past Perfect Continuous 3/4, Word formation 25–29 11/14 + ошибки из Error Log 18.11 (домашка 16 Nov).
   Все предложения и тексты новые: проверено, что их не было в прошлых домашках и на сайте Арины.
   Одна отправка на задание; результат уходит учителю (test_id hw1118-*). */
(function(){
'use strict';
const L='Homework · 18 Nov';
const K=w=>' <span class="r5Key">'+w+'</span>';

const PC=[
["While I ___ to school, I met my old friend."+K('WALK'),["was walking","walked","had walked","were walking"],0,"While — процесс, его прервало короткое действие (met) → was + -ing. I → was."],
["When the teacher came in, we ___ talking and opened our books."+K('STOP'),["were stopping","stopped","had stopped","was stopping"],1,"Действия идут по очереди: вошла → замолчали → открыли → Past Simple."],
["At 8 p.m. yesterday my brother ___ a film."+K('WATCH'),["watched","had watched","was watching","has watched"],2,"Точный момент в прошлом (at 8 p.m. yesterday) — действие было в процессе → was + -ing."],
["The phone rang while she ___ a shower."+K('HAVE'),["had","was having","has had","were having"],1,"Звонок прервал процесс (while) → was having. She → was."],
["Yesterday I ___ home, had dinner and went to bed."+K('COME'),["was coming","had come","come","came"],3,"Цепочка действий одно за другим → Past Simple: came, had, went."],
["When we looked out of the window, it ___ heavily."+K('RAIN'),["rained","was raining","had rained","is raining"],1,"Выглянули — а дождь в этот момент идёт → was raining."],
["My grandparents ___ in Kazan from 1990 to 2005."+K('LIVE'),["were living","had lived","lived","have lived"],2,"Законченный период с датами (from … to …) → Past Simple."],
["What ___ you ___ at 5 o’clock yesterday? I called you twice!"+K('DO'),["did … do","were … doing","had … done","have … done"],1,"Вопрос про процесс в конкретный момент (at 5 o’clock yesterday) → were you doing."],
["While Mum was cooking dinner, Dad ___ the table."+K('LAY'),["laid","lay","had laid","was laying"],3,"Два процесса одновременно (while … ) → оба в Past Continuous. Lay — накрывать (на стол)."],
["She ___ her leg when she was skiing in the mountains."+K('BREAK'),["was breaking","broke","had broken","broken"],1,"Короткое действие на фоне процесса (was skiing) → Past Simple: break – broke – broken."],
["Last summer we often ___ to the river."+K('GO'),["went","were going","had gone","goes"],0,"Повторялось в прошлом (often) → Past Simple: go – went."],
["I didn’t hear the doorbell because I ___ to music."+K('LISTEN'),["listened","had listened","have listened","was listening"],3,"В момент звонка шёл процесс → was listening."],
["The sun ___ and the birds were singing when I woke up."+K('SHINE'),["shone","was shining","had shone","shined"],1,"Описание фона в момент пробуждения → was shining (как were singing)."],
["Tchaikovsky ___ the music for “Swan Lake” in 1875–1876."+K('WRITE'),["wrote","was writing","had written","has written"],0,"Факт биографии с датами → Past Simple: write – wrote – written."]
];

const PP=[
["When we arrived at the station, the train ___ ."+K('LEAVE'),["left","was leaving","had left","has left"],2,"Поезд ушёл раньше, чем мы приехали → had + V3: leave – left – left."],
["She ___ never ___ the sea before she went to Sochi last year."+K('SEE'),["has … seen","had … seen","did … see","was … seeing"],1,"До другого прошлого (went last year) → had never seen."],
["After he ___ his homework, he went out for a walk."+K('FINISH'),["had finished","has finished","was finishing","finishes"],0,"Сначала сделал, потом пошёл → had finished."],
["Yesterday I ___ my grandmother."+K('VISIT'),["had visited","have visited","visited","was visited"],2,"Одно действие, второго прошлого нет → Past Simple. Had здесь не нужен."],
["By the end of the lesson we ___ all the exercises."+K('DO'),["did","had done","have done","were doing"],1,"By + момент в прошлом → к этому моменту уже сделали → had done."],
["He was tired because he ___ for hours."+K('RUN'),["had been running","has been running","had run","was run"],0,"Долго бежал до момента в прошлом (was tired) → had been + -ing."],
["They ___ for two hours when the rain finally stopped."+K('WALK'),["were walking","had been walking","have been walking","walked"],1,"Сколько длилось до другого прошлого (for two hours … when) → had been walking."],
["When I came home, I saw that someone ___ the window."+K('BREAK'),["broke","has broken","was breaking","had broken"],3,"Окно разбили раньше, чем я пришла → had broken."],
["How long ___ you ___ English before you started the EGE course?"+K('LEARN'),["have … been learning","had … been learning","did … learn","were … learning"],1,"Как долго длилось до другого прошлого (before you started) → had you been learning."],
["Her eyes were red: she ___ ."+K('CRY'),["had been crying","had cried","has been crying","cried"],0,"Видно следы долгого процесса в прошлом → had been crying."],
["I recognised him at once although I ___ him for years."+K('NOT SEE'),["didn’t see","haven’t seen","hadn’t seen","wasn’t seeing"],2,"Годами не видела — до момента, когда узнала → hadn’t seen."],
["First he opened the door, then he ___ on the light."+K('TURN'),["had turned","turned","was turning","has turned"],1,"Ловушка: first … then — действия по очереди → Past Simple, had не нужен."],
["The film ___ already ___ when we got to the cinema."+K('START'),["has … started","was … starting","did … start","had … started"],3,"Фильм начался раньше, чем мы пришли (already) → had already started."],
["She ___ in the company for ten years when she became its director."+K('WORK'),["had been working","has been working","was working","worked"],0,"Десять лет до другого прошлого (became) → had been working."]
];

/* ошибки из домашки 16 Nov (Error Log 18.11): -less / -ful, множественное число, these / those, took, is called, its / it’s, is considered — новые предложения на те же ловушки */
const MS=[
["There are ___ stars in the sky tonight — nobody can count them."+K('COUNT'),["countful","countless","counting","counted"],1,"Нельзя сосчитать → без (-less): countless. Слова countful нет."],
["This old phone is ___: it doesn’t work at all."+K('USE'),["useful","useless","using","user"],1,"Не работает → без пользы → -less."],
["The museum has two ___ in the city centre."+K('LOCATE'),["location","locations","locate","locating"],1,"Two → много → locations. После the neighbouring, several, many тоже проверяй -s."],
["Look at ___ birds on the roof right here!"+K('THIS'),["those","this","these","that"],2,"Right here — близко, птиц много → these. Those — далеко."],
["Scientists found ancient coins near Novgorod. ___ coins were more than 800 years old."+K('THIS'),["These","Those","This","That"],0,"Речь о только что названных монетах в тексте → These (как These texts в ЕГЭ)."],
["The bridge was opened in 1936. It ___ four years to build it."+K('TAKE'),["takes","took","has taken","is taking"],1,"Рассказ о прошлом (was opened in 1936) → took. Takes — только про настоящее."],
["In Russia, this holiday ___ Maslenitsa."+K('CALL'),["was called","calls","is called","called"],2,"Факт, который верен и сейчас → Present Passive: is called. Was called — только если сейчас уже не так."],
["Now this square ___ Red Square, but centuries ago it had a different name."+K('CALL'),["is called","was called","calls","has called"],0,"Now → настоящее: is called. Ловушка: centuries ago относится ко второй части."],
["Есть ли ошибка? The city is famous for it’s white nights."+K('ITS'),["Верно","Ошибка"],1,"Чьи белые ночи? Города → its. It’s = it is."],
["Есть ли ошибка? It’s one of the oldest cities in Russia."+K('ITS'),["Верно","Ошибка"],0,"It is one of the oldest … → It’s. Верно."],
["Есть ли ошибка? She considered to be the best skater of her generation."+K('CONSIDER'),["Верно","Ошибка"],1,"Её считают → она is considered. Без is — будто она сама «считала»."],
["Есть ли ошибка? Kizhi is considered one of the most beautiful places in Karelia."+K('CONSIDER'),["Верно","Ошибка"],0,"Его считают → is considered. Верно."]
];

/* ЕГЭ 19–24 · только прошедшие времена · 2 текста (написаны для Арины) */
const SG=[
{"title":"A trip to Kizhi · 19–21","start":19,"lines":[
 ["Last summer my family ___ to Karelia.","GO",["went"],""],
 ["We visited Kizhi, a small island on Lake Onega. I had never ___ such beautiful wooden churches before.","SEE",["seen"],""],
 ["While we ___ around the island, it started to rain.","WALK",["were walking"],""]]},
{"title":"A trip to Kizhi · 22–24","start":22,"lines":[
 ["Luckily, by that time my dad ___ umbrellas from the car.","BRING",["had brought"],""],
 ["We ___ the island happy, though a bit wet.","LEAVE",["left"],""],
 ["We ___ back to Petrozavodsk late in the evening.","COME",["came"],""]]},
{"title":"The first flight · 19–21","start":19,"lines":[
 ["In 1903 the Wright brothers ___ the first successful flight in history.","MAKE",["made"],""],
 ["Their plane ___ in the air for only 12 seconds.","STAY",["stayed"],""],
 ["Before that, the brothers ___ for several years to build a reliable machine.","WORK",["had been working","had worked"],""]]},
{"title":"The first flight · 22–24","start":22,"lines":[
 ["At that time many people ___ that flying machines were impossible.","THINK",["thought"],""],
 ["But when the newspapers ___ about the flight, everything changed.","WRITE",["wrote"],""],
 ["Soon the brothers ___ famous all over the world.","BECOME",["became"],""]]}
];

/* ЕГЭ 25–29 · словообразование · 2 текста (написаны для Арины) */
const SW=[
{"title":"The Kungur Ice Cave · 25–29","start":25,"lines":[
 ["The Kungur Ice Cave in the Perm region is one of the most ___ natural sights in the Urals.","ATTRACT",["attractive"],""],
 ["Its total ___ is about 5.7 kilometres, but tourists can see only part of it.","LONG",["length"],""],
 ["Every year thousands of ___ come to see its ice halls and underground lakes.","VISIT",["visitors"],""],
 ["The temperature inside stays below zero, so you can ___ see ice even in summer.","EASY",["easily"],""],
 ["Guides do a lot for the ___ of the cave and ask tourists not to touch the ice.","PROTECT",["protection"],""]]},
{"title":"A young inventor · 25–29","start":25,"lines":[
 ["Fifteen-year-old Maxim has always been ___ in robots.","INTEREST",["interested"],""],
 ["Last year he built a robot that helps ___ people with their shopping.","ELDER",["elderly"],""],
 ["His ___ was shown at a science fair in Moscow.","INVENT",["invention"],""],
 ["The judges were ___ by how simple and useful it was.","IMPRESS",["impressed"],""],
 ["Maxim says that ___ is the most important quality for an inventor.","PATIENT",["patience"],""]]}
];

W3_TASKS['hw1118-pc']={label:L,part:'C',title:'Past Simple или Past Continuous? · 14',sub:'14 вопросов · процесс или факт?',type:'mc',
 intro:'Спроси себя: в этот момент шёл процесс (while, at 8 p.m. yesterday, когда что-то случилось) → was / were + -ing. Факт, цепочка действий, даты → Past Simple.',items:PC};
W3_TASKS['hw1118-pp']={label:L,part:'C',title:'Past Perfect · Past Perfect Continuous · 14',sub:'14 вопросов · что было раньше?',type:'mc',
 intro:'Had + V3 — только если одно прошлое действие было раньше другого (before, by, already, when I came). Как долго до этого → had been + -ing. Действия по очереди → Past Simple.',items:PP};
W3_TASKS['hw1118-mist']={label:L,part:'C',title:'Mistakes · 16 Nov · 12',sub:'12 вопросов · те же ловушки, новые предложения',type:'mc',
 intro:'Это ошибки из прошлой домашки. Перед ответом: -less или -ful? одно или много? здесь или там? сейчас или в прошлом? чьё (its) или it is?',items:MS};
W3_TASKS['hw1118-g19']={label:L,tight:true,big:true,part:'C',title:'ЕГЭ 19–24 · прошедшие времена · 2 текста',sub:'A trip to Kizhi · The first flight · 12 пропусков · по 3 на экране',type:'gap',
 intro:'Алгоритм: когда? один раз, процесс или раньше другого? Неправильный глагол — вспомни все три формы.',sets:SG};
W3_TASKS['hw1118-w25']={label:L,tight:true,big:true,part:'C',title:'ЕГЭ 25–29 · словообразование · 2 текста',sub:'The Kungur Ice Cave · A young inventor · 10 пропусков',type:'gap',
 intro:'Сначала реши, какая часть речи нужна в пропуске, и только потом образуй слово. Проверь число и приставку.',sets:SW};
const HW=['hw1118-pc','hw1118-pp','hw1118-mist','hw1118-g19','hw1118-w25'];
HW.forEach(id=>{if(!ARINA_ASSIGNED_DEFAULT.includes(id))ARINA_ASSIGNED_DEFAULT.push(id)});
(window.ARINA_HW_BATCHES=window.ARINA_HW_BATCHES||[]).push(HW); /* новое — сверху */
try{if(!localStorage.getItem('arinaHwAdd-20261118')){const v=JSON.parse(localStorage.getItem('arinaAssigned')||'null');if(Array.isArray(v)){HW.forEach(id=>{if(!v.includes(id))v.push(id)});localStorage.setItem('arinaAssigned',JSON.stringify(v))}localStorage.setItem('arinaHwAdd-20261118','1')}}catch(e){}
})();
