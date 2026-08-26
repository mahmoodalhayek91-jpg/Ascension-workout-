const routineOrder = ['A', 'B', 'C', 'D', 'E', 'F'];
const gymRoutines = {
  A: { title: 'Foundation', exercises: [
    { name: 'Barbell Back Squat', baseWeight: 20, group: 'lower' },
    { name: 'Barbell Bench Press', baseWeight: 15, group: 'upper' },
    { name: 'Seated Row Machine', baseWeight: 20, group: 'upper' },
    { name: 'Barbell Romanian Deadlift', baseWeight: 20, group: 'lower' },
    { name: 'Cable Crunch', baseWeight: 10, group: 'core' }
  ]},
  B: { title: 'Vanguard', exercises: [
    { name: 'Smith Machine Reverse Lunge', baseWeight: 15, group: 'lower' },
    { name: 'Shoulder Press Machine', baseWeight: 15, group: 'upper' },
    { name: 'Lat Pulldown', baseWeight: 20, group: 'upper' },
    { name: 'Hip Thrust Machine', baseWeight: 25, group: 'lower' },
    { name: 'Rotary Torso Machine', baseWeight: 10, group: 'core' }
  ]},
  C: { title: 'Upper Forge', exercises: [
    { name: 'Dumbbell Bench Press', baseWeight: 8, group: 'upper' },
    { name: 'Chest-Supported Row', baseWeight: 10, group: 'upper' },
    { name: 'Lateral Raise', baseWeight: 3, group: 'upper' },
    { name: 'Hammer Curl', baseWeight: 5, group: 'upper' },
    { name: 'Triceps Pushdown', baseWeight: 10, group: 'upper' }
  ]},
  D: { title: 'Lower Forge', exercises: [
    { name: 'Leg Press', baseWeight: 30, group: 'lower' },
    { name: 'Split Squat', baseWeight: 6, group: 'lower' },
    { name: 'Hamstring Curl', baseWeight: 15, group: 'lower' },
    { name: 'Standing Calf Raise', baseWeight: 10, group: 'lower' },
    { name: 'Dead Bug', reps: 8, group: 'core' }
  ]},
  E: { title: 'Athletic', exercises: [
    { name: 'Step-Up', baseWeight: 6, group: 'lower' },
    { name: 'Landmine Press', baseWeight: 10, group: 'upper' },
    { name: 'Cable Row', baseWeight: 15, group: 'upper' },
    { name: 'Kettlebell Swing', baseWeight: 12, group: 'lower' },
    { name: 'Farmer Carry', seconds: 30, baseWeight: 10, group: 'carry' }
  ]},
  F: { title: 'Bodyweight Trial', exercises: [
    { name: 'Hack Squat', baseWeight: 30, group: 'lower' },
    { name: 'Assisted Dip', baseWeight: 15, group: 'upper' },
    { name: 'Seated Cable Row', baseWeight: 20, group: 'upper' },
    { name: 'Back Extension', reps: 8, group: 'body' },
    { name: 'Cable Woodchop', baseWeight: 8, group: 'core' }
  ]}
};

const homeRoutines = {
  A: { title: 'Home Foundation', exercises: [
    { name: 'Goblet Squat', baseWeight: 10, group: 'lower' },
    { name: 'Dumbbell Bench Press', baseWeight: 6, group: 'upper' },
    { name: 'One-Arm Dumbbell Row', baseWeight: 8, group: 'upper' },
    { name: 'Barbell Romanian Deadlift', baseWeight: 20, group: 'lower' },
    { name: 'Plank', seconds: 25, group: 'core' }
  ]},
  B: { title: 'Home Vanguard', exercises: [
    { name: 'Dumbbell Reverse Lunge', baseWeight: 6, group: 'lower' },
    { name: 'Seated Dumbbell Press', baseWeight: 5, group: 'upper' },
    { name: 'Barbell Bent-Over Row', baseWeight: 15, group: 'upper' },
    { name: 'Bench Hip Thrust', baseWeight: 20, group: 'lower' },
    { name: 'Side Plank', seconds: 20, group: 'core' }
  ]},
  C: { title: 'Home Upper Forge', exercises: [
    { name: 'Incline Dumbbell Press', baseWeight: 6, group: 'upper' },
    { name: 'Bench-Supported Dumbbell Row', baseWeight: 8, group: 'upper' },
    { name: 'Dumbbell Lateral Raise', baseWeight: 3, group: 'upper' },
    { name: 'Dumbbell Hammer Curl', baseWeight: 4, group: 'upper' },
    { name: 'Close-Grip Push-Up', baseWeight: 0, group: 'body' }
  ]},
  D: { title: 'Home Lower Forge', exercises: [
    { name: 'Barbell Back Squat', baseWeight: 20, group: 'lower' },
    { name: 'Bulgarian Split Squat', baseWeight: 5, group: 'lower' },
    { name: 'Dumbbell Romanian Deadlift', baseWeight: 12, group: 'lower' },
    { name: 'Standing Calf Raise', baseWeight: 8, group: 'lower' },
    { name: 'Dead Bug', reps: 8, group: 'core' }
  ]},
  E: { title: 'Home Athletic', exercises: [
    { name: 'Bench Step-Up', baseWeight: 5, group: 'lower' },
    { name: 'Dumbbell Push Press', baseWeight: 5, group: 'upper' },
    { name: 'Renegade Row', baseWeight: 4, group: 'upper' },
    { name: 'Dumbbell Swing', baseWeight: 10, group: 'lower' },
    { name: 'Farmer Carry', seconds: 30, baseWeight: 8, group: 'carry' }
  ]},
  F: { title: 'Home Total Body', exercises: [
    { name: 'Dumbbell Thruster', baseWeight: 5, group: 'lower' },
    { name: 'Barbell Deadlift', baseWeight: 20, group: 'lower' },
    { name: 'Push-Up', baseWeight: 0, group: 'body' },
    { name: 'Dumbbell Pullover on Bench', baseWeight: 6, group: 'upper' },
    { name: 'Mountain Climber', seconds: 25, group: 'core' }
  ]}
};

const equipmentModes = {
  home: { label: 'Home', detail: 'Dumbbells · barbell · bench · bodyweight', routines: homeRoutines },
  gym: { label: 'Full Gym', detail: 'Machines · cables · racks · free weights', routines: gymRoutines }
};
function activeRoutines(){ return equipmentModes[state.equipmentMode].routines; }

const initial = { name: 'Mahmoud', xp: 0, streak: 0, lastWorkout: null, workoutCount: 0, routine: 'A', equipmentMode: 'home', history: [], bests: {}, draft: null, recoveryDate: null, recoveryCount: 0 };
let state = load();
let page = 'home';

function load() {
  try {
    const stored = JSON.parse(localStorage.getItem('ascension-state') || '{}');
    const merged = { ...initial, ...stored };
    if (!routineOrder.includes(merged.routine)) merged.routine = 'A';
    if (!equipmentModes[merged.equipmentMode]) merged.equipmentMode = 'home';
    if (merged.draft && !merged.draft.version) merged.draft = null;
    if (stored.recoveryCount === undefined && merged.recoveryDate) merged.recoveryCount = 1;
    return merged;
  } catch { return { ...initial }; }
}
function save(){ localStorage.setItem('ascension-state', JSON.stringify(state)); }
function level(){ return Math.floor(state.xp / 200) + 1; }
function levelXp(){ return state.xp % 200; }
function rank(){ const l=level(); return l>=20?'Ascendant':l>=15?'Apex':l>=10?'Elite':l>=5?'Vanguard':'Initiate'; }
function localDay(){ const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function recoveryMinutes(){ return Math.min(45, 10 + Math.floor(level()/10)*5); }
function repTarget(ex){ return ex.reps || Math.min(12, 8 + Math.floor(level()/5)); }
function timeTarget(ex){ return ex.seconds ? Math.min(ex.seconds + 30, ex.seconds + Math.floor(level()/10)*5) : null; }
function weightTarget(ex){
  if (ex.baseWeight === undefined || ex.baseWeight === 0) return ex.baseWeight || null;
  const step = ex.group === 'lower' ? 2.5 : 1;
  return ex.baseWeight + Math.floor(level()/5)*step;
}
function prescription(ex){
  if (ex.seconds) return `${timeTarget(ex)} seconds`;
  const weight = weightTarget(ex);
  return `${repTarget(ex)} reps${weight ? ` · suggested ${weight} kg` : ''}`;
}
function esc(v=''){ return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function shell(content){ return `<main class="shell"><header class="topbar"><div><div class="eyebrow">Personal growth protocol</div><div class="brand">ASCENSION</div></div><button class="icon-btn" data-page="settings" aria-label="Settings">⚙</button></header>${content}</main>${nav()}<div id="toast" class="toast"></div>`; }
function nav(){ return `<nav class="nav">${[['home','⌂','Home'],['workout','⚔','Quest'],['progress','◈','Progress'],['settings','⚙','Settings']].map(([id,icon,label])=>`<button data-page="${id}" class="${page===id?'active':''}"><i>${icon}</i>${label}</button>`).join('')}</nav>`; }

function home(){
  const next = state.routine;
  const current = activeRoutines();
  const recoveryDone = state.recoveryDate === localDay();
  return shell(`<section class="hero"><div class="profile-row"><div class="level-medal"><div><span>LEVEL</span><b>${level()}</b></div></div><div class="profile-copy"><h1>${esc(state.name)}</h1><div class="rank">Current rank · <strong>${rank()}</strong></div></div></div><div class="xp-line"><span>LEVEL PROGRESS</span><span>${levelXp()} / 200 XP</span></div><div class="xp-track"><div class="xp-fill" style="width:${levelXp()/2}%"></div></div><div class="stats"><div class="stat"><b>${state.streak}</b><span>Streak</span></div><div class="stat"><b>${state.workoutCount}</b><span>Quests</span></div><div class="stat"><b>${Object.keys(state.bests).length}</b><span>Records</span></div></div></section>
  <div class="section-head"><h2>Daily quests</h2><span>${new Date().toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}</span></div>
  <div class="mode-chip">⌂ ${equipmentModes[state.equipmentMode].label} program</div>
  <article class="quest"><div class="quest-icon">⚔</div><div class="quest-body"><h3>Strength Quest ${next} · ${current[next].title}</h3><p>${current[next].exercises.map(x=>x.name).slice(0,3).join(' · ')}</p></div><div class="reward">+100 XP</div></article>
  <button class="primary" data-start>BEGIN STRENGTH QUEST</button>
  <article class="quest recovery-quest"><div class="quest-icon">◌</div><div class="quest-body"><h3>Recovery Walk · ${recoveryMinutes()} minutes</h3><p>Comfortable pace · increases every 10 levels</p></div><div class="reward">+20 XP</div></article>
  <button class="secondary ${recoveryDone?'completed':''}" data-recovery ${recoveryDone?'disabled':''}>${recoveryDone?'✓ RECOVERY COMPLETE TODAY':'CONFIRM RECOVERY WALK'}</button>`);
}

function ensureDraft(){
  if(!state.draft || state.draft.routine!==state.routine || state.draft.version!==3 || state.draft.equipmentMode!==state.equipmentMode){
    state.draft={version:3,routine:state.routine,equipmentMode:state.equipmentMode,level:level(),exercises:activeRoutines()[state.routine].exercises.map(ex=>({...ex,sets:[false,false,false]}))}; save();
  }
}
function workout(){
  ensureDraft();
  const done=state.draft.exercises.flatMap(e=>e.sets).filter(Boolean).length;
  const total=state.draft.exercises.length*3;
  return shell(`<h1 class="page-title">Strength Quest ${state.routine}</h1><p class="page-sub">${activeRoutines()[state.routine].title} · ${equipmentModes[state.equipmentMode].label} · Follow the prescription, then confirm each set.</p><div class="routine-banner"><div><b>Quest progress</b><span>${done} of ${total} sets confirmed</span></div><div class="reward">${Math.round(done/total*100)}%</div></div>${state.draft.exercises.map((ex,ei)=>exerciseCard(ex,ei)).join('')}<div class="workout-actions"><button class="primary" data-finish ${done<total?'disabled style="opacity:.42"':''}>COMPLETE QUEST · +100 XP</button></div>`);
}
function exerciseCard(ex,ei){
  return `<article class="exercise"><div class="exercise-top"><div class="exercise-num">${String(ei+1).padStart(2,'0')}</div><div class="exercise-name"><b>${ex.name}</b><span>3 sets · ${prescription(ex)}</span></div></div>${ex.sets.map((done,si)=>`<div class="confirm-row"><div><span>SET ${si+1}</span><b>${prescription(ex)}</b></div><button class="set-check ${done?'done':''}" data-set data-e="${ei}" data-s="${si}" aria-label="Confirm set ${si+1}">${done?'✓':'○'}</button></div>`).join('')}</article>`;
}
function achievementGroups(){
  return [
    ['Strength Quests', [
      ['⚔','Awakened','Complete your first strength quest',state.workoutCount,1],
      ['✦','First Momentum','Complete 5 strength quests',state.workoutCount,5],
      ['⬡','Six Paths','Complete one full A–F rotation',state.workoutCount,6],
      ['◆','Questbound','Complete 10 strength quests',state.workoutCount,10],
      ['♢','Forged','Complete 25 strength quests',state.workoutCount,25],
      ['♜','Veteran','Complete 50 strength quests',state.workoutCount,50],
      ['♛','Centurion','Complete 100 strength quests',state.workoutCount,100],
      ['☄','Relentless','Complete 250 strength quests',state.workoutCount,250],
      ['∞','Living Legend','Complete 500 strength quests',state.workoutCount,500]
    ]],
    ['Levels & Ranks', [
      ['◈','Vanguard','Reach level 5',level(),5],
      ['◇','Elite','Reach level 10',level(),10],
      ['✧','Apex','Reach level 20',level(),20],
      ['✹','Limit Breaker','Reach level 30',level(),30],
      ['♚','Ascendant','Reach level 50',level(),50],
      ['☀','Mythic','Reach level 75',level(),75],
      ['★','Sovereign','Reach level 100',level(),100]
    ]],
    ['Streaks', [
      ['◔','Spark','Build a 3-day streak',state.streak,3],
      ['♨','Unbroken','Build a 7-day streak',state.streak,7],
      ['♧','Discipline','Build a 14-day streak',state.streak,14],
      ['♠','Iron Will','Build a 30-day streak',state.streak,30],
      ['⚡','Unyielding','Build a 60-day streak',state.streak,60],
      ['☯','Immortal Habit','Build a 100-day streak',state.streak,100]
    ]],
    ['Recovery', [
      ['◌','Rest Initiate','Complete your first recovery walk',state.recoveryCount,1],
      ['☁','Fresh Air','Complete 5 recovery walks',state.recoveryCount,5],
      ['☘','Restoration','Complete 10 recovery walks',state.recoveryCount,10],
      ['☾','Balanced','Complete 25 recovery walks',state.recoveryCount,25],
      ['♒','Enduring Pace','Complete 50 recovery walks',state.recoveryCount,50],
      ['◎','Pathwalker','Complete 100 recovery walks',state.recoveryCount,100]
    ]]
  ];
}
function progress(){
  const groups=achievementGroups(); const all=groups.flatMap(g=>g[1]); const unlocked=all.filter(a=>a[3]>=a[4]).length;
  const achievementHtml=groups.map(([title,items])=>`<section class="achievement-section"><div class="achievement-category"><h3>${title}</h3><span>${items.filter(a=>a[3]>=a[4]).length}/${items.length}</span></div><div class="achievement-grid">${items.map(a=>`<div class="badge ${a[3]>=a[4]?'':'locked'}"><i>${a[0]}</i><b>${a[1]}</b><span>${a[2]}</span><em>${Math.min(a[3],a[4])} / ${a[4]}</em></div>`).join('')}</div></section>`).join('');
  return shell(`<h1 class="page-title">Progress</h1><p class="page-sub">Every completed quest makes the next one possible.</p><div class="section-head"><h2>Achievements</h2><span>${unlocked}/${all.length} unlocked</span></div>${achievementHtml}<div class="section-head"><h2>Quest history</h2><span>Newest first</span></div>${state.history.length?state.history.slice(0,12).map(h=>`<div class="history-row"><time>${new Date(h.date).toLocaleDateString(undefined,{month:'short',day:'numeric'})}</time><b>Strength Quest ${h.routine}</b><span>+100 XP</span></div>`).join(''):`<div class="empty">Your completed workouts will appear here.</div>`}`);
}
function settings(){
  const modes=Object.entries(equipmentModes).map(([id,mode])=>`<button class="mode-option ${state.equipmentMode===id?'active':''}" data-mode="${id}"><b>${mode.label}</b><span>${mode.detail}</span>${state.equipmentMode===id?'<i>✓</i>':''}</button>`).join('');
  return shell(`<h1 class="page-title">Settings</h1><p class="page-sub">Your data stays in this browser on this device.</p><div class="settings-card"><h3>Hunter profile</h3><div class="field"><label>DISPLAY NAME</label><input id="name" value="${esc(state.name)}" maxlength="24" /></div><button class="primary" data-save-name>SAVE NAME</button></div><div class="settings-card"><h3>Workout equipment</h3><p class="settings-note equipment-help">Choose the equipment available to you. Your next quest updates immediately.</p><div class="mode-grid">${modes}</div></div><div class="settings-card"><h3>Progression rules</h3><p class="settings-note">Strength prescription grows gradually with your level. Recovery Walk gains 5 minutes every 10 levels and stops increasing at 45 minutes.</p></div><div class="settings-card"><h3>Backup</h3><div class="button-row"><button class="secondary" data-export>Export data</button><button class="secondary" data-import>Import data</button></div><input type="file" id="file" accept="application/json" hidden /></div><div class="settings-card"><h3>Start over</h3><button class="secondary danger" data-reset>Reset all progress</button></div>`);
}
function render(){ document.querySelector('#app').innerHTML=page==='home'?home():page==='workout'?workout():page==='progress'?progress():settings(); bind(); }
function toast(msg){ const el=document.querySelector('#toast'); if(!el)return; el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),1800); }
function bind(){
  document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>{page=b.dataset.page;render();scrollTo(0,0)});
  document.querySelector('[data-start]')?.addEventListener('click',()=>{page='workout';render()});
  document.querySelectorAll('[data-set]').forEach(b=>b.onclick=()=>{const sets=state.draft.exercises[+b.dataset.e].sets;sets[+b.dataset.s]=!sets[+b.dataset.s];save();render()});
  document.querySelector('[data-finish]')?.addEventListener('click',finish);
  document.querySelector('[data-recovery]')?.addEventListener('click',completeRecovery);
  document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{state.equipmentMode=b.dataset.mode;state.draft=null;save();render();toast(`${equipmentModes[state.equipmentMode].label} quests selected`)});
  document.querySelector('[data-save-name]')?.addEventListener('click',()=>{state.name=document.querySelector('#name').value.trim()||'Hunter';save();toast('Profile saved')});
  document.querySelector('[data-export]')?.addEventListener('click',exportData);
  document.querySelector('[data-import]')?.addEventListener('click',()=>document.querySelector('#file').click());
  document.querySelector('#file')?.addEventListener('change',importData);
  document.querySelector('[data-reset]')?.addEventListener('click',()=>{if(confirm('Reset all levels and workout history?')){state={...initial};save();page='home';render()}});
}
function completeRecovery(){
  if(state.recoveryDate===localDay()) return;
  state.recoveryDate=localDay(); state.recoveryCount++; state.xp+=20; save(); render(); toast('Recovery complete · +20 XP');
}
function finish(){
  const now=new Date(); const prev=state.lastWorkout?new Date(state.lastWorkout):null;
  const dayGap=prev?Math.floor((new Date(now.toDateString())-new Date(prev.toDateString()))/86400000):null;
  state.streak=dayGap===1?state.streak+1:dayGap===0?state.streak:1;
  state.draft.exercises.forEach(ex=>{const weight=weightTarget(ex);if(weight && weight>(state.bests[ex.name]||0))state.bests[ex.name]=weight;});
  state.history.unshift({date:now.toISOString(),routine:state.routine,equipmentMode:state.equipmentMode}); state.lastWorkout=now.toISOString(); state.workoutCount++; state.xp+=100;
  state.routine=routineOrder[(routineOrder.indexOf(state.routine)+1)%routineOrder.length]; state.draft=null; save(); page='home'; render(); toast('Quest complete · +100 XP');
}
function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ascension-backup.json';a.click();URL.revokeObjectURL(a.href);}
function importData(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{state={...initial,...JSON.parse(r.result),draft:null};if(!routineOrder.includes(state.routine))state.routine='A';if(!equipmentModes[state.equipmentMode])state.equipmentMode='home';save();page='home';render();toast('Backup restored')}catch{alert('That backup file could not be read.')}};r.readAsText(f);}

render();
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
