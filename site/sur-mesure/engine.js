/* Pure local recommendation rules. No network or persistence. */
(function(root){
  const choices={size:['solo','small','medium','large'],areas:['litigation','corporate','property','family','criminal','tax','employment','administrative'],languages:['fr','de','en','it'],tools:['documents','email','billing','dms'],priorities:['files','deadlines','research','contracts','time','aml'],privacy:['standard','high']};
  function normalise(input){
    return Object.fromEntries(Object.entries(choices).map(([key,allowed])=>{
      const values=Array.isArray(input?.[key])?input[key]:[];
      const clean=allowed.filter(value=>values.includes(value));
      return [key,['size','privacy'].includes(key)?clean.slice(0,1):clean];
    }));
  }
  function recommend(input,catalogue){
    const answers=normalise(input);
    if(Object.values(answers).some(values=>!values.length))return [];
    const ranked=catalogue.map((item,index)=>{
      const matches=[];
      for(const field of ['priorities','areas','tools'])for(const value of answers[field])if(item[field].includes(value))matches.push({field,value,weight:{priorities:12,areas:6,tools:2}[field]});
      if(answers.languages.length>1&&item.id==='translation')matches.push({field:'multilingual',weight:24});
      if(answers.privacy[0]==='high'&&item.id==='redaction')matches.push({field:'privacy',weight:24});
      if(['medium','large'].includes(answers.size[0])&&['knowledge','training','morning'].includes(item.id))matches.push({field:'team',weight:4});
      if(['solo','small'].includes(answers.size[0])&&['email','templates','morning'].includes(item.id))matches.push({field:'small',weight:4});
      matches.sort((a,b)=>b.weight-a.weight);
      const sectorSpecific=!!item.sector;
      const eligible=(!sectorSpecific||matches.some(m=>m.field==='areas'))&&(item.id!=='translation'||answers.languages.length>1)&&(item.id!=='redaction'||answers.privacy[0]==='high'||answers.areas.some(a=>['criminal','family'].includes(a)));
      return {id:item.id,index,eligible,score:matches.reduce((n,m)=>n+m.weight,0),reason:matches[0]||{field:'foundation'}};
    });
    return ranked.filter(item=>item.eligible).sort((a,b)=>b.score-a.score||a.index-b.index).slice(0,6);
  }
  const api={choices,normalise,recommend};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  else root.BrigitteTailor=api;
})(globalThis);
