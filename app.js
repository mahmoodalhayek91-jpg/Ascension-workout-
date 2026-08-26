const routines = {
  A: [
    { name: 'Goblet Squat', target: '3 sets · 8–12 reps', weight: 12 },
    { name: 'Push-Up', target: '3 sets · 8–12 reps', weight: 0 },
    { name: 'One-Arm Row', target: '3 sets · 8–12 reps', weight: 10 },
    { name: 'Romanian Deadlift', target: '3 sets · 8–12 reps', weight: 16 },
    { name: 'Plank', target: '3 sets · 30 sec', weight: 0 }
  ],
  B: [
    { name: 'Reverse Lunge', target: '3 sets · 8–12 reps', weight: 8 },
    { name: 'Shoulder Press', target: '3 sets · 8–12 reps', weight: 6 },
    { name: 'Lat Pulldown', target: '3 sets · 8–12 reps', weight: 20 },
    { name: 'Hip Thrust', target: '3 sets · 8–12 reps', weight: 20 },
    { name: 'Side Plank', target: '3 sets · 25 sec', weight: 0 }
  ]
};

const initial = { name: 'Mahmoud', xp: 0, streak: 0, lastWorkout: null, workoutCount: 0, routine: 'A', history: [], bests: {}, ready: {}, draft: null };
let state = load();
let page = 'home';

function load() {
  try { return { ...initial, ...JSON.parse(localStorage.getItem('ascension-state') || '{}') }; }
  catch { return { ...initial }; }
}
function save(){ localStorage.setItem('ascension-state', JSON.stringify(state)); }
function level(){ return Math.floor(state.xp / 200) + 1; }
function levelXp(){ return state.xp % 200; }
function rank(){ const l=level(); return l>=20?'Ascendant':l>=15?'Apex':l>=10?'Elite':l>=5?'Vanguard':'Initiate'; }
function esc(v=''){ return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function shell(content){ return `<main class="shell"><header class="topbar"><div><div class="eyebrow">Personal growth protocol</div><div class="brand">ASCENSION</div></div><button class="icon-btn" data-page="settings" aria-label="Settings">⚙</button></header>${content}</main>${nav()}<div id="toast" class="toast"></div>`; }
function nav(){ return `<nav class="nav">${[['home','⌂','Home'],['workout','⚔','Quest'],['progress','◈','Progress'],['settings','⚙','Settings']].map(([id,icon,label])=>`<button data-page="${id}" class="${page===id?'active':''}"><i>${icon}</i>${label}</button>`).join('')}</nav>`; }

function home(){
  const next = state.routine;
  return shell(`<section class="hero"><div class="profile-row"><div class="level-medal"><div><span>LEVEL</span><b>${level()}</b></div></div><div class="profile-copy"><h1>${esc(state.name)}</h1><div class="rank">Current rank · <strong>${rank()}</strong></div></div></div><div class="xp-line"><span>LEVEL PROGRESS</span><span>${levelXp()} / 200 XP</span></div><div class="xp-track"><div class="xp-fill" style="width:${levelXp()/2}%"></div></div><div class="stats"><div class="stat"><b>${state.streak}</b><span>Streak</span></div><div class="stat"><b>${state.workoutCount}</b><span>Quests</span></div><div class="stat"><b>${Object.keys(state.bests).length}</b><span>Records</span></div></div></section>
  <div class="section-head"><h2>Daily quests</h2><span>${new Date().toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}</span></div>
  <article class="quest"><div class="quest-icon">⚔</div><div class="quest-body"><h3>Strength Quest ${next}</h3><p>${routines[next].map(x=>x.name).slice(0,3).join(' · ')}</p></div><div class="reward">+100 XP</div></article>
  <article class="quest"><div class="quest-icon">◌</div><div class="quest-body"><h3>Recovery Walk</h3><p>Walk comfortably for 20 minutes</p></div><div class="reward">+20 XP</div></article>
  <button class="primary" data-start>BEGIN STRENGTH QUEST</button>`);
}

function ensureDraft(){
  if(!state.draft || state.draft.routine!==state.routine){
    state.draft={routine:state.routine,exercises:routines[state.routine].map(ex=>({...ex,sets:[0,1,2].map(()=>({weight:ex.weight,reps:0,done:false}))}))}; save();
  }
}
function workout(){
  ensureDraft();
  const done=state.draft.exercises.flatMap(e=>e.sets).filter(s=>s.done).length;
  const total=state.draft.exercises.length*3;
  return shell(`<h1 class="page-title">Strength Quest ${state.routine}</h1><p class="page-sub">Complete each set with safe, controlled form.</p><div class="routine-banner"><div><b>Quest progress</b><span>${done} of ${total} sets completed</span></div><div class="reward">${Math.round(done/total*100)}%</div></div>${state.draft.exercises.map((ex,ei)=>exerciseCard(ex,ei)).join('')}<div class="workout-actions"><button class="primary" data-finish ${done<total?'disabled style="opacity:.42"':''}>COMPLETE QUEST · +100 XP</button></div>`);
}
function exerciseCard(ex,ei){
  const suggestion=state.ready[ex.name]?`Ready to increase by ${ex.name.includes('Squat')||ex.name.includes('Deadlift')||ex.name.includes('Thrust')?'2.5':'1'} kg`:'';
  return `<article class="exercise"><div class="exercise-top"><div class="exercise-num">${String(ei+1).padStart(2,'0')}</div><div class="exercise-name"><b>${ex.name}</b><span>${ex.target}</span>${suggestion?`<div class="suggestion">✦ ${suggestion}</div>`:''}</div></div>${ex.sets.map((s,si)=>`<div class="set-grid"><label>${si+1}</label><input inputmode="decimal" aria-label="Weight" data-input="weight" data-e="${ei}" data-s="${si}" value="${s.weight}" /><input inputmode="numeric" aria-label="Reps" data-input="reps" data-e="${ei}" data-s="${si}" value="${s.reps||''}" placeholder="reps" /><button class="set-check ${s.done?'done':''}" data-set data-e="${ei}" data-s="${si}">${s.done?'✓':'○'}</button></div>`).join('')}</article>`;
}
function progress(){
  const achievements=[
    ['⚔','Awakened','Complete your first quest',state.workoutCount>=1],
    ['✦','Momentum','Complete 5 quests',state.workoutCount>=5],
    ['♜','Unbroken','Reach a 7-day streak',state.streak>=7],
    ['◈','Vanguard','Reach level 5',level()>=5]
  ];
  return shell(`<h1 class="page-title">Progress</h1><p class="page-sub">Every completed quest makes the next one possible.</p><div class="section-head"><h2>Achievements</h2><span>${achievements.filter(a=>a[3]).length}/${achievements.length} unlocked</span></div><div class="achievement-grid">${achievements.map(a=>`<div class="badge ${a[3]?'':'locked'}"><i>${a[0]}</i><b>${a[1]}</b><span>${a[2]}</span></div>`).join('')}</div><div class="section-head"><h2>Quest history</h2><span>Newest first</span></div>${state.history.length?state.history.slice(0,12).map(h=>`<div class="history-row"><time>${new Date(h.date).toLocaleDateString(undefined,{month:'short',day:'numeric'})}</time><b>Strength Quest ${h.routine}</b><span>+100 XP</span></div>`).join(''):`<div class="empty">Your completed workouts will appear here.</div>`}`);
}
function settings(){
  return shell(`<h1 class="page-title">Settings</h1><p class="page-sub">Your data stays in this browser on this device.</p><div class="settings-card"><h3>Hunter profile</h3><div class="field"><label>DISPLAY NAME</label><input id="name" value="${esc(state.name)}" maxlength="24" /></div><button class="primary" data-save-name>SAVE NAME</button></div><div class="settings-card"><h3>Backup</h3><div class="button-row"><button class="secondary" data-export>Export data</button><button class="secondary" data-import>Import data</button></div><input type="file" id="file" accept="application/json" hidden /></div><div class="settings-card"><h3>Start over</h3><button class="secondary danger" data-reset>Reset all progress</button></div>`);
}
function render(){ document.querySelector('#app').innerHTML=page==='home'?home():page==='workout'?workout():page==='progress'?progress():settings(); bind(); }
function toast(msg){ const el=document.querySelector('#toast'); if(!el)return; el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),1800); }
function bind(){
  document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>{page=b.dataset.page;render();scrollTo(0,0)});
  document.querySelector('[data-start]')?.addEventListener('click',()=>{page='workout';render()});
  document.querySelectorAll('[data-input]').forEach(i=>i.onchange=()=>{const s=state.draft.exercises[+i.dataset.e].sets[+i.dataset.s];s[i.dataset.input]=Math.max(0,Number(i.value)||0);save()});
  document.querySelectorAll('[data-set]').forEach(b=>b.onclick=()=>{const s=state.draft.exercises[+b.dataset.e].sets[+b.dataset.s];if(!s.done && s.reps<=0){toast('Enter your reps first');return}s.done=!s.done;save();render()});
  document.querySelector('[data-finish]')?.addEventListener('click',finish);
  document.querySelector('[data-save-name]')?.addEventListener('click',()=>{state.name=document.querySelector('#name').value.trim()||'Hunter';save();toast('Profile saved')});
  document.querySelector('[data-export]')?.addEventListener('click',exportData);
  document.querySelector('[data-import]')?.addEventListener('click',()=>document.querySelector('#file').click());
  document.querySelector('#file')?.addEventListener('change',importData);
  document.querySelector('[data-reset]')?.addEventListener('click',()=>{if(confirm('Reset all levels and workout history?')){state={...initial};save();page='home';render()}});
}
function finish(){
  const now=new Date(); const prev=state.lastWorkout?new Date(state.lastWorkout):null;
  const dayGap=prev?Math.floor((new Date(now.toDateString())-new Date(prev.toDateString()))/86400000):null;
  state.streak=dayGap===1?state.streak+1:dayGap===0?state.streak:1;
  state.draft.exercises.forEach(ex=>{const max=Math.max(...ex.sets.map(s=>s.weight));if(max>(state.bests[ex.name]||0))state.bests[ex.name]=max;const hit=ex.sets.every(s=>s.reps>=12);state.ready[ex.name]=hit?(state.ready[ex.name]||0)+1:0;if(state.ready[ex.name]>=2)state.ready[ex.name]=true});
  state.history.unshift({date:now.toISOString(),routine:state.routine});state.lastWorkout=now.toISOString();state.workoutCount++;state.xp+=100;state.routine=state.routine==='A'?'B':'A';state.draft=null;save();page='home';render();toast('Quest complete · +100 XP');
}
function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ascension-backup.json';a.click();URL.revokeObjectURL(a.href);}
function importData(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{state={...initial,...JSON.parse(r.result)};save();page='home';render();toast('Backup restored')}catch{alert('That backup file could not be read.')}};r.readAsText(f);}

render();
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
