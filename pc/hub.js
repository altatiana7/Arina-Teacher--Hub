/* ARINA HUB · тренажёр PAST CONTINUOUS (17.10).
   Кнопка в «Тренажёрах» и строка в «Задано сейчас»; тренажёр открывается поверх хаба во весь экран. */
(function(){
const V='2',KEY='arinaPC:done',ALL=['find','choose','type'];
const left=()=>{let o={};try{o=JSON.parse(localStorage.getItem(KEY)||'{}')||{};}catch(e){}return ALL.filter(k=>!o[k]).length;};
const css=document.createElement('style');
css.textContent='#arinaPCPanel{position:fixed;z-index:115;inset:0;background:#f7f9fc;display:none;grid-template-rows:auto minmax(0,1fr)}'
 +'#arinaPCPanel.open{display:grid}'
 +'#arinaPCPanel .pcTop{display:flex;align-items:center;gap:10px;padding:4px 10px;background:#fff;border-bottom:1px solid #d9e1ec}'
 +'#arinaPCPanel .pcTop button{border:0;background:#0039A6;color:#fff;border-radius:9px;padding:6px 12px;font-weight:900;cursor:pointer}'
 +'#arinaPCPanel .pcTop b{font-size:13px;color:#0039A6}'
 +'#arinaPCPanel iframe{width:100%;height:100%;border:0;display:block}';
document.head.appendChild(css);
function panel(){let p=document.getElementById('arinaPCPanel');if(p)return p;
 p=document.createElement('section');p.id='arinaPCPanel';
 p.innerHTML='<div class="pcTop"><button type="button">← HUB</button><b>PAST CONTINUOUS · TRAINING</b></div><iframe title="Past Continuous"></iframe>';
 document.body.appendChild(p);p.querySelector('button').onclick=close;return p;}
function close(){const p=document.getElementById('arinaPCPanel');if(!p)return;p.classList.remove('open');p.querySelector('iframe').src='about:blank';document.body.style.overflow='';
 try{if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{});}catch(e){}}
window.openArinaPC=function(){
 try{if(typeof closeArinaFamily==='function')closeArinaFamily();}catch(e){}
 try{const d=document.documentElement;if(!document.fullscreenElement&&d.requestFullscreen)d.requestFullscreen().catch(()=>{});}catch(e){}
 const p=panel();p.classList.add('open');p.querySelector('iframe').src='pc/index.html?v='+V+'&t='+Date.now();document.body.style.overflow='hidden';};
window.closeArinaPC=close;
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.getElementById('arinaPCPanel')?.classList.contains('open'))close();});
/* строка в «Задано сейчас» */
function row(){const n=left();if(!n)return '';
 return '<button type="button" class="dueRow" onclick="openArinaPC()"><span class="w3Tag">задано</span><span class="dueText"><b>Past Continuous · найди, выбери, впиши</b><small>Тренажёр · осталось '+n+' из 3</small></span><em>'+(n<3?'Продолжить':'Начать')+' →</em></button>';}
if(typeof window.duePanelHTML==='function'){const base=window.duePanelHTML;window.duePanelHTML=function(){const html=base.apply(this,arguments),r=row();if(!r)return html;
 if(html.indexOf('dueEmpty')>=0)return '<div class="duePanel" id="duePanel"><div class="dueHead"><b>Задано сейчас</b><i>1</i></div><div class="dueList">'+r+'</div></div>';
 return html.replace(/(<div class="dueHead"><b>Задано сейчас<\/b><i>)(\d+)(<\/i>)/,(m,a,b,c)=>a+(+b+1)+c).replace('<div class="dueList">','<div class="dueList">'+r);};}
function refreshDue(){const dp=document.getElementById('duePanel');if(dp&&typeof window.duePanelHTML==='function')dp.outerHTML=window.duePanelHTML();}
window.pcTodoRefresh=refreshDue;
/* кнопка в «Тренажёрах» */
function addBtn(){const heads=[...document.querySelectorAll('.sidehead')].find(h=>h.textContent.trim()==='Тренажёры');if(!heads||document.querySelector('.pcTrainerBtn'))return;
 const b=document.createElement('button');b.className='trainerBtn pcTrainerBtn';b.type='button';b.textContent='Past Continuous · найди, выбери, впиши';b.onclick=window.openArinaPC;heads.after(b);}
function init(){addBtn();refreshDue();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
