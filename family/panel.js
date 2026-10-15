/* ARINA HUB · TOPIC 02 · FAMILY & RELATIONSHIPS
   Задания взяты с сайта Риты и Кати (ege-2027-b2, блок 1). Открыто по два задания;
   письмо 37, эссе 38 и задание 4 (сравнение картинок) закрыты.
   Страница темы открывается панелью поверх хаба, как тема RUSSIA. */
(function(){
const V='3';
/* что нужно сделать по вкладкам (как в family/todo.js) */
const TODO_LIST={words:['t1-1','t1-2','t2-1','t2-2','iv1','iv2'],gw:['g1','g2','w1','w2'],read:['r1','r2']};
const doneMap=()=>{try{return JSON.parse(localStorage.getItem('arinaFamily:done')||'{}')||{};}catch(e){return {};}};
const leftOf=t=>{const o=doneMap();return (TODO_LIST[t]||[]).filter(k=>!o[k]).length;};
const TABS=[
 ['words','WORDS · SPEAKING','family/words.html'],
 ['gw','GRAMMAR · WORD FORM.','family/tasks.html#1'],
 ['read','READING','family/tasks.html#2'],
 ['letter','LETTER 37',null],
 ['essay','ESSAY 38',null]];
const css=document.createElement('style');css.id='arinaFamilyStyles';
css.textContent='#arinaFamilyPanel{position:fixed;z-index:110;inset:38px 0 0 var(--side);background:#f7f9fc;display:none;overflow:hidden}'
 +'#arinaFamilyPanel.open{display:grid;grid-template-rows:auto minmax(0,1fr);grid-template-columns:minmax(0,1fr)}'
 +'#arinaFamilyPanel .russiaTop{min-width:0;padding:4px 10px;gap:8px}#arinaFamilyPanel .russiaTitle{flex:0 1 auto;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#arinaFamilyPanel .russiaTitle b{font-size:13px;display:inline}'
 +'#arinaFamilyPanel .russiaBack{padding:6px 10px;white-space:nowrap}'
 +'#arinaFamilyPanel .russiaTabs{min-width:0;flex:0 1 auto;scrollbar-width:none}#arinaFamilyPanel .russiaTabs::-webkit-scrollbar{display:none}'
 +'#arinaFamilyPanel .russiaTabs button{padding:6px 8px}#arinaFamilyPanel .russiaTabs button:disabled{padding:6px 7px}'
 +'#arinaFamilyPanel .russiaTabs button:disabled{opacity:.4;cursor:not-allowed}'
 +'#arinaFamilyPanel .russiaTabs button i{font-style:normal;display:inline-block;min-width:16px;height:16px;line-height:16px;border-radius:8px;margin-left:5px;font-size:9.5px;background:#D52B1E;color:#fff;text-align:center;padding:0 4px}'
 +'#arinaFamilyPanel .russiaTabs button.ftodo{border-color:#D52B1E;box-shadow:inset 0 0 0 1px #D52B1E}#arinaFamilyPanel .russiaTabs button.fdone i{background:#1e8e5a}'
 +'.famTopic small b{color:#D52B1E}'
 +'#arinaFamilyPanel iframe{width:100%;height:100%;border:0;display:block;background:#f7f9fc}'
 +'@media(max-width:800px){#arinaFamilyPanel{inset:0}}';
document.head.appendChild(css);
function panel(){let p=document.getElementById('arinaFamilyPanel');if(p)return p;
 p=document.createElement('section');p.id='arinaFamilyPanel';
 p.innerHTML='<div class="russiaTop"><button class="russiaBack" type="button">← HUB</button><div class="russiaTitle"><b>FAMILY & RELATIONSHIPS</b></div><div class="russiaTabs">'
  +TABS.map(t=>'<button type="button" data-fam-tab="'+t[0]+'"'+(t[2]?'':' disabled title="Locked"')+'>'+t[1]+(t[2]?'':' · locked')+'</button>').join('')+'</div></div><div class="famStage"><iframe title="Family and relationships" allow="microphone; autoplay"></iframe></div>';
 document.body.appendChild(p);
 p.querySelector('.russiaBack').onclick=close;
 p.querySelectorAll('[data-fam-tab]').forEach(b=>{if(!b.disabled)b.addEventListener('click',()=>show(b.dataset.famTab));});
 p.querySelector('.famStage').style.cssText='min-height:0;overflow:hidden';
 refresh();return p;}
function show(id){const p=panel(),t=TABS.find(x=>x[0]===id);if(!t||!t[2])return;
 p.querySelectorAll('[data-fam-tab]').forEach(b=>b.classList.toggle('active',b.dataset.famTab===id));
 const [path,hash]=t[2].split('#');p.querySelector('iframe').src=path+'?v='+V+(hash?'#'+hash:'');}
/* подсветка: сколько осталось сделать на каждой вкладке и в теме */
function refresh(){const p=document.getElementById('arinaFamilyPanel');
 if(p)p.querySelectorAll('[data-fam-tab]').forEach(b=>{const t=b.dataset.famTab;if(!TODO_LIST[t])return;const n=leftOf(t);let i=b.querySelector('i');if(!i){i=document.createElement('i');b.append(i);}i.textContent=n?String(n):'✓';b.classList.toggle('ftodo',n>0);b.classList.toggle('fdone',n===0);b.title=n?'To do: '+n:'Done';});
 const fb=document.querySelector('.famTopic small');if(fb){const n=leftOf('words')+leftOf('gw')+leftOf('read');fb.innerHTML=n?'active topic · <b>to do: '+n+'</b>':'active topic · done ✓';}}
window.famTodoRefresh=refresh;
function close(){const p=document.getElementById('arinaFamilyPanel');if(!p)return;p.classList.remove('open');p.querySelector('iframe').src='about:blank';document.body.style.overflow='';}
window.openArinaFamily=function(){if(typeof closeArinaRussia==='function')closeArinaRussia();panel().classList.add('open');show('words');document.body.style.overflow='hidden';};
window.closeArinaFamily=close;
if(typeof window.openArinaRussia==='function'){const o=window.openArinaRussia;window.openArinaRussia=function(){close();return o.apply(this,arguments);};}
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.getElementById('arinaFamilyPanel')?.classList.contains('open'))close();});
/* кнопка темы в левом меню TOPICS, сразу после RUSSIA */
function addBtn(){const box=document.querySelector('.arinaTopicButtons');if(!box||box.querySelector('.famTopic'))return;
 const b=document.createElement('button');b.type='button';b.className='arinaTopicBtn active famTopic';b.innerHTML='FAMILY &amp; RELATIONSHIPS<small>active topic</small>';b.onclick=window.openArinaFamily;
 const first=box.querySelector('.arinaTopicBtn');first&&first.nextSibling?box.insertBefore(b,first.nextSibling):box.appendChild(b);}
function init(){addBtn();refresh();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
