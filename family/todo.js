/* Что Арине нужно сделать в теме Family: список заданий и отметки «сделано».
   Отметки хранятся в браузере Арины (как и остальные её задания на сайте), ответы не хранятся. */
const TODO=(function(){
  const KEY='arinaFamily:done';
  const LIST={words:['t1-1','t1-2','t2-1','t2-2','iv1','iv2'],gw:['g1','g2','g3','g4','g5','g6','g7','g8','g9','g10','g11','g12','w1','w2','w3','w4','w5','w6','w7','w8'],read:['r1','r2','r3']};
  const load=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{};}catch(e){return {};}};
  function is(k){return !!load()[k];}
  function mark(k){const o=load();if(o[k])return;o[k]=Date.now();try{localStorage.setItem(KEY,JSON.stringify(o));}catch(e){}
    try{if(window.parent&&window.parent!==window&&typeof window.parent.famTodoRefresh==='function')window.parent.famTodoRefresh();}catch(e){}}
  function left(tab){const o=load();return (tab?LIST[tab]:[].concat(...Object.values(LIST))).filter(k=>!o[k]).length;}
  /* подпись для варианта: «to do» или «done» */
  function tag(k){return is(k)?' · done ✓':' · to do';}
  /* кнопка-вариант: жёлтая «сделать» или зелёная «✓ сделано»; выбранная обведена синим */
  function chip(label,k,cur,fn){const b=document.createElement('button');b.type='button';b.className='vc '+(is(k)?'ok':'todo')+(cur?' cur':'');
    b.innerHTML='<span>'+label+'</span><em>'+(is(k)?'✓ сделано':'сделать')+'</em>';b.title=is(k)?'Сделано':'Нужно сделать';b.onclick=fn;return b;}
  return {is,mark,left,tag,LIST,chip};
})();
