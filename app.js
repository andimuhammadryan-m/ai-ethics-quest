/*
 * AI Ethics Quest: a standalone browser game for GitHub Pages.
 * No login, database, build process, API key, or JavaScript package is required.
 * All scenario text is illustrative educational content, NOT an accredited test.
 */

const MAX_XP_PER_DECISION = 75;
const DECISIONS_PER_LEVEL = 2;
const STORAGE_KEY = "ai-ethics-quest-v1";

const scenarios = [
  {
    id: "integrity",
    number: "01",
    name: "Checking AI answers",
    subtitle: "Can you trust that source?",
    icon: "🔎",
    color: "green",
    difficulty: "Beginner",
    context: {
      campus: {
        title: "A suspicious source",
        description: "You're writing a report for class. You ask an AI chatbot to find research about social media and student wellbeing.",
        aiOutput: "AI chatbot: ‘A 2024 study by Chen et al. in the Journal of Digital Wellness found that 87% of students focused better after reducing screen time.’",
      },
      workplace: {
        title: "A number that sounds convincing",
        description: "You're writing a report for your manager. An AI chatbot gives you a statistic and a journal reference to support it.",
        aiOutput: "AI chatbot: ‘A 2024 study by Chen et al. in the Journal of Digital Wellness found that 87% of consumers became more productive after reducing screen time.’",
      },
    },
    first: {
      prompt: "You haven't checked the source yet. What do you do?",
      options: [
        {
          text: "Find the original study and check whether it supports the claim.",
          xp: 75,
          rationale: "An AI chatbot can invent sources. Open the original study before you use a quote or statistic.",
          consequence: "You can't find the study. You leave the claim out of your report.",
        },
        {
          text: "Keep the claim, but add a warning that the source may be wrong.",
          xp: 40,
          rationale: "It's good to flag uncertainty, but you still need to check the claim before including it.",
          consequence: "Someone might quote the statistic even with your warning attached.",
        },
        {
          text: "Use it. The journal name and author seem legitimate.",
          xp: 10,
          rationale: "Even a detailed citation can be made up. You need to find the actual publication.",
          consequence: "Your report may end up citing a study that doesn't exist.",
        },
      ],
    },
    followups: {
      strong: {
        prompt: "You can't find the article anywhere. Your teammate still wants to use the number. What do you say?",
        aiOutput: "Teammate: ‘Can we leave it in for now? It makes our argument stronger.’",
        options: [
          {
            text: "Remove the number and look for a source we can actually find.",
            xp: 75,
            rationale: "If you can't verify a claim, don't include it as evidence.",
            consequence: "The report uses a source that readers can check themselves.",
          },
          {
            text: "Keep it, but call it an AI estimate.",
            xp: 40,
            rationale: "Calling it an estimate doesn't solve the problem. There's still no evidence for the number.",
            consequence: "Readers may assume the estimate is based on research.",
          },
          {
            text: "Change the journal name to one that sounds more familiar.",
            xp: 10,
            rationale: "Changing the name makes the citation even less reliable.",
            consequence: "The report now points readers to the wrong journal.",
          },
        ],
      },
      recovery: {
        prompt: "A teammate realizes the article may be fake. How do you fix the report?",
        aiOutput: "Teammate: ‘I can't find the article. Are we sure the AI didn't make this up?’",
        options: [
          {
            text: "Remove the claim and check the other AI-generated references too.",
            xp: 75,
            rationale: "You caught one fake reference. It's worth checking the others before submitting.",
            consequence: "The fake citation doesn't make it into the final report.",
          },
          {
            text: "Delete the citation, but keep the number.",
            xp: 40,
            rationale: "Without a source, you still have no reason to trust the number.",
            consequence: "The report makes a claim you can't back up.",
          },
          {
            text: "Ask the chatbot for a more convincing citation.",
            xp: 10,
            rationale: "A nicer-looking citation won't help if the study isn't real.",
            consequence: "You could end up with another fake source.",
          },
        ],
      },
    },
  },
  {
    id: "privacy",
    number: "02",
    name: "Keeping data private",
    subtitle: "What's safe to share?",
    icon: "🔐",
    color: "blue",
    difficulty: "Intermediate",
    context: {
      campus: {
        title: "A survey spreadsheet",
        description: "Your student club has survey responses to summarize. The spreadsheet includes names and personal comments. A teammate suggests a public AI chatbot.",
        aiOutput: "Teammate: ‘Let's upload the whole file. The chatbot will do the summary for us.’",
      },
      workplace: {
        title: "A customer spreadsheet",
        description: "You need to summarize customer feedback for work. The spreadsheet includes names and confidential notes. A colleague suggests a public AI chatbot.",
        aiOutput: "Colleague: ‘Let's upload the whole customer file. It'll be quicker.’",
      },
    },
    first: {
      prompt: "The file contains private information. What should you do?",
      options: [
        {
          text: "Check which tools are allowed, then share only the data the task needs.",
          xp: 75,
          rationale: "Check your organization's rules first. Remove identifying details where possible, and don't assume that removing names is always enough.",
          consequence: "You can get a useful summary without sharing everyone's personal details.",
        },
        {
          text: "Delete the names and upload everything else.",
          xp: 40,
          rationale: "People can still be identified through contact details or comments. You also need permission to use the tool.",
          consequence: "The chatbot may receive information that should have stayed private.",
        },
        {
          text: "Upload the full file. It's only for a summary.",
          xp: 10,
          rationale: "The purpose doesn't make it safe. You still need approval before sharing private data with an outside service.",
          consequence: "You may have exposed people's information to an unapproved tool.",
        },
      ],
    },
    followups: {
      strong: {
        prompt: "The summary is ready. Someone wants to add the names back in. What's your response?",
        aiOutput: "Teammate: ‘Could we add each person's name? I want more specific results.’",
        options: [
          {
            text: "Ask why the names are needed and check whether we're allowed to use them.",
            xp: 75,
            rationale: "Tool approval doesn't mean you can add any personal details you want. The extra data needs a clear purpose.",
            consequence: "The summary stays useful without exposing people unnecessarily.",
          },
          {
            text: "Add the names. We already got permission to use the tool.",
            xp: 40,
            rationale: "Approval for the summary doesn't automatically cover using everyone's identity.",
            consequence: "The team may use personal details beyond what was permitted.",
          },
          {
            text: "Try the full file in other chatbots and compare their results.",
            xp: 10,
            rationale: "You'd be sharing the same private data with even more services.",
            consequence: "More companies may now have copies of the information.",
          },
        ],
      },
      recovery: {
        prompt: "You find out that some personal information was uploaded. What now?",
        aiOutput: "Teammate: ‘I just noticed names in the comments we uploaded. Is that a problem?’",
        options: [
          {
            text: "Stop uploading and report the issue through the proper channel.",
            xp: 75,
            rationale: "If private data may have leaked, report it promptly. Your organization can decide what needs to happen next.",
            consequence: "The right people can investigate and try to limit further exposure.",
          },
          {
            text: "Delete the file from your laptop and move on.",
            xp: 40,
            rationale: "Deleting your copy doesn't delete what you already uploaded.",
            consequence: "The uploaded data may still be stored by the service.",
          },
          {
            text: "Leave it. We didn't mean any harm.",
            xp: 10,
            rationale: "Accidents still need to be reported, especially when someone's private information is involved.",
            consequence: "No one checks what happened to the data.",
          },
        ],
      },
    },
  },
  {
    id: "fairness",
    number: "03",
    name: "Spotting unfair decisions",
    subtitle: "Is the AI ranking fair?",
    icon: "⚖️",
    color: "gold",
    difficulty: "Advanced",
    context: {
      campus: {
        title: "A strange scholarship ranking",
        description: "Your campus committee uses AI to shortlist scholarship applicants. Students from rural schools keep getting lower scores, even when their grades are similar.",
        aiOutput: "AI tool: ‘Shortlist complete. Applicants from rural schools have lower suitability scores.’",
      },
      workplace: {
        title: "A strange hiring ranking",
        description: "Your team is testing AI for hiring. Applicants from certain regions keep getting lower scores, even when they have similar experience.",
        aiOutput: "AI tool: ‘Shortlist complete. Applicants from certain regions have lower suitability scores.’",
      },
    },
    first: {
      prompt: "The pattern seems unfair. What should your team do?",
      options: [
        {
          text: "Pause the ranking and ask human reviewers to investigate the pattern.",
          xp: 75,
          rationale: "A suspicious pattern deserves a closer look. Check what might be affecting the scores before making decisions.",
          consequence: "The team can find the issue before it affects real applicants.",
        },
        {
          text: "Add extra points for every applicant from the affected area.",
          xp: 40,
          rationale: "A blanket score boost might create another unfair pattern. You still need to find out what caused the difference.",
          consequence: "The original problem remains in the model.",
        },
        {
          text: "Trust the results. AI should be less biased than people.",
          xp: 10,
          rationale: "AI can learn unfair patterns from the data it was trained on. Its scores aren't automatically fair.",
          consequence: "Qualified applicants may be left out.",
        },
      ],
    },
    followups: {
      strong: {
        prompt: "The review suggests a location-related factor may be affecting scores. What next?",
        aiOutput: "Reviewer: ‘A location-related variable might be behind this. Should we keep using the model?’",
        options: [
          {
            text: "Check the model, test the revised results and have people review its decisions.",
            xp: 75,
            rationale: "Before using it again, check which inputs affect the scores. Test the changes and record what you found.",
            consequence: "The team can see whether the changes actually reduce the unfair pattern.",
          },
          {
            text: "Hide the location field on screen, but keep the model as it is.",
            xp: 40,
            rationale: "The model might still use other information connected to location. Hiding a field won't fix that.",
            consequence: "Applicants may keep getting unfair scores.",
          },
          {
            text: "Keep using automated scores. The tool saves so much time.",
            xp: 10,
            rationale: "Saving time isn't a good reason to ignore a known fairness problem.",
            consequence: "The same applicants may continue to be treated unfairly.",
          },
        ],
      },
      recovery: {
        prompt: "A reviewer flags the ranking as unfair. What do you do before anyone is selected?",
        aiOutput: "Reviewer: ‘We might have disadvantaged qualified candidates. We should reassess this output.’",
        options: [
          {
            text: "Stop using the scores for now and review the affected applications.",
            xp: 75,
            rationale: "A human review can catch problems before the shortlist becomes final. The team should also investigate the scoring issue.",
            consequence: "The affected applicants get another review before a decision is made.",
          },
          {
            text: "Keep the shortlist and add a note about possible bias.",
            xp: 40,
            rationale: "A warning doesn't change who the ranking leaves out.",
            consequence: "Some qualified people may still miss out.",
          },
          {
            text: "Use the ranking now. Look into it if someone complains later.",
            xp: 10,
            rationale: "You've already spotted a potential issue. There's no reason to wait for complaints.",
            consequence: "The team may reject applicants based on unfair scores.",
          },
        ],
      },
    },
  },
];

const app = document.getElementById("app");
const resetButton = document.getElementById("reset-progress");

function freshSession(audience = "campus") {
  return {
    audience,
    view: "intro",
    started: false,
    levelIndex: 0,
    stepIndex: 0,
    branch: "strong",
    totalXp: 0,
    decisionStreak: 0,
    bestDecisionStreak: 0,
    completedLevels: [],
    answers: [],
    feedbackOption: null,
  };
}

function freshStore() {
  return { session: freshSession(), stats: { bestXp: null, completedRuns: 0, dailyStreak: 0, lastCompletionDay: "" } };
}

function loadStore() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !saved.session || !saved.stats) return freshStore();
    const defaults = freshStore();
    const session = { ...defaults.session, ...saved.session };
    if (!Number.isInteger(session.levelIndex) || session.levelIndex < 0 || session.levelIndex >= scenarios.length) return freshStore();
    if (!["intro", "question", "feedback", "results"].includes(session.view)) return freshStore();
    if (!["campus", "workplace"].includes(session.audience)) session.audience = "campus";
    return { session, stats: { ...defaults.stats, ...saved.stats } };
  } catch (_) {
    return freshStore();
  }
}

let store = loadStore();

function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); }
  catch (_) { /* Browsers in private mode may disable persistent storage. */ }
}

function qualityOf(option) {
  if (option.xp === 75) return "strong";
  if (option.xp === 40) return "partial";
  return "risky";
}

function currentScenario() { return scenarios[store.session.levelIndex]; }
function currentQuestion() {
  const scenario = currentScenario();
  if (store.session.stepIndex === 0) return scenario.first;
  return scenario.followups[store.session.branch === "strong" ? "strong" : "recovery"];
}
function maxXp() { return scenarios.length * DECISIONS_PER_LEVEL * MAX_XP_PER_DECISION; }
function pct(n, d) { return d ? Math.round((n / d) * 100) : 0; }
function todayLocal() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function updateSidebar() {
  const session = store.session;
  document.getElementById("header-xp").textContent = session.totalXp;
  document.getElementById("header-streak").textContent = session.decisionStreak;
  document.getElementById("sidebar-best").textContent = store.stats.bestXp == null ? "0" : store.stats.bestXp;
  document.getElementById("journey-count").textContent = `${session.completedLevels.length} / ${scenarios.length}`;
  document.getElementById("journey-track").innerHTML = scenarios.map((scenario, i) => {
    const done = session.completedLevels.includes(i);
    const current = !done && session.started && i === session.levelIndex;
    return `<div class="journey-row ${done ? "complete" : current ? "current" : ""}">
      <span class="journey-icon ${done ? "done" : current ? "active" : ""}">${done ? "✓" : scenario.number}</span>
      <span>${scenario.name}</span>
    </div>`;
  }).join("");
}

function render() {
  updateSidebar();
  const view = store.session.view;
  if (view === "question") renderQuestion();
  else if (view === "feedback") renderFeedback();
  else if (view === "results") renderResults();
  else renderIntro();
  persist();
}

function renderIntro() {
  const { session, stats } = store;
  app.innerHTML = `<div class="app-stage">
    <section class="hero-banner" aria-labelledby="hero-heading">
      <div class="hero-copy">
        <div class="hero-tag">A short game about AI choices</div>
        <h1 class="headline" id="hero-heading">What would<br/><span class="green-highlight">you do?</span></h1>
        <p class="hero-description">An AI answer looks convincing. A teammate wants to upload private data. What happens if you make the wrong call? Try the scenarios and decide for yourself.</p>
        <div class="hero-actions">
          <button class="btn-primary" type="button" data-action="start">${session.started ? "Start over" : "Let's play"} <span aria-hidden="true">→</span></button>
          ${session.started ? `<button class="btn-secondary" type="button" data-action="resume">Pick up where I left off</button>` : ""}
        </div>
        <p class="inspiration-line">A student-made demo inspired by Duolingo.</p>
      </div>
      <div class="hero-art" aria-hidden="true">
        <span class="hero-glow"></span>
        <img class="hero-duo duo-float" src="assets/duo-welcome-clean.png" alt="" width="310" height="310" />
      </div>
    </section>
    <div class="audience-control" aria-label="Choose your scenario setting">
      <label>Choose your context</label>
      <div class="audience-toggle" role="group" aria-label="Scenario context">
        <button type="button" class="${session.audience === "campus" ? "active" : ""}" aria-pressed="${session.audience === "campus"}" data-action="audience" data-value="campus">🎓 Campus</button>
        <button type="button" class="${session.audience === "workplace" ? "active" : ""}" aria-pressed="${session.audience === "workplace"}" data-action="audience" data-value="workplace">💼 Workplace</button>
      </div>
      <span class="audience-caption">The story changes to match your setting.</span>
    </div>
    <div class="section-title-row"><h2>What's in the game?</h2><p>${stats.completedRuns ? `You've played ${stats.completedRuns} time${stats.completedRuns === 1 ? "" : "s"}.` : "Each topic has two decisions."}</p></div>
    <div class="level-grid">${scenarios.map((scenario, i) => `<div class="level-card">
      <span class="level-card-lock">${i === 0 ? "Starts here" : `Level ${i + 1}`}</span>
      <span class="card-symbol">${scenario.icon}</span><small>Mission ${scenario.number}</small>
      <h3>${scenario.name}</h3><p>${scenario.subtitle}.</p>
    </div>`).join("")}</div>
    <div class="details-strip"><div class="detail-item"><span>⚡</span> Earn XP</div><div class="detail-item"><span>🔀</span> Your choices change the story</div><div class="detail-item"><span>💡</span> See why each answer matters</div></div>
  </div>`;
}

function renderQuestion() {
  const { session } = store;
  const scenario = currentScenario();
  const question = currentQuestion();
  const context = scenario.context[session.audience];
  const questionNumber = session.levelIndex * DECISIONS_PER_LEVEL + session.stepIndex + 1;
  const isFollowup = session.stepIndex === 1;
  app.innerHTML = `<div class="app-stage">
    <div class="play-header"><span class="stage-pill">${scenario.icon} Mission ${scenario.number}: ${scenario.name}</span><button class="exit-button" data-action="exit" type="button">✕ &nbsp; Exit</button></div>
    <div class="progress-wrap" role="progressbar" aria-label="Quest progress" aria-valuemin="0" aria-valuemax="6" aria-valuenow="${questionNumber - 1}"><div class="progress-fill" style="width:${((questionNumber - 1) / (scenarios.length * DECISIONS_PER_LEVEL)) * 100}%"></div></div>
    <section class="question-card" aria-labelledby="question-heading">
      <div class="question-topline"><span class="mini-label">Decision ${questionNumber} of ${scenarios.length * DECISIONS_PER_LEVEL}${isFollowup ? " · What happens next" : ""}</span><span class="difficulty">${scenario.difficulty}</span></div>
      <h1 class="question-title" id="question-heading">${isFollowup ? "Here's what happens next" : context.title}</h1>
      <p class="question-description">${isFollowup ? "Based on your earlier choice, you've got another decision to make." : context.description}</p>
      <div class="simulation-card"><span class="simulation-avatar" aria-hidden="true">${isFollowup ? "💬" : "✦"}</span><div><div class="sim-title">${isFollowup ? "New message" : "Here's what you see"}</div><p>${isFollowup ? question.aiOutput : context.aiOutput}</p></div></div>
      <div class="choose-label">${question.prompt}</div>
      <div class="option-grid">${question.options.map((option, index) => `<button type="button" class="option-button" data-action="choose" data-value="${index}"><span class="option-key">${index + 1}</span><span class="option-text">${option.text}</span><span class="option-arrow" aria-hidden="true">›</span></button>`).join("")}</div>
      <p class="hint-text">Take your time. You can also press 1, 2 or 3 to choose.</p>
    </section>
  </div>`;
}

function renderFeedback() {
  const { session } = store;
  const option = currentQuestion().options[session.feedbackOption];
  if (!option) { session.view = "question"; render(); return; }
  const quality = qualityOf(option);
  const headings = { strong: "Good call!", partial: "Almost there.", risky: "Let's take another look." };
  const captions = { strong: "That was a careful choice.", partial: "There's one more thing to consider.", risky: "Here's what could go wrong." };
  const duoPhotos = { strong: "duo-cheering-clean.png", partial: "duo-welcome-clean.png", risky: "duo-welcome-clean.png" };
  const isLastStep = session.stepIndex === DECISIONS_PER_LEVEL - 1;
  const isLastLevel = session.levelIndex === scenarios.length - 1;
  const buttonText = isLastStep ? (isLastLevel ? "See my score" : "Next mission") : "Continue";
  app.innerHTML = `<div class="app-stage">
    <div class="play-header"><span class="stage-pill">${currentScenario().icon} Mission ${currentScenario().number}: Your answer</span><button class="exit-button" data-action="exit" type="button">✕ &nbsp; Exit</button></div>
    <div class="progress-wrap" role="progressbar" aria-label="Quest progress" aria-valuemin="0" aria-valuemax="6" aria-valuenow="${session.answers.length}"><div class="progress-fill" style="width:${(session.answers.length / (scenarios.length * DECISIONS_PER_LEVEL)) * 100}%"></div></div>
    <section class="question-card" aria-labelledby="feedback-heading">
      <div class="feedback-top"><div class="feedback-status"><img class="feedback-inline-duo ${quality === "strong" ? "duo-celebrate" : ""}" src="assets/${duoPhotos[quality]}" alt="Duo reacts to your answer" width="86" height="86" /><div><h2 id="feedback-heading">${headings[quality]}</h2><p>${captions[quality]}</p></div></div><div class="xp-reward">⚡ +${option.xp} XP</div></div>
      <div class="feedback-answer">Your choice</div><div class="feedback-chosen">“${option.text}”</div>
      <div class="feedback-explain"><div class="feedback-box"><h3>💡 Here's why</h3><p>${option.rationale}</p></div><div class="feedback-box consequence"><h3>🔍 What could happen</h3><p>${option.consequence}</p></div></div>
      <div class="feedback-actions"><span>${isLastStep ? "You've finished this topic." : "The next part depends on your answer."}</span><button class="btn-primary" data-action="continue" type="button">${buttonText} <span aria-hidden="true">→</span></button></div>
    </section>
  </div>`;
}

function achievementList() {
  const { answers, totalXp } = store.session;
  const achievements = [];
  const trackNames = ["Source checker", "Privacy aware", "Fairness checker"];
  const icons = ["🔎", "🔐", "⚖️"];
  scenarios.forEach((_, i) => {
    const levelAnswers = answers.filter((a) => a.levelIndex === i);
    if (levelAnswers.length === DECISIONS_PER_LEVEL && levelAnswers.every((a) => a.xp === 75)) {
      achievements.push({ label: trackNames[i], icon: icons[i] });
    }
  });
  if (totalXp >= maxXp() * .8) achievements.push({ label: "Great score", icon: "🧠" });
  if (!achievements.length) achievements.push({ label: "First try", icon: "🌱" });
  return achievements;
}

function renderResults() {
  const { session, stats } = store;
  const score = pct(session.totalXp, maxXp());
  const tier = score >= 80 ? "Nice work!" : score >= 55 ? "Good progress." : "Keep practicing.";
  const messages = {
    "Nice work!": "You caught most of the risks in these stories. Try a different setting next time.",
    "Good progress.": "You made some solid choices. Have another look at the questions where you lost points.",
    "Keep practicing.": "Some of these situations are tricky. You can replay them and try another approach.",
  };
  const celebrationPhoto = score >= 80 ? "duo-cheering-clean.png" : "duo-welcome-clean.png";
  app.innerHTML = `<div class="app-stage">
    <section class="result-hero" aria-labelledby="results-heading"><div class="result-duo-wrap"><img src="assets/${celebrationPhoto}" class="result-duo ${score >= 80 ? "duo-celebrate" : "duo-float"}" alt="Duo mascot" width="112" height="112"/></div><div class="eyebrow">You're done!</div><h1 id="results-heading">${tier}</h1><p>${messages[tier]}</p>
      <div class="result-metrics"><div class="result-metric"><div class="metric-number">${session.totalXp}</div><div class="metric-label">XP earned / ${maxXp()}</div></div><div class="result-metric"><div class="metric-number">${score}%</div><div class="metric-label">Practice score</div></div><div class="result-metric"><div class="metric-number">${session.bestDecisionStreak}</div><div class="metric-label">Best decision streak</div></div></div>
    </section>
    <section class="results-panel"><h2>Your score by topic</h2><p>Here's how many points you earned in each part of the game.</p>
      ${scenarios.map((scenario, i) => {
        const xp = session.answers.filter((a) => a.levelIndex === i).reduce((acc, a) => acc + a.xp, 0);
        const percent = pct(xp, DECISIONS_PER_LEVEL * MAX_XP_PER_DECISION);
        return `<div class="performance-row"><span>${scenario.icon} ${scenario.name}</span><div class="result-bar"><span style="width:${percent}%"></span></div><strong>${percent}%</strong></div>`;
      }).join("")}
      <h2 style="font-size:17px;margin-top:24px">Badges earned</h2><div class="badges">${achievementList().map((a) => `<span class="achievement">${a.icon} ${a.label}</span>`).join("")}</div>
      <div class="reflection-callout">This score is just for practice. It doesn't measure your overall AI skills. ${stats.dailyStreak ? `You've played on ${stats.dailyStreak} day${stats.dailyStreak > 1 ? "s" : ""} in a row.` : ""}</div>
      <div class="result-actions"><button type="button" class="btn-primary" data-action="replay">Play again</button><button type="button" class="btn-secondary" data-action="home">Back to home</button></div>
    </section>
  </div>`;
}

function startNew() {
  const audience = store.session.audience;
  store.session = freshSession(audience);
  store.session.started = true;
  store.session.view = "question";
  render(); scrollUp();
}

function chooseOption(index) {
  if (store.session.view !== "question") return;
  const option = currentQuestion().options[index];
  if (!option) return;
  const s = store.session;
  s.totalXp += option.xp;
  s.decisionStreak = qualityOf(option) === "strong" ? s.decisionStreak + 1 : 0;
  s.bestDecisionStreak = Math.max(s.bestDecisionStreak, s.decisionStreak);
  s.answers.push({ levelIndex: s.levelIndex, stepIndex: s.stepIndex, xp: option.xp });
  if (s.stepIndex === 0) s.branch = qualityOf(option);
  s.feedbackOption = index;
  s.view = "feedback";
  render(); scrollUp();
}

function completeRun() {
  const stats = store.stats;
  const s = store.session;
  stats.bestXp = stats.bestXp == null ? s.totalXp : Math.max(stats.bestXp, s.totalXp);
  stats.completedRuns += 1;
  const today = todayLocal();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;
  if (stats.lastCompletionDay !== today) {
    stats.dailyStreak = stats.lastCompletionDay === yesterdayString ? stats.dailyStreak + 1 : 1;
    stats.lastCompletionDay = today;
  }
  s.started = false;
  s.view = "results";
}

function continueGame() {
  if (store.session.view !== "feedback") return;
  const s = store.session;
  s.feedbackOption = null;
  if (s.stepIndex === 0) {
    s.stepIndex = 1;
    s.view = "question";
  } else {
    s.completedLevels.push(s.levelIndex);
    if (s.levelIndex === scenarios.length - 1) {
      completeRun();
    } else {
      s.levelIndex++;
      s.stepIndex = 0;
      s.branch = "strong";
      s.view = "question";
    }
  }
  render(); scrollUp();
}

function scrollUp() {
  window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

app.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  switch (action) {
    case "start": case "replay": startNew(); break;
    case "resume":
      store.session.view = store.session.feedbackOption == null ? "question" : "feedback";
      render(); scrollUp(); break;
    case "audience":
      if (["campus", "workplace"].includes(button.dataset.value)) {
        store.session.audience = button.dataset.value;
        render();
      }
      break;
    case "choose": chooseOption(Number(button.dataset.value)); break;
    case "continue": continueGame(); break;
    case "exit":
      store.session.view = "intro";
      render(); scrollUp(); break;
    case "home":
      store.session = freshSession(store.session.audience);
      render(); scrollUp(); break;
    default: break;
  }
});

document.addEventListener("keydown", (event) => {
  if (store.session.view !== "question" || event.altKey || event.ctrlKey || event.metaKey || event.repeat) return;
  if (!["1", "2", "3"].includes(event.key)) return;
  if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || "")) return;
  chooseOption(Number(event.key) - 1);
});

resetButton.addEventListener("click", () => {
  if (!window.confirm("Clear your saved scores and start fresh?")) return;
  store = freshStore();
  persist();
  render(); scrollUp();
});

render();
