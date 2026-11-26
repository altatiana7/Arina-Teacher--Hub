
(function(){
'use strict';
const id='hw1126-errors-reading';
const data={
 "vocabulary": [
  {
   "title": "A school scholarship",
   "sentences": [
    [
     "Maya decided to ___ a scholarship that would cover her course fees.",
     [
      "sign up",
      "apply for",
      "take part",
      "attend"
     ],
     1,
     "Apply for a scholarship — подать заявку на стипендию."
    ],
    [
     "She ___ whether students from her school were eligible.",
     [
      "worried",
      "looked",
      "wondered",
      "reminded"
     ],
     2,
     "Wonder whether — задаваться вопросом. После worry в таком значении обычно стоит about."
    ],
    [
     "___ the deadline was close, she still had time to complete the form.",
     [
      "Although",
      "Despite",
      "However",
      "Moreover"
     ],
     0,
     "Although вводит придаточное с подлежащим и глаголом."
    ],
    [
     "Her tutor ___ her to attach two references to the application.",
     [
      "said",
      "spoke",
      "talked",
      "told"
     ],
     3,
     "Tell somebody to do something — сказать кому-то, чтобы он что-то сделал."
    ],
    [
     "Luckily, Maya ___ to upload everything before the website closed.",
     [
      "succeeded",
      "achieved",
      "managed",
      "reached"
     ],
     2,
     "Manage to do — суметь сделать. Succeed требует in + -ing."
    ],
    [
     "Her parents had no ___ to her applying to a university abroad.",
     [
      "attention",
      "objection",
      "exception",
      "impression"
     ],
     1,
     "Have no objection to + -ing — не возражать против чего-либо."
    ],
    [
     "A few days later, she ___ an interview on campus as part of the selection process.",
     [
      "attended",
      "applied",
      "entered",
      "enrolled"
     ],
     0,
     "Attend an interview — присутствовать на собеседовании. Apply for — подать заявку."
    ]
   ]
  },
  {
   "title": "Saving the school exhibition",
   "sentences": [
    [
     "On the morning of the exhibition, the lights in the main hall ___ working.",
     [
      "passed",
      "prevented",
      "refused",
      "stopped"
     ],
     3,
     "Stop working — перестать работать. Fail/refuse обычно требуют to work."
    ],
    [
     "A technician ___ the faulty switch before the first visitors arrived.",
     [
      "repeated",
      "repaired",
      "replied",
      "returned"
     ],
     1,
     "Repair a switch — починить выключатель. Repeat — повторять."
    ],
    [
     "He asked the students to ___ a close look at the temporary wiring before switching anything on.",
     [
      "make",
      "give",
      "take",
      "do"
     ],
     2,
     "Take a close look at — внимательно посмотреть на."
    ],
    [
     "One volunteer could ___ hear the instructions above the sound of the repair work.",
     [
      "hard",
      "poorly",
      "hardly",
      "highly"
     ],
     2,
     "Hardly hear — едва слышать. Hard — усердно или сильно."
    ],
    [
     "The team looked forward to ___ the doors and welcoming its first guests.",
     [
      "open",
      "opening",
      "opened",
      "be opening"
     ],
     1,
     "В look forward to слово to — предлог, после него ставим -ing."
    ],
    [
     "Once inside, visitors paid close ___ to the students’ descriptions of each exhibit.",
     [
      "attention",
      "objection",
      "notice",
      "interest"
     ],
     0,
     "Pay attention to — обращать внимание на."
    ],
    [
     "By the end of the day, the exhibition had ___ enough money to replace all the lights.",
     [
      "risen",
      "lifted",
      "grown",
      "raised"
     ],
     3,
     "Raise money — собирать деньги. Rise не принимает прямого дополнения."
    ]
   ]
  },
  {
   "title": "A weekend by the coast",
   "sentences": [
    [
     "Our geography club arranged a ___ tour of the coastal nature reserve with a local ranger.",
     [
      "directed",
      "guided",
      "watched",
      "driven"
     ],
     1,
     "A guided tour — экскурсия с гидом."
    ],
    [
     "The ___ from our school to the reserve took two hours by coach.",
     [
      "voyage",
      "travel",
      "journey",
      "tour"
     ],
     2,
     "Journey from A to B — дорога из одного места в другое. Travel в общем смысле неисчисляемое."
    ],
    [
     "Before we left, the teacher ___ us to bring a waterproof jacket.",
     [
      "remembered",
      "recalled",
      "recollected",
      "reminded"
     ],
     3,
     "Remind somebody to do — напомнить кому-то сделать."
    ],
    [
     "As we walked along the shore, I ___ that some of the birds had coloured rings on their legs.",
     [
      "noticed",
      "watched",
      "looked out",
      "stared"
     ],
     0,
     "Notice that … — заметить, что… Look at и stare at требуют предлога."
    ],
    [
     "The ranger ___ doing a short survey before lunch, and everyone agreed.",
     [
      "offered",
      "promised",
      "suggested",
      "told"
     ],
     2,
     "Suggest doing — предложить сделать. Offer и promise требуют to do."
    ],
    [
     "I had to ___ that I knew very little about the birds we had come to study.",
     [
      "admire",
      "allow",
      "admit",
      "approve"
     ],
     2,
     "Admit that … — признать факт. Admire — восхищаться."
    ],
    [
     "By the time we left, I had decided to ___ part in another survey the following month.",
     [
      "have",
      "do",
      "keep",
      "take"
     ],
     3,
     "Take part in — принимать участие в."
    ]
   ]
  },
  {
   "title": "Learning a new skill",
   "sentences": [
    [
     "At first, Leo found it difficult to ___ the rules his chess coach had explained.",
     [
      "remind",
      "remember",
      "recognise",
      "regard"
     ],
     1,
     "Remember rules — помнить правила. Remind требует, например, somebody of something."
    ],
    [
     "His coach suggested that he get into the ___ of writing down one mistake after every game.",
     [
      "custom",
      "tradition",
      "routine",
      "habit"
     ],
     3,
     "Get into the habit of doing — выработать привычку."
    ],
    [
     "When a game went badly, Leo asked his coach to ___ him what he had done wrong.",
     [
      "tell",
      "explain",
      "say",
      "speak"
     ],
     0,
     "Tell somebody the reason. Explain требует explain the reason to somebody."
    ],
    [
     "He soon ___ that he often moved too quickly when he was worried.",
     [
      "realised",
      "referred",
      "reminded",
      "regarded"
     ],
     0,
     "Realise that … — понять, осознать. Контекст описывает новое наблюдение."
    ],
    [
     "The coach showed him how to ___ a decision even when the clock was running down.",
     [
      "do",
      "take up",
      "make",
      "carry"
     ],
     2,
     "Make a decision — принять решение."
    ],
    [
     "New routines kept him calm under pressure, and he finally ___ in beating a more experienced player.",
     [
      "managed",
      "achieved",
      "accomplished",
      "succeeded"
     ],
     3,
     "Succeed in doing. Manage to do. Achieve + результат."
    ],
    [
     "When his friends asked for his secret, he told them that they could ___ progress by practising regularly.",
     [
      "make",
      "do",
      "take",
      "perform"
     ],
     0,
     "Make progress — добиваться прогресса."
    ]
   ]
  }
 ],
 "errors": [
  {
   "title": "Времена и пассив",
   "items": [
    [
     "The old bridge ___ thirty years ago.",
     [
      "built",
      "was built",
      "is built",
      "was build"
     ],
     1,
     "Past Simple Passive: was + V3. Ago задаёт прошедшее время."
    ],
    [
     "The plane ___ in the air for exactly twelve seconds and then landed safely.",
     [
      "had been staying",
      "was staying",
      "stayed",
      "stays"
     ],
     2,
     "Два законченных действия в прошлом, связанные and then."
    ],
    [
     "By the time the coach arrived, the team ___ for two hours. Their shirts were soaking wet.",
     [
      "had been training",
      "has been training",
      "trains",
      "is training"
     ],
     0,
     "Past Perfect Continuous подчёркивает длительность процесса до момента в прошлом."
    ],
    [
     "I’ll give you the address when I ___ home this evening.",
     [
      "will get",
      "got",
      "gets",
      "get"
     ],
     3,
     "После when в придаточном времени с будущим значением используем Present Simple."
    ],
    [
     "If it ___ tomorrow, we’ll move the match indoors.",
     [
      "will rain",
      "rained",
      "rains",
      "rain"
     ],
     2,
     "В условии с if используем Present Simple, если основное действие в будущем."
    ],
    [
     "The museum is famous for ___ collection of ancient coins.",
     [
      "it’s",
      "its",
      "it is",
      "their"
     ],
     1,
     "Its — притяжательная форма. It’s = it is или it has."
    ],
    [
     "The painting ___ one of the museum’s finest works.",
     [
      "considers",
      "is considering",
      "is considered",
      "has considered"
     ],
     2,
     "Is considered + существительное — считается. To be перед именной частью можно опустить."
    ]
   ]
  },
  {
   "title": "Словообразование",
   "items": [
    [
     "The total ___ of the tunnel is just over two kilometres. (LONG)",
     [
      "long",
      "longer",
      "length",
      "longly"
     ],
     2,
     "После the total нужно существительное length."
    ],
    [
     "The castle attracts thousands of ___ every year. (VISIT)",
     [
      "visit",
      "visitors",
      "visiting",
      "visits"
     ],
     1,
     "Речь о людях, поэтому visitors во множественном числе."
    ],
    [
     "The app shows bus stops and other useful ___ near your hotel. (LOCATE)",
     [
      "locations",
      "location",
      "located",
      "locate"
     ],
     0,
     "Other и контекст нескольких мест требуют locations."
    ],
    [
     "The new entrance makes it easier for ___ visitors to reach the upper floor. (ELDER)",
     [
      "eldest",
      "elders",
      "elderly",
      "elderliness"
     ],
     2,
     "Elderly — прилагательное о пожилых людях."
    ],
    [
     "The library holds ___ examples of early printing. (COUNT)",
     [
      "counting",
      "countless",
      "counted",
      "countful"
     ],
     1,
     "Countless — бесчисленные."
    ]
   ]
  }
 ],
 "reading11": [
  {
   "topic": "science",
   "n": 6,
   "title": "Do jellyfish sleep?",
   "p": [
    "Worms and fish do it. Birds and bees do it. But do jellyfish fall asleep? It was after midnight {{A}} where the jellyfish were kept. They left the lights off and walked through the room by the glow of their cellphones. The students did not tell anyone that they were doing this. The secret they were keeping was a “totally crazy” experiment aimed at finding out whether jellyfish sleep.",
    "A few weeks before, {{B}} whether jellyfish needed to sleep. “Of course not,” said one of them. “Sleep helps {{C}}. Jellyfish are so simple they don’t even have brains. How could they possibly share the need to sleep?” The others weren’t so sure, but they wanted to find out.",
    "The three students designed an experiment to test different behaviors and see if the jellyfish were asleep. They watched the animals to see how they moved, and {{D}} when they were resting. It turned out that the jellyfish moved about 30 percent less at night. It was also harder to get their attention.",
    "Months of late-night studying led to amazing results. Young scientists reported {{E}} sleeplike behavior. This made it the first animal without a brain known to do so. The results suggest {{F}} life, as the jellyfish group of animals first arose about 700 million years ago, and has stuck with us ever since."
   ],
   "parts": [
    "if they could get the jellies’ attention",
    "how talkative they were in a situation close to",
    "when three science students crept into the lab",
    "that sleep evolved early in the history of animal",
    "strengthen memory and keep the brain healthy",
    "that the upside-down jellyfish Cassiopea showed",
    "the students were having coffee and started debating"
   ],
   "a": [
    3,
    7,
    5,
    1,
    6,
    4
   ]
  },
  {
   "topic": "environment",
   "n": 26,
   "title": "Being eco-friendly",
   "p": [
    "These days, pollution, global warming, and limited resources are a big concern. Many people feel hopeless, as though nothing they do will have any effect on a problem that has grown so large. However, there are lots of things {{A}} on their negative impact on the environment. Although some of these things are big things involving home construction or the choice of a motor vehicle, most of them are small things. They can make a huge difference {{B}}.",
    "The best way to appreciate the environment is to be more aware of it. Instead of sitting indoors, it is always better to get up and get outside, whether that means walking, biking, kayaking, or some other fun outdoor activity.",
    "Today, there is no reason not to use energy-efficient lights at home. New energy-efficient bulb technology means {{C}} and with many functions in order to save electricity and money. New energy-efficient appliances are also everywhere. There are dishwashers and washing machines that use less water, {{D}}. These appliances save energy without sacrificing function.",
    "Paper and plastic bags are often free of charge when people shop, {{E}} the environment. Scientists have found that sea turtles often encounter plastic bags in ocean waters and eat them, mistaking them for jellyfish. So, it is wise to refuse paper or plastic {{F}} instead."
   ],
   "parts": [
    "and make an investment in reusable bags",
    "that people can do every day to cut down",
    "if one remembers to do them every day",
    "but they are killing animals and destroying",
    "but eco-friendly bulbs are very popular",
    "that one can find bulbs of different colours",
    "and there are fridges that use less electricity"
   ],
   "a": [
    2,
    3,
    6,
    7,
    4,
    1
   ]
  }
 ],
 "reading12": [
  {
   "topic": "food",
   "n": 5,
   "title": "College food",
   "p": [
    "Choosing a college? Well, you may want to look more closely at what’s being served. Not just in the classrooms but also the cafeterias.",
    "What you eat and drink in college can make a big difference during college and well beyond. College may be the first time that you are away from Mommy and Daddy and are making decisions about what to put in your mouth on your own. It is when you are potentially programming some of your habits for life. You may also still be growing in college, which makes good nutrition especially important. According to a study published in the journal Preventive Medicine, overweight and obesity rates increase by more than 15% for first-year college students.",
    "Healthy may not be the first thing you think of when you picture college eating. Instead, it may be late-night takeout, food from bags, ketchup as a vegetable, cereal for dinner and Nutella on everything. Oh, and when the cafeteria’s vegetable-of-the-day is mushroom, it may actually be “mush” served in a room. The same study found that 95% of college students fail to eat the recommended amount of fruits and vegetables, and more than 60% report not getting enough physical activity.",
    "That is why the Healthier Campus Initiative appeared. As science has shown, once your eating habits are established, changing them can be very difficult. Yes, knowledge and a diploma aren’t the only things that you can get for life from college. That means that collegiate eating and drinking could be contributing to the continuing obesity epidemic and the host of diet-related chronic diseases that keep growing in many countries.",
    "College applicants seem to become more and more aware of this. Back when I was applying to college, the only thing I knew about college meal plans was that they involved meals and a plan. Oh, and that they could be quite costly. By contrast, a survey conducted in 2015 showed nearly 1 in 5 potential college applicants indicated that a college’s health and wellness offerings were “likely” or “extremely likely” to alter their decisions of whether to apply to that college. And 23% felt that access to such offerings would be “absolutely essential when deciding where to apply.” Among female high schoolers, 51% deemed it either absolutely essential or very important. Modern kids are smart.",
    "Therefore, take heed, colleges and universities. They say that a way to one’s heart is through the stomach. This may apply to the brain as well and the checkbook for college tuition. If colleges want to attract the best and brightest, they may want to make sure they are serving the yummiest and the healthiest.",
    "Of course, not all campuses around the country have joined the Initiative yet. That doesn’t mean that all other campuses are serving just hot dogs. However, you may want to be vigilant about what colleges and universities are serving. For example, ask to see their menus and accompanying nutrition information. This should include ingredients and frequency at which they are served. An apple a year will keep no doctor away. Determine what food is available off-hours or away from the cafeteria. This should include water fountains and healthy vending machines. Know who is supplying the food and from where the food comes.",
    "Certainly, college food is not the sole cause of the epidemics of obesity and other diet related chronic diseases that certain countries are facing right now as there are a lot of other factors involved, including economics and family traditions. But it may be a contributor. After all, college years may be very important in forming habits we keep through our whole lives."
   ],
   "q": [
    {
     "q": "The author thinks that choosing a college should depend on …",
     "o": [
      "food served there.",
      "workout facilities.",
      "classes and food.",
      "healthy campus habits."
     ]
    },
    {
     "q": "Which of the following is NOT true about college eating, according to the author?",
     "o": [
      "Food choices in college can determine your future nutrition.",
      "Most students lack fruit and vegetables in their diet.",
      "More senior students have extra weight than first-year students.",
      "After leaving home many freshmen eat unhealthy food."
     ]
    },
    {
     "q": "In the author’s view, the Healthier Campus Initiative was started to …",
     "o": [
      "study what meals colleges offer nationwide.",
      "draw parents’ attention to students’ eating habits.",
      "work with obese students and their parents.",
      "encourage colleges to provide healthier food."
     ]
    },
    {
     "q": "According to the article, college applicants nowadays …",
     "o": [
      "are more concerned about college meal options.",
      "are less intelligent than in the author’s time.",
      "prefer colleges that offer wellness scholarships.",
      "mostly choose a college based on meal plans."
     ]
    },
    {
     "q": "The phrase take heed in “Therefore, take heed, colleges and universities” (Paragraph 6) is closest in meaning to …",
     "o": [
      "pay attention.",
      "stay back.",
      "take time.",
      "keep calm."
     ]
    },
    {
     "q": "The author is using a reference to a famous proverb “An apple a day keeps a doctor away” (Paragraph 7 – An apple a year will keep no doctor away) to emphasize that …",
     "o": [
      "your health depends on the food you eat.",
      "it is important how often you eat healthy food.",
      "snacks are also important in students’ diet.",
      "applicants should check college menus first."
     ]
    },
    {
     "q": "The main goal of the article is to …",
     "o": [
      "discuss the reasons for obesity and chronic diseases.",
      "call the readers’ attention to the importance of college food.",
      "explain what colleges should do to attract more students.",
      "encourage more colleges to join the Healthier Campus Initiative."
     ]
    }
   ],
   "a": [
    3,
    3,
    4,
    1,
    1,
    2,
    2
   ]
  },
  {
   "topic": "health",
   "n": 28,
   "title": "Forming a habit",
   "p": [
    "Waking up at the crack of dawn and going for a run might feel intimidating when you start trying to make it a habit. Weaving a significant new activity such as this into your regular routine obviously takes determination and time – but how much time is really needed to make that habit stick?",
    "One popular idea suggests that it takes 21 days to solidify a habit. A three-week time frame might sound easily reachable to someone making a resolution on New Year’s Day. Then people tend to feel extra motivated to start a new habit or kick an old one. Yet every January 21 very few people can boast that they have kept their resolutions. One survey showed that only 9 percent stuck to their goals in 2023.",
    "Recent research has shown that this idea is actually a myth. A hallmark 2009 study on habit creation found that habits developed in a range of 18 to 254 days; participants reported taking an average of about 66 days to reliably incorporate one of three new daily activities – eating a piece of fruit with lunch, drinking a bottle of water, or running for 15 minutes before dinner. Consistent daily repetition was the biggest factor influencing whether it would become part of an automatic daily routine.",
    "The type of activity is also a factor. Teaching yourself a completely new skill or process obviously takes longer than remembering to drink more water in the morning. A 2015 study found that new gym-goers had to exercise at least four times a week for six weeks in order to develop an exercise habit. And last year, machine-learning models analysed vast amounts of data on repeated observations of a behaviour and evaluated different variables that may influence a person’s decision to continue that behaviour. The results showed that creating a handwashing habit took a few weeks, compared with the half year it took for people to develop an exercise habit. Handwashing, the study noted, is less complex than exercising and offers more opportunities to practise. The researchers also suggested that habit formation depends on the effort that a person puts into practising an activity, and on the presence of environmental cues that would remind them to carry out the behaviour.",
    "When it comes to keeping a resolution, it can be hard to stay motivated once the initial excitement of a “new year, new me” subsides. This can easily lead to lapsing or even dropping the activity completely after a couple of weeks. Creating a specific plan to perform an activity (for example, “study Spanish grammar for 20 minutes, three times a week”) and having some type of accountability (an app tracker or a like-minded friend) can help monitor progress and push you to keep going. Additionally, people are more inclined to keep a resolution that they are interested in doing, rather than one that they simply believe they should do.",
    "Rewards are great motivators, but people often make the mistake of delaying gratification. For example, they treat themselves to a shopping trip on Saturday after going to the gym all week. A reward is far more effective if received during the task. For instance, a person with an exercise goal could watch a newly released movie while running on the treadmill instead of waiting until the end of the week. Researchers in 2014 had people listen to popular audiobooks that could only be accessed at the gym during the experiment and they found that the participants initially went 51 percent more frequently than the control group.",
    "So don’t kick yourself if you didn’t reach your goal by the 21st of this month, or even by the end of February. As long as you keep at an activity, you will get better at it – no matter how long it takes."
   ],
   "q": [
    {
     "q": "The author provides the New Year’s resolutions example to prove that …",
     "o": [
      "humans are difficult to motivate.",
      "forming a habit is rather hard.",
      "most people can stick to promises.",
      "one needs time to form a habit."
     ]
    },
    {
     "q": "The pronoun it in paragraph 3 (whether it would become part of an automatic daily routine) refers to a(n) …",
     "o": [
      "repetition.",
      "exercise.",
      "diet.",
      "behaviour."
     ]
    },
    {
     "q": "The computer-based analysis showed that …",
     "o": [
      "more complicated habits need more time and effort to form.",
      "for a more complex habit, the chances for success are slim.",
      "regularity is more important than behaviour complexity.",
      "the decision to commit to a complex activity is hard."
     ]
    },
    {
     "q": "The word subside in paragraph 5 (once the initial excitement of a “new year, new me” subsides) most probably means …",
     "o": [
      "wear off.",
      "build up.",
      "take apart.",
      "turn up."
     ]
    },
    {
     "q": "Which aspect of habit formation is NOT mentioned in the text?",
     "o": [
      "Some people around you might influence the process of habit formation.",
      "Behaviours require varied amounts of time to set in.",
      "The more complicated a type of behavior is, the faster it becomes a habit.",
      "Signals to prompt the behaviour should be present."
     ]
    },
    {
     "q": "According to the text, rewards for engaging in an activity should be …",
     "o": [
      "considerable.",
      "meaningful.",
      "concrete.",
      "immediate."
     ]
    },
    {
     "q": "The author of the text aims to …",
     "o": [
      "persuade readers to change their habits.",
      "explain how long it takes to form a habit.",
      "explain that forming a habit may take longer than expected.",
      "outline the steps for developing a habit."
     ]
    }
   ],
   "a": [
    2,
    4,
    1,
    1,
    3,
    4,
    3
   ]
  }
 ]
};
const esc=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const plain=(paragraphs,replace=x=>x)=>paragraphs.map(p=>'<p>'+replace(esc(p))+'</p>').join('');
const letters='ABCDEF';
const r11Instructions='Прочитай текст и заполни пропуски A–F частями предложений 1–7. Одна часть лишняя.';
const r12Instructions='Прочитай текст и выбери один ответ на каждый вопрос 12–18.';
const vocabInstructions='Прочитай текст и выбери один из четырёх вариантов для каждого пропуска 30–36.';
const answerItem=(question,options,answer,why,tag)=>[esc(question),options.map(esc),answer,esc(why||''),options,tag];
const vocabSets=data.vocabulary.map(row=>{
 const paragraphs=[row.sentences.slice(0,4).map(s=>s[0]).join(' '),row.sentences.slice(4).map(s=>s[0]).join(' ')];
 let index=0;
 const withNumbers=s=>s.replace(/___/g,()=>'<b>('+ (30+index++) +')</b> ___');
 return {layout:'30–36',title:row.title,task:vocabInstructions,
  text:plain(paragraphs,withNumbers),paragraphs,
  items:row.sentences.map(([question,options,answer,why],j)=>answerItem((30+j)+'. '+question,options,answer,why,row.title+' · '+(30+j)+' · '+question))};
});
const errorSets=data.errors.map(row=>({layout:'errors',title:row.title,task:'Выбери форму, которая подходит по смыслу и грамматике.',text:'',
 items:row.items.map(([question,options,answer,why],j)=>answerItem((j+1)+'. '+question,options,answer,why,row.title+' · '+question))}));
const reading11Sets=data.reading11.map(row=>({
 layout:'11',title:row.title,task:r11Instructions,paragraphs:row.p,
 text:plain(row.p,s=>s.replace(/\{\{([A-F])\}\}/g,'<b class="rdGapL">$1 ______</b>')),
 note:'<ol>'+row.parts.map(part=>'<li>'+esc(part)+'</li>').join('')+'</ol>',
 fragments:row.parts,row:true,cols:7,
 items:[...letters].map((letter,i)=>[letter,['1','2','3','4','5','6','7'],row.a[i]-1,'',row.parts,row.title+' · пропуск '+letter])
}));
const reading12Sets=data.reading12.map(row=>({
 layout:'12–18',title:row.title,task:r12Instructions,paragraphs:row.p,text:plain(row.p),col:true,cols:1,
 questions:row.q,
 items:row.q.map((q,j)=>answerItem((j+12)+'. '+q.q,q.o,row.a[j]-1,'',row.title+' · '+(j+12)+' · '+q.q))
}));
W3_TASKS[id]={
 label:'Homework · 26 Nov',part:'C',title:'Тест по ошибкам · лексика и чтение',
 sub:'40 предложений · чтение 11 × 2 · чтение 12–18 × 2',type:'read',
 sets:[...errorSets,...vocabSets,...reading11Sets,...reading12Sets].map((set,i)=>({...set,tid:id+'-'+i,tab:set.layout}))
};
if(!ARINA_ASSIGNED_DEFAULT.includes(id))ARINA_ASSIGNED_DEFAULT.push(id);
(window.ARINA_HW_BATCHES=window.ARINA_HW_BATCHES||[]).push([id]);

function selectAnswer(item,position,labels=item[1]){
 const select=document.createElement('select');
 select.setAttribute('aria-label',item[5]);
 const values=labels.map((_,i)=>String(i));
 select.append(new Option('…',''),...labels.map((label,i)=>new Option(label,values[i])));
 select.value=PL.a[position]??'';
 select.onchange=()=>{
  if(PL.mode!=='solve'||PL.id!==id)return;
  if(select.value==='')delete PL.a[position];else PL.a[position]=Number(select.value);
  plSave();plMarks();
 };
 return {control:select,values,options:labels};
}
function mount(root,set,offset){
 const ui=window.EgeWritten,{el}=ui;
 const model={title:set.title,instruction:set.task};
 const heading=el('h3','',set.title);
 const optionsFor=(question,i)=>{
  const item=set.items[i],label=question.q||question;
  return {label,...selectAnswer(item,offset+i,question.o||item[1])};
 };
 if(set.layout==='11'){
  model.paragraphs=set.paragraphs.map(p=>{
   const line=el('p','');line.append(ui.htmlNode(esc(p).replace(/\{\{([A-F])\}\}/g,'<b class="gapL">$1. ________</b>')));return line;
  });
  model.fragments=set.fragments;
  model.answers=set.items.map((item,i)=>({label:item[0],...selectAnswer(item,offset+i)}));
 }else if(set.layout==='12–18'){
  model.paragraphs=set.paragraphs;model.answers=set.questions.map(optionsFor);
 }else if(set.layout==='30–36'){
  let i=0;
  model.paragraphs=set.paragraphs.map(p=>p.split('___').flatMap((part,j)=>{
   if(j===0)return [part];
   const number=30+i,item=set.items[i],original=data.vocabulary.find(x=>x.title===set.title).sentences[i++];
   const answer=selectAnswer(item,offset+i-1,original[1].map((o,n)=>(n+1)+') '+o));
   answer.control.options[0].textContent=number+' …';return [answer.control,part];
  }));
 }else{
  const component=el('div','ege-written'),main=el('div','exam-main'),stage=el('div','stage'),panel=el('div','panel grow');
  const instruction=el('div','inst');instruction.append(el('b','',set.task));main.append(instruction);
  panel.append(heading);
  set.items.forEach((item,i)=>{
   const row=el('div','score arina-error-choices'),label=el('span','',item[4]?item[5].slice(item[5].indexOf(' · ')+3):item[0]);
   const {control}=selectAnswer(item,offset+i,item[4]);
   const buttons=item[4].map((option,j)=>{
    const b=el('button','',(j+1)+' · '+option);b.type='button';
    b.onclick=()=>{control.value=String(j);control.dispatchEvent(new Event('change'));paint()};
    return b;
   });
   const paint=()=>buttons.forEach((b,j)=>{const on=control.value===String(j);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});
   paint();row.append(label,...buttons);panel.append(row);
  });
  stage.append(panel);main.append(stage);component.append(main);root.replaceChildren(component);
  return;
 }
 root.replaceChildren(ui.render(set.layout,model));
}
const baseRender=plRender;
plRender=function(){
 baseRender();
 if(!window.EgeWritten||typeof PL==='undefined'||!PL||PL.id!==id||PL.mode!=='solve')return;
 const host=document.querySelector('#plRoot .plCard');
 if(!host)return;
 host.classList.add('arina-written-card');
 const set=PL.t.sets[PL.pos];
 mount(host,set,plGapOffset(PL.t,PL.pos));
 const help=document.createElement('a');
 help.className='btn sm arina-test-memo-mobile';help.href='https://altatiana7.github.io/Tatyana-English-Hub/katya-ege-teacher-8m3q/pamyatki.html?v=7';
 help.target='_blank';help.rel='noopener';help.textContent='Памятки ЕГЭ';
 host.querySelector('.exam-main').prepend(help);
 document.querySelectorAll('#plRoot .plDots button').forEach((button,i)=>{
  const section=PL.t.sets[i];button.title=section.title;button.setAttribute('aria-label',(i+1)+'. '+section.title);
 });
};
window.addEventListener('load',()=>{
 if(new URLSearchParams(location.search).get('hw')===id)openW3Task(id);
});
})();
