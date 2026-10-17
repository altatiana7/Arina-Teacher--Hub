/* Тренажёр Past Continuous: три раунда, по 4 предложения на экране.
   1 Найди – нажать на слова формы Past Continuous; 2 Выбери – одна из двух форм; 3 Впиши – форма глагола.
   Страница всегда открывается с начала. Результат каждого раунда уходит учителю (saveArinaHomework на хабе),
   отметка «сделано» – в браузере Арины, чтобы на хабе было видно, что осталось. */
(function(){
const D=window.PC_DATA,PER=4,KEY='arinaPC:done';
const ROUNDS=[
 {k:'find',name:'Найди',task:'Нажми на <b>оба слова</b> формы Past Continuous (was / were + ‑ing). Иногда таких форм две.',items:D.find},
 {k:'choose',name:'Выбери',task:'Выбери форму глагола, которая стоит в этом предложении.',items:D.choose},
 {k:'type',name:'Впиши',task:'Впиши форму глагола, который стоит справа: Past Continuous или Past Simple.',items:D.type}];
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>String(s||'').toLowerCase().replace(/[’']/g,"'").replace(/\s+/g,' ').trim();
const doneMap=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{};}catch(e){return {};}};
function markDone(k){const o=doneMap();o[k]=Date.now();try{localStorage.setItem(KEY,JSON.stringify(o));}catch(e){}
  try{if(window.parent!==window&&typeof window.parent.pcTodoRefresh==='function')window.parent.pcTodoRefresh();}catch(e){}}
function send(r,details){try{const f=window.parent&&window.parent!==window&&window.parent.saveArinaHomework;if(typeof f!=='function')return;
  const score=details.filter(d=>d.is_correct).length,answers={};details.forEach((d,i)=>answers[i+1]=d.chosen);
  f({test_id:'pc-'+r.k,test_title:'Past Continuous · '+r.name,score,max_score:details.length,answers,details}).catch(()=>{});}catch(e){}}

let R=0,P=0,S=null,stars=0;
const rounds=ROUNDS.map(r=>({ans:{},checked:{},det:[],sent:false}));
function pages(r){return Math.ceil(ROUNDS[r].items.length/PER);}
function paintTop(){const rt=$('#rt');rt.innerHTML='';const dm=doneMap();
  ROUNDS.forEach((r,i)=>{const b=document.createElement('button');b.type='button';b.className=(i===R?'on ':'')+(rounds[i].sent||dm[r.k]?'done':'');
    b.innerHTML='<i>'+(i+1)+'</i>'+r.name;b.onclick=()=>{R=i;P=0;draw();};rt.append(b);});
  $('#stars').innerHTML='Звёзды: <b>★ '+stars+'</b>';}
function pop(t){const p=$('#pop');p.textContent=t;p.classList.add('show');setTimeout(()=>p.classList.remove('show'),700);}

/* ----- раунд 1: найти форму ----- */
function findCard(it,idx,st,checked){
  const c=document.createElement('div');c.className='card';const words=it[0].split(' ');
  const target=new Set();it[1].forEach(f=>{const fw=f.split(' ');for(let i=0;i<=words.length-fw.length;i++){if(fw.every((w,j)=>norm(words[i+j]).replace(/[^a-z']/g,'')===w)&&!fw.some((w,j)=>target.has(i+j))){fw.forEach((w,j)=>target.add(i+j));break;}}});
  const sel=st.ans[idx]||(st.ans[idx]=new Set());
  c.innerHTML='<span class="num">'+(idx+1)+'</span>';const p=document.createElement('p');p.className='sent';
  words.forEach((w,i)=>{const s=document.createElement('span');s.className='w';s.textContent=w;
    if(checked){if(target.has(i)&&sel.has(i))s.classList.add('hit');else if(sel.has(i))s.classList.add('miss');else if(target.has(i))s.classList.add('lost');}
    else{if(sel.has(i))s.classList.add('sel');s.onclick=()=>{sel.has(i)?sel.delete(i):sel.add(i);s.classList.toggle('sel');};}
    p.append(s,document.createTextNode(' '));});
  c.append(p);
  if(checked){const ok=sel.size===target.size&&[...target].every(i=>sel.has(i));c.classList.add(ok?'ok':'bad');c.classList.add('done');
    if(!ok){const f=document.createElement('span');f.className='fix';f.textContent='Past Continuous: '+it[1].join(', ');c.append(f);}
    return {el:c,res:{ok,chosen:[...sel].sort((a,b)=>a-b).map(i=>words[i]).join(' '),correct:it[1].join(', '),question:it[0]}};}
  return {el:c};}

/* ----- раунд 2: выбрать ----- */
function chooseCard(it,idx,st,checked){
  const c=document.createElement('div');c.className='card';const a=st.ans[idx];
  c.innerHTML='<span class="num">'+(idx+1)+'</span><p class="sent">'+esc(it[0]).replace('___','<span class="gap">'+(checked||a!=null?esc(it[2][a!=null?a:it[3]]):'&nbsp;')+'</span>')+' <span class="key">'+esc(it[1])+'</span></p>';
  const o=document.createElement('div');o.className='opts';
  it[2].forEach((t,j)=>{const b=document.createElement('button');b.type='button';b.textContent=t;
    if(checked){b.disabled=true;if(j===it[3])b.classList.add('right');else if(j===a)b.classList.add('wrong');}
    else{if(a===j)b.classList.add('pick');b.onclick=()=>{st.ans[idx]=j;draw();};}
    o.append(b);});
  c.append(o);
  if(checked){const ok=a===it[3];c.classList.add(ok?'ok':'bad');return {el:c,res:{ok,chosen:a!=null?it[2][a]:'',correct:it[2][it[3]],question:it[0]+' ('+it[1]+')'}};}
  return {el:c};}

/* ----- раунд 3: вписать ----- */
function typeCard(it,idx,st,checked){
  const c=document.createElement('div');c.className='card';const v=st.ans[idx]||'';
  c.innerHTML='<span class="num">'+(idx+1)+'</span><p class="sent">'+esc(it[0]).replace('___','<span class="gap">'+(checked?esc(v||'—'):'&nbsp;')+'</span>')+' <span class="key">'+esc(it[1])+'</span></p>';
  const inp=document.createElement('input');inp.className='inp';inp.autocomplete='off';inp.spellcheck=false;inp.setAttribute('autocapitalize','off');inp.value=v;inp.placeholder='write the verb form';
  c.append(inp);
  if(checked){inp.disabled=true;const ok=it[2].some(x=>norm(x)===norm(v));inp.classList.add(ok?'ok':'bad');c.classList.add(ok?'ok':'bad');
    if(!ok){const f=document.createElement('span');f.className='fix';f.textContent='Correct: '+it[2][0];c.append(f);}
    return {el:c,res:{ok,chosen:v,correct:it[2][0],question:it[0]+' ('+it[1]+')'}};}
  inp.oninput=()=>{st.ans[idx]=inp.value;};
  inp.onkeydown=e=>{if(e.key==='Enter'){const n=c.parentNode.querySelectorAll('.inp');const k=[...n].indexOf(inp);if(n[k+1])n[k+1].focus();}};
  return {el:c};}

const CARD={find:findCard,choose:chooseCard,type:typeCard};
function draw(){
  paintTop();const r=ROUNDS[R],st=rounds[R],m=$('#main');m.innerHTML='';
  if(P>=pages(R)){/* итог раунда */
    const n=st.det.filter(d=>d.is_correct).length,e=document.createElement('div');e.className='end';
    e.innerHTML='<h2>'+r.name+' · '+n+' / '+st.det.length+'</h2><p>Результат отправлен учителю.</p>';
    const b=document.createElement('button');b.className='btn';b.type='button';
    if(R<ROUNDS.length-1){b.textContent='Дальше: '+ROUNDS[R+1].name+' →';b.onclick=()=>{R++;P=0;draw();};}
    else{b.textContent='Ещё раз с начала';b.onclick=()=>location.reload();}
    const again=document.createElement('button');again.className='btn sec';again.type='button';again.textContent='Повторить «'+r.name+'»';
    again.onclick=()=>{rounds[R]={ans:{},checked:{},det:[],sent:true};P=0;draw();};
    const row=document.createElement('div');row.className='foot';row.append(again,b);e.append(row);m.append(e);return;}
  const t=document.createElement('p');t.className='task';t.innerHTML=r.task;m.append(t);
  const g=document.createElement('div');g.className='grid';m.append(g);
  const from=P*PER,to=Math.min(r.items.length,from+PER),checked=!!st.checked[P];
  for(let i=from;i<to;i++)g.append(CARD[r.k](r.items[i],i,st,checked).el);
  const f=document.createElement('div');f.className='foot';
  if(!checked){const b=document.createElement('button');b.className='btn';b.type='button';b.textContent='Check';
    b.onclick=()=>{st.checked[P]=true;const out=[];for(let i=from;i<to;i++)out.push(CARD[r.k](r.items[i],i,st,true).res);
      const good=out.filter(x=>x&&x.ok).length;stars+=good;if(good===to-from)pop('★ '+good+' / '+(to-from));
      out.forEach(x=>st.det.push({question:x.question,chosen:x.chosen,correct:x.correct,is_correct:x.ok}));
      if(P===pages(R)-1&&!st.sent){st.sent=true;send(r,st.det);markDone(r.k);}
      draw();};
    f.append(b);}
  else{const n=st.det.slice(-(to-from)).filter(d=>d.is_correct).length,s=document.createElement('span');s.className='res';s.textContent=n+' / '+(to-from);
    const b=document.createElement('button');b.className='btn';b.type='button';b.textContent=P<pages(R)-1?'Next →':'Итог раунда →';b.onclick=()=>{P++;draw();};f.append(s,b);}
  const dots=document.createElement('div');dots.className='dots';for(let k=0;k<pages(R);k++){const d=document.createElement('i');if(k===P)d.className='on';else if(st.checked[k])d.className='ok';dots.append(d);}
  f.append(dots);m.append(f);
  const fi=g.querySelector('.inp:not([disabled])');if(fi)fi.focus({preventScroll:true});
}
draw();
})();
