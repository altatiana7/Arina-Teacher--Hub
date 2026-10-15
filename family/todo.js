/* Что Арине нужно сделать в теме Family: список заданий и отметки «сделано».
   Отметки хранятся в браузере Арины (как и остальные её задания на сайте), ответы не хранятся. */
const TODO=(function(){
  const KEY='arinaFamily:done';
  const LIST={words:['t1-1','t1-2','t2-1','t2-2','iv1','iv2'],gw:['g1','g2','w1','w2'],read:['r1','r2']};
  const load=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{};}catch(e){return {};}};
  function is(k){return !!load()[k];}
  function mark(k){const o=load();if(o[k])return;o[k]=Date.now();try{localStorage.setItem(KEY,JSON.stringify(o));}catch(e){}
    try{if(window.parent&&window.parent!==window&&typeof window.parent.famTodoRefresh==='function')window.parent.famTodoRefresh();}catch(e){}}
  function left(tab){const o=load();return (tab?LIST[tab]:[].concat(...Object.values(LIST))).filter(k=>!o[k]).length;}
  /* подпись для варианта: «to do» или «done» */
  function tag(k){return is(k)?' · done ✓':' · to do';}
  return {is,mark,left,tag,LIST};
})();
