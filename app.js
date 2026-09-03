const routineOrder = ['A', 'B', 'C', 'D', 'E', 'F'];
const MAX_SWAPS_PER_QUEST = 3;
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
    { name: 'Plank', seconds: 25, group: 'core', variants:{beginner:'Knee Plank',intermediate:'Plank',advanced:'Long-Lever Plank'} }
  ]},
  B: { title: 'Home Vanguard', exercises: [
    { name: 'Dumbbell Reverse Lunge', baseWeight: 6, group: 'lower' },
    { name: 'Seated Dumbbell Press', baseWeight: 5, group: 'upper' },
    { name: 'Barbell Bent-Over Row', baseWeight: 15, group: 'upper' },
    { name: 'Bench Hip Thrust', baseWeight: 20, group: 'lower' },
    { name: 'Side Plank', seconds: 20, group: 'core', variants:{beginner:'Bent-Knee Side Plank',intermediate:'Side Plank',advanced:'Long-Lever Side Plank'} }
  ]},
  C: { title: 'Home Balance Forge', exercises: [
    { name: 'Barbell Front Squat', baseWeight: 15, group: 'lower' },
    { name: 'Incline Dumbbell Press', baseWeight: 6, group: 'upper' },
    { name: 'Bench-Supported Dumbbell Row', baseWeight: 8, group: 'upper' },
    { name: 'Single-Leg Dumbbell Romanian Deadlift', baseWeight: 6, group: 'lower' },
    { name: 'Dead Bug', reps: 8, group: 'core' }
  ]},
  D: { title: 'Home Resilience', exercises: [
    { name: 'Bulgarian Split Squat', baseWeight: 5, group: 'lower' },
    { name: 'Push-Up', baseWeight: 0, group: 'body', variants:{beginner:'Bench Push-Up',intermediate:'Push-Up',advanced:'Slow Pause Push-Up'} },
    { name: 'Barbell Bent-Over Row', baseWeight: 15, group: 'upper' },
    { name: 'Bench Hip Thrust', baseWeight: 20, group: 'lower' },
    { name: 'Side Plank', seconds: 20, group: 'core', variants:{beginner:'Bent-Knee Side Plank',intermediate:'Side Plank',advanced:'Long-Lever Side Plank'} }
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
    { name: 'Push-Up', baseWeight: 0, group: 'body', variants:{beginner:'Bench Push-Up',intermediate:'Push-Up',advanced:'Slow Pause Push-Up'} },
    { name: 'Dumbbell Pullover on Bench', baseWeight: 6, group: 'upper' },
    { name: 'Mountain Climber', seconds: 25, group: 'core', variants:{beginner:'Elevated Slow Mountain Climber',intermediate:'Mountain Climber',advanced:'Cross-Body Mountain Climber'} }
  ]}
};

const homeFinishers = {
  A:{name:'Foundation Pulse',moves:['30 sec brisk march','30 sec bodyweight squats','30 sec step jacks','30 sec easy recovery'],rounds:2,alternative:'Keep every movement low-impact and use a chair for balance if needed.'},
  B:{name:'Vanguard Circuit',moves:['30 sec alternating reverse lunges','30 sec shadow boxing','30 sec fast march','30 sec easy recovery'],rounds:2,alternative:'Use shallow supported lunges or replace them with sit-to-stands.'},
  C:{name:'Balance Surge',moves:['30 sec bench step-ups','30 sec standing knee drives','30 sec low-impact skaters','30 sec easy recovery'],rounds:2,alternative:'Replace step-ups with marching and keep all steps controlled.'},
  D:{name:'Resilience Round',moves:['30 sec sit-to-stands','30 sec wall or bench push-ups','30 sec march with arm drive','30 sec easy recovery'],rounds:2,alternative:'Slow the pace and use a stable bench or chair for support.'},
  E:{name:'Athletic Spark',moves:['30 sec quick step-ups','30 sec low-impact mountain climbers','30 sec bodyweight good mornings','30 sec easy recovery'],rounds:2,alternative:'March in place instead of step-ups or mountain climbers.'},
  F:{name:'Total-Body Finale',moves:['30 sec squat to reach','30 sec bench push-ups','30 sec alternating knee drives','30 sec easy recovery'],rounds:2,alternative:'Reduce the range, use support, and keep both feet grounded.'}
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
const chronicleEntries = [
  {level:10,number:'I',title:'The Awakening',text:'At first light, the Hunter heard no command and received no promise. There was only a quiet decision: rise, begin, and return stronger than yesterday.'},
  {level:20,number:'II',title:'The First Threshold',text:'The first threshold did not open for talent. It yielded to the rhythm of repeated effort, each ordinary day becoming another mark upon the path.'},
  {level:30,number:'III',title:'The Iron Path',text:'Resistance shaped the Hunter as wind shapes stone. Difficulty was no longer an enemy, but a forge that revealed what patience could build.'},
  {level:40,number:'IV',title:'The Shattered Limit',text:'A boundary once believed permanent finally cracked. Beyond it waited no shortcut—only a wider horizon and the courage to keep moving.'},
  {level:50,number:'V',title:'The Ascendant',text:'Halfway to the summit, the Hunter looked back and found the starting point hidden by distance. Strength had arrived quietly, disguised as consistency.'},
  {level:60,number:'VI',title:'The Storm Realm',text:'The path entered a season of thunder. When motivation faded, discipline remained, steady enough to carry the Hunter through every storm.'},
  {level:70,number:'VII',title:'The Abyss',text:'In the deepest trial, progress became difficult to see. The Hunter continued anyway, learning that faith in the process is strongest before the result appears.'},
  {level:80,number:'VIII',title:'The Mythic Trial',text:'What once seemed extraordinary had become routine. The true trial was no longer proving strength to others, but honoring the standard built within.'},
  {level:90,number:'IX',title:'The Sovereign',text:'No crown was offered and none was needed. The Hunter had learned to command effort, recovery, and resolve—and therefore to command the path ahead.'},
  {level:100,number:'X',title:'Eternal Ascension',text:'A hundred levels stand behind you—not as numbers, but as proof of every day you chose to continue. No prophecy carried you here. You earned this through discipline, patience, recovery, and resolve. The Chronicle is complete. Your Ascension is eternal.'}
];
const eternalMilestones = [
  {level:125,icon:'◇',name:'Eternal Border',description:'A permanent radiant border for the Hunter profile.'},
  {level:150,icon:'✦',name:'Eternal Aura',description:'A living aura effect surrounding the Hunter profile.'},
  {level:200,icon:'◈',name:'Legendary Emblem',description:'An evolved variation of the Eternal Insignia.'},
  {level:250,icon:'☄',name:'Eternal Welcome',description:'A special welcome effect for a veteran Hunter.'},
  {level:500,icon:'∞',name:'Beyond the Summit',description:'The ultimate long-term Ascension achievement.'}
];
const regions = [
  {level:1,name:'The Awakening Grounds',icon:'◇',description:'Where resolve first takes form.'},
  {level:11,name:'Ironwood Pass',icon:'♧',description:'A path shaped by steady resistance.'},
  {level:21,name:'The Shattered Arena',icon:'⬡',description:'Where limits begin to fracture.'},
  {level:31,name:'Emberfall Bastion',icon:'♨',description:'A fortress forged through persistence.'},
  {level:41,name:'The Hollow Mountains',icon:'△',description:'A climb that rewards patience.'},
  {level:51,name:'Stormwatch Frontier',icon:'ϟ',description:'Discipline stands against the storm.'},
  {level:61,name:'The Obsidian Expanse',icon:'◆',description:'A quiet realm of enduring strength.'},
  {level:71,name:'The Celestial Ruins',icon:'✦',description:'Ancient trials reveal a greater path.'},
  {level:81,name:'The Eternal Gate',icon:'◈',description:'The final threshold draws near.'},
  {level:91,name:'The Ascendant Citadel',icon:'♚',description:'The summit of the first Ascension.'}
];
const attributeInfo = {
  strength:{icon:'⚔',label:'Strength',description:'Resistance training and completed Strength Quests.'},
  endurance:{icon:'ϟ',label:'Endurance',description:'Recovery Walks, finishers and sustained movement.'},
  vitality:{icon:'♥',label:'Vitality',description:'Balanced training, recovery and consistency.'},
  agility:{icon:'◇',label:'Agility',description:'Mobility, control and Daily Side Quests.'},
  discipline:{icon:'✦',label:'Discipline',description:'Showing up consistently and defeating Weekly Bosses.'}
};
const itemCatalog = {
  vanguardRing:{name:'Vanguard Ring',icon:'○',rarity:'uncommon',slot:'sigil',description:'A ring awarded to Hunters who establish their training path.'},
  ironSigil:{name:'Iron Sigil',icon:'⬡',rarity:'rare',slot:'sigil',description:'A crest recovered from a defeated Weekly Boss.'},
  recoveryCharm:{name:'Recovery Charm',icon:'☾',rarity:'uncommon',slot:'charm',description:'A reminder that restoration is part of progression.'},
  pathwayToken:{name:'Pathway Token',icon:'↻',rarity:'rare',slot:'charm',description:'A cosmetic charm honoring adaptable Hunters. The three-swap limit remains unchanged.'},
  emberAura:{name:'Ember Aura',icon:'♨',rarity:'epic',slot:'aura',description:'A warm aura forged in Emberfall Bastion.'},
  celestialAura:{name:'Celestial Aura',icon:'✧',rarity:'epic',slot:'aura',description:'A luminous aura discovered among the Celestial Ruins.'},
  ascendantCloak:{name:'Ascendant Cloak',icon:'♚',rarity:'legendary',slot:'aura',description:'A permanent mantle earned at Level 100.'},
  awakeningRelic:{name:'Relic of Awakening',icon:'◇',rarity:'rare',slot:'relic',description:'The first preserved fragment of the Chronicle.'},
  eternalHalo:{name:'Eternal Halo',icon:'∞',rarity:'eternal',slot:'aura',description:'A post-Ascension cosmetic forged from Eternal Shards.'},
  sovereignFrame:{name:'Sovereign Frame',icon:'◈',rarity:'eternal',slot:'sigil',description:'An Eternal border for the Hunter profile.'},
  forgeCrest:{name:'Forge Crest',icon:'⚔',rarity:'rare',slot:'sigil',description:'A profile crest unlocked through the Path of Power.'},
  pulseAura:{name:'Pulse Aura',icon:'ϟ',rarity:'epic',slot:'aura',description:'An aura carried by Hunters who master optional finishers.'},
  restorationCharm:{name:'Restoration Charm',icon:'☾',rarity:'rare',slot:'charm',description:'A charm unlocked through the Path of Endurance.'},
  pathfinderRelic:{name:'Pathfinder Relic',icon:'△',rarity:'epic',slot:'relic',description:'Reveals the identity of the next sealed region.'},
  tacticianSigil:{name:'Tactician Sigil',icon:'↻',rarity:'rare',slot:'sigil',description:'A distinction for adaptable training without increasing the swap limit.'}
};
const lootPool = ['recoveryCharm','vanguardRing','pathwayToken','ironSigil','emberAura','celestialAura'];
const skills = {
  powerI:{path:'Power',name:'Prepared Power',icon:'⚔',level:5,description:'Unlocks the equipable Forge Crest.',rewardItem:'forgeCrest'},
  powerII:{path:'Power',name:'Finisher Mastery',icon:'ϟ',level:20,requires:'powerI',description:'Unlocks the equipable Pulse Aura.',rewardItem:'pulseAura'},
  enduranceI:{path:'Endurance',name:'Restoration Sense',icon:'☾',level:10,description:'Unlocks the equipable Restoration Charm.',rewardItem:'restorationCharm'},
  enduranceII:{path:'Endurance',name:'Pathfinder',icon:'◇',level:30,requires:'enduranceI',description:'Unlocks a relic that reveals the next sealed region.',rewardItem:'pathfinderRelic'},
  resolveI:{path:'Resolve',name:'Flexible Tactics',icon:'↻',level:15,description:'Unlocks a tactical sigil while preserving the three-swap limit.',rewardItem:'tacticianSigil'},
  resolveII:{path:'Resolve',name:'Treasure Sense',icon:'◆',level:35,requires:'resolveI',description:'Adds a special glow to unopened loot chests.'}
};
const bossLore = {
  'Iron Vanguard':'A silent guardian that yields only to consistent strength.',
  'Trial of Paths':'A shifting presence that tests whether a Hunter can master more than one path.',
  'Ritual of Readiness':'An ancient sentinel that respects preparation before power.',
  'Trial of Resolve':'A relentless trial measured one controlled set at a time.'
};
function activeRoutines(){ return equipmentModes[state.equipmentMode].routines; }

const initial = { name: '', xp: 0, xpSystemVersion:2, rpgSystemVersion:1, streak: 0, lastWorkout: null, workoutCount: 0, routine: 'A', equipmentMode: 'home', difficulty: 'beginner', theme: 'shadow', soundEnabled: false, onboardingComplete: false, tutorialComplete:false, eternalCelebrated:false, history: [], bests: {}, exerciseAdjustments:{}, draft: null, recoveryDate: null, recoveryCount: 0, sideQuestDate:null, sideQuestCount:0, bossClaims:{}, bossWins:0, attributes:{strength:0,endurance:0,vitality:0,agility:0,discipline:0}, inventory:{}, chests:0, chestsOpened:0, chestProgress:0, equipped:{sigil:null,charm:null,aura:null,relic:null}, skills:{}, encounterDate:null, bossArchive:{}, shardsSpent:0, eternalPurchases:[], lastReward:null };
let state = load();
let page = 'home';
let progressTab = 'attributes';
let realmTab = 'map';
let swapOpen = null;
let celebrationQueue = [];
let celebrationActive = false;

function load() {
  try {
    const raw = localStorage.getItem('ascension-state');
    const stored = JSON.parse(raw || '{}');
    const merged = migrateLegacyXp({ ...JSON.parse(JSON.stringify(initial)), ...stored },Boolean(raw)&&stored.xpSystemVersion!==2);
    if (merged.name === 'Mahmoud') merged.name = '';
    if (!routineOrder.includes(merged.routine)) merged.routine = 'A';
    if (!equipmentModes[merged.equipmentMode]) merged.equipmentMode = 'home';
    if (stored.difficulty === undefined) merged.difficulty = raw ? 'intermediate' : 'beginner';
    if (!difficultyModes[merged.difficulty]) merged.difficulty = 'beginner';
    if (!themeModes[merged.theme] || levelForXp(merged.xp)<themeModes[merged.theme].level) merged.theme = 'shadow';
    if (!merged.bossClaims || typeof merged.bossClaims!=='object') merged.bossClaims={};
    if (!Number.isFinite(merged.bossWins)) merged.bossWins=0;
    if (!merged.exerciseAdjustments || typeof merged.exerciseAdjustments!=='object') merged.exerciseAdjustments={};
    if (stored.onboardingComplete === undefined) merged.onboardingComplete = Boolean(raw);
    if (stored.tutorialComplete === undefined) merged.tutorialComplete = Boolean(raw);
    if (stored.eternalCelebrated === undefined && levelForXp(merged.xp)>=100) merged.eternalCelebrated = true;
    if (merged.draft && !merged.draft.version) merged.draft = null;
    if (merged.draft && !Number.isFinite(merged.draft.swapsUsed)) merged.draft.swapsUsed = 0;
    if (stored.recoveryCount === undefined && merged.recoveryDate) merged.recoveryCount = 1;
    normalizeRpgState(merged,stored);
    return merged;
  } catch { return normalizeRpgState(JSON.parse(JSON.stringify(initial)),{}); }
}
function normalizeRpgState(record,stored={}){
  const finishers=(record.history||[]).filter(item=>item.finisherCompleted).length;
  const fallback={strength:(record.workoutCount||0)*3,endurance:(record.recoveryCount||0)+finishers,vitality:(record.recoveryCount||0)+Math.floor((record.workoutCount||0)/3),agility:record.sideQuestCount||0,discipline:(record.workoutCount||0)+(record.bossWins||0)*2};
  record.attributes=stored.attributes&&typeof stored.attributes==='object'?{...fallback,...stored.attributes}:fallback;
  for(const key of Object.keys(attributeInfo))record.attributes[key]=Math.max(0,Number(record.attributes[key])||0);
  if(!record.inventory||typeof record.inventory!=='object')record.inventory={};
  record.equipped={sigil:null,charm:null,aura:null,relic:null,...(record.equipped&&typeof record.equipped==='object'?record.equipped:{})};
  if(!record.skills||typeof record.skills!=='object')record.skills={};
  if(!record.bossArchive||typeof record.bossArchive!=='object')record.bossArchive={};
  if(!Array.isArray(record.eternalPurchases))record.eternalPurchases=[];
  if(Array.isArray(record.history))record.history.forEach(item=>{if(typeof item.note!=='string')item.note='';});
  ['chests','chestsOpened','chestProgress','shardsSpent'].forEach(key=>record[key]=Math.max(0,Number(record[key])||0));
  if(stored.rpgSystemVersion===undefined){
    if((record.workoutCount||0)>=10)record.inventory.vanguardRing=Math.max(1,record.inventory.vanguardRing||0);
    if((record.recoveryCount||0)>=10)record.inventory.recoveryCharm=Math.max(1,record.inventory.recoveryCharm||0);
    if(levelForXp(record.xp)>=10)record.inventory.awakeningRelic=Math.max(1,record.inventory.awakeningRelic||0);
    if(levelForXp(record.xp)>=30)record.inventory.emberAura=Math.max(1,record.inventory.emberAura||0);
    if(levelForXp(record.xp)>=70)record.inventory.celestialAura=Math.max(1,record.inventory.celestialAura||0);
    if(levelForXp(record.xp)>=100)record.inventory.ascendantCloak=Math.max(1,record.inventory.ascendantCloak||0);
    record.chests+=Math.floor(levelForXp(record.xp)/10);
    record.chestProgress=(record.workoutCount||0)%3;
  }
  record.rpgSystemVersion=1;
  return record;
}
function save(){ localStorage.setItem('ascension-state', JSON.stringify(state)); }
function xpNeededForLevel(value){return Math.min(400,200+Math.floor(Math.max(1,value)/10)*20);}
function xpAtStartOfLevel(value){let total=0;for(let current=1;current<Math.max(1,value);current++)total+=xpNeededForLevel(current);return total;}
function levelForXp(xp){let remaining=Math.max(0,Number(xp)||0),value=1;while(remaining>=xpNeededForLevel(value)){remaining-=xpNeededForLevel(value);value++;}return value;}
function migrateLegacyXp(record,needsMigration=true){
  if(!needsMigration){record.xpSystemVersion=2;return record;}
  const legacyXp=Math.max(0,Number(record.xp)||0);const legacyLevel=Math.floor(legacyXp/200)+1;const legacyProgress=(legacyXp%200)/200;
  record.xp=xpAtStartOfLevel(legacyLevel)+Math.round(legacyProgress*xpNeededForLevel(legacyLevel));record.xpSystemVersion=2;return record;
}
function level(){ return levelForXp(state.xp); }
function levelXp(){ return state.xp-xpAtStartOfLevel(level()); }
function levelRequirement(){return xpNeededForLevel(level());}
function rank(){ const l=level(); return l>=100?'Eternal':l>=20?'Ascendant':l>=15?'Apex':l>=10?'Elite':l>=5?'Vanguard':'Initiate'; }
function eternalShards(){return Math.max(0,level()-100-(state.shardsSpent||0));}
function ascensionStars(){return Math.max(0,Math.floor((level()-100)/10));}
function titleForLevel(value=level()){return titleMilestones.reduce((title,[required,name])=>value>=required?name:title,'The Awakened');}
function emblemForLevel(value=level()){return emblemStages.reduce((emblem,stage)=>value>=stage.level?stage:emblem,emblemStages[0]);}
function currentRegion(value=level()){return regions.reduce((region,item)=>value>=item.level?item:region,regions[0]);}
function nextRegion(value=level()){return regions.find(item=>item.level>value)||null;}
function questRank(value=level()){return value>=100?'ETERNAL':value>=80?'A':value>=60?'B':value>=40?'C':value>=20?'D':'E';}
function attributeGrade(value){return value>=100?'Ascendant':value>=75?'Elite':value>=50?'Formidable':value>=25?'Trained':'Novice';}
function addAttribute(key,amount){state.attributes[key]=Math.max(0,(state.attributes[key]||0)+amount);}
function ownedItemIds(){return Object.keys(state.inventory).filter(id=>state.inventory[id]>0&&itemCatalog[id]);}
function addItem(id,quantity=1){if(!itemCatalog[id])return;state.inventory[id]=(state.inventory[id]||0)+quantity;}
function skillPointsEarned(){return Math.floor(level()/5);}
function skillPointsSpent(){return Object.values(state.skills).filter(Boolean).length;}
function availableSkillPoints(){return Math.max(0,skillPointsEarned()-skillPointsSpent());}
function hasEffect(effect){return Object.entries(state.skills).some(([id,on])=>on&&skills[id]?.effect===effect)||Object.values(state.equipped).some(id=>itemCatalog[id]?.effect===effect);}
function maxQuestSwaps(){return MAX_SWAPS_PER_QUEST;}
function inventoryCount(){return ownedItemIds().reduce((sum,id)=>sum+(state.inventory[id]||0),0);}
function localDay(){ const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function recoveryMinutes(){ return Math.min(45, 10 + Math.floor(level()/10)*5); }
function dailySideQuest(){
  const tier=Math.floor(level()/10);
  const minutes=(start,cap)=>Math.min(cap,start+tier);
  const reps=(start,step,cap)=>Math.min(cap,start+tier*step);
  const tasks=[
    {icon:'◌',name:'Mobility Flow',description:`Move gently through ${minutes(5,12)} minutes of comfortable mobility.`},
    {icon:'⌁',name:'Posture Reset',description:`Spend ${minutes(3,10)} minutes opening the chest and moving the upper back.`},
    {icon:'◇',name:'Bodyweight Primer',description:`Complete ${reps(10,2,30)} slow bodyweight squats through a comfortable range.`},
    {icon:'◎',name:'Core Control',description:`Complete ${reps(6,1,15)} controlled dead bugs on each side.`},
    {icon:'☾',name:'Flexibility Check',description:`Spend ${minutes(3,10)} minutes stretching without forcing the range.`},
    {icon:'◈',name:'Breathing Reset',description:`Practise ${minutes(3,8)} minutes of slow, relaxed breathing.`},
    state.equipmentMode==='gym'?{icon:'△',name:'Easy Cardio Primer',description:`Move easily on a treadmill or bike for ${minutes(5,15)} minutes.`}:{icon:'△',name:'Movement Break',description:`Walk or march comfortably for ${minutes(5,15)} minutes.`}
  ];
  const [year,month,day]=localDay().split('-').map(Number);const index=Math.floor(Date.UTC(year,month-1,day)/86400000)%tasks.length;
  return {...tasks[index],tier:tier+1};
}
function dailyDirective(){
  const messages=[
    'Consistency builds the hunter.',
    'Small victories become lasting strength.',
    'Show up today. Your future self is watching.',
    'Master the next set, not the entire journey.',
    'Strength grows where excuses end.',
    'A steady pace can still conquer mountains.',
    'Discipline turns ordinary days into progress.',
    'Train with purpose. Recover with patience.',
    'Your level follows your consistency.',
    'Perfect is optional. Progress is the quest.',
    'Respect the process and earn the result.',
    'One controlled repetition is one step higher.',
    'Today’s effort becomes tomorrow’s power.',
    'The strongest habit is beginning again.'
  ];
  const [year,month,day]=localDay().split('-').map(Number);
  return messages[Math.floor(Date.UTC(year,month-1,day)/86400000)%messages.length];
}
function exerciseKey(ex){return ex.trackingName||ex.name;}
function exerciseAdjustment(ex){if(state.equipmentMode!=='home')return 0;const value=Number(state.exerciseAdjustments[exerciseKey(ex)]);return Number.isFinite(value)?Math.max(-3,Math.min(4,value)):0;}
function repTarget(ex){
  const base = ex.reps || Math.min(12, 8 + Math.floor(level()/5));
  const adaptive=ex.baseWeight?0:exerciseAdjustment(ex)*2;
  return Math.max(6, Math.min(20, base + difficultyModes[state.difficulty].reps + adaptive));
}
function timeTarget(ex){
  if (!ex.seconds) return null;
  const adjustment = state.difficulty==='beginner' ? -5 : state.difficulty==='advanced' ? 5 : 0;
  return Math.max(15, Math.min(ex.seconds + 40, ex.seconds + Math.floor(level()/10)*5 + adjustment + exerciseAdjustment(ex)*5));
}
function weightTarget(ex){
  if (ex.baseWeight === undefined || ex.baseWeight === 0) return ex.baseWeight || null;
  const step = ex.group === 'lower' ? 2.5 : 1;
  const target = (ex.baseWeight + (Math.floor(level()/5)+exerciseAdjustment(ex))*step) * difficultyModes[state.difficulty].weight;
  return Math.max(.5, Math.round(target*2)/2);
}
function prescription(ex){
  if (ex.seconds) return `${timeTarget(ex)} seconds`;
  const weight = weightTarget(ex);
  return `${repTarget(ex)} reps${weight ? ` · suggested ${weight} kg` : ''}`;
}
function restGuidance(ex){
  const name=ex.name.toLowerCase();
  if(ex.group==='lower'||name.includes('deadlift')||name.includes('squat')||name.includes('hip thrust'))return 'Rest 90–150 sec';
  if(ex.group==='core'||ex.group==='body'||ex.group==='carry')return 'Rest 45–75 sec';
  return 'Rest 60–90 sec';
}
function prepareDraftExercise(ex,setCount,existingSets=null){
  const trackingName=ex.trackingName||ex.name;const variant=state.equipmentMode==='home'&&ex.variants?ex.variants[state.difficulty]:null;
  return {...ex,trackingName,name:variant||ex.name,sets:existingSets?[...existingSets]:Array(setCount).fill(false),effort:null};
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
function nav(){const questReady=state.recoveryDate!==localDay()||state.sideQuestDate!==localDay();return `<nav class="nav">${[['home','⌂','Home'],['workout','⚔','Quest'],['progress','◈','Progress'],['realm','▤','Realm'],['settings','⚙','Settings']].map(([id,icon,label])=>`<button data-page="${id}" class="${page===id?'active':''}"><i>${icon}${id==='workout'&&questReady?'<em class="nav-dot"></em>':''}</i>${label}</button>`).join('')}</nav>`; }

function randomEncounter(){
  const encounters=[
    {icon:'◇',name:'Stillness Trial',description:'Hold a comfortable plank variation for 20 seconds.',attribute:'vitality'},
    {icon:'ϟ',name:'Swift Passage',description:'March briskly in place for 2 minutes.',attribute:'endurance'},
    {icon:'☾',name:'Mobility Shrine',description:'Complete 3 minutes of gentle shoulder and hip mobility.',attribute:'agility'},
    {icon:'⚔',name:'Control Trial',description:'Complete 8 slow bodyweight squats through a comfortable range.',attribute:'strength'}
  ];
  const [year,month,day]=localDay().split('-').map(Number);return encounters[Math.floor(Date.UTC(year,month-1,day)/86400000)%encounters.length];
}

function home(){
  const emblem=emblemForLevel();
  const hunterLevel=level();
  const region=currentRegion();const upcoming=nextRegion();
  const equippedAura=state.equipped.aura?`item-${state.equipped.aura}`:'';
  const heroClasses=[hunterLevel>=125?'legacy-border':'',hunterLevel>=150?'eternal-aura':'',equippedAura].filter(Boolean).join(' ');
  const eternalSummary=hunterLevel>=100?`<div class="eternal-summary"><div><span>ETERNAL SHARDS</span><b>◆ ${eternalShards()}</b></div><div><span>ASCENSION STARS</span><b>★ ${ascensionStars()}</b></div></div>`:'';
  const attributes=Object.entries(attributeInfo).map(([id,item])=>`<div class="attribute-mini"><i>${item.icon}</i><span>${item.label}</span><b>${state.attributes[id]}</b></div>`).join('');
  const latest=state.lastReward?`<section class="recent-card"><span>RECENT ACCOMPLISHMENT</span><div><i>${state.lastReward.icon||'✦'}</i><p><b>${esc(state.lastReward.title)}</b><small>${esc(state.lastReward.detail)}</small></p></div></section>`:`<section class="recent-card muted"><span>RECENT ACCOMPLISHMENT</span><div><i>◇</i><p><b>Your record awaits</b><small>Complete training to leave your first mark.</small></p></div></section>`;
  return shell(`<section class="hero ${heroClasses}"><button class="inventory-shortcut ${state.chests?'has-loot':''}" data-inventory aria-label="Open Inventory">▣${state.chests?`<em>${state.chests}</em>`:''}</button><div class="profile-row"><div class="level-medal emblem-${emblem.id} ${hunterLevel>=200?'legendary-variation':''}" title="${emblem.name}"><i>${emblem.glyph}</i><div><span>LEVEL</span><b>${hunterLevel}</b></div></div><div class="profile-copy"><h1>${esc(state.name || 'Hunter')}</h1><div class="hunter-title">${esc(titleForLevel())}</div><div class="rank">${questRank()}-Rank · <strong>${rank()}</strong></div></div></div><div class="xp-line"><span>LEVEL PROGRESS</span><span>${levelXp()} / ${levelRequirement()} XP</span></div><div class="xp-track"><div class="xp-fill" style="width:${Math.min(100,levelXp()/levelRequirement()*100)}%"></div></div>${eternalSummary}<div class="stats"><div class="stat"><b>${state.streak}</b><span>Streak</span></div><div class="stat"><b>${unlockedAchievements().length}</b><span>Achievements</span></div><div class="stat"><b>${Object.keys(state.bests).length}</b><span>Records</span></div></div></section>
  <aside class="daily-directive"><div class="directive-mark">✦</div><div><span>DAILY DIRECTIVE</span><p>“${esc(dailyDirective())}”</p></div></aside>
  <section class="realm-preview"><div class="realm-preview-icon">${region.icon}</div><div><span>CURRENT REGION</span><h2>${region.name}</h2><p>${region.description}</p></div><button data-page="realm" aria-label="Open Realm">›</button><div class="realm-progress"><div style="width:${upcoming?Math.min(100,((hunterLevel-region.level)/(upcoming.level-region.level))*100):100}%"></div></div><small>${upcoming?`Level ${hunterLevel} · next region at ${upcoming.level}`:'The first Ascension is complete'}</small></section>
  <div class="section-head"><h2>Hunter attributes</h2><button class="section-link" data-progress-tab="attributes">View details</button></div><section class="attribute-mini-grid">${attributes}</section>
  ${latest}
  <button class="inventory-wide" data-inventory><span>▣</span><div><b>Inventory</b><small>${inventoryCount()} items · ${state.chests} unopened chest${state.chests===1?'':'s'}</small></div><i>›</i></button>`);
}

function questHub(){
  const next=state.routine;const current=activeRoutines();const recoveryDone=state.recoveryDate===localDay();const sideQuestDone=state.sideQuestDate===localDay();const encounterDone=state.encounterDate===localDay();const sideQuest=dailySideQuest();const encounter=randomEncounter();const boss=currentBoss();
  const rewardNote=state.lastReward?.historyDate&&state.history[0]?.date===state.lastReward.historyDate?`<div class="workout-note"><label for="workout-note">PRIVATE WORKOUT NOTE · OPTIONAL</label><textarea id="workout-note" maxlength="280" placeholder="How did the workout feel? Anything to remember next time?">${esc(state.history[0].note||'')}</textarea><button class="secondary" data-save-note>${state.history[0].note?'UPDATE NOTE':'SAVE NOTE'}</button></div>`:'';
  const reward=state.lastReward?`<section class="quest-reward-summary"><button data-dismiss-reward aria-label="Dismiss">×</button><span>LAST REWARD</span><h3>${esc(state.lastReward.title)}</h3><p>${esc(state.lastReward.detail)}</p>${rewardNote}</section>`:'';
  return shell(`<h1 class="page-title">Quest Board</h1><p class="page-sub">All training, recovery and challenges are gathered here.</p>${reward}<div class="section-head"><h2>Today’s quests</h2><span>${new Date().toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}</span></div><div class="mode-chip">${questRank()}-RANK · ${equipmentModes[state.equipmentMode].label} · ${difficultyModes[state.difficulty].label}</div>
  <article class="quest"><div class="quest-icon">⚔</div><div class="quest-body"><h3>Strength Quest ${next} · ${current[next].title}</h3><p>${current[next].exercises.map(x=>x.name).slice(0,3).join(' · ')}</p></div><div class="reward">+100 XP</div></article><button class="primary" data-start>BEGIN STRENGTH QUEST</button>
  <button class="quest recovery-quest quest-detail-card" data-quest-detail="recovery"><div class="quest-icon">◌</div><div class="quest-body"><h3>Recovery Walk · ${recoveryMinutes()} minutes</h3><p>Comfortable pace · increases every 10 levels</p></div><div class="quest-meta"><div class="reward">+20 XP</div><span class="detail-chevron">›</span></div></button><button class="secondary ${recoveryDone?'completed':''}" data-recovery ${recoveryDone?'disabled':''}>${recoveryDone?'✓ RECOVERY COMPLETE TODAY':'CONFIRM RECOVERY WALK'}</button>
  <button class="quest side-quest quest-detail-card" data-quest-detail="side"><div class="quest-icon">${sideQuest.icon}</div><div class="quest-body"><h3>Side Quest · ${sideQuest.name}</h3><p>${sideQuest.description}</p></div><div class="quest-meta"><div class="reward">+15 XP</div><span class="detail-chevron">›</span></div></button><button class="secondary ${sideQuestDone?'completed':''}" data-side-quest ${sideQuestDone?'disabled':''}>${sideQuestDone?'✓ SIDE QUEST COMPLETE':'CONFIRM SIDE QUEST'}</button>
  <div class="section-head"><h2>Random encounter</h2><span>Optional · daily</span></div><article class="encounter-card ${encounterDone?'complete':''}"><div>${encounter.icon}</div><span><b>${encounter.name}</b><small>${encounter.description}</small><em>+5 XP · +1 ${attributeInfo[encounter.attribute].label}</em></span></article><button class="secondary ${encounterDone?'completed':''}" data-encounter ${encounterDone?'disabled':''}>${encounterDone?'✓ ENCOUNTER COMPLETE':'COMPLETE ENCOUNTER'}</button>
  <div class="section-head"><h2>Weekly Boss</h2><span>Resets Monday</span></div><article class="boss-card ${boss.complete?'complete':''}"><div class="boss-icon">${boss.icon}</div><div class="boss-copy"><div class="boss-label">WEEKLY RAID</div><h3>${boss.name}</h3><p>${boss.description}</p><div class="boss-progress"><div style="width:${Math.round(boss.value/boss.target*100)}%"></div></div><span>${boss.value} / ${boss.target} ${boss.unit}</span></div><div class="boss-reward">+200<br>XP</div></article><button class="${boss.complete&&!boss.claimed?'primary':'secondary'} ${boss.claimed?'completed':''}" data-boss-claim ${!boss.complete||boss.claimed?'disabled':''}>${boss.claimed?'✓ BOSS DEFEATED':boss.complete?'CLAIM REWARDS':'BOSS IN PROGRESS'}</button>`);
}

function ensureDraft(){
  if(!state.draft || state.draft.routine!==state.routine || state.draft.version!==6 || state.draft.equipmentMode!==state.equipmentMode || state.draft.difficulty!==state.difficulty){
    const setCount=difficultyModes[state.difficulty].sets;
    state.draft={version:6,routine:state.routine,equipmentMode:state.equipmentMode,difficulty:state.difficulty,level:level(),warmupDone:false,warmupSkipped:false,swapsUsed:0,finisherDone:false,exercises:activeRoutines()[state.routine].exercises.map(ex=>prepareDraftExercise(ex,setCount))}; save();
  }
  if(!Number.isFinite(state.draft.swapsUsed)){state.draft.swapsUsed=0;save();}
}
function warmup(){
  const moves=state.equipmentMode==='gym'
    ? ['2 minutes easy treadmill or bike','10 arm circles each direction','10 controlled bodyweight squats','One light practice set of the first exercise']
    : ['60 seconds marching in place','10 arm circles each direction','10 controlled bodyweight squats','10 slow hip hinges','One light practice set of the first exercise'];
  return shell(`<h1 class="page-title">Warm-up Quest</h1><p class="page-sub">Optional · prepare your joints and practise the movements before adding effort.</p><article class="warmup-card"><div class="warmup-mark">◇</div><h2>Awaken the body</h2><p>Move comfortably. Stop if anything feels painful or unusual.</p><ol>${moves.map(move=>`<li>${move}</li>`).join('')}</ol></article><button class="primary" data-warmup-done>COMPLETE WARM-UP</button><button class="text-button" data-warmup-skip>SKIP FOR TODAY</button>`);
}
function workout(){
  if(!state.draft)return questHub();
  ensureDraft();
  if(!state.draft.warmupDone && !state.draft.warmupSkipped) return warmup();
  const done=state.draft.exercises.flatMap(e=>e.sets).filter(Boolean).length;
  const total=state.draft.exercises.flatMap(e=>e.sets).length;
  const swapsRemaining=Math.max(0,maxQuestSwaps()-state.draft.swapsUsed);
  const finisher=homeFinishers[state.routine];
  const finisherHtml=state.equipmentMode==='home'?`<section class="finisher-card ${state.draft.finisherDone?'complete':''}"><div class="finisher-head"><div class="finisher-icon">⚡</div><div><span>OPTIONAL · 4 MINUTES · +10 XP</span><h2>${finisher.name}</h2></div></div><p>Complete ${finisher.rounds} rounds:</p><ol>${finisher.moves.map(move=>`<li>${move}</li>`).join('')}</ol><div class="finisher-alternative"><b>LOW-IMPACT OPTION</b><span>${finisher.alternative}</span></div><button class="secondary ${state.draft.finisherDone?'completed':''}" data-finisher>${state.draft.finisherDone?'✓ FINISHER COMPLETE':'CONFIRM FINISHER'}</button></section>`:'';
  const questXp=100+(state.draft.finisherDone?10:0);
  return shell(`<h1 class="page-title">Strength Quest ${state.routine}</h1><p class="page-sub">${questRank()}-RANK · ${activeRoutines()[state.routine].title} · ${equipmentModes[state.equipmentMode].label} · ${difficultyModes[state.difficulty].label}</p><div class="routine-banner"><div><b>Quest progress</b><span>${done} of ${total} sets confirmed</span></div><div class="reward">${Math.round(done/total*100)}%</div></div><div class="swap-limit ${swapsRemaining===0?'exhausted':''}"><span>↻ Exercise swaps</span><b>${swapsRemaining} of ${maxQuestSwaps()} remaining</b></div>${state.draft.exercises.map((ex,ei)=>exerciseCard(ex,ei)).join('')}${finisherHtml}<section class="reward-preview"><span>QUEST REWARDS</span><b>+${questXp} XP · +3 Strength · +1 Discipline</b><small>Chest progress ${state.chestProgress} / 3</small></section><div class="workout-actions"><button class="primary" data-finish ${done<total?'disabled style="opacity:.42"':''}>COMPLETE QUEST · +${questXp} XP</button></div>`);
}
function alternativesFor(ex){
  const all=Object.values(activeRoutines()).flatMap(r=>r.exercises);
  const compatible={body:['body','core'],core:['core','body','carry'],carry:['carry','core','lower'],upper:['upper'],lower:['lower']}[ex.group]||[ex.group];
  const unique=[];
  for(const option of all){
    if(compatible.includes(option.group) && option.name!==exerciseKey(ex) && !unique.some(item=>item.name===option.name)) unique.push(option);
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
  const swapsRemaining=Math.max(0,maxQuestSwaps()-(state.draft.swapsUsed||0));
  const swapHtml=swapOpen===ei&&swapsRemaining>0?`<div class="swap-panel"><span>Choose an alternative · ${swapsRemaining} swap${swapsRemaining===1?'':'s'} remaining</span>${alternatives.length?alternatives.map((option,oi)=>`<button data-swap-choice data-e="${ei}" data-o="${oi}">${esc(option.name)}</button>`).join(''):'<p>No equivalent exercise is available in this program.</p>'}</div>`:'';
  const exerciseDone=ex.sets.every(Boolean);
  const effortHtml=state.equipmentMode==='home'&&exerciseDone?`<div class="effort-check"><span>HOW DID THIS EXERCISE FEEL?</span><div>${[['easy','Too easy'],['right','Challenging'],['hard','Too difficult']].map(([value,label])=>`<button class="${ex.effort===value?'active':''}" data-effort="${value}" data-e="${ei}">${label}</button>`).join('')}</div><p>Your answer adjusts this exercise the next time it appears.</p></div>`:'';
  const restHtml=state.equipmentMode==='home'?`<small class="rest-guide">${restGuidance(ex)}</small>`:'';
  return `<article class="exercise"><div class="exercise-top"><div class="exercise-num">${String(ei+1).padStart(2,'0')}</div><div class="exercise-name"><b>${ex.name}</b><span>${ex.sets.length} sets · ${prescription(ex)}</span>${restHtml}</div><div class="exercise-tools"><button class="info-button" data-info data-e="${ei}" aria-label="Instructions for ${esc(ex.name)}">INFO</button><button class="swap-button" data-swap data-e="${ei}" aria-label="Replace ${esc(ex.name)}" ${swapsRemaining===0?'disabled':''}>${swapsRemaining===0?'LIMIT':'SWAP'}</button></div></div>${swapHtml}${ex.sets.map((done,si)=>`<div class="confirm-row"><div><span>SET ${si+1}</span><b>${prescription(ex)}</b></div><button class="set-check ${done?'done':''}" data-set data-e="${ei}" data-s="${si}" aria-label="Confirm set ${si+1}">${done?'✓':'○'}</button></div>`).join('')}${effortHtml}</article>`;
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
    : {icon:side.icon,label:`DAILY SIDE QUEST · TIER ${side.tier}`,title:side.name,objective:side.description,reward:'15 XP',progression:'The target increases slightly every 10 levels until it reaches a sensible cap. A different optional Side Quest appears each day, and skipping it does not affect your streak.',completion:state.sideQuestDate===localDay()?'Completed today':'Available to complete today',safety:'Use a comfortable range and pace. Replace or skip the activity if it is unsuitable for you.'};
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
      ['★','Sovereign','Reach level 100',level(),100],
      ['◇','Eternal Border','Reach level 125',level(),125],
      ['✦','Eternal Aura','Reach level 150',level(),150],
      ['◈','Legendary Emblem','Reach level 200',level(),200],
      ['☄','Eternal Welcome','Reach level 250',level(),250],
      ['∞','Beyond the Summit','Reach level 500',level(),500]
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
    const eternalReward=reached>100?` Eternal Shard acquired — ${reached-100} total.${reached%10===0?` Ascension Star ${Math.floor((reached-100)/10)} earned.`:''}`:'';
    celebrationQueue.push({type:'level',icon:reached>=100?'★':'✦',title:reached>100?'ETERNAL LEVEL INCREASED':'LEVEL INCREASED',name:`Level ${reached}`,description:(titleChanged?`New title acquired — ${newTitle}.`:`Current title — ${newTitle}. The next quest awaits.`)+eternalReward});
    if(reached%10===0){state.chests++;celebrationQueue.push({type:'achievement',icon:'▣',title:'ASCENDANT CHEST EARNED',name:`Level ${reached} Cache`,description:'A milestone chest is waiting in your Inventory.'});}
    if(reached===10)addItem('awakeningRelic');if(reached===30)addItem('emberAura');if(reached===70)addItem('celestialAura');if(reached===100)addItem('ascendantCloak');
    const entry=chronicleEntries.find(item=>item.level===reached);if(entry)celebrationQueue.push({type:'chronicle',icon:'▤',title:'CHRONICLE ENTRY UNLOCKED',name:`${entry.number} — ${entry.title}`,description:'A new permanent record is available in Realm → Chronicle.'});
    const milestone=eternalMilestones.find(item=>item.level===reached);if(milestone)celebrationQueue.push({type:'eternal',icon:milestone.icon,title:'ETERNAL REWARD UNLOCKED',name:milestone.name,description:milestone.description});
    if(reached===100&&!state.eternalCelebrated){state.eternalCelebrated=true;celebrationQueue.push({type:'eternal',icon:'◈',title:'ETERNAL ASCENSION',name:'The Chronicle Is Complete',description:'A hundred levels now stand behind you as proof of discipline, patience, recovery, and resolve. No prophecy carried you here. You earned your Ascension.'});}
  }
  const evolvedEmblem=emblemForLevel();if(evolvedEmblem.id!==before.emblem)celebrationQueue.push({type:'emblem',icon:evolvedEmblem.glyph,title:'EMBLEM EVOLVED',name:evolvedEmblem.name,description:`Your Hunter emblem evolved at Level ${evolvedEmblem.level}.`});
  unlockedAchievements().filter(item=>!before.achievements.has(item.name)).forEach(item=>celebrationQueue.push({type:'achievement',icon:item.icon,title:'ACHIEVEMENT UNLOCKED',name:item.name,description:item.description}));
  unlockedThemes().filter(theme=>!before.themes.has(theme.id)).forEach(theme=>celebrationQueue.push({type:'theme',icon:'◈',title:'THEME UNLOCKED',name:theme.label,description:`The ${theme.label} interface theme is now available in Settings.`}));
  save();
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
  const attributeHtml=Object.entries(attributeInfo).map(([id,item])=>{const value=state.attributes[id];const grade=attributeGrade(value);return `<article class="attribute-card"><div class="attribute-symbol">${item.icon}</div><div><span>${item.label}</span><b>${value} · ${grade}</b><div class="attribute-track"><i style="width:${value%25/25*100}%"></i></div><small>${item.description}</small></div></article>`}).join('');
  const skillHtml=['Power','Endurance','Resolve'].map(path=>`<section class="skill-path"><div class="skill-path-head"><span>${path.toUpperCase()} PATH</span></div>${Object.entries(skills).filter(([,skill])=>skill.path===path).map(([id,skill])=>{const owned=Boolean(state.skills[id]);const available=level()>=skill.level&&(!skill.requires||state.skills[skill.requires]);return `<button class="skill-node ${owned?'unlocked':available?'available':'locked'}" data-skill="${id}" ${owned||!available||availableSkillPoints()<1?'disabled':''}><i>${skill.icon}</i><span><b>${skill.name}</b><small>${skill.description}</small><em>${owned?'UNLOCKED':level()<skill.level?`LEVEL ${skill.level}`:availableSkillPoints()? '1 SKILL POINT':'NO POINTS'}</em></span></button>`}).join('')}</section>`).join('');
  const historyHtml=state.history.length?state.history.slice(0,20).map(h=>`<div class="history-row ${h.note?'has-note':''}"><time>${new Date(h.date).toLocaleDateString(undefined,{month:'short',day:'numeric'})}</time><b>Strength Quest ${h.routine}${h.finisherCompleted?' · Finisher':''}</b><span>+${100+(h.finisherCompleted?10:0)} XP</span>${h.note?`<p>“${esc(h.note)}”</p>`:''}</div>`).join(''):`<div class="empty">Your completed workouts will appear here.</div>`;
  const body=progressTab==='attributes'?`<div class="section-head"><h2>Hunter attributes</h2><span>Permanent growth</span></div><div class="attribute-list">${attributeHtml}</div>`:progressTab==='achievements'?`<div class="section-head"><h2>Achievements</h2><span>${unlocked}/${all.length} unlocked</span></div>${achievementHtml}`:progressTab==='skills'?`<section class="skill-summary"><div><span>AVAILABLE POINTS</span><b>${availableSkillPoints()}</b></div><p>Earn one Skill Point every five levels. Skills improve convenience and presentation—never free workout XP.</p><button class="text-button" data-reset-skills ${skillPointsSpent()?'':'disabled'}>RESET SKILL TREE</button></section>${skillHtml}`:`<div class="section-head"><h2>Quest history</h2><span>Newest first</span></div>${historyHtml}`;
  return shell(`<h1 class="page-title">Progress</h1><p class="page-sub">Attributes, achievements and choices forged through activity.</p><div class="subtabs">${[['attributes','Attributes'],['achievements','Awards'],['skills','Skills'],['history','History']].map(([id,label])=>`<button class="${progressTab===id?'active':''}" data-progress-tab="${id}">${label}</button>`).join('')}</div>${body}`);
}
function realm(){
  const hunterLevel=level();const unlocked=chronicleEntries.filter(entry=>hunterLevel>=entry.level).length;const complete=unlocked===chronicleEntries.length;
  const entries=chronicleEntries.map((entry,index)=>{const available=hunterLevel>=entry.level;return `<button class="chronicle-entry ${available?'unlocked':'locked'} ${entry.level===100&&available?'final':''}" data-chronicle="${index}" ${available?'':'disabled'}><div class="chronicle-number">${available?entry.number:'?'}</div><div><span>${available?`ENTRY ${entry.number}`:`SEALED · LEVEL ${entry.level}`}</span><h3>${available?esc(entry.title):'Unknown Chronicle'}</h3><p>${available?'Tap to read this permanent record.':`Continue ascending to unlock at Level ${entry.level}.`}</p></div><i>${available?'›':'◆'}</i></button>`}).join('');
  const milestones=eternalMilestones.map(item=>`<div class="eternal-milestone ${hunterLevel>=item.level?'unlocked':'locked'}"><i>${item.icon}</i><div><b>${item.name}</b><span>${item.description}</span></div><em>${hunterLevel>=item.level?'UNLOCKED':`LEVEL ${item.level}`}</em></div>`).join('');
  const comingRegion=nextRegion();const map=regions.map((region,index)=>{const available=hunterLevel>=region.level;const current=currentRegion().name===region.name;const revealed=!available&&state.skills.enduranceII&&comingRegion?.name===region.name;return `<article class="region-card ${available?'unlocked':'locked'} ${current?'current':''} ${revealed?'revealed':''}"><div>${available||revealed?region.icon:'◆'}</div><span><em>REGION ${index+1} · LEVELS ${region.level}–${index===9?'100':region.level+9}</em><b>${available||revealed?region.name:'Unknown Realm'}</b><small>${available||revealed?region.description:`Unlocks at Level ${region.level}`}</small></span>${current?'<i>CURRENT</i>':available?'<i>DISCOVERED</i>':revealed?'<i>REVEALED</i>':'<i>SEALED</i>'}</article>`}).join('');
  const archiveNames=Object.keys(bossLore);const bosses=archiveNames.map(name=>{const record=state.bossArchive[name];return `<article class="bestiary-card ${record?'unlocked':'locked'}"><div>${record?(record.icon||'♜'):'?'}</div><span><em>${record?'DEFEATED':'UNDISCOVERED'}</em><b>${record?name:'Unknown Boss'}</b><small>${record?bossLore[name]:'Defeat this Weekly Boss to reveal its record.'}</small>${record?`<i>First defeated ${new Date(record.firstDefeat).toLocaleDateString()} · ${record.wins} win${record.wins===1?'':'s'}</i>`:''}</span></article>`}).join('');
  const shop=[['eternalHalo',20],['sovereignFrame',40]].map(([id,cost])=>{const item=itemCatalog[id];const purchased=state.eternalPurchases.includes(id);return `<article class="eternal-shop-item"><i>${item.icon}</i><div><b>${item.name}</b><small>${item.description}</small></div><button data-eternal-buy="${id}" data-cost="${cost}" ${purchased||eternalShards()<cost?'disabled':''}>${purchased?'OWNED':`◆ ${cost}`}</button></article>`}).join('');
  const eternal=hunterLevel>=100?`<section class="eternal-panel"><div class="eternal-panel-head"><div><span>ETERNAL PROGRESSION</span><h2>Your journey continues</h2></div><div class="star-count">★ ${ascensionStars()}</div></div><p>The Chronicle is complete. Levels beyond 100 grant Eternal Shards for permanent cosmetic rewards.</p><div class="eternal-currency"><div><b>◆ ${eternalShards()}</b><span>Available Shards</span></div><div><b>★ ${ascensionStars()}</b><span>Ascension Stars</span></div></div></section><div class="section-head"><h2>Eternal forge</h2><span>Cosmetics only</span></div>${shop}<div class="section-head"><h2>Eternal milestones</h2><span>${eternalMilestones.filter(item=>hunterLevel>=item.level).length}/${eternalMilestones.length}</span></div>${milestones}`:`<div class="chronicle-seal"><i>◈</i><b>Eternal Progression</b><span>Complete the Chronicle at Level 100 to reveal what lies beyond.</span></div>`;
  const body=realmTab==='map'?`<section class="realm-banner"><span>CURRENT REGION</span><h2>${currentRegion().name}</h2><p>${currentRegion().description}</p></section><div class="region-map">${map}</div>`:realmTab==='chronicle'?`<section class="chronicle-header ${complete?'complete':''}"><div class="chronicle-glyph">${complete?'◈':'◇'}</div><div><span>${complete?'CHRONICLE COMPLETE':'ASCENSION RECORD'}</span><h2>${unlocked} / ${chronicleEntries.length} entries</h2><p>${complete?'Your story is complete. Your Ascension is eternal.':'A new entry is revealed every 10 levels.'}</p></div></section><div class="chronicle-list">${entries}</div>`:realmTab==='bosses'?`<div class="section-head"><h2>Boss Archive</h2><span>${Object.keys(state.bossArchive).length}/${archiveNames.length} discovered</span></div><div class="bestiary-list">${bosses}</div>`:eternal;
  return shell(`<h1 class="page-title">Realm</h1><p class="page-sub">Explore the path, preserve the Chronicle and remember every conquered trial.</p><div class="subtabs realm-tabs">${[['map','Map'],['chronicle','Chronicle'],['bosses','Bosses'],['eternal','Eternal']].map(([id,label])=>`<button class="${realmTab===id?'active':''}" data-realm-tab="${id}">${label}</button>`).join('')}</div>${body}`);
}

function inventory(){
  const items=ownedItemIds();const cards=items.length?items.map(id=>{const item=itemCatalog[id];const equipped=state.equipped[item.slot]===id;return `<article class="inventory-item rarity-${item.rarity} ${equipped?'equipped':''}"><div>${item.icon}</div><span><em>${item.rarity.toUpperCase()} · ${item.slot.toUpperCase()}</em><b>${item.name}</b><small>${item.description}</small></span><button data-equip-item="${id}">${equipped?'UNEQUIP':'EQUIP'}</button></article>`}).join(''):`<div class="empty">Your first collectible will appear here after a milestone or chest.</div>`;
  const loadout=Object.entries(state.equipped).map(([slot,id])=>`<div><span>${slot.toUpperCase()}</span><b>${id?`${itemCatalog[id].icon} ${itemCatalog[id].name}`:'Empty'}</b></div>`).join('');
  return shell(`<div class="inventory-title"><div><h1 class="page-title">Inventory</h1><p class="page-sub">Collectibles earned through activity—never purchased with real money.</p></div><button class="icon-btn" data-page="home">×</button></div><section class="chest-vault ${state.chests&&state.skills.resolveII?'treasure-sense':''}"><div>▣</div><span><em>CHEST VAULT</em><b>${state.chests} unopened</b><small>Complete three Strength Quests or defeat a Weekly Boss to earn chests.</small></span><button data-open-chest ${state.chests?'':'disabled'}>OPEN</button></section><div class="chest-progress"><span>Next Common Cache</span><b>${state.chestProgress} / 3 quests</b><div><i style="width:${state.chestProgress/3*100}%"></i></div></div><div class="section-head"><h2>Equipped loadout</h2><span>Cosmetic and convenience</span></div><section class="loadout-grid">${loadout}</section><div class="section-head"><h2>Collected items</h2><span>${inventoryCount()} total</span></div><div class="inventory-list">${cards}</div>`);
}
function showChronicleEntry(index){
  const entry=chronicleEntries[index];if(!entry||level()<entry.level)return;
  const overlay=document.createElement('div');overlay.className='quest-detail-overlay chronicle-reader';
  overlay.innerHTML=`<section class="quest-detail-modal chronicle-page ${entry.level===100?'final':''}"><button class="guide-close" data-chronicle-close aria-label="Close Chronicle entry">×</button><div class="chronicle-page-number">${entry.number}</div><div class="guide-label">CHRONICLE ENTRY · LEVEL ${entry.level}</div><h2>${esc(entry.title)}</h2><div class="chronicle-divider"></div><p class="chronicle-text">${esc(entry.text)}</p>${entry.level===100?'<div class="chronicle-complete-mark">◈ CHRONICLE COMPLETE ◈</div>':''}<button class="primary" data-chronicle-close>CLOSE CHRONICLE</button></section>`;
  document.body.appendChild(overlay);overlay.querySelectorAll('[data-chronicle-close]').forEach(button=>button.onclick=()=>overlay.remove());
}
function settings(){
  const modes=Object.entries(equipmentModes).map(([id,mode])=>`<button class="mode-option ${state.equipmentMode===id?'active':''}" data-mode="${id}"><b>${mode.label}</b><span>${mode.detail}</span>${state.equipmentMode===id?'<i>✓</i>':''}</button>`).join('');
  const difficulties=Object.entries(difficultyModes).map(([id,mode])=>`<button class="mode-option ${state.difficulty===id?'active':''}" data-difficulty="${id}"><b>${mode.label}</b><span>${mode.detail}</span>${state.difficulty===id?'<i>✓</i>':''}</button>`).join('');
  const themes=Object.entries(themeModes).map(([id,theme])=>{const unlocked=level()>=theme.level;return `<button class="theme-option ${state.theme===id?'active':''} ${unlocked?'':'locked'}" data-theme-choice="${id}" ${unlocked?'':'disabled'}><span class="theme-swatch" style="--theme-a:${theme.colors[0]};--theme-b:${theme.colors[1]}"></span><span><b>${theme.label}</b><small>${unlocked?state.theme===id?'Selected':'Unlocked':`Unlocks at Level ${theme.level}`}</small></span><i>${unlocked?(state.theme===id?'✓':''):'◆'}</i></button>`}).join('');
  return shell(`<h1 class="page-title">Settings</h1><p class="page-sub">Your data stays in this browser on this device.</p>
  <div class="settings-card"><h3>Hunter profile</h3><div class="field"><label>HUNTER NAME</label><input id="name" value="${esc(state.name)}" placeholder="Enter your hunter name" maxlength="24" autocomplete="nickname" /></div><button class="primary" data-save-name>SAVE NAME</button></div>
  <div class="settings-card"><h3>Workout equipment</h3><p class="settings-note equipment-help">Your next quest uses only equipment from this program.</p><div class="mode-grid">${modes}</div></div>
  <div class="settings-card"><h3>Quest difficulty</h3><p class="settings-note equipment-help">Changes sets, repetitions, exercise variations and suggested starting weights. Exercise feedback then adapts future targets. Always prioritise safe form.</p><div class="mode-grid">${difficulties}</div></div>
  <div class="settings-card"><h3>Interface theme</h3><p class="settings-note equipment-help">New visual styles unlock as your Hunter reaches Level 100.</p><div class="theme-grid">${themes}</div></div>
  <div class="settings-card setting-row"><div><h3>Quest sounds</h3><p class="settings-note">Set confirmations, quests, levels and achievements.</p></div><button class="toggle ${state.soundEnabled?'on':''}" data-sound role="switch" aria-checked="${state.soundEnabled}"><span></span></button></div>
  <div class="settings-card"><h3>How Ascension works</h3><p class="settings-note equipment-help">Replay the guide to the Hunter dashboard, Quest Board, attributes, Inventory, Realm and backups.</p><button class="secondary" data-tutorial>OPEN TUTORIAL</button></div>
  <div class="settings-card"><h3>Progression rules</h3><p class="settings-note">XP requirements rise by 20 every 10 levels, from 200 XP to a permanent 400 XP cap. Activity also develops Hunter attributes, every five levels grants a Skill Point, and milestone chests contain cosmetic or convenience items. Home targets adapt to difficulty feedback; optional finishers add 10 XP.</p></div>
  <div class="settings-card"><h3>Backup</h3><div class="button-row"><button class="secondary" data-export>Export data</button><button class="secondary" data-import>Import data</button></div><input type="file" id="file" accept="application/json" hidden /></div>
  <div class="settings-card"><h3>Start over</h3><button class="secondary danger" data-reset>Reset all progress</button></div>`);
}
function applyTheme(){document.documentElement.dataset.theme=state.theme;}
function render(){ applyTheme();document.querySelector('#app').innerHTML=page==='home'?home():page==='workout'?workout():page==='progress'?progress():page==='realm'?realm():page==='inventory'?inventory():settings(); bind(); }
function toast(msg){ const el=document.querySelector('#toast'); if(!el)return; el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),1800); }
function bind(){
  document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>{page=b.dataset.page;render();scrollTo(0,0)});
  document.querySelectorAll('[data-inventory]').forEach(b=>b.onclick=()=>{page='inventory';render();scrollTo(0,0)});
  document.querySelectorAll('[data-progress-tab]').forEach(b=>b.onclick=()=>{progressTab=b.dataset.progressTab;page='progress';render();scrollTo(0,0)});
  document.querySelectorAll('[data-realm-tab]').forEach(b=>b.onclick=()=>{realmTab=b.dataset.realmTab;render();scrollTo(0,0)});
  document.querySelector('[data-start]')?.addEventListener('click',()=>{ensureDraft();page='workout';render()});
  document.querySelector('[data-warmup-done]')?.addEventListener('click',()=>{state.draft.warmupDone=true;save();render();toast('Warm-up complete')});
  document.querySelector('[data-warmup-skip]')?.addEventListener('click',()=>{state.draft.warmupSkipped=true;save();render()});
  document.querySelectorAll('[data-set]').forEach(b=>b.onclick=()=>{const sets=state.draft.exercises[+b.dataset.e].sets;sets[+b.dataset.s]=!sets[+b.dataset.s];if(sets[+b.dataset.s])playSound('set');save();render()});
  document.querySelectorAll('[data-effort]').forEach(b=>b.onclick=()=>{state.draft.exercises[+b.dataset.e].effort=b.dataset.effort;save();render();toast('Difficulty feedback saved')});
  document.querySelector('[data-finisher]')?.addEventListener('click',()=>{state.draft.finisherDone=!state.draft.finisherDone;save();render();if(state.draft.finisherDone){playSound('set');toast('Finisher confirmed · +10 XP with quest')}});
  document.querySelectorAll('[data-swap]').forEach(b=>b.onclick=()=>{if((state.draft.swapsUsed||0)>=maxQuestSwaps()){swapOpen=null;render();toast('Swap limit reached for this quest');return;}const index=+b.dataset.e;swapOpen=swapOpen===index?null:index;render()});
  document.querySelectorAll('[data-info]').forEach(b=>b.onclick=()=>showExerciseGuide(+b.dataset.e));
  document.querySelectorAll('[data-chronicle]').forEach(b=>b.onclick=()=>showChronicleEntry(+b.dataset.chronicle));
  document.querySelectorAll('[data-quest-detail]').forEach(b=>b.onclick=()=>showQuestDetails(b.dataset.questDetail));
  document.querySelectorAll('[data-swap-choice]').forEach(b=>b.onclick=()=>{if((state.draft.swapsUsed||0)>=maxQuestSwaps()){swapOpen=null;render();toast('Swap limit reached for this quest');return;}const index=+b.dataset.e;const current=state.draft.exercises[index];const option=alternativesFor(current)[+b.dataset.o];if(!option)return;state.draft.exercises[index]=prepareDraftExercise(option,current.sets.length,current.sets);state.draft.swapsUsed=(state.draft.swapsUsed||0)+1;const remaining=maxQuestSwaps()-state.draft.swapsUsed;swapOpen=null;save();render();toast(`Replaced with ${option.name} · ${remaining} swap${remaining===1?'':'s'} left`)});
  document.querySelector('[data-finish]')?.addEventListener('click',finish);
  document.querySelector('[data-recovery]')?.addEventListener('click',completeRecovery);
  document.querySelector('[data-side-quest]')?.addEventListener('click',completeSideQuest);
  document.querySelector('[data-boss-claim]')?.addEventListener('click',claimBoss);
  document.querySelector('[data-encounter]')?.addEventListener('click',completeEncounter);
  document.querySelector('[data-dismiss-reward]')?.addEventListener('click',()=>{state.lastReward=null;save();render()});
  document.querySelector('[data-save-note]')?.addEventListener('click',saveWorkoutNote);
  document.querySelector('[data-open-chest]')?.addEventListener('click',openChest);
  document.querySelectorAll('[data-equip-item]').forEach(b=>b.onclick=()=>equipItem(b.dataset.equipItem));
  document.querySelectorAll('[data-skill]').forEach(b=>b.onclick=()=>unlockSkill(b.dataset.skill));
  document.querySelector('[data-reset-skills]')?.addEventListener('click',()=>{if(confirm('Reset every spent Skill Point?')){state.skills={};save();render();toast('Skill Tree reset')}});
  document.querySelectorAll('[data-eternal-buy]').forEach(b=>b.onclick=()=>buyEternalItem(b.dataset.eternalBuy,+b.dataset.cost));
  document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{state.equipmentMode=b.dataset.mode;state.draft=null;save();render();toast(`${equipmentModes[state.equipmentMode].label} quests selected`)});
  document.querySelectorAll('[data-difficulty]').forEach(b=>b.onclick=()=>{state.difficulty=b.dataset.difficulty;state.draft=null;save();render();toast(`${difficultyModes[state.difficulty].label} difficulty selected`)});
  document.querySelectorAll('[data-theme-choice]').forEach(b=>b.onclick=()=>{const id=b.dataset.themeChoice;if(level()<themeModes[id].level)return;state.theme=id;save();render();toast(`${themeModes[id].label} theme equipped`)});
  document.querySelector('[data-sound]')?.addEventListener('click',()=>{state.soundEnabled=!state.soundEnabled;save();render();if(state.soundEnabled)playSound('set');toast(state.soundEnabled?'Quest sounds enabled':'Quest sounds disabled')});
  document.querySelector('[data-tutorial]')?.addEventListener('click',()=>showTutorial(true));
  document.querySelector('[data-save-name]')?.addEventListener('click',()=>{state.name=document.querySelector('#name').value.trim();save();render();toast(state.name?'Hunter name saved':'Hunter name cleared')});
  document.querySelector('[data-export]')?.addEventListener('click',exportData);
  document.querySelector('[data-import]')?.addEventListener('click',()=>document.querySelector('#file').click());
  document.querySelector('#file')?.addEventListener('change',importData);
  document.querySelector('[data-reset]')?.addEventListener('click',()=>{if(confirm('Reset all levels and workout history?')){state=normalizeRpgState(JSON.parse(JSON.stringify(initial)),{});save();page='home';render();showOnboarding()}});
}
function completeRecovery(){
  if(state.recoveryDate===localDay()) return;
  const before=progressSnapshot();
  state.recoveryDate=localDay(); state.recoveryCount++;state.xp+=20;addAttribute('endurance',1);addAttribute('vitality',1);state.lastReward={icon:'☾',title:'Recovery Walk completed',detail:'+20 XP · +1 Endurance · +1 Vitality'};save();render();playSound('quest');toast('Recovery complete · +20 XP');queueProgressRewards(before);
}
function saveWorkoutNote(){
  const field=document.querySelector('#workout-note');if(!field||!state.lastReward?.historyDate)return;const record=state.history.find(item=>item.date===state.lastReward.historyDate);if(!record)return;record.note=field.value.trim().slice(0,280);save();render();toast(record.note?'Workout note saved':'Workout note cleared');
}
function completeSideQuest(){
  if(state.sideQuestDate===localDay())return;
  const before=progressSnapshot();state.sideQuestDate=localDay();state.sideQuestCount++;state.xp+=15;addAttribute('agility',1);state.lastReward={icon:'◇',title:'Side Quest completed',detail:'+15 XP · +1 Agility'};save();render();playSound('set');toast('Side Quest complete · +15 XP');queueProgressRewards(before);
}
function completeEncounter(){
  if(state.encounterDate===localDay())return;
  const before=progressSnapshot();const encounter=randomEncounter();state.encounterDate=localDay();state.xp+=5;addAttribute(encounter.attribute,1);state.lastReward={icon:encounter.icon,title:`${encounter.name} completed`,detail:`+5 XP · +1 ${attributeInfo[encounter.attribute].label}`};save();render();playSound('set');toast('Random Encounter complete · +5 XP');queueProgressRewards(before);
}
function claimBoss(){
  const boss=currentBoss();if(!boss.complete||boss.claimed)return;
  const before=progressSnapshot();state.bossClaims[boss.key]=true;state.bossWins++;state.xp+=200;addAttribute('discipline',2);state.chests++;
  const record=state.bossArchive[boss.name]||{icon:boss.icon,firstDefeat:new Date().toISOString(),wins:0};record.wins++;state.bossArchive[boss.name]=record;if(record.wins===1)addItem('ironSigil');
  state.lastReward={icon:boss.icon,title:`${boss.name} defeated`,detail:'+200 XP · +2 Discipline · Boss Vault earned'};save();render();playSound('quest');toast('Weekly Boss defeated · chest earned');queueProgressRewards(before);
}
function finish(){
  const before=progressSnapshot();
  const now=new Date(); const prev=state.lastWorkout?new Date(state.lastWorkout):null;
  const dayGap=prev?Math.floor((new Date(now.toDateString())-new Date(prev.toDateString()))/86400000):null;
  state.streak=dayGap===1?state.streak+1:dayGap===0?state.streak:1;
  state.draft.exercises.forEach(ex=>{
    const weight=weightTarget(ex);if(weight && weight>(state.bests[ex.name]||0))state.bests[ex.name]=weight;
    if(state.equipmentMode==='home'&&ex.effort){const key=exerciseKey(ex);const current=Number(state.exerciseAdjustments[key])||0;const change=ex.effort==='easy'?1:ex.effort==='hard'?-1:0;state.exerciseAdjustments[key]=Math.max(-3,Math.min(4,current+change));}
  });
  const setsConfirmed=state.draft.exercises.reduce((sum,exercise)=>sum+exercise.sets.filter(Boolean).length,0);
  const finisherCompleted=state.equipmentMode==='home'&&Boolean(state.draft.finisherDone);const earnedXp=100+(finisherCompleted?10:0);
  const completedAt=now.toISOString();state.history.unshift({date:completedAt,routine:state.routine,equipmentMode:state.equipmentMode,difficulty:state.difficulty,warmupCompleted:Boolean(state.draft.warmupDone),finisherCompleted,setsConfirmed,note:''}); state.lastWorkout=completedAt; state.workoutCount++; state.xp+=earnedXp;
  addAttribute('strength',3);addAttribute('discipline',1);if(finisherCompleted)addAttribute('endurance',1);if(state.workoutCount%3===0)addAttribute('vitality',1);
  state.chestProgress=(state.chestProgress||0)+1;let chestEarned=false;if(state.chestProgress>=3){state.chestProgress-=3;state.chests++;chestEarned=true;}
  if(state.workoutCount===10)addItem('vanguardRing');
  state.lastReward={icon:'⚔',title:`Strength Quest ${state.routine} completed`,detail:`+${earnedXp} XP · +3 Strength · +1 Discipline${finisherCompleted?' · +1 Endurance':''}${chestEarned?' · Common Cache earned':''}`,historyDate:completedAt};
  state.routine=routineOrder[(routineOrder.indexOf(state.routine)+1)%routineOrder.length]; state.draft=null; swapOpen=null; save(); page='workout'; render(); playSound('quest'); toast(`Quest complete · +${earnedXp} XP`); queueProgressRewards(before);
}
function openChest(){
  if(state.chests<1)return;const id=lootPool[state.chestsOpened%lootPool.length];const item=itemCatalog[id];state.chests--;state.chestsOpened++;addItem(id);state.lastReward={icon:item.icon,title:`${item.name} discovered`,detail:`${item.rarity.toUpperCase()} ${item.slot} added to Inventory`};save();render();celebrationQueue.push({type:'loot',icon:item.icon,title:'CHEST OPENED',name:item.name,description:`${item.rarity.toUpperCase()} ${item.slot} added to your Inventory.`});showNextCelebration();
}
function equipItem(id){
  const item=itemCatalog[id];if(!item||!state.inventory[id])return;state.equipped[item.slot]=state.equipped[item.slot]===id?null:id;save();render();toast(state.equipped[item.slot]===id?`${item.name} equipped`:`${item.name} unequipped`);
}
function unlockSkill(id){
  const skill=skills[id];if(!skill||state.skills[id]||level()<skill.level||availableSkillPoints()<1||(skill.requires&&!state.skills[skill.requires]))return;state.skills[id]=true;if(skill.rewardItem)addItem(skill.rewardItem);state.lastReward={icon:skill.icon,title:`${skill.name} unlocked`,detail:skill.rewardItem?`${itemCatalog[skill.rewardItem].name} added to Inventory`:'New Skill Tree distinction acquired'};save();render();playSound('achievement');toast(`${skill.name} unlocked`);
}
function buyEternalItem(id,cost){
  if(level()<100||state.eternalPurchases.includes(id)||eternalShards()<cost)return;state.shardsSpent+=cost;state.eternalPurchases.push(id);addItem(id);state.lastReward={icon:itemCatalog[id].icon,title:`${itemCatalog[id].name} forged`,detail:`${cost} Eternal Shards used`};save();render();playSound('achievement');toast(`${itemCatalog[id].name} added to Inventory`);
}
function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ascension-backup.json';a.click();URL.revokeObjectURL(a.href);}
function importData(e){
  const f=e.target.files[0];if(!f)return;const r=new FileReader();
  r.onload=()=>{try{
    const restored=JSON.parse(r.result);const migrated=migrateLegacyXp({...JSON.parse(JSON.stringify(initial)),...restored},restored.xpSystemVersion!==2);
    state={...migrated,draft:null,onboardingComplete:true,tutorialComplete:restored.tutorialComplete===undefined?true:Boolean(restored.tutorialComplete)};
    if(state.name==='Mahmoud')state.name='';if(!routineOrder.includes(state.routine))state.routine='A';if(!equipmentModes[state.equipmentMode])state.equipmentMode='home';if(!difficultyModes[state.difficulty])state.difficulty='intermediate';if(!themeModes[state.theme]||level()<themeModes[state.theme].level)state.theme='shadow';if(!state.bossClaims||typeof state.bossClaims!=='object')state.bossClaims={};if(!Number.isFinite(state.bossWins))state.bossWins=0;if(!state.exerciseAdjustments||typeof state.exerciseAdjustments!=='object')state.exerciseAdjustments={};if(restored.eternalCelebrated===undefined&&level()>=100)state.eternalCelebrated=true;normalizeRpgState(state,restored);
    save();page='home';render();toast('Backup restored');
  }catch{alert('That backup file could not be read.')}};r.readAsText(f);
}

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
    {icon:'◈',step:'01',title:'Your Hunter Dashboard',text:'Home now focuses on your identity, XP, attributes, current region, equipment and recent accomplishments.'},
    {icon:'⚔',step:'02',title:'Enter the Quest Board',text:'All Strength, Recovery and Side Quests, Random Encounters and Weekly Bosses are located in the Quest tab.'},
    {icon:'◇',step:'03',title:'Train Safely',text:'Choose an appropriate difficulty, warm up, follow rest guidance, open INFO for form cues, and rate exercises so future Home targets adapt.'},
    {icon:'✦',step:'04',title:'Develop Attributes',text:'Activity builds Strength, Endurance, Vitality, Agility and Discipline. Every five levels also grants one Skill Point.'},
    {icon:'▣',step:'05',title:'Collect Your Rewards',text:'Milestones, every three Strength Quests and Weekly Bosses award chests or collectible equipment stored in Inventory.'},
    {icon:'♜',step:'06',title:'Explore the Realm',text:'The Realm contains the Level 1–100 map, Chronicle, Boss Archive and post-Level-100 Eternal Forge.'},
    {icon:'☾',step:'07',title:'Protect Your Progress',text:'Your data stays on this device. Export a backup regularly from Settings so the entire RPG journey can be restored.'}
  ];
  let index=0;const overlay=document.createElement('div');overlay.className='tutorial-overlay';document.body.appendChild(overlay);
  const close=()=>{state.tutorialComplete=true;save();overlay.remove()};
  const draw=()=>{const item=pages[index];overlay.innerHTML=`<section class="tutorial-card"><button class="tutorial-skip" data-tutorial-skip>SKIP</button><div class="tutorial-icon">${item.icon}</div><div class="tutorial-step">SYSTEM GUIDE · ${item.step}/${String(pages.length).padStart(2,'0')}</div><h2>${item.title}</h2><p>${item.text}</p><div class="tutorial-dots">${pages.map((_,i)=>`<i class="${i===index?'active':''}"></i>`).join('')}</div><div class="tutorial-actions"><button class="secondary" data-tutorial-back ${index===0?'disabled':''}>BACK</button><button class="primary" data-tutorial-next>${index===pages.length-1?'FINISH':'NEXT'}</button></div></section>`;overlay.querySelector('[data-tutorial-skip]').onclick=close;overlay.querySelector('[data-tutorial-back]').onclick=()=>{if(index>0){index--;draw()}};overlay.querySelector('[data-tutorial-next]').onclick=()=>{if(index===pages.length-1)close();else{index++;draw()}}};draw();
}

function showWelcome(){
  const welcome=document.createElement('div');
  welcome.className=`welcome-screen ${level()>=250?'eternal-welcome':''}`;
  welcome.innerHTML=`<div class="welcome-sigil"><span>✦</span></div><p>ASCENSION PROTOCOL</p><h1>Welcome, <strong>${esc(state.name || 'Hunter')}</strong></h1><div class="welcome-title">${esc(titleForLevel())}</div><div class="welcome-line"></div><span class="welcome-sub">Your next quest awaits</span>`;
  document.body.appendChild(welcome);
  requestAnimationFrame(()=>welcome.classList.add('visible'));
  setTimeout(()=>{welcome.classList.add('departing');setTimeout(()=>{welcome.remove();if(state.onboardingComplete)showTutorial();else showOnboarding()},650)},1800);
}

let refreshingForUpdate=false;
function showUpdateBanner(worker){
  if(document.querySelector('.update-banner'))return;const banner=document.createElement('aside');banner.className='update-banner';banner.innerHTML=`<div><i>✦</i><span><b>Ascension update ready</b><small>Refresh to activate the newest version. Your saved progress will remain.</small></span></div><div><button data-update-later>LATER</button><button data-update-now>REFRESH NOW</button></div>`;document.body.appendChild(banner);requestAnimationFrame(()=>banner.classList.add('visible'));banner.querySelector('[data-update-later]').onclick=()=>banner.remove();banner.querySelector('[data-update-now]').onclick=()=>{refreshingForUpdate=true;worker.postMessage({type:'SKIP_WAITING'})};
}
function registerServiceWorker(){
  navigator.serviceWorker.register('./sw.js').then(registration=>{
    if(registration.waiting&&navigator.serviceWorker.controller)showUpdateBanner(registration.waiting);
    registration.addEventListener('updatefound',()=>{const worker=registration.installing;if(!worker)return;worker.addEventListener('statechange',()=>{if(worker.state==='installed'&&navigator.serviceWorker.controller)showUpdateBanner(registration.waiting||worker)})});
    navigator.serviceWorker.addEventListener('controllerchange',()=>{if(refreshingForUpdate)location.reload()});
  }).catch(()=>{});
}

render();
showWelcome();
if('serviceWorker' in navigator) window.addEventListener('load',registerServiceWorker);
