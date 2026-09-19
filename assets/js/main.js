// Interactive "Ask about my work" chat panel.
// Edit the qa list to change questions and answers.
(function(){
  var qa=[
    ["What do you design?","Enterprise products where the workflow is complex and the stakes are real: healthcare enrollment, analytics platforms, and conversational AI that explains itself."],
    ["How do you approach AI?","Value first. I find the right problem, then design for trust (transparency, guardrails, disambiguation and graceful failure) and validate with real users before scaling."],
    ["Proof of impact?","40% higher adoption from research-led design, 50% faster handoff through design systems, and 20% efficiency gains on a logistics platform."],
    ["How do you work?","Close to product, engineering and domain experts: workshops, journey maps, rapid AI prototypes, and usability testing that connects design decisions to outcomes."]
  ];
  var q=document.getElementById('qText'), a=document.getElementById('aText');
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches, timer;
  document.querySelectorAll('.chips button').forEach(function(b){
    b.addEventListener('click',function(){
      var i=+b.dataset.i;
      document.querySelectorAll('.chips button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
      q.textContent=qa[i][0]; clearInterval(timer);
      if(reduce){a.textContent=qa[i][1];return;}
      var t=qa[i][1], n=0; a.textContent='';
      timer=setInterval(function(){n+=2;a.textContent=t.slice(0,n);if(n>=t.length)clearInterval(timer);},14);
    });
  });
})();
