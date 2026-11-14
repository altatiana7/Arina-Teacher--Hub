/* Экран «Домашка» по датам уроков (уроки: понедельник, среда, суббота).
   Список домашек — в hw-list.js. Здесь только показ: что задано к какому уроку, по порядку, что сдано и что осталось. */
(function(){
'use strict';
if(!window.ArinaCal||typeof taskDef!=='function')return;
const C=ArinaCal,oldNavigator=window.openNavigator;
function def(id){try{return taskDef(id)}catch(e){return null}}
function done(id){return !!w3Get(id).done}
function batches(){return arinaHwBatches().map(b=>{const tasks=b.tasks.filter(t=>def(t.id));const must=tasks.filter(t=>t.kind!=='open');
 return Object.assign({},b,{tasks:tasks,must:must,left:must.filter(t=>!done(t.id)),doneN:must.filter(t=>done(t.id)).length})}).filter(b=>b.tasks.length)}
function listed(){const s={};batches().forEach(b=>b.tasks.forEach(t=>s[t.id]=1));return s}
/* то, что задано раньше (октябрь) и ещё не сдано */
function olderLeft(){const s=listed();let ids=[];try{ids=arinaAssigned().filter(id=>def(id)&&!s[id]&&!done(id))}catch(e){}return ids}
function todayLine(){const now=new Date(),cur=C.currentLesson(now),isToday=C.iso(cur)===C.iso(now);
 return 'Сегодня — '+C.ruDay(now)+' · '+(isToday?'сегодня урок':'следующий урок — '+C.ruDay(cur))}
function dueWord(b){const t=C.iso(new Date());return b.due===t?'к сегодняшнему уроку':'к уроку '+C.ru(b.due)}
function isOver(b){return b.due<C.iso(new Date())}
/* какая домашка «текущая»: самая новая, где ещё есть что сдавать; если всё сдано — самая новая */
function current(B){B=B||batches();return B.find(b=>b.left.length)||B[0]||null}

function rowHTML(t,n){
 const d=w3Get(t.id).done,T=def(t.id),started=!d&&w3Get(t.id).draft&&Object.keys(w3Get(t.id).draft).length;
 const mark=d?('✓ сдано'+(d.date?' · '+String(d.date).split(',')[0]:'')+(T.type==='write'||T.type==='speak'||!d.total?'':' · '+d.score+' / '+d.total)):t.kind==='open'?'тренировка · открыто всегда':started?'начато · продолжить':'не сдано';
 return '<button type="button" class="navRow hwbRow '+(d?'done':t.kind==='open'?'':'due')+'" onclick="openW3Task(\''+t.id+'\')"><span><em class="hwbN">'+n+'</em>'+T.title+'</span><i>'+mark+'</i></button>';
}
window.openHwBoard=function(){
 const B=batches(),cur=current(B),old=olderLeft();
 if(!B.length){if(oldNavigator)oldNavigator();return}
 let tabs='',panes='';
 B.forEach((b,k)=>{const on=b===cur,over=b.left.length&&b.due<C.iso(new Date());
  tabs+='<button type="button" class="navTab'+(on?' on':'')+(b.left.length?' left':'')+'" data-w="'+k+'" onclick="navShowWeek('+k+')"><b>К уроку '+C.ruShort(b.due)+'</b><small>'+(b.left.length?'осталось '+b.left.length+' из '+b.must.length+(over?' · срок прошёл':''):'всё сдано')+'</small></button>';
  /* по порядку: сначала то, что ещё не сдано, потом сданное, в конце — тренировка */
  const order=b.tasks.filter(t=>t.kind!=='open'&&!done(t.id)).concat(b.tasks.filter(t=>t.kind!=='open'&&done(t.id)),b.tasks.filter(t=>t.kind==='open'));
  panes+='<div class="navCol navPane'+(on?' on':'')+'" data-w="'+k+'"><div class="navLesson">Задано на уроке '+C.ruShort(b.lesson)+' → '+(isOver(b)?'срок был '+C.ru(b.due):'сдать '+dueWord(b))+' · сдано '+b.doneN+' из '+b.must.length+'</div>'+order.map((t,i)=>rowHTML(t,i+1)).join('')+'</div>';
 });
 tabs+='<button type="button" class="navTab'+(old.length?' left':'')+'" onclick="openHwOlder()"><b>Раньше · октябрь</b><small>'+(old.length?'не сдано '+old.length:'всё сдано')+'</small></button>';
 openFullScreen('','<div class="nav navTight hwb" id="navRoot"><div class="navTop"><h1>Homework</h1><div class="hwbNow">'+todayLine()+'</div></div><div class="navTabs">'+tabs+'</div>'+panes+'</div>');
 try{PL=null}catch(e){}
};
window.openHwOlder=function(){if(oldNavigator)oldNavigator()};
window.openNavigator=window.openHwBoard;
try{openNavigator=window.openHwBoard}catch(e){}

/* для главного экрана */
window.hwbHero=function(){
 const B=batches(),cur=current(B);let late=0;B.forEach(b=>{if(b!==cur)late+=b.left.length});
 let p2='Сейчас ничего не задано';
 if(cur)p2=cur.left.length?(isOver(cur)?'Не сдан Homework ':'Homework ')+dueWord(cur)+': осталось <b>'+cur.left.length+'</b> из '+cur.must.length:'Homework '+dueWord(cur)+' сдан';
 return '<p>'+todayLine()+'</p><p>'+p2+'</p>'+(late?'<p>Не сдано с прошлых уроков: <b>'+late+'</b></p>':'');
};
window.hwbFirst=function(){const B=batches();for(const b of B)if(b.left.length)return b.left[0].id;return ''};
window.hwbCount=function(){const B=batches();let left=0,all=0;B.forEach(b=>{left+=b.left.length;all+=b.must.length});return {left:left,all:all,done:all-left,older:olderLeft().length}};
window.hwbUpcoming=function(){
 const rows=[];batches().forEach(b=>b.left.forEach(t=>{if(rows.length<3)rows.push([b,t])}));
 return rows.map(x=>{const b=x[0],t=x[1],d=C.d0(b.due),over=b.due<C.iso(new Date());
  return '<button type="button" class="evDead" style="--c:'+(over?'var(--ev-red)':'var(--ev-amber)')+'" onclick="openW3Task(\''+t.id+'\')"><span class="evDate"><small>'+C.ru(d,{month:'short'}).replace('.','')+'</small><b>'+d.getDate()+'</b></span><span>'+def(t.id).title+'<small>'+(over?'срок был '+C.ru(b.due):'к уроку '+C.ru(b.due)+' · '+C.ru(b.due,{weekday:'long'}))+'</small></span><i></i></button>'}).join('');
};
const st=document.createElement('style');
st.textContent='.hwbNow{font-size:15px;font-weight:600;color:#33415c}.hwbRow span{display:flex;align-items:center;gap:10px;text-align:left}.hwbN{flex:none;width:26px;height:26px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font:700 13px/1 Inter,system-ui,sans-serif;font-style:normal;background:#e3e7f5;color:#27306b}.hwbRow.done .hwbN{background:#cfeeda;color:#1e6b4a}.hwb .navLesson{font-size:15px;margin:2px 0 8px}';
document.head.appendChild(st);
try{if(typeof w3Refresh==='function')w3Refresh()}catch(e){}
try{if(document.body.classList.contains('evHomeOn')&&typeof evHome==='function')evHome()}catch(e){}
})();
