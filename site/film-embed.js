(() => {
 const film=document.getElementById('installation-film');if(!film)return;
 function sync(){
  film.contentWindow?.postMessage({type:'brigitte-film',lang:document.documentElement.lang==='en'?'en':'fr',theme:document.documentElement.dataset.theme||'light'},location.origin);
 }
 addEventListener('message',event=>{
  if(event.origin!==location.origin||event.source!==film.contentWindow||event.data?.type!=='brigitte-film-height')return;
  const height=Number(event.data.height);if(Number.isFinite(height)&&height>=300&&height<=1500)film.style.height=`${Math.ceil(height)}px`;
 });
 film.addEventListener('load',sync);
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang','data-theme']});
})();
