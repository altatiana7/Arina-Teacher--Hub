/* Homework from the 25 November diagnostic. */
(function(){
'use strict';
const id='hw1125-essay';
const prompt='<p>Imagine that you are doing a project on <b>why teenagers in Zetland volunteer</b>. You have found some data on the subject – the results of a survey conducted among Zetland teenagers (see the table below).</p><p><b>Comment on the survey data and give your opinion on the subject of the project.</b></p><p><b>The survey question:</b><br>What is your main reason for doing voluntary work?<br><i>Choose one option</i></p><table class="essaySurvey"><thead><tr><th scope="col">Options</th><th scope="col">Respondents (%)</th></tr></thead><tbody>'+[['Helping others',38],['Gaining experience',27],['Making friends',17],['Learning new skills',12],['School requirements',6]].map(x=>'<tr><td>'+x[0]+'</td><td>'+x[1]+'</td></tr>').join('')+'</tbody></table><p><b>Write 200–250 words.</b> Use the following plan:</p><ul class="plan"><li>make an opening statement on the subject of the project;</li><li>select and report 2–3 facts;</li><li>make 1–2 comparisons where relevant and give your comments;</li><li>outline a problem that teenagers may face when doing voluntary work and suggest a way of solving it;</li><li>conclude by giving and explaining your opinion on the importance of volunteering for teenagers.</li></ul>';
W3_TASKS[id]={
 label:'Homework · 25 Nov',part:'C',title:'Эссе 38.1 · Volunteering',
 sub:'Таблица · 200–250 слов · проверяет учитель',type:'write',
 prompt,wordRange:[200,250],
 intro:'Арина, напиши эссе, которое мы не успели на диагностике. Проверь, что ты раскрыла все пять пунктов плана.',
 items:[['Why teenagers in Zetland volunteer','','Напиши эссе на английском',16]]
};
if(!ARINA_ASSIGNED_DEFAULT.includes(id))ARINA_ASSIGNED_DEFAULT.push(id);
(window.ARINA_HW_BATCHES=window.ARINA_HW_BATCHES||[]).push([id]);
})();
