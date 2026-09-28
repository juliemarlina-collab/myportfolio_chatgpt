const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced&&'IntersectionObserver'in window){
 const reveal=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
 const stats=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.count),start=performance.now();function tick(now){let t=Math.min((now-start)/1100,1);el.textContent=Math.round(target*(1-(1-t)**3))+(el.dataset.suffix||'');if(t<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);observer.unobserve(el)})},{threshold:.5});
 document.querySelectorAll('[data-count]').forEach(el=>stats.observe(el));
}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
