/* ARINA HUB · TOPIC 02 · FAMILY & RELATIONSHIPS
   Задания взяты с сайта Риты и Кати (ege-2027-b2, блок 1). Открыто по два задания;
   письмо 37, эссе 38 и задание 4 (сравнение картинок) закрыты.
   Страница темы открывается панелью поверх хаба, как тема RUSSIA. */
(function(){
const V='1';
const TABS=[
 ['words','WORDS + SPEAKING','family/words.html'],
 ['gw','GRAMMAR + WORD FORMATION','family/tasks.html#1'],
 ['read','READING','family/tasks.html#2'],
 ['letter','LETTER 37',null],
 ['essay','ESSAY 38',null]];
const css=document.createElement('style');css.id='arinaFamilyStyles';
css.textContent='#arinaFamilyPanel{position:fixed;z-index:110;inset:38px 0 0 var(--side);background:#f7f9fc;display:none;overflow:hidden}'
 +'#arinaFamilyPanel.open{display:grid;grid-template-rows:auto minmax(0,1fr);grid-template-columns:minmax(0,1fr)}'
 +'#arinaFamilyPanel .russiaTop{min-width:0}#arinaFamilyPanel .russiaTitle{flex:0 1 auto}#arinaFamilyPanel .russiaTabs{min-width:0;flex:0 1 auto}'
 +'#arinaFamilyPanel .russiaTabs button:disabled{opacity:.4;cursor:not-allowed}'
 +'#arinaFamilyPanel iframe{width:100%;height:100%;border:0;display:block;background:#f7f9fc}'
 +'@media(max-width:800px){#arinaFamilyPanel{inset:0}}';
document.head.appendChild(css);
function panel(){let p=document.getElementById('arinaFamilyPanel');if(p)return p;
 p=document.createElement('section');p.id='arinaFamilyPanel';
 p.innerHTML='<div class="russiaTop"><button class="russiaBack" type="button">← ARINA HUB</button><div class="russiaTitle"><b>TOPIC 02 · FAMILY & RELATIONSHIPS</b><small>EGE topic block · student version</small></div><div class="russiaTabs">'
  +TABS.map(t=>'<button type="button" data-fam-tab="'+t[0]+'"'+(t[2]?'':' disabled title="Locked"')+'>'+t[1]+(t[2]?'':' · LOCKED')+'</button>').join('')+'</div></div><div class="famStage"><iframe title="Family and relationships" allow="microphone; autoplay"></iframe></div>';
 document.body.appendChild(p);
 p.querySelector('.russiaBack').onclick=close;
 p.querySelectorAll('[data-fam-tab]').forEach(b=>{if(!b.disabled)b.addEventListener('click',()=>show(b.dataset.famTab));});
 p.querySelector('.famStage').style.cssText='min-height:0;overflow:hidden';
 return p;}
function show(id){const p=panel(),t=TABS.find(x=>x[0]===id);if(!t||!t[2])return;
 p.querySelectorAll('[data-fam-tab]').forEach(b=>b.classList.toggle('active',b.dataset.famTab===id));
 const [path,hash]=t[2].split('#');p.querySelector('iframe').src=path+'?v='+V+(hash?'#'+hash:'');}
function close(){const p=document.getElementById('arinaFamilyPanel');if(!p)return;p.classList.remove('open');p.querySelector('iframe').src='about:blank';document.body.style.overflow='';}
window.openArinaFamily=function(){if(typeof closeArinaRussia==='function')closeArinaRussia();panel().classList.add('open');show('words');document.body.style.overflow='hidden';};
window.closeArinaFamily=close;
if(typeof window.openArinaRussia==='function'){const o=window.openArinaRussia;window.openArinaRussia=function(){close();return o.apply(this,arguments);};}
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.getElementById('arinaFamilyPanel')?.classList.contains('open'))close();});
/* кнопка темы в левом меню TOPICS, сразу после RUSSIA */
function addBtn(){const box=document.querySelector('.arinaTopicButtons');if(!box||box.querySelector('.famTopic'))return;
 const b=document.createElement('button');b.type='button';b.className='arinaTopicBtn active famTopic';b.innerHTML='FAMILY &amp; RELATIONSHIPS<small>active topic</small>';b.onclick=window.openArinaFamily;
 const first=box.querySelector('.arinaTopicBtn');first&&first.nextSibling?box.insertBefore(b,first.nextSibling):box.appendChild(b);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addBtn);else addBtn();
})();
