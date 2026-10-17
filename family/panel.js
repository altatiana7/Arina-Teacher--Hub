/* ARINA HUB · TOPIC 02 · FAMILY & RELATIONSHIPS
   Задания взяты с сайта Риты и Кати (ege-2027-b2, блок 1). 17.10: все задания ОГЭ (грамматика 12, словообразование 8, чтение 3) открыты как домашняя работа;
   письмо 37, эссе 38 и задание 4 (сравнение картинок) закрыты.
   Страница темы открывается панелью поверх хаба, как тема RUSSIA. */
(function(){
const V='11';
/* что нужно сделать по вкладкам (как в family/todo.js) */
const TODO_LIST={words:['t1-1','t1-2','t2-1','t2-2','iv1','iv2'],gw:['g1','g2','g3','g4','w1','w2','w3','w4'],read:['r1','r2','r3']};
const doneMap=()=>{try{return JSON.parse(localStorage.getItem('arinaFamily:done')||'{}')||{};}catch(e){return {};}};
const leftOf=t=>{const o=doneMap();return (TODO_LIST[t]||[]).filter(k=>!o[k]).length;};
const TABS=[
 ['words','WORDS · SPEAKING','family/words.html'],
 ['gw','GRAMMAR · WORD FORM.','family/tasks.html#1'],
 ['read','READING','family/tasks.html#2'],
 ['letter','LETTER 37',null],
 ['essay','ESSAY 38',null]];
const css=document.createElement('style');css.id='arinaFamilyStyles';
css.textContent='#arinaFamilyPanel{position:fixed;z-index:110;inset:0;background:#f7f9fc;display:none;overflow:hidden}'
 +'#arinaFamilyPanel.open{display:grid;grid-template-rows:auto minmax(0,1fr);grid-template-columns:minmax(0,1fr)}'
 +'#arinaFamilyPanel .russiaTop{min-width:0;padding:4px 10px;gap:8px}#arinaFamilyPanel .russiaTitle{flex:0 1 auto;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#arinaFamilyPanel .russiaTitle b{font-size:13px;display:inline}'
 +'#arinaFamilyPanel .russiaBack{padding:6px 10px;white-space:nowrap}'
 +'#arinaFamilyPanel .russiaTabs{min-width:0;flex:0 1 auto;scrollbar-width:none}#arinaFamilyPanel .russiaTabs::-webkit-scrollbar{display:none}'
 +'#arinaFamilyPanel .russiaTabs button{padding:6px 8px}#arinaFamilyPanel .russiaTabs button:disabled{padding:6px 7px}'
 +'#arinaFamilyPanel .russiaTabs button:disabled{opacity:.4;cursor:not-allowed}'
 +'#arinaFamilyPanel .russiaTabs button i{font-style:normal;display:inline-block;margin-left:6px;font-size:9.5px;font-weight:700;color:#9a3412;background:#ffedd5;border-radius:20px;padding:1px 7px}'
 +'#arinaFamilyPanel .russiaTabs button.ftodo{background:#fff3c4}#arinaFamilyPanel .russiaTabs button.ftodo.active{background:#0039A6}#arinaFamilyPanel .russiaTabs button.fdone i{color:#14653a;background:#d3f0de}'
 +'.famTopic small b{color:#9a3412;background:#ffedd5;border-radius:20px;padding:0 6px}'
 +'#arinaFamilyPanel iframe{width:100%;height:100%;border:0;display:block;background:#f7f9fc}'
 +'@media(max-width:800px){#arinaFamilyPanel{inset:0}}';
document.head.appendChild(css);
function panel(){let p=document.getElementById('arinaFamilyPanel');if(p)return p;
 p=document.createElement('section');p.id='arinaFamilyPanel';
 p.innerHTML='<div class="russiaTop"><button class="russiaBack" type="button">← HUB</button><div class="russiaTitle"><b>FAMILY & RELATIONSHIPS · HOMEWORK</b></div><div class="russiaTabs">'
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
 if(p)p.querySelectorAll('[data-fam-tab]').forEach(b=>{const t=b.dataset.famTab;if(!TODO_LIST[t])return;const n=leftOf(t);let i=b.querySelector('i');if(!i){i=document.createElement('i');b.append(i);}i.textContent=n?'осталось '+n:'✓ сделано';b.classList.toggle('ftodo',n>0);b.classList.toggle('fdone',n===0);b.title=n?'To do: '+n:'Done';});
 const fb=document.querySelector('.famTopic small');if(fb){const n=leftOf('words')+leftOf('gw')+leftOf('read');fb.innerHTML=n?'homework · <b>осталось '+n+'</b>':'homework · всё сделано ✓';}}
window.famTodoRefresh=function(){refresh();const dp=document.getElementById('duePanel');if(dp&&typeof window.duePanelHTML==='function')dp.outerHTML=window.duePanelHTML();};
function close(){const p=document.getElementById('arinaFamilyPanel');if(!p)return;try{if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});}catch(e){}p.classList.remove('open');p.querySelector('iframe').src='about:blank';document.body.style.overflow='';}
window.openArinaFamily=function(tab){if(typeof closeArinaRussia==='function')closeArinaRussia();try{const d=document.documentElement;if(!document.fullscreenElement&&d.requestFullscreen)d.requestFullscreen().catch(()=>{});}catch(e){}panel().classList.add('open');show(TABS.some(t=>t[0]===tab&&t[2])?tab:'words');document.body.style.overflow='hidden';};
/* 17.10 · домашняя работа: все задания ОГЭ темы Family – в блоке «Задано сейчас» (по строке на вид задания) */
const FAM_HW=[['gw','g','Family · Grammar 19–24 · тренировка',4],['gw','w','Family · Word formation 25–29 · тренировка',4],['read','r','Family · Reading · тренировка',3]];
function famRows(){const o=doneMap();return FAM_HW.map(h=>{let n=0;for(let i=1;i<=h[3];i++)if(!o[h[1]+i])n++;return [h,n];}).filter(x=>x[1]>0)
 .map(([h,n])=>'<button type="button" class="dueRow" onclick="openArinaFamily(\''+h[0]+'\')"><span class="w3Tag">задано</span><span class="dueText"><b>'+h[2]+'</b><small>Тема Family · осталось '+n+' из '+h[3]+'</small></span><em>'+(n<h[3]?'Продолжить':'Начать')+' →</em></button>');}
if(typeof window.duePanelHTML==='function'){const base=window.duePanelHTML;window.duePanelHTML=function(){const html=base.apply(this,arguments),rows=famRows();if(!rows.length)return html;
 if(html.indexOf('dueEmpty')>=0)return '<div class="duePanel" id="duePanel"><div class="dueHead"><b>Задано сейчас</b><i>'+rows.length+'</i></div><div class="dueList">'+rows.join('')+'</div></div>';
 return html.replace(/(<div class="dueHead"><b>Задано сейчас<\/b><i>)(\d+)(<\/i>)/,(m,a,b,c)=>a+(+b+rows.length)+c).replace(/<\/div><\/div>$/,rows.join('')+'</div></div>');};}
window.closeArinaFamily=close;
if(typeof window.openArinaRussia==='function'){const o=window.openArinaRussia;window.openArinaRussia=function(){close();return o.apply(this,arguments);};}
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.getElementById('arinaFamilyPanel')?.classList.contains('open'))close();});
/* кнопка темы в левом меню TOPICS, сразу после RUSSIA */
function addBtn(){const box=document.querySelector('.arinaTopicButtons');if(!box||box.querySelector('.famTopic'))return;
 const b=document.createElement('button');b.type='button';b.className='arinaTopicBtn active famTopic';b.innerHTML='FAMILY &amp; RELATIONSHIPS<small>active topic</small>';b.onclick=window.openArinaFamily;
 const first=box.querySelector('.arinaTopicBtn');first&&first.nextSibling?box.insertBefore(b,first.nextSibling):box.appendChild(b);}
function init(){addBtn();refresh();const dp=document.getElementById('duePanel');if(dp&&typeof window.duePanelHTML==='function')dp.outerHTML=window.duePanelHTML();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
