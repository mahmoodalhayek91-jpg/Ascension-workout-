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
const difficultyModes = {
  beginner: { label: 'Beginner', detail: '2 sets · lighter starting targets', sets: 2, reps: -2, weight: .8 },
  intermediate: { label: 'Intermediate', detail: '3 sets · balanced progression', sets: 3, reps: 0, weight: 1 },
  advanced: { label: 'Advanced', detail: '4 sets · higher volume and targets', sets: 4, reps: 2, weight: 1.1 }
};
const themeModes = {
  shadow: { label:'Shadow', level:1, colors:['#6d72ff','#75f0ff'] },
  frost: { label:'Frost', level:5, colors:['#64c7ff','#d9f6ff'] },
  ember: { label:'Ember', level:10, colors:['#ff664d','#ffbd59'] },
  venom: { label:'Venom', level:20, colors:['#8e67ff','#83f28f'] },
  crimson: { label:'Crimson', level:30, colors:['#d7425f','#ffca72'] },
  celestial: { label:'Celestial', level:40, colors:['#4f8fff','#d7c9ff'] },
  ascendant: { label:'Ascendant', level:50, colors:['#f1c75b','#fff5c7'] },
  storm: { label:'Storm', level:60, colors:['#4d7dff','#99b5ff'] },
  abyssal: { label:'Abyssal', level:70, colors:['#7038cf','#e063ff'] },
  mythic: { label:'Mythic', level:80, colors:['#00bfae','#9dfff2'] },
  sovereign: { label:'Sovereign', level:90, colors:['#d596ff','#ffe5ff'] },
  eternal: { label:'Eternal', level:100, colors:['#ffffff','#ffd56f'] }
};
const titleMilestones = [
  [1,'The Awakened'],[5,'Rising Vanguard'],[10,'Iron Hunter'],[20,'Elite Slayer'],
  [30,'Limit Breaker'],[40,'Realm Walker'],[50,'The Ascendant'],[60,'Stormforged'],
  [70,'Abyss Walker'],[80,'Mythic Hunter'],[90,'The Sovereign'],[100,'Eternal Hunter']
];
const emblemStages = [
  {id:'awakened',level:1,name:'Awakened Mark',glyph:'◇'},
  {id:'vanguard',level:10,name:'Vanguard Crest',glyph:'⬡'},
  {id:'elite',level:25,name:'Elite Sigil',glyph:'✦'},
  {id:'ascendant',level:50,name:'Ascendant Seal',glyph:'✧'},
  {id:'mythic',level:75,name:'Mythic Emblem',glyph:'✹'},
  {id:'eternal',level:100,name:'Eternal Insignia',glyph:'◈'}
];
function activeRoutines(){ return equipmentModes[state.equipmentMode].routines; }

const initial = { name: '', xp: 0, streak: 0, lastWorkout: null, workoutCount: 0, routine: 'A', equipmentMode: 'home', difficulty: 'beginner', theme: 'shadow', soundEnabled: false, onboardingComplete: false, tutorialComplete:false, history: [], bests: {}, draft: null, recoveryDate: null, recoveryCount: 0, sideQuestDate:null, sideQuestCount:0, bossClaims:{}, bossWins:0 };
let state = load();
let page = 'home';
let swapOpen = null;
let celebrationQueue = [];
let celebrationActive = false;

function load() {
  try {
    const raw = localStorage.getItem('ascension-state');
    const stored = JSON.parse(raw || '{}');
    const merged = { ...initial, ...stored };
    if (merged.name === 'Mahmoud') merged.name = '';
    if (!routineOrder.includes(merged.routine)) merged.routine = 'A';
    if (!equipmentModes[merged.equipmentMode]) merged.equipmentMode = 'home';
    if (stored.difficulty === undefined) merged.difficulty = raw ? 'intermediate' : 'beginner';
    if (!difficultyModes[merged.difficulty]) merged.difficulty = 'beginner';
    if (!themeModes[merged.theme] || levelForXp(merged.xp)<themeModes[merged.theme].level) merged.theme = 'shadow';
    if (!merged.bossClaims || typeof merged.bossClaims!=='object') merged.bossClaims={};
    if (!Number.isFinite(merged.bossWins)) merged.bossWins=0;
    if (stored.onboardingComplete === undefined) merged.onboardingComplete = Boolean(raw);
    if (stored.tutorialComplete === undefined) merged.tutorialComplete = Boolean(raw);
    if (merged.draft && !merged.draft.version) merged.draft = null;
    if (stored.recoveryCount === undefined && merged.recoveryDate) merged.recoveryCount = 1;
    return merged;
  } catch { return { ...initial, history:[], bests:{}, bossClaims:{} }; }
}
function save(){ localStorage.setItem('ascension-state', JSON.stringify(state)); }
function levelForXp(xp){ return Math.floor((Number(xp)||0) / 200) + 1; }
function level(){ return Math.floor(state.xp / 200) + 1; }
function levelXp(){ return state.xp % 200; }
function rank(){ const l=level(); return l>=20?'Ascendant':l>=15?'Apex':l>=10?'Elite':l>=5?'Vanguard':'Initiate'; }
function titleForLevel(value=level()){return titleMilestones.reduce((title,[required,name])=>value>=required?name:title,'The Awakened');}
function emblemForLevel(value=level()){return emblemStages.reduce((emblem,stage)=>value>=stage.level?stage:emblem,emblemStages[0]);}
function localDay(){ const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function recoveryMinutes(){ return Math.min(45, 10 + Math.floor(level()/10)*5); }
function dailySideQuest(){
  const tasks=[
    {icon:'◌',name:'Mobility Flow',description:'Move gently through five minutes of comfortable mobility.'},
    {icon:'⌁',name:'Posture Reset',description:'Spend three minutes opening the chest and moving the upper back.'},
    {icon:'◇',name:'Bodyweight Primer',description:'Complete 10 slow bodyweight squats through a comfortable range.'},
    {icon:'◎',name:'Core Control',description:'Complete 6 controlled dead bugs on each side.'},
    {icon:'☾',name:'Flexibility Check',description:'Spend three minutes stretching without forcing the range.'},
    {icon:'◈',name:'Breathing Reset',description:'Practise three minutes of slow, relaxed breathing.'},
    state.equipmentMode==='gym'?{icon:'△',name:'Easy Cardio Primer',description:'Move easily on a treadmill or bike for five minutes.'}:{icon:'△',name:'Movement Break',description:'Walk or march comfortably for five minutes.'}
  ];
  const [year,month,day]=localDay().split('-').map(Number);const index=Math.floor(Date.UTC(year,month-1,day)/86400000)%tasks.length;
  return tasks[index];
}
function repTarget(ex){
  const base = ex.reps || Math.min(12, 8 + Math.floor(level()/5));
  return Math.max(6, Math.min(15, base + difficultyModes[state.difficulty].reps));
}
function timeTarget(ex){
  if (!ex.seconds) return null;
  const adjustment = state.difficulty==='beginner' ? -5 : state.difficulty==='advanced' ? 5 : 0;
  return Math.max(15, Math.min(ex.seconds + 30, ex.seconds + Math.floor(level()/10)*5 + adjustment));
}
function weightTarget(ex){
  if (ex.baseWeight === undefined || ex.baseWeight === 0) return ex.baseWeight || null;
  const step = ex.group === 'lower' ? 2.5 : 1;
  const target = (ex.baseWeight + Math.floor(level()/5)*step) * difficultyModes[state.difficulty].weight;
  return Math.max(.5, Math.round(target*2)/2);
}
function prescription(ex){
  if (ex.seconds) return `${timeTarget(ex)} seconds`;
  const weight = weightTarget(ex);
  return `${repTarget(ex)} reps${weight ? ` · suggested ${weight} kg` : ''}`;
}
function weekWindow(){
  const now=new Date();const start=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  start.setDate(start.getDate()-((start.getDay()+6)%7));
  const end=new Date(start);end.setDate(end.getDate()+7);
  const key=`${start.getFullYear()}-${String(start.getMonth()+1).padStart(2,'0')}-${String(start.getDate()).padStart(2,'0')}`;
  return {start,end,key};
}
function currentBoss(){
  const window=weekWindow();
  const weekly=state.history.filter(item=>{const date=new Date(item.date);return date>=window.start&&date<window.end});
  const bosses=[
    {icon:'♜',name:'Iron Vanguard',description:'Complete 3 Strength Quests this week.',target:3,value:()=>weekly.length,unit:'quests'},
    {icon:'⬡',name:'Trial of Paths',description:'Complete 3 different Strength Quest letters this week.',target:3,value:()=>new Set(weekly.map(item=>item.routine)).size,unit:'paths'},
    {icon:'◇',name:'Ritual of Readiness',description:'Complete the warm-up before 2 Strength Quests this week.',target:2,value:()=>weekly.filter(item=>item.warmupCompleted).length,unit:'warm-ups'},
    {icon:'⚔',name:'Trial of Resolve',description:'Confirm 30 strength sets this week.',target:30,value:()=>weekly.reduce((sum,item)=>sum+(item.setsConfirmed||0),0),unit:'sets'}
  ];
  const index=Math.abs(Math.floor(window.start.getTime()/604800000))%bosses.length;
  const boss=bosses[index];const value=Math.min(boss.target,boss.value());
  return {...boss,value,key:window.key,claimed:Boolean(state.bossClaims[window.key]),complete:value>=boss.target};
}
function esc(v=''){ return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function shell(content){ return `<main class="shell"><header class="topbar"><div><div class="eyebrow">Personal growth protocol</div><div class="brand">ASCENSION</div></div><button class="icon-btn" data-page="settings" aria-label="Settings">⚙</button></header>${content}</main>${nav()}<div id="toast" class="toast"></div>`; }
function nav(){ return `<nav class="nav">${[['home','⌂','Home'],['workout','⚔','Quest'],['progress','◈','Progress'],['settings','⚙','Settings']].map(([id,icon,label])=>`<button data-page="${id}" class="${page===id?'active':''}"><i>${icon}</i>${label}</button>`).join('')}</nav>`; }

function home(){
  const next = state.routine;
  const current = activeRoutines();
  const recoveryDone = state.recoveryDate === localDay();
  const sideQuestDone = state.sideQuestDate === localDay();
  const sideQuest = dailySideQuest();
  const emblem=emblemForLevel();
  const boss=currentBoss();
  return shell(`<section class="hero"><div class="profile-row"><div class="level-medal emblem-${emblem.id}" title="${emblem.name}"><i>${emblem.glyph}</i><div><span>LEVEL</span><b>${level()}</b></div></div><div class="profile-copy"><h1>${esc(state.name || 'Hunter')}</h1><div class="hunter-title">${esc(titleForLevel())}</div><div class="rank">Current rank · <strong>${rank()}</strong></div></div></div><div class="xp-line"><span>LEVEL PROGRESS</span><span>${levelXp()} / 200 XP</span></div><div class="xp-track"><div class="xp-fill" style="width:${levelXp()/2}%"></div></div><div class="stats"><div class="stat"><b>${state.streak}</b><span>Streak</span></div><div class="stat"><b>${state.workoutCount}</b><span>Quests</span></div><div class="stat"><b>${Object.keys(state.bests).length}</b><span>Records</span></div></div></section>
  <div class="section-head"><h2>Daily quests</h2><span>${new Date().toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}</span></div>
  <div class="mode-chip">⌂ ${equipmentModes[state.equipmentMode].label} · ${difficultyModes[state.difficulty].label}</div>
  <article class="quest"><div class="quest-icon">⚔</div><div class="quest-body"><h3>Strength Quest ${next} · ${current[next].title}</h3><p>${current[next].exercises.map(x=>x.name).slice(0,3).join(' · ')}</p></div><div class="reward">+100 XP</div></article>
  <button class="primary" data-start>BEGIN STRENGTH QUEST</button>
  <button class="quest recovery-quest quest-detail-card" data-quest-detail="recovery" aria-label="View Recovery Walk details"><div class="quest-icon">◌</div><div class="quest-body"><h3>Recovery Walk · ${recoveryMinutes()} minutes</h3><p>Comfortable pace · increases every 10 levels</p></div><div class="quest-meta"><div class="reward">+20 XP</div><span class="detail-chevron">›</span></div></button>
  <button class="secondary ${recoveryDone?'completed':''}" data-recovery ${recoveryDone?'disabled':''}>${recoveryDone?'✓ RECOVERY COMPLETE TODAY':'CONFIRM RECOVERY WALK'}</button>
  <button class="quest side-quest quest-detail-card" data-quest-detail="side" aria-label="View Daily Side Quest details"><div class="quest-icon">${sideQuest.icon}</div><div class="quest-body"><h3>Side Quest · ${sideQuest.name}</h3><p>${sideQuest.description}</p></div><div class="quest-meta"><div class="reward">+15 XP</div><span class="detail-chevron">›</span></div></button>
  <button class="secondary ${sideQuestDone?'completed':''}" data-side-quest ${sideQuestDone?'disabled':''}>${sideQuestDone?'✓ SIDE QUEST COMPLETE':'CONFIRM SIDE QUEST'}</button>
  <div class="section-head"><h2>Weekly Boss</h2><span>Resets Monday</span></div><article class="boss-card ${boss.complete?'complete':''}"><div class="boss-icon">${boss.icon}</div><div class="boss-copy"><div class="boss-label">WEEKLY RAID</div><h3>${boss.name}</h3><p>${boss.description}</p><div class="boss-progress"><div style="width:${Math.round(boss.value/boss.target*100)}%"></div></div><span>${boss.value} / ${boss.target} ${boss.unit}</span></div><div class="boss-reward">+200<br>XP</div></article><button class="${boss.complete&&!boss.claimed?'primary':'secondary'} ${boss.claimed?'completed':''}" data-boss-claim ${!boss.complete||boss.claimed?'disabled':''}>${boss.claimed?'✓ BOSS DEFEATED':boss.complete?'CLAIM 200 XP':'BOSS IN PROGRESS'}</button>`);
}

function ensureDraft(){
  if(!state.draft || state.draft.routine!==state.routine || state.draft.version!==4 || state.draft.equipmentMode!==state.equipmentMode || state.draft.difficulty!==state.difficulty){
    const setCount=difficultyModes[state.difficulty].sets;
    state.draft={version:4,routine:state.routine,equipmentMode:state.equipmentMode,difficulty:state.difficulty,level:level(),warmupDone:false,warmupSkipped:false,exercises:activeRoutines()[state.routine].exercises.map(ex=>({...ex,sets:Array(setCount).fill(false)}))}; save();
  }
}
function warmup(){
  const moves=state.equipmentMode==='gym'
    ? ['2 minutes easy treadmill or bike','10 arm circles each direction','10 controlled bodyweight squats','One light practice set of the first exercise']
    : ['2 minutes marching in place','10 arm circles each direction','10 controlled bodyweight squats','One light practice set of the first exercise'];
  return shell(`<h1 class="page-title">Warm-up Quest</h1><p class="page-sub">Optional · prepare your joints and practise the movements before adding effort.</p><article class="warmup-card"><div class="warmup-mark">◇</div><h2>Awaken the body</h2><p>Move comfortably. Stop if anything feels painful or unusual.</p><ol>${moves.map(move=>`<li>${move}</li>`).join('')}</ol></article><button class="primary" data-warmup-done>COMPLETE WARM-UP</button><button class="text-button" data-warmup-skip>SKIP FOR TODAY</button>`);
}
function workout(){
  ensureDraft();
  if(!state.draft.warmupDone && !state.draft.warmupSkipped) return warmup();
  const done=state.draft.exercises.flatMap(e=>e.sets).filter(Boolean).length;
  const total=state.draft.exercises.flatMap(e=>e.sets).length;
  return shell(`<h1 class="page-title">Strength Quest ${state.routine}</h1><p class="page-sub">${activeRoutines()[state.routine].title} · ${equipmentModes[state.equipmentMode].label} · ${difficultyModes[state.difficulty].label}</p><div class="routine-banner"><div><b>Quest progress</b><span>${done} of ${total} sets confirmed</span></div><div class="reward">${Math.round(done/total*100)}%</div></div>${state.draft.exercises.map((ex,ei)=>exerciseCard(ex,ei)).join('')}<div class="workout-actions"><button class="primary" data-finish ${done<total?'disabled style="opacity:.42"':''}>COMPLETE QUEST · +100 XP</button></div>`);
}
function alternativesFor(ex){
  const all=Object.values(activeRoutines()).flatMap(r=>r.exercises);
  const compatible={body:['body','core'],core:['core','body','carry'],carry:['carry','core','lower'],upper:['upper'],lower:['lower']}[ex.group]||[ex.group];
  const unique=[];
  for(const option of all){
    if(compatible.includes(option.group) && option.name!==ex.name && !unique.some(item=>item.name===option.name)) unique.push(option);
  }
  return unique.slice(0,4);
}
function exerciseGuide(ex){
  const name=ex.name.toLowerCase();
  let equipment='Bodyweight';
  if(name.includes('smith'))equipment='Smith machine';else if(name.includes('machine')||name.includes('leg press')||name.includes('hack squat')||name.includes('assisted dip')||name.includes('hamstring curl')||name.includes('rotary torso'))equipment='Gym machine';else if(name.includes('cable')||name.includes('pulldown')||name.includes('pushdown'))equipment='Cable station';else if(name.includes('landmine'))equipment='Barbell and landmine attachment';else if(name.includes('barbell'))equipment='Barbell and weight plates';else if(name.includes('chest-supported row'))equipment='Dumbbells and bench';else if(name.includes('dumbbell')||name.includes('goblet')||name.includes('farmer')||name.includes('renegade')||name.includes('lateral raise')||name.includes('hammer curl'))equipment='Dumbbells';else if(name.includes('split squat')||name.includes('step-up')||name.includes('calf raise'))equipment='Dumbbells or bodyweight';else if(name.includes('kettlebell'))equipment='Kettlebell';else if(name.includes('bench')||name.includes('back extension'))equipment='Bench';
  let guide={muscles:'Primary muscles for this movement',setup:'Choose a stable position and begin with a comfortable range of motion.',movement:'Move slowly through the prescribed repetitions while maintaining control.',cue:'Breathe steadily and keep the movement smooth.',mistake:'Avoid rushing or using more resistance than you can control.'};
  if(name.includes('side plank'))guide={muscles:'Obliques, deep core and shoulders',setup:'Lie on one side with your elbow beneath your shoulder and legs extended or knees bent.',movement:'Lift your hips until your body forms a straight line and hold for the prescribed time.',cue:'Keep your ribs and hips stacked.',mistake:'Do not let your shoulder collapse or hips rotate.'};
  else if(name.includes('plank'))guide={muscles:'Deep core, abdominals and shoulders',setup:'Place elbows beneath shoulders and extend your legs behind you.',movement:'Brace your torso and hold a straight line from head to heels.',cue:'Squeeze your glutes and breathe normally.',mistake:'Avoid dropping your hips or lifting them too high.'};
  else if(name.includes('dead bug'))guide={muscles:'Deep core and hip stabilisers',setup:'Lie on your back with hips and knees bent to 90 degrees and arms above your chest.',movement:'Slowly extend the opposite arm and leg, return, then alternate sides.',cue:'Keep your lower back gently pressed toward the floor.',mistake:'Do not move farther than you can without arching your back.'};
  else if(name.includes('mountain climber'))guide={muscles:'Core, shoulders and hip flexors',setup:'Begin in a strong high-plank position with hands beneath shoulders.',movement:'Drive one knee toward your chest, return it, and alternate under control.',cue:'Keep your shoulders stable over your hands.',mistake:'Avoid bouncing your hips or shortening the movement excessively.'};
  else if(name.includes('crunch'))guide={muscles:'Abdominals',setup:'Set the cable or machine comfortably and brace before moving.',movement:'Curl your ribs toward your pelvis without pulling with your arms.',cue:'Initiate the movement with your abdominals.',mistake:'Do not turn it into a hip hinge or yank the resistance.'};
  else if(name.includes('woodchop')||name.includes('rotary torso'))guide={muscles:'Obliques and deep core',setup:'Set a light resistance and position your torso tall with hips stable.',movement:'Rotate through a controlled range, pause, and return slowly.',cue:'Let your trunk produce the motion while your feet stay planted.',mistake:'Avoid jerking the weight or forcing a painful range.'};
  else if(name.includes('farmer carry'))guide={muscles:'Grip, upper back, core and legs',setup:'Stand tall with equal weights at your sides and shoulders gently set back.',movement:'Walk with short, controlled steps for the prescribed time.',cue:'Stay tall as if balancing something on your head.',mistake:'Avoid leaning, shrugging excessively or rushing.'};
  else if(name.includes('swing'))guide={muscles:'Glutes, hamstrings and core',setup:'Place the weight in front of you, hinge at the hips and grip it securely.',movement:'Drive your hips forward to swing the weight, then guide it back into the hinge.',cue:'Create power with your hips rather than lifting with your arms.',mistake:'Do not squat the swing or overextend your lower back.'};
  else if(name.includes('calf raise'))guide={muscles:'Calves',setup:'Stand with your feet secure and use support for balance if needed.',movement:'Rise onto the balls of your feet, pause, and lower slowly.',cue:'Move straight upward through your big toes.',mistake:'Avoid bouncing or rolling your ankles outward.'};
  else if(name.includes('hamstring curl'))guide={muscles:'Hamstrings',setup:'Adjust the machine so its joint aligns with your knee and the pad sits comfortably.',movement:'Curl your heels toward you, pause, and return under control.',cue:'Keep your hips firmly supported.',mistake:'Do not lift your hips or let the weight slam down.'};
  else if(name.includes('hip thrust'))guide={muscles:'Glutes and hamstrings',setup:'Support your upper back securely and place your feet flat near hip width.',movement:'Drive through your feet to lift your hips, pause, and lower with control.',cue:'Finish by squeezing your glutes while keeping ribs down.',mistake:'Avoid finishing by arching your lower back.'};
  else if(name.includes('deadlift')||name.includes('romanian'))guide={muscles:'Hamstrings, glutes and back stabilisers',setup:'Stand close to the weight, brace your torso and send your hips backward.',movement:'Keep the weight close as you stand tall, then return by hinging at the hips.',cue:'Maintain a long, neutral spine and push the floor away.',mistake:'Avoid rounding your back or letting the weight drift forward.'};
  else if(name.includes('step-up'))guide={muscles:'Quadriceps, glutes and balance muscles',setup:'Place your whole working foot on a stable bench or platform.',movement:'Drive through the elevated foot to stand, then lower slowly.',cue:'Let the working leg perform most of the effort.',mistake:'Avoid pushing hard from the trailing foot or using an unstable surface.'};
  else if(name.includes('lunge')||name.includes('split squat'))guide={muscles:'Quadriceps, glutes and hamstrings',setup:'Take a stable split stance with both feet pointing comfortably forward.',movement:'Lower both knees under control, then drive through the front foot to rise.',cue:'Keep the front knee tracking in the direction of the toes.',mistake:'Avoid losing balance or allowing the knee to collapse inward.'};
  else if(name.includes('squat')||name.includes('leg press')||name.includes('thruster'))guide={muscles:'Quadriceps, glutes and core',setup:'Use a stable stance, brace your torso and keep your feet firmly supported.',movement:'Lower through a comfortable range, then drive evenly through your feet to rise.',cue:'Keep your knees moving in the same direction as your toes.',mistake:'Avoid collapsing your knees inward or losing control at the bottom.'};
  else if(name.includes('renegade row'))guide={muscles:'Upper back, biceps, core and shoulders',setup:'Begin in a wide high plank while holding dumbbells beneath your shoulders.',movement:'Brace firmly, row one dumbbell toward your ribs, lower it, and alternate.',cue:'Keep your hips square to the floor.',mistake:'Avoid twisting your torso or using a weight that breaks your plank.'};
  else if(name.includes('row'))guide={muscles:'Upper back, lats and biceps',setup:'Set your spine tall or supported and begin with shoulders relaxed.',movement:'Pull your elbows toward your ribs, pause, and return until the arms extend.',cue:'Lead with your elbows and keep your chest steady.',mistake:'Avoid shrugging, jerking or leaning backward for momentum.'};
  else if(name.includes('pulldown')||name.includes('pullover'))guide={muscles:'Lats, upper back and arms',setup:'Secure your body and begin with your ribs stacked over your pelvis.',movement:'Draw the resistance toward your upper chest or hips, then return slowly.',cue:'Think about moving your elbows down toward your sides.',mistake:'Avoid excessive leaning or pulling behind your neck.'};
  else if(name.includes('lateral raise'))guide={muscles:'Side shoulders',setup:'Stand tall with light weights at your sides and elbows slightly bent.',movement:'Raise your arms to about shoulder height, pause, and lower slowly.',cue:'Lead gently with your elbows.',mistake:'Avoid shrugging or swinging heavy weights.'};
  else if(name.includes('curl'))guide={muscles:'Biceps and forearms',setup:'Stand or sit tall with elbows close to your sides.',movement:'Curl the weights without moving your upper arms, then lower fully under control.',cue:'Keep your wrists neutral and shoulders relaxed.',mistake:'Avoid swinging your torso or letting elbows travel forward.'};
  else if(name.includes('pushdown'))guide={muscles:'Triceps',setup:'Stand securely at the cable with elbows tucked close to your sides.',movement:'Extend your elbows until your arms straighten, then return slowly.',cue:'Keep your upper arms still.',mistake:'Avoid leaning heavily onto the attachment or flaring your elbows.'};
  else if(name.includes('push-up')||name.includes('dip'))guide={muscles:'Chest, shoulders and triceps',setup:'Set your hands securely and keep your body supported in a strong line.',movement:'Lower through a comfortable range, then press back to the start.',cue:'Keep your shoulders away from your ears and elbows controlled.',mistake:'Avoid dropping your hips or forcing painful shoulder depth.'};
  else if(name.includes('press'))guide={muscles:name.includes('bench')||name.includes('incline')?'Chest, shoulders and triceps':'Shoulders, triceps and upper chest',setup:'Set your feet firmly, brace your torso and begin with wrists stacked over elbows.',movement:'Press the resistance smoothly, then lower it under control.',cue:'Keep your wrists neutral and shoulders stable.',mistake:'Avoid bouncing, excessive back arching or flaring elbows aggressively.'};
  else if(name.includes('back extension'))guide={muscles:'Glutes, hamstrings and back stabilisers',setup:'Adjust the support so you can hinge freely at the hips with feet secure.',movement:'Hinge forward under control, then use your glutes and hamstrings to return to neutral.',cue:'Finish in a straight line rather than leaning backward.',mistake:'Avoid hyperextending or rounding rapidly.'};
  return {equipment,...guide};
}
function exerciseCard(ex,ei){
  const alternatives=alternativesFor(ex);
  const swapHtml=swapOpen===ei?`<div class="swap-panel"><span>Choose a suitable alternative</span>${alternatives.length?alternatives.map((option,oi)=>`<button data-swap-choice data-e="${ei}" data-o="${oi}">${esc(option.name)}</button>`).join(''):'<p>No equivalent exercise is available in this program.</p>'}</div>`:'';
  return `<article class="exercise"><div class="exercise-top"><div class="exercise-num">${String(ei+1).padStart(2,'0')}</div><div class="exercise-name"><b>${ex.name}</b><span>${ex.sets.length} sets · ${prescription(ex)}</span></div><div class="exercise-tools"><button class="info-button" data-info data-e="${ei}" aria-label="Instructions for ${esc(ex.name)}">INFO</button><button class="swap-button" data-swap data-e="${ei}" aria-label="Replace ${esc(ex.name)}">SWAP</button></div></div>${swapHtml}${ex.sets.map((done,si)=>`<div class="confirm-row"><div><span>SET ${si+1}</span><b>${prescription(ex)}</b></div><button class="set-check ${done?'done':''}" data-set data-e="${ei}" data-s="${si}" aria-label="Confirm set ${si+1}">${done?'✓':'○'}</button></div>`).join('')}</article>`;
}
function showExerciseGuide(index){
  const exercise=state.draft?.exercises[index];if(!exercise)return;
  const guide=exerciseGuide(exercise);const overlay=document.createElement('div');overlay.className='guide-overlay';
  overlay.innerHTML=`<section class="guide-card"><button class="guide-close" data-guide-close aria-label="Close instructions">×</button><div class="guide-label">EXERCISE GUIDE</div><h2>${esc(exercise.name)}</h2><div class="guide-pills"><span>Equipment · ${esc(guide.equipment)}</span><span>Muscles · ${esc(guide.muscles)}</span></div><div class="guide-section"><b>Starting position</b><p>${esc(guide.setup)}</p></div><div class="guide-section"><b>Movement</b><p>${esc(guide.movement)}</p></div><div class="guide-section cue"><b>Form cue</b><p>${esc(guide.cue)}</p></div><div class="guide-section warning"><b>Common mistake</b><p>${esc(guide.mistake)}</p></div><p class="guide-safety">Use a comfortable range and resistance. Stop if you feel sharp, unusual or worsening pain.</p><button class="primary" data-guide-close>UNDERSTOOD</button></section>`;
  document.body.appendChild(overlay);overlay.querySelectorAll('[data-guide-close]').forEach(button=>button.onclick=()=>overlay.remove());
}
function showQuestDetails(type){
  const side=dailySideQuest();
  const detail=type==='recovery'
    ? {icon:'◌',label:'RECOVERY QUEST',title:'Recovery Walk',objective:`Walk for ${recoveryMinutes()} minutes at a comfortable, sustainable pace.`,reward:'20 XP',progression:'The duration increases by 5 minutes every 10 levels and stops increasing at 45 minutes.',completion:state.recoveryDate===localDay()?'Completed today':'Available to complete today',safety:'Choose a safe route, remain aware of your surroundings, and stop if you feel pain, dizziness or unusual discomfort.'}
    : {icon:side.icon,label:'DAILY SIDE QUEST',title:side.name,objective:side.description,reward:'15 XP',progression:'A different optional Side Quest appears each day. Skipping it does not affect your workout streak.',completion:state.sideQuestDate===localDay()?'Completed today':'Available to complete today',safety:'Use a comfortable range and pace. Replace or skip the activity if it is unsuitable for you.'};
  const overlay=document.createElement('div');overlay.className='quest-detail-overlay';
  overlay.innerHTML=`<section class="quest-detail-modal"><button class="guide-close" data-detail-close aria-label="Close quest details">×</button><div class="quest-detail-icon">${detail.icon}</div><div class="guide-label">${detail.label}</div><h2>${esc(detail.title)}</h2><div class="quest-detail-reward">REWARD · ${detail.reward}</div><div class="guide-section"><b>Today’s objective</b><p>${esc(detail.objective)}</p></div><div class="guide-section cue"><b>Progression</b><p>${esc(detail.progression)}</p></div><div class="guide-section"><b>Status</b><p>${esc(detail.completion)}</p></div><p class="guide-safety">${esc(detail.safety)}</p><button class="primary" data-detail-close>CLOSE DETAILS</button></section>`;
  document.body.appendChild(overlay);overlay.querySelectorAll('[data-detail-close]').forEach(button=>button.onclick=()=>overlay.remove());
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
    ]],
    ['Weekly Bosses', [
      ['♜','Boss Breaker','Defeat your first Weekly Boss',state.bossWins,1],
      ['♞','Raid Veteran','Defeat 5 Weekly Bosses',state.bossWins,5],
      ['♝','Boss Hunter','Defeat 10 Weekly Bosses',state.bossWins,10],
      ['♛','Raid Sovereign','Defeat 25 Weekly Bosses',state.bossWins,25],
      ['♚','Eternal Conqueror','Defeat 50 Weekly Bosses',state.bossWins,50]
    ]]
  ];
}
function unlockedAchievements(){
  return achievementGroups().flatMap(group=>group[1]).filter(item=>item[3]>=item[4]).map(item=>({icon:item[0],name:item[1],description:item[2]}));
}
function unlockedThemes(){return Object.entries(themeModes).filter(([,theme])=>level()>=theme.level).map(([id,theme])=>({id,...theme}));}
function progressSnapshot(){ return { level:level(), achievements:new Set(unlockedAchievements().map(item=>item.name)), themes:new Set(unlockedThemes().map(theme=>theme.id)), emblem:emblemForLevel().id }; }
function queueProgressRewards(before){
  for(let reached=before.level+1;reached<=level();reached++){
    const newTitle=titleForLevel(reached);const titleChanged=newTitle!==titleForLevel(reached-1);
    celebrationQueue.push({type:'level',icon:'✦',title:'LEVEL INCREASED',name:`Level ${reached}`,description:titleChanged?`New title acquired — ${newTitle}.`:`Current title — ${newTitle}. The next quest awaits.`});
  }
  const evolvedEmblem=emblemForLevel();if(evolvedEmblem.id!==before.emblem)celebrationQueue.push({type:'emblem',icon:evolvedEmblem.glyph,title:'EMBLEM EVOLVED',name:evolvedEmblem.name,description:`Your Hunter emblem evolved at Level ${evolvedEmblem.level}.`});
  unlockedAchievements().filter(item=>!before.achievements.has(item.name)).forEach(item=>celebrationQueue.push({type:'achievement',icon:item.icon,title:'ACHIEVEMENT UNLOCKED',name:item.name,description:item.description}));
  unlockedThemes().filter(theme=>!before.themes.has(theme.id)).forEach(theme=>celebrationQueue.push({type:'theme',icon:'◈',title:'THEME UNLOCKED',name:theme.label,description:`The ${theme.label} interface theme is now available in Settings.`}));
  showNextCelebration();
}
function showNextCelebration(){
  if(celebrationActive || !celebrationQueue.length)return;
  celebrationActive=true;
  const item=celebrationQueue.shift();
  playSound(item.type);
  const modal=document.createElement('div');
  modal.className=`celebration celebration-${item.type}`;
  modal.innerHTML=`<div class="celebration-card"><div class="celebration-icon">${item.icon}</div><p>${item.title}</p><h2>${esc(item.name)}</h2><span>${esc(item.description)}</span><button class="primary" data-celebration-close>CONTINUE</button></div>`;
  document.body.appendChild(modal);
  requestAnimationFrame(()=>modal.classList.add('visible'));
  modal.querySelector('[data-celebration-close]').onclick=()=>{modal.classList.remove('visible');setTimeout(()=>{modal.remove();celebrationActive=false;showNextCelebration()},280)};
}
function playSound(type){
  if(!state.soundEnabled)return;
  try{
    const AudioCtx=window.AudioContext||window.webkitAudioContext;
    if(!AudioCtx)return;
    const ctx=playSound.ctx||(playSound.ctx=new AudioCtx());
    if(ctx.state==='suspended')ctx.resume();
    const notes={set:[520],quest:[392,523,659],level:[440,554,659,880],achievement:[659,784,988]}[type]||[520];
    notes.forEach((frequency,index)=>{
      const osc=ctx.createOscillator();const gain=ctx.createGain();const start=ctx.currentTime+index*.11;
      osc.type=type==='set'?'sine':'triangle';osc.frequency.value=frequency;gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(.09,start+.02);gain.gain.exponentialRampToValueAtTime(.0001,start+.22);osc.connect(gain).connect(ctx.destination);osc.start(start);osc.stop(start+.24);
    });
  }catch{}
}
function progress(){
  const groups=achievementGroups(); const all=groups.flatMap(g=>g[1]); const unlocked=all.filter(a=>a[3]>=a[4]).length;
  const achievementHtml=groups.map(([title,items])=>`<section class="achievement-section"><div class="achievement-category"><h3>${title}</h3><span>${items.filter(a=>a[3]>=a[4]).length}/${items.length}</span></div><div class="achievement-grid">${items.map(a=>`<div class="badge ${a[3]>=a[4]?'':'locked'}"><i>${a[0]}</i><b>${a[1]}</b><span>${a[2]}</span><em>${Math.min(a[3],a[4])} / ${a[4]}</em></div>`).join('')}</div></section>`).join('');
  return shell(`<h1 class="page-title">Progress</h1><p class="page-sub">Every completed quest makes the next one possible.</p><div class="section-head"><h2>Achievements</h2><span>${unlocked}/${all.length} unlocked</span></div>${achievementHtml}<div class="section-head"><h2>Quest history</h2><span>Newest first</span></div>${state.history.length?state.history.slice(0,12).map(h=>`<div class="history-row"><time>${new Date(h.date).toLocaleDateString(undefined,{month:'short',day:'numeric'})}</time><b>Strength Quest ${h.routine}</b><span>+100 XP</span></div>`).join(''):`<div class="empty">Your completed workouts will appear here.</div>`}`);
}
function settings(){
  const modes=Object.entries(equipmentModes).map(([id,mode])=>`<button class="mode-option ${state.equipmentMode===id?'active':''}" data-mode="${id}"><b>${mode.label}</b><span>${mode.detail}</span>${state.equipmentMode===id?'<i>✓</i>':''}</button>`).join('');
  const difficulties=Object.entries(difficultyModes).map(([id,mode])=>`<button class="mode-option ${state.difficulty===id?'active':''}" data-difficulty="${id}"><b>${mode.label}</b><span>${mode.detail}</span>${state.difficulty===id?'<i>✓</i>':''}</button>`).join('');
  const themes=Object.entries(themeModes).map(([id,theme])=>{const unlocked=level()>=theme.level;return `<button class="theme-option ${state.theme===id?'active':''} ${unlocked?'':'locked'}" data-theme-choice="${id}" ${unlocked?'':'disabled'}><span class="theme-swatch" style="--theme-a:${theme.colors[0]};--theme-b:${theme.colors[1]}"></span><span><b>${theme.label}</b><small>${unlocked?state.theme===id?'Selected':'Unlocked':`Unlocks at Level ${theme.level}`}</small></span><i>${unlocked?(state.theme===id?'✓':''):'◆'}</i></button>`}).join('');
  return shell(`<h1 class="page-title">Settings</h1><p class="page-sub">Your data stays in this browser on this device.</p>
  <div class="settings-card"><h3>Hunter profile</h3><div class="field"><label>HUNTER NAME</label><input id="name" value="${esc(state.name)}" placeholder="Enter your hunter name" maxlength="24" autocomplete="nickname" /></div><button class="primary" data-save-name>SAVE NAME</button></div>
  <div class="settings-card"><h3>Workout equipment</h3><p class="settings-note equipment-help">Your next quest uses only equipment from this program.</p><div class="mode-grid">${modes}</div></div>
  <div class="settings-card"><h3>Quest difficulty</h3><p class="settings-note equipment-help">Changes sets, repetitions and suggested starting weights. Always prioritise safe form.</p><div class="mode-grid">${difficulties}</div></div>
  <div class="settings-card"><h3>Interface theme</h3><p class="settings-note equipment-help">New visual styles unlock as your Hunter reaches Level 100.</p><div class="theme-grid">${themes}</div></div>
  <div class="settings-card setting-row"><div><h3>Quest sounds</h3><p class="settings-note">Set confirmations, quests, levels and achievements.</p></div><button class="toggle ${state.soundEnabled?'on':''}" data-sound role="switch" aria-checked="${state.soundEnabled}"><span></span></button></div>
  <div class="settings-card"><h3>How Ascension works</h3><p class="settings-note equipment-help">Replay the short guide to profiles, quests, training, Bosses and backups.</p><button class="secondary" data-tutorial>OPEN TUTORIAL</button></div>
  <div class="settings-card"><h3>Progression rules</h3><p class="settings-note">Strength prescription grows gradually with your level. Recovery Walk gains 5 minutes every 10 levels and stops increasing at 45 minutes.</p></div>
  <div class="settings-card"><h3>Backup</h3><div class="button-row"><button class="secondary" data-export>Export data</button><button class="secondary" data-import>Import data</button></div><input type="file" id="file" accept="application/json" hidden /></div>
  <div class="settings-card"><h3>Start over</h3><button class="secondary danger" data-reset>Reset all progress</button></div>`);
}
function applyTheme(){document.documentElement.dataset.theme=state.theme;}
function render(){ applyTheme();document.querySelector('#app').innerHTML=page==='home'?home():page==='workout'?workout():page==='progress'?progress():settings(); bind(); }
function toast(msg){ const el=document.querySelector('#toast'); if(!el)return; el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),1800); }
function bind(){
  document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>{page=b.dataset.page;render();scrollTo(0,0)});
  document.querySelector('[data-start]')?.addEventListener('click',()=>{page='workout';render()});
  document.querySelector('[data-warmup-done]')?.addEventListener('click',()=>{state.draft.warmupDone=true;save();render();toast('Warm-up complete')});
  document.querySelector('[data-warmup-skip]')?.addEventListener('click',()=>{state.draft.warmupSkipped=true;save();render()});
  document.querySelectorAll('[data-set]').forEach(b=>b.onclick=()=>{const sets=state.draft.exercises[+b.dataset.e].sets;sets[+b.dataset.s]=!sets[+b.dataset.s];if(sets[+b.dataset.s])playSound('set');save();render()});
  document.querySelectorAll('[data-swap]').forEach(b=>b.onclick=()=>{const index=+b.dataset.e;swapOpen=swapOpen===index?null:index;render()});
  document.querySelectorAll('[data-info]').forEach(b=>b.onclick=()=>showExerciseGuide(+b.dataset.e));
  document.querySelectorAll('[data-quest-detail]').forEach(b=>b.onclick=()=>showQuestDetails(b.dataset.questDetail));
  document.querySelectorAll('[data-swap-choice]').forEach(b=>b.onclick=()=>{const index=+b.dataset.e;const current=state.draft.exercises[index];const option=alternativesFor(current)[+b.dataset.o];if(!option)return;state.draft.exercises[index]={...option,sets:[...current.sets]};swapOpen=null;save();render();toast(`Replaced with ${option.name}`)});
  document.querySelector('[data-finish]')?.addEventListener('click',finish);
  document.querySelector('[data-recovery]')?.addEventListener('click',completeRecovery);
  document.querySelector('[data-side-quest]')?.addEventListener('click',completeSideQuest);
  document.querySelector('[data-boss-claim]')?.addEventListener('click',claimBoss);
  document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{state.equipmentMode=b.dataset.mode;state.draft=null;save();render();toast(`${equipmentModes[state.equipmentMode].label} quests selected`)});
  document.querySelectorAll('[data-difficulty]').forEach(b=>b.onclick=()=>{state.difficulty=b.dataset.difficulty;state.draft=null;save();render();toast(`${difficultyModes[state.difficulty].label} difficulty selected`)});
  document.querySelectorAll('[data-theme-choice]').forEach(b=>b.onclick=()=>{const id=b.dataset.themeChoice;if(level()<themeModes[id].level)return;state.theme=id;save();render();toast(`${themeModes[id].label} theme equipped`)});
  document.querySelector('[data-sound]')?.addEventListener('click',()=>{state.soundEnabled=!state.soundEnabled;save();render();if(state.soundEnabled)playSound('set');toast(state.soundEnabled?'Quest sounds enabled':'Quest sounds disabled')});
  document.querySelector('[data-tutorial]')?.addEventListener('click',()=>showTutorial(true));
  document.querySelector('[data-save-name]')?.addEventListener('click',()=>{state.name=document.querySelector('#name').value.trim();save();render();toast(state.name?'Hunter name saved':'Hunter name cleared')});
  document.querySelector('[data-export]')?.addEventListener('click',exportData);
  document.querySelector('[data-import]')?.addEventListener('click',()=>document.querySelector('#file').click());
  document.querySelector('#file')?.addEventListener('change',importData);
  document.querySelector('[data-reset]')?.addEventListener('click',()=>{if(confirm('Reset all levels and workout history?')){state={...initial,history:[],bests:{},bossClaims:{}};save();page='home';render();showOnboarding()}});
}
function completeRecovery(){
  if(state.recoveryDate===localDay()) return;
  const before=progressSnapshot();
  state.recoveryDate=localDay(); state.recoveryCount++; state.xp+=20; save(); render(); playSound('quest'); toast('Recovery complete · +20 XP'); queueProgressRewards(before);
}
function completeSideQuest(){
  if(state.sideQuestDate===localDay())return;
  const before=progressSnapshot();state.sideQuestDate=localDay();state.sideQuestCount++;state.xp+=15;save();render();playSound('set');toast('Side Quest complete · +15 XP');queueProgressRewards(before);
}
function claimBoss(){
  const boss=currentBoss();if(!boss.complete||boss.claimed)return;
  const before=progressSnapshot();state.bossClaims[boss.key]=true;state.bossWins++;state.xp+=200;save();render();playSound('quest');toast('Weekly Boss defeated · +200 XP');queueProgressRewards(before);
}
function finish(){
  const before=progressSnapshot();
  const now=new Date(); const prev=state.lastWorkout?new Date(state.lastWorkout):null;
  const dayGap=prev?Math.floor((new Date(now.toDateString())-new Date(prev.toDateString()))/86400000):null;
  state.streak=dayGap===1?state.streak+1:dayGap===0?state.streak:1;
  state.draft.exercises.forEach(ex=>{const weight=weightTarget(ex);if(weight && weight>(state.bests[ex.name]||0))state.bests[ex.name]=weight;});
  const setsConfirmed=state.draft.exercises.reduce((sum,exercise)=>sum+exercise.sets.filter(Boolean).length,0);
  state.history.unshift({date:now.toISOString(),routine:state.routine,equipmentMode:state.equipmentMode,difficulty:state.difficulty,warmupCompleted:Boolean(state.draft.warmupDone),setsConfirmed}); state.lastWorkout=now.toISOString(); state.workoutCount++; state.xp+=100;
  state.routine=routineOrder[(routineOrder.indexOf(state.routine)+1)%routineOrder.length]; state.draft=null; swapOpen=null; save(); page='home'; render(); playSound('quest'); toast('Quest complete · +100 XP'); queueProgressRewards(before);
}
function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ascension-backup.json';a.click();URL.revokeObjectURL(a.href);}
function importData(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const restored=JSON.parse(r.result);state={...initial,...restored,draft:null,onboardingComplete:true,tutorialComplete:restored.tutorialComplete===undefined?true:Boolean(restored.tutorialComplete)};if(state.name==='Mahmoud')state.name='';if(!routineOrder.includes(state.routine))state.routine='A';if(!equipmentModes[state.equipmentMode])state.equipmentMode='home';if(!difficultyModes[state.difficulty])state.difficulty='intermediate';if(!themeModes[state.theme]||level()<themeModes[state.theme].level)state.theme='shadow';if(!state.bossClaims||typeof state.bossClaims!=='object')state.bossClaims={};if(!Number.isFinite(state.bossWins))state.bossWins=0;save();page='home';render();toast('Backup restored')}catch{alert('That backup file could not be read.')}};r.readAsText(f);}

function showOnboarding(){
  if(state.onboardingComplete || document.querySelector('.onboarding'))return;
  let chosenEquipment=state.equipmentMode;
  let chosenDifficulty=state.difficulty;
  const overlay=document.createElement('div');
  overlay.className='onboarding';
  overlay.innerHTML=`<section class="onboarding-card"><div class="onboarding-step">HUNTER REGISTRATION</div><h1>Begin your Ascension</h1><p>Choose your identity and quest settings. You can change these later.</p><label>HUNTER NAME</label><input id="onboarding-name" placeholder="Enter your hunter name" maxlength="24" autocomplete="nickname"><label>TRAINING LOCATION</label><div class="choice-grid">${Object.entries(equipmentModes).map(([id,mode])=>`<button class="choice ${chosenEquipment===id?'active':''}" data-onboarding-mode="${id}"><b>${mode.label}</b><span>${mode.detail}</span></button>`).join('')}</div><label>STARTING DIFFICULTY</label><div class="choice-grid">${Object.entries(difficultyModes).map(([id,mode])=>`<button class="choice ${chosenDifficulty===id?'active':''}" data-onboarding-difficulty="${id}"><b>${mode.label}</b><span>${mode.sets} sets per exercise</span></button>`).join('')}</div><p class="safety-note">Suggested targets are general guidance. Use lighter weights whenever needed and stop if you feel pain.</p><button class="primary" data-onboarding-complete>ENTER ASCENSION</button></section>`;
  document.body.appendChild(overlay);
  overlay.querySelectorAll('[data-onboarding-mode]').forEach(button=>button.onclick=()=>{chosenEquipment=button.dataset.onboardingMode;overlay.querySelectorAll('[data-onboarding-mode]').forEach(item=>item.classList.toggle('active',item===button))});
  overlay.querySelectorAll('[data-onboarding-difficulty]').forEach(button=>button.onclick=()=>{chosenDifficulty=button.dataset.onboardingDifficulty;overlay.querySelectorAll('[data-onboarding-difficulty]').forEach(item=>item.classList.toggle('active',item===button))});
  overlay.querySelector('[data-onboarding-complete]').onclick=()=>{state.name=overlay.querySelector('#onboarding-name').value.trim();state.equipmentMode=chosenEquipment;state.difficulty=chosenDifficulty;state.onboardingComplete=true;state.draft=null;save();overlay.remove();render();toast(`Welcome, ${state.name||'Hunter'}`);setTimeout(()=>showTutorial(),350)};
}

function showTutorial(force=false){
  if((state.tutorialComplete&&!force)||document.querySelector('.tutorial-overlay'))return;
  const pages=[
    {icon:'◈',step:'01',title:'Your Hunter Profile',text:'Complete quests to earn XP, increase your level, evolve your emblem, advance your title and unlock interface themes.'},
    {icon:'⚔',step:'02',title:'Complete Quests',text:'Strength Quests build progression. Recovery Walks and optional Daily Side Quests provide smaller XP rewards.'},
    {icon:'◇',step:'03',title:'Train Safely',text:'Choose an appropriate difficulty, complete the warm-up, open INFO for guidance, and SWAP any unsuitable exercise.'},
    {icon:'♜',step:'04',title:'Defeat Weekly Bosses',text:'Each Monday begins a new Boss challenge. Complete its target and claim 200 bonus XP before the week ends.'},
    {icon:'▣',step:'05',title:'Protect Your Progress',text:'Your data stays on this device. Export a backup regularly from Settings so it can be restored if your phone changes.'}
  ];
  let index=0;const overlay=document.createElement('div');overlay.className='tutorial-overlay';document.body.appendChild(overlay);
  const close=()=>{state.tutorialComplete=true;save();overlay.remove()};
  const draw=()=>{const item=pages[index];overlay.innerHTML=`<section class="tutorial-card"><button class="tutorial-skip" data-tutorial-skip>SKIP</button><div class="tutorial-icon">${item.icon}</div><div class="tutorial-step">SYSTEM GUIDE · ${item.step}/${String(pages.length).padStart(2,'0')}</div><h2>${item.title}</h2><p>${item.text}</p><div class="tutorial-dots">${pages.map((_,i)=>`<i class="${i===index?'active':''}"></i>`).join('')}</div><div class="tutorial-actions"><button class="secondary" data-tutorial-back ${index===0?'disabled':''}>BACK</button><button class="primary" data-tutorial-next>${index===pages.length-1?'FINISH':'NEXT'}</button></div></section>`;overlay.querySelector('[data-tutorial-skip]').onclick=close;overlay.querySelector('[data-tutorial-back]').onclick=()=>{if(index>0){index--;draw()}};overlay.querySelector('[data-tutorial-next]').onclick=()=>{if(index===pages.length-1)close();else{index++;draw()}}};draw();
}

function showWelcome(){
  const welcome=document.createElement('div');
  welcome.className='welcome-screen';
  welcome.innerHTML=`<div class="welcome-sigil"><span>✦</span></div><p>ASCENSION PROTOCOL</p><h1>Welcome, <strong>${esc(state.name || 'Hunter')}</strong></h1><div class="welcome-title">${esc(titleForLevel())}</div><div class="welcome-line"></div><span class="welcome-sub">Your next quest awaits</span>`;
  document.body.appendChild(welcome);
  requestAnimationFrame(()=>welcome.classList.add('visible'));
  setTimeout(()=>{welcome.classList.add('departing');setTimeout(()=>{welcome.remove();if(state.onboardingComplete)showTutorial();else showOnboarding()},650)},1800);
}

render();
showWelcome();
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
