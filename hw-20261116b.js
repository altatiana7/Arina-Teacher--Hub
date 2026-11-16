/* 16.11.2026 (2) · Homework к уроку 18 ноября, вторая часть — из урока 9 ноября (неделя 4 · урок 5), выдано Татьяной 16.11.
   Проверено на повторы со всеми прошлыми домашками Арины и с уроком 16.11:
   · Error Hunter · found / founded · its / it’s · 14 — повторов нет;
   · Word formation · Who or what? · 14 — повторов нет;
   · ЕГЭ 19–24 · ФИПИ · 2 текста и ЕГЭ 25–29 · ФИПИ · 2 текста — в домашке не было (были только на уроке 9.11).
   «Active or Passive? · 14» не выдан: 8 из 14 предложений уже были в домашке.
   Одна отправка на задание; результат уходит учителю (test_id hw1116-*). */
(function(){
'use strict';
const L='Homework · 16 Nov';
const K=w=>' <span class="r5Key">'+w+'</span>';
const EH=[
["Есть ли ошибка? Moscow State University was found in 1755 by the famous scholar Mikhail Lomonosov.",["Верно", "Ошибка"],1,"Университет основали → was founded."],
["Есть ли ошибка? Catherine the Great founded it in 1764, but it was opened to the public in 1852 only.",["Верно", "Ошибка"],0,"Екатерина основала (Active: founded), музей открыли (Passive: was opened). Всё верно."],
["Есть ли ошибка? Ferapontov monastery was founded in 1398.",["Верно", "Ошибка"],0,"Монастырь основали → was founded. Верно."],
["Есть ли ошибка? The Met is an encyclopedic museum, found in 1870.",["Верно", "Ошибка"],1,"Музей, основанный в 1870 → founded."],
["Есть ли ошибка? Now tourists can enjoy it’s amazing frescoes, created in 1502.",["Верно", "Ошибка"],1,"Чьи фрески? Монастыря → its. It’s = it is."],
["Есть ли ошибка? It’s a beautiful Italian city with a lot of historical buildings.",["Верно", "Ошибка"],0,"It’s = It is a beautiful city. Верно."],
["Есть ли ошибка? This event is well-known for it’s colourful and elaborate masks.",["Верно", "Ошибка"],1,"Чьи маски? → its masks."],
["Есть ли ошибка? He considered to be one of the greatest players of all time.",["Верно", "Ошибка"],1,"Его считают → He is considered."],
["Есть ли ошибка? They are considered one of the most beautiful mountain ranges in Russia.",["Верно", "Ошибка"],0,"Горы считают красивыми → are considered. Верно."],
["Есть ли ошибка? Many tourists are considered Central Park to be a truly beautiful place.",["Верно", "Ошибка"],1,"Туристы сами считают → Many tourists consider (Active)."],
["Есть ли ошибка? One of such scenic routes can be find in Norway – it’s the Flam railway.",["Верно", "Ошибка"],1,"После can be — V3: can be found."],
["Есть ли ошибка? Instant tea appeared in the 1930s, but its commercial production started only in the 1940s.",["Верно", "Ошибка"],0,"Чьё производство? Чая → its. Верно."],
["Есть ли ошибка? Yuzhno-Sakhalinsk was founded in 1882.",["Верно", "Ошибка"],0,"Город основали → was founded. Верно."],
["Есть ли ошибка? It’s considered a sacred site by the Aborigines.",["Верно", "Ошибка"],0,"It is considered — его считают священным. Верно."]
];
const WF=[
["His grandfather was a famous ___ and the rector of Saint Petersburg State University."+K("BOTANY"),["botanical", "botanist", "botany", "botanic"],1,"A famous … — человек → -ist."],
["Poetic ___ came naturally to him."+K("INSPIRE"),["inspiring", "inspired", "inspirer", "inspiration"],3,"Poetic + ___ → существительное «вдохновение» → -ation."],
["His great ___ in the Summit Series in 1972 earned him a massive fan base."+K("PERFORM"),["performed", "performing", "performance", "performer"],2,"His great … — что? Выступление → -ance."],
["His mother is a piano teacher and his father is a pianist and a ___."+K("COMPOSE"),["composed", "composer", "composition", "composing"],1,"Pianist and a … — человек → -er."],
["In 1990 young Denis won a prize at the New Names Charitable Foundation ___ in Irkutsk."+K("COMPETE"),["competing", "competitor", "competition", "competitive"],2,"Приз на чём? На конкурсе → -ition."],
["When he was 9 years old, his mother saw an ___ for group tennis lessons."+K("ADVERTISE"),["advertiser", "advertisement", "advertising", "advertise"],1,"An … — одно существительное «объявление» → -ment."],
["In December 2018 Shipulin announced his ___ from sports."+K("RETIRE"),["retiring", "retirement", "retired", "retiree"],1,"His … — существительное «уход» → -ment."],
["He is considered to be the ___ of the lyrical landscape style."+K("CREATE"),["creator", "creative", "creation", "creativity"],0,"The … of the style — человек, который создал → -or."],
["Its ___ is the City of Vancouver."+K("OWN"),["owner", "own", "owned", "ownership"],0,"Кто владеет? → owner."],
["It can be very helpful for your personal ___."+K("DEVELOP"),["developed", "development", "developer", "developing"],1,"Your personal … — существительное «развитие» → -ment."],
["You may become interested in a career of an ___."+K("ILLUSTRATE"),["illustration", "illustrative", "illustrator", "illustrated"],2,"A career of an … — профессия, человек → -or."],
["Libraries of the ancient Roman Empire had ___ manuscripts of the best scholars of that time."+K("COUNT"),["countless", "countful", "countable", "counted"],0,"Бесчисленные — «без счёта» → -less (как priceless). Countful не бывает."],
["The Paris Exposition of 1878 gave Yablochkov a great opportunity to make a spectacular ___ of his candle."+K("DEMONSTRATE"),["demonstrating", "demonstrative", "demonstrator", "demonstration"],3,"A spectacular … — существительное «показ» → -ation."],
["There animals show off their ___ and athleticism."+K("INTELLIGENT"),["intelligent", "intellect", "intelligently", "intelligence"],3,"Their … and athleticism — существительное → -ence."]
];
const SG=[{"title": "Oleg Protopopov / The Rosetta Stone · 19–21", "start": 19, "lines": [["Have you heard about Oleg Protopopov? He was born in 1932 and he was one of the ___ figure skaters of his time.", "GOOD", ["best"], ""], ["He ___ two Olympic gold medals.", "WIN", ["won"], ""], ["He was also the ___ sportsman to show a lyrical programme in figure skating. Russian people are certainly proud of this outstanding sportsman.", "ONE", ["first"], ""]]}, {"title": "Oleg Protopopov / The Rosetta Stone · 22–24", "start": 22, "lines": [["We learn about our past thanks to the findings of archaeologists. The Rosetta stone is one of them. It ___ in 1799.", "FIND", ["was found"], ""], ["Thanks to this finding, scientists could start ___ the language of ancient Egyptians.", "STUDY", ["studying"], ""], ["This happened so because there were texts on the stone. ___ texts were both in Greek and the ancient Egyptian language.", "THIS", ["These"], ""]]}, {"title": "Beginnings of Russian railways / White nights in Norway · 19–21", "start": 19, "lines": [["In the middle of the 19th century, the Russian Empire was so big that the necessity of creating a railway system to connect the central regions with the eastern territories became obvious. The ___ public railway in Russia connected Saint Petersburg with the Emperor’s residence in Tsarskoe Selo.", "ONE", ["first"], ""], ["It was 27 kilometers long and it ___ about two years to build it.", "TAKE", ["took"], ""], ["At that time nobody knew that in the future Russia ___ one of the longest and best railway systems in the world.", "HAVE", ["would have"], ""]]}, {"title": "Beginnings of Russian railways / White nights in Norway · 22–24", "start": 22, "lines": [["Daylight in Norway varies greatly. Though winters are quite dark and gloomy, summers make up for it by the season of white nights. From May to July the sun ___ below the horizon.", "NOT SET", ["does not set", "doesn't set"], ""], ["Thus, there is only twilight instead of complete darkness. This phenomenon ___ white nights.", "CALL", ["is called"], ""], ["It is interesting that in summers many Norwegians enjoy ___ a four-week holiday which gives them plenty of time to hunt, fish or simply walk.", "HAVE", ["having"], ""]]}];
const SW=[{"title": "GeoSure Global · 25–29", "start": 25, "lines": [["GeoSure Global is a great mobile app for travellers. It is ___ a revolutionary safety service aimed at ensuring that your trips involve fewer risks.", "CERTAIN", ["certainly"], ""], ["GeoSure Global provides safety ratings for ___ neighborhoods all over the world.", "COUNT", ["countless"], ""], ["These ratings offer a general view of how safe an area is and are broken down into lots of smaller categories. If you’re travelling to a foreign country as a ___, you may be at greater risk of crimes like pickpocketing.", "TOUR", ["tourist"], ""], ["The ___ app updates as you move around, letting you explore a city.", "AMAZE", ["amazing"], ""], ["Thus, you will have constant up-to-date readings on the security and safety of the area around you and the neighbouring ___. It’s a great tool for any traveller to have.", "LOCATE", ["locations"], ""]]}, {"title": "Rovos Rail · 25–29", "start": 25, "lines": [["If you dislike travelling by train, you will probably change your mind after trying one of the scenic rides the world has to offer. One of such rides which are ___ to forget is the Rovos Rail in South Africa.", "POSSIBLE", ["impossible"], ""], ["The train has several routes. You will pass through a number of African countries and admire the ___ of their landscapes.", "DIVERSE", ["diversity"], ""], ["You will see wildlife national parks, historical battle fields and ___ cities.", "FASCINATE", ["fascinating"], ""], ["Onboard, the passengers can use various facilities like a dining car, luxury sleeping cabins and themed ___.", "ENTERTAIN", ["entertainment"], ""], ["All types of cabins have ensuite showers, sinks and restrooms. With its ___ service, Rovos Rail is truly one of the greatest train journeys in the world.", "EXCEPTION", ["exceptional"], ""]]}];
W3_TASKS['hw1116b-eh']={label:L,part:'C',title:'Error Hunter · found / founded · its / it’s · 14',sub:'14 предложений · верно или ошибка',type:'mc',
 intro:'Основали — found – founded – founded, нашли — find – found – found. Its = чей? It’s = it is. Его считают — is considered.',items:EH};
W3_TASKS['hw1116b-wfq']={label:L,part:'C',title:'Word formation · Who or what? · 14',sub:'14 предложений · человек или предмет?',type:'mc',
 intro:'Сначала реши: нужен человек (-er, -or, -ist) или что-то (-tion, -ment, -ance, -ence)? Потом выбирай слово.',items:WF};
W3_TASKS['hw1116b-g19']={label:L,tight:true,big:true,part:'C',title:'ЕГЭ 19–24 · ФИПИ · 2 текста',sub:'Oleg Protopopov / The Rosetta Stone · Russian railways / White nights in Norway · 12 пропусков · по 3 на экране',type:'gap',
 intro:'Алгоритм: личная форма? актив или пассив? когда? один или много?',sets:SG};
W3_TASKS['hw1116b-w25']={label:L,tight:true,big:true,part:'C',title:'ЕГЭ 25–29 · ФИПИ · 2 текста',sub:'GeoSure Global · Rovos Rail · 10 пропусков',type:'gap',
 intro:'Сначала реши, какая часть речи нужна в пропуске, и только потом образуй слово. Проверь число и приставку.',sets:SW};
const HW=['hw1116b-eh','hw1116b-wfq','hw1116b-g19','hw1116b-w25'];
HW.forEach(id=>{if(!ARINA_ASSIGNED_DEFAULT.includes(id))ARINA_ASSIGNED_DEFAULT.push(id)});
(window.ARINA_HW_BATCHES=window.ARINA_HW_BATCHES||[]).push(HW); /* новое — сверху */
try{if(!localStorage.getItem('arinaHwAdd-20261116b')){const v=JSON.parse(localStorage.getItem('arinaAssigned')||'null');if(Array.isArray(v)){HW.forEach(id=>{if(!v.includes(id))v.push(id)});localStorage.setItem('arinaAssigned',JSON.stringify(v))}localStorage.setItem('arinaHwAdd-20261116b','1')}}catch(e){}
})();
