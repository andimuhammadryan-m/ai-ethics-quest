/*
 * AI Ethics Quest — a standalone, GitHub Pages-ready browser game.
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
    name: "Information Integrity",
    subtitle: "Spot the hallucination",
    icon: "🔎",
    color: "green",
    difficulty: "FOUNDATION",
    context: {
      campus: {
        title: "A reference that never existed",
        description: "You're preparing a short research brief for a university course. You ask an AI assistant to summarize studies on the effects of social media on student wellbeing.",
        aiOutput: "‘A 2024 study by Chen et al. in the Journal of Digital Wellness proves that 87% of students experience improved focus after limiting screen time.’",
      },
      workplace: {
        title: "An impressive but unsupported claim",
        description: "You're drafting a report for your manager. An AI assistant proposes a statistic about consumers' purchasing behavior and gives a professional-looking citation.",
        aiOutput: "‘A 2024 study by Chen et al. in the Journal of Digital Wellness proves that 87% of consumers increase productivity after reducing screen time.’",
      },
    },
    first: {
      prompt: "The claim sounds convincing, but you have not checked its source. What should you do?",
      options: [
        {
          text: "Search for the original publication and independently verify the claim before using it.",
          xp: 75,
          rationale: "Strong judgment. AI output is a starting point, not a primary source. Checking the publication and its evidence helps prevent fabricated citations from entering your work.",
          consequence: "You discover the referenced journal article cannot be verified. Your work stays accurate and transparent.",
        },
        {
          text: "Use the claim but add a note saying the AI-generated citation may be inaccurate.",
          xp: 40,
          rationale: "Recognizing uncertainty is useful, but a warning does not make an unsupported claim reliable. Verify or remove it before distributing the work.",
          consequence: "Your reader could still rely on a false statistic despite the disclaimer.",
        },
        {
          text: "Use the citation as written because the AI provided a specific journal and author.",
          xp: 10,
          rationale: "Specific details can be fabricated. A realistic author name, journal title, or numerical figure does not prove a reference exists.",
          consequence: "A fabricated source could undermine the credibility of your entire report.",
        },
      ],
    },
    followups: {
      strong: {
        prompt: "Your search finds no trace of the article. A teammate still wants to keep the impressive statistic. What's the responsible next move?",
        aiOutput: "Teammate: ‘The statistic sounds helpful. Can we leave it in until someone checks later?’",
        options: [
          {
            text: "Remove the unsupported statistic and replace it only with evidence from a verifiable source.",
            xp: 75,
            rationale: "Correct. When a claim cannot be substantiated, removing it and finding a valid source protects information integrity.",
            consequence: "Your final work contains defensible evidence and gives readers a clear path to verify it.",
          },
          {
            text: "Keep the statistic but label it as an AI-generated estimate.",
            xp: 40,
            rationale: "A label communicates uncertainty, but an invented statistic still should not be presented as meaningful evidence.",
            consequence: "The claim remains misleading even when described as an estimate.",
          },
          {
            text: "Rewrite the journal name to something more recognizable.",
            xp: 10,
            rationale: "Changing a citation's details does not verify the evidence; it adds another layer of misrepresentation.",
            consequence: "The source becomes harder to audit and the misinformation spreads.",
          },
        ],
      },
      recovery: {
        prompt: "Before submission, someone notices the cited article cannot be found. What should you do now?",
        aiOutput: "Teammate: ‘I can't find the article. Are we sure the AI didn't make this up?’",
        options: [
          {
            text: "Acknowledge the issue, remove the unverified claim, and check every other AI citation.",
            xp: 75,
            rationale: "This is the strongest recovery. Correct the current mistake and inspect similar claims for the same failure mode.",
            consequence: "Your team prevents the fabricated reference from appearing in the final work.",
          },
          {
            text: "Delete just the journal name and keep the numerical claim.",
            xp: 40,
            rationale: "Removing an unverified reference is incomplete if the statistic itself is unsupported.",
            consequence: "The unsupported numerical claim can still mislead readers.",
          },
          {
            text: "Ask the AI to invent a replacement reference that looks more credible.",
            xp: 10,
            rationale: "Fabricating a replacement source compounds the problem. AI must not be used to disguise uncertainty as evidence.",
            consequence: "Your report contains increasingly misleading citations.",
          },
        ],
      },
    },
  },
  {
    id: "privacy",
    number: "02",
    name: "Data Privacy",
    subtitle: "Protect sensitive data",
    icon: "🔐",
    color: "blue",
    difficulty: "APPLIED",
    context: {
      campus: {
        title: "The student survey dilemma",
        description: "You're helping a campus organization summarize student survey responses. The file contains students' names, email addresses, and personal comments. A teammate suggests using a public AI chatbot to save time.",
        aiOutput: "Teammate: ‘Let's upload the entire spreadsheet. The AI can analyze everything in seconds!’",
      },
      workplace: {
        title: "The customer spreadsheet dilemma",
        description: "You're preparing a customer insights report. The spreadsheet includes names, contact details, and confidential notes. A colleague wants to upload it to a public AI chatbot.",
        aiOutput: "Colleague: ‘Let's upload the entire customer file. The AI will summarize it much faster!’",
      },
    },
    first: {
      prompt: "You need an AI-generated summary, but the dataset contains sensitive information. What is the safest approach?",
      options: [
        {
          text: "Check the approved-tool policy and use only the minimum necessary, appropriately de-identified data.",
          xp: 75,
          rationale: "Good judgment. Authorization, data minimization, and de-identification lower privacy risk. De-identification alone is not a guarantee of safety.",
          consequence: "You can explore legitimate insights without unnecessarily exposing identifiable records.",
        },
        {
          text: "Remove names but upload all remaining fields without checking the tool's data policy.",
          xp: 40,
          rationale: "Removing names helps but is not sufficient. Email addresses, free-text comments, or unique attributes can still identify people.",
          consequence: "Sensitive details may remain accessible to a tool that has not been approved for them.",
        },
        {
          text: "Upload the complete file because it will only be used to create a summary.",
          xp: 10,
          rationale: "A good intention does not remove privacy obligations. Check authorization and where information may be processed or retained.",
          consequence: "Personal or confidential data could be disclosed to an unauthorized service.",
        },
      ],
    },
    followups: {
      strong: {
        prompt: "Your approved workflow produces a useful summary. A teammate asks you to add the original names for personalization. What next?",
        aiOutput: "Teammate: ‘The summary is useful, but can we include everyone's identity for more specific insights?’",
        options: [
          {
            text: "Require a legitimate purpose and authorization; keep identities out unless they are genuinely necessary.",
            xp: 75,
            rationale: "Correct. Even an approved tool does not justify sharing more personal information than the task requires.",
            consequence: "The project retains useful insights while reducing unnecessary disclosure.",
          },
          {
            text: "Add names to the final AI prompt because the tool was previously approved.",
            xp: 40,
            rationale: "Approval for one kind of processing does not automatically authorize all fields and purposes.",
            consequence: "The analysis could exceed the permissions originally granted.",
          },
          {
            text: "Send the entire raw file to several AI tools and use whichever offers the best output.",
            xp: 10,
            rationale: "Replicating the dataset across multiple services increases the exposure surface and makes governance harder.",
            consequence: "More services may retain or process data without appropriate safeguards.",
          },
        ],
      },
      recovery: {
        prompt: "A teammate warns that potentially identifiable data may already have reached an unapproved AI service. How should you respond?",
        aiOutput: "Teammate: ‘Some of the comments still contain names. We might have shared sensitive information.’",
        options: [
          {
            text: "Stop further sharing, follow the organization's incident process, and seek guidance on containment.",
            xp: 75,
            rationale: "Correct. Possible exposure should be handled promptly using the applicable incident and data-protection process.",
            consequence: "The organization can assess the risk, contain it, and decide whether further action is required.",
          },
          {
            text: "Delete your local copy and assume the uploaded data is gone everywhere.",
            xp: 40,
            rationale: "Deleting a local file does not ensure a third-party service has removed its own copy.",
            consequence: "A possible exposure remains unassessed.",
          },
          {
            text: "Ignore it because the purpose was educational or analytical.",
            xp: 10,
            rationale: "Educational or productivity goals do not cancel confidentiality and privacy responsibilities.",
            consequence: "The risk persists and those responsible may never learn about the issue.",
          },
        ],
      },
    },
  },
  {
    id: "fairness",
    number: "03",
    name: "Bias & Fairness",
    subtitle: "Challenge the bias",
    icon: "⚖️",
    color: "gold",
    difficulty: "ADVANCED",
    context: {
      campus: {
        title: "An unfair scholarship shortlist",
        description: "Your student committee uses an AI tool to help review scholarship applications. You notice that candidates from rural schools are ranked substantially lower, despite similar academic performance.",
        aiOutput: "AI tool: ‘Recommended shortlist generated. Rural-school applicants have lower average suitability scores.’",
      },
      workplace: {
        title: "An unfair hiring shortlist",
        description: "Your recruitment team tests an AI tool for screening job applications. Candidates from certain regions receive consistently lower scores, even when their experience is comparable.",
        aiOutput: "AI tool: ‘Recommended shortlist generated. Applicants from certain regions have lower average suitability scores.’",
      },
    },
    first: {
      prompt: "The AI ranking may reflect an unfair pattern. What should the team do first?",
      options: [
        {
          text: "Pause use of the ranking, investigate relevant factors, and involve human reviewers before deciding.",
          xp: 75,
          rationale: "Strong judgment. A concerning pattern warrants investigation, meaningful human review, and assessment of whether the model uses inappropriate signals.",
          consequence: "The team can review the model and correct its process before it causes unfair decisions.",
        },
        {
          text: "Manually increase scores for every candidate from the affected region without assessing the system.",
          xp: 40,
          rationale: "Trying to correct the disparity is understandable, but blanket score changes can create new unfairness without identifying the source of the issue.",
          consequence: "The underlying model problem stays unresolved, and new distortions may be introduced.",
        },
        {
          text: "Accept the ranking because the AI is more objective than human reviewers.",
          xp: 10,
          rationale: "AI systems can reproduce or amplify biased patterns in their data, features, or design. An automated score is not proof of fairness.",
          consequence: "Qualified people may be excluded without adequate scrutiny.",
        },
      ],
    },
    followups: {
      strong: {
        prompt: "The review shows that a location-related proxy may be distorting the rankings. What should happen before the model is used again?",
        aiOutput: "Reviewer: ‘The proxy variable may be driving the disparity. We need a decision about the next screening round.’",
        options: [
          {
            text: "Review relevant features, test fairness across groups, document changes, and keep accountable human oversight.",
            xp: 75,
            rationale: "Correct. Bias mitigation needs investigation, testing, documentation, and oversight—not merely a cosmetic change.",
            consequence: "Decisions become more auditable and the team can check whether its mitigation actually works.",
          },
          {
            text: "Hide the location field in the interface but keep using the same model without testing.",
            xp: 40,
            rationale: "Hiding a field from users does not prove that the underlying model stopped relying on correlated information.",
            consequence: "Potentially unfair behavior may continue unnoticed.",
          },
          {
            text: "Return to fully automated ranking without a review because the model is fast.",
            xp: 10,
            rationale: "Efficiency does not justify unresolved bias in consequential decisions.",
            consequence: "The same groups may continue to experience unfair outcomes.",
          },
        ],
      },
      recovery: {
        prompt: "A reviewer now challenges the ranking as potentially unfair. How should you respond before final selections are made?",
        aiOutput: "Reviewer: ‘We might have disadvantaged qualified candidates. We should reassess this output.’",
        options: [
          {
            text: "Suspend reliance on the AI scores, reassess the affected cases, and investigate the source of disparity.",
            xp: 75,
            rationale: "Correct. Corrective review and root-cause investigation help prevent a concerning automated pattern from becoming a final decision.",
            consequence: "Affected applicants receive a more accountable review.",
          },
          {
            text: "Add a disclaimer to the shortlist but keep the ranking unchanged.",
            xp: 40,
            rationale: "Disclosure matters, but a disclaimer alone does not address an unfair process in a consequential decision.",
            consequence: "The same people may still be excluded by an untested ranking.",
          },
          {
            text: "Proceed as planned and investigate only if someone complains afterward.",
            xp: 10,
            rationale: "Waiting until harm has occurred is avoidable when a plausible fairness concern is already known.",
            consequence: "Unfair decisions could be finalized before the issue is addressed.",
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
  document.getElementById("sidebar-best").textContent = store.stats.bestXp == null ? "—" : store.stats.bestXp;
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
        <div class="hero-tag">✦ Learn · Practice · Prove</div>
        <h1 class="headline" id="hero-heading">Think before<br/>you <span class="green-highlight">prompt.</span></h1>
        <p class="hero-description">AI is powerful. Your judgment should be, too. Make real-world decisions, see the consequences, and grow your responsible AI skills one challenge at a time.</p>
        <div class="hero-actions">
          <button class="btn-primary" type="button" data-action="start">${session.started ? "↻ Start new quest" : "Start your quest"} <span aria-hidden="true">→</span></button>
          ${session.started ? `<button class="btn-secondary" type="button" data-action="resume">Resume progress ↗</button>` : ""}
        </div>
        <div class="inspiration-line" aria-label="Design inspiration, not an official partnership">
          <span>Gamified learning inspired by</span>
          <span class="brand-logo-crop"><img src="assets/duolingo-green-logo.png" alt="Duolingo" width="126" height="126" /></span>
          <span class="unofficial-label">· Unofficial concept</span>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="art-orbit"></div><div class="floating-icon one">🧠</div><div class="floating-icon two">🛡️</div>
        <div class="hero-mascot-speech">Ready to think critically?</div>
        <img class="hero-duo duo-float" src="assets/duo-welcome.png" alt="" width="256" height="256" />
        <div class="chat-question floating-prompt">⚠️ &nbsp; Can you spot the risk?</div>
        <div class="floating-xp">⚡ +75 XP</div>
      </div>
    </section>
    <div class="audience-control" aria-label="Choose your scenario setting">
      <label>Choose your context</label>
      <div class="audience-toggle" role="group" aria-label="Scenario context">
        <button type="button" class="${session.audience === "campus" ? "active" : ""}" aria-pressed="${session.audience === "campus"}" data-action="audience" data-value="campus">🎓 Campus</button>
        <button type="button" class="${session.audience === "workplace" ? "active" : ""}" aria-pressed="${session.audience === "workplace"}" data-action="audience" data-value="workplace">💼 Workplace</button>
      </div>
      <span class="audience-caption">Same core skills, adapted to real-world settings.</span>
    </div>
    <div class="section-title-row"><h2>Your next challenges</h2><p>${stats.completedRuns ? `You've completed ${stats.completedRuns} quest${stats.completedRuns === 1 ? "" : "s"} so far!` : "Three missions to build better AI judgment."}</p></div>
    <div class="level-grid">${scenarios.map((scenario, i) => `<div class="level-card">
      <span class="level-card-lock">${i === 0 ? "READY TO PLAY" : `LEVEL ${i + 1}`}</span>
      <span class="card-symbol">${scenario.icon}</span><small>Mission ${scenario.number}</small>
      <h3>${scenario.name}</h3><p>${scenario.subtitle}. Learn by choosing what you would do.</p>
    </div>`).join("")}</div>
    <div class="details-strip"><div class="detail-item"><span>⚡</span> Earn XP for decisions</div><div class="detail-item"><span>🔀</span> Branching storylines</div><div class="detail-item"><span>💡</span> Feedback after each choice</div><div class="detail-item"><span>🏆</span> Progress and achievements</div></div>
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
    <div class="play-header"><span class="stage-pill">${scenario.icon} Mission ${scenario.number} · ${scenario.name}</span><button class="exit-button" data-action="exit" type="button">✕ &nbsp; Exit quest</button></div>
    <div class="progress-wrap" role="progressbar" aria-label="Quest progress" aria-valuemin="0" aria-valuemax="6" aria-valuenow="${questionNumber - 1}"><div class="progress-fill" style="width:${((questionNumber - 1) / (scenarios.length * DECISIONS_PER_LEVEL)) * 100}%"></div></div>
    <section class="question-card" aria-labelledby="question-heading">
      <div class="question-topline"><span class="mini-label">DECISION ${questionNumber} OF ${scenarios.length * DECISIONS_PER_LEVEL} · ${isFollowup ? "FOLLOW-UP" : "REAL-WORLD SCENARIO"}</span><span class="difficulty">${scenario.difficulty} LEVEL</span></div>
      <div class="coach-tip"><img class="coach-duo duo-peek" src="assets/duo-closeup.png" alt="" width="47" height="47" /><div><strong>PAUSE & THINK</strong><span>${isFollowup ? "Your first choice changed the story. What should happen next?" : "Spot the AI risk before you pick a response."}</span></div></div>
      <h1 class="question-title" id="question-heading">${isFollowup ? "The story continues..." : context.title}</h1>
      <p class="question-description">${isFollowup ? "Your next choice depends on the decision you just made. Think about consequences, not just rewards." : context.description}</p>
      <div class="simulation-card"><span class="simulation-avatar" aria-hidden="true">${isFollowup ? "💬" : "✦"}</span><div><div class="sim-title">${isFollowup ? "A new development" : "The AI / Team's message"}</div><p>${isFollowup ? question.aiOutput : context.aiOutput}</p></div></div>
      <div class="choose-label">${question.prompt}</div>
      <div class="option-grid">${question.options.map((option, index) => `<button type="button" class="option-button" data-action="choose" data-value="${index}"><span class="option-key">${index + 1}</span><span class="option-text">${option.text}</span><span class="option-arrow" aria-hidden="true">›</span></button>`).join("")}</div>
      <p class="hint-text">💡 There is no timer. Better reasoning matters more than speed. Tip: press 1, 2, or 3 to select.</p>
    </section>
  </div>`;
}

function renderFeedback() {
  const { session } = store;
  const option = currentQuestion().options[session.feedbackOption];
  if (!option) { session.view = "question"; render(); return; }
  const quality = qualityOf(option);
  const headings = { strong: "Great judgment!", partial: "You're on the right track.", risky: "Let's rethink that." };
  const captions = { strong: "You spotted the important ethical trade-off.", partial: "A good start, with room to strengthen your decision.", risky: "A risky choice is a chance to learn." };
  const icons = { strong: "🌟", partial: "💭", risky: "🧭" };
  const duoPhotos = { strong: "duo-cheering.png", partial: "duo-welcome.png", risky: "duo-closeup.png" };
  const duoMessages = { strong: "Amazing call!", partial: "Keep thinking!", risky: "Let's try again!" };
  const isLastStep = session.stepIndex === DECISIONS_PER_LEVEL - 1;
  const isLastLevel = session.levelIndex === scenarios.length - 1;
  const buttonText = isLastStep ? (isLastLevel ? "See my results" : "Next mission") : "Continue the story";
  app.innerHTML = `<div class="app-stage">
    <div class="play-header"><span class="stage-pill">${currentScenario().icon} Mission ${currentScenario().number} · Decision feedback</span><button class="exit-button" data-action="exit" type="button">✕ &nbsp; Exit quest</button></div>
    <div class="progress-wrap" role="progressbar" aria-label="Quest progress" aria-valuemin="0" aria-valuemax="6" aria-valuenow="${session.answers.length}"><div class="progress-fill" style="width:${(session.answers.length / (scenarios.length * DECISIONS_PER_LEVEL)) * 100}%"></div></div>
    <section class="question-card" aria-labelledby="feedback-heading">
      <div class="feedback-top"><div class="feedback-status"><span class="feedback-emblem ${quality}">${icons[quality]}</span><div><h2 id="feedback-heading">${headings[quality]}</h2><p>${captions[quality]}</p></div></div><div class="xp-reward">⚡ +${option.xp} XP</div></div>
      <div class="feedback-mascot-row"><div class="feedback-mascot ${quality}"><img src="assets/${duoPhotos[quality]}" class="${quality === "strong" ? "duo-celebrate duo-cut-background" : "duo-peek"}" alt="Duo mascot reacting to your decision" width="104" height="104" /></div><div class="mascot-bubble"><strong>${duoMessages[quality]}</strong><span>${quality === "strong" ? "The responsible choice can be rewarding." : quality === "partial" ? "Reflect on what you could improve." : "A mistake is a chance to learn. Review the consequence below."}</span></div></div>
      <div class="feedback-answer">YOUR DECISION</div><div class="feedback-chosen">“${option.text}”</div>
      <div class="feedback-explain"><div class="feedback-box"><h3>💡 Why it matters</h3><p>${option.rationale}</p></div><div class="feedback-box consequence"><h3>🔍 Possible consequence</h3><p>${option.consequence}</p></div></div>
      <div class="feedback-actions"><span>${isLastStep ? "Mission complete — ready for the next one?" : "Your decision shapes what happens next."}</span><button class="btn-primary" data-action="continue" type="button">${buttonText} <span aria-hidden="true">→</span></button></div>
    </section>
  </div>`;
}

function achievementList() {
  const { answers, totalXp } = store.session;
  const achievements = [];
  const trackNames = ["Truth Seeker", "Privacy Guardian", "Fairness Advocate"];
  const icons = ["🔎", "🔐", "⚖️"];
  scenarios.forEach((_, i) => {
    const levelAnswers = answers.filter((a) => a.levelIndex === i);
    if (levelAnswers.length === DECISIONS_PER_LEVEL && levelAnswers.every((a) => a.xp === 75)) {
      achievements.push({ label: trackNames[i], icon: icons[i] });
    }
  });
  if (totalXp >= maxXp() * .8) achievements.push({ label: "Critical Thinker", icon: "🧠" });
  if (!achievements.length) achievements.push({ label: "First Steps", icon: "🌱" });
  return achievements;
}

function renderResults() {
  const { session, stats } = store;
  const score = pct(session.totalXp, maxXp());
  const tier = score >= 80 ? "Responsible AI Champion" : score >= 55 ? "Thoughtful Learner" : "Curious Explorer";
  const messages = {
    "Responsible AI Champion": "You consistently identified risks and made informed choices. Keep testing your judgment on unfamiliar cases.",
    "Thoughtful Learner": "You've built a promising foundation. Revisit the challenges where a small oversight changed the outcome.",
    "Curious Explorer": "You've taken an important first step. Replay the challenges and focus on the explanations behind each decision.",
  };
  const celebrationPhoto = score >= 80 ? "duo-cheering.png" : score >= 55 ? "duo-welcome.png" : "duo-closeup.png";
  app.innerHTML = `<div class="app-stage">
    <section class="result-hero" aria-labelledby="results-heading"><div class="result-duo-wrap"><span class="result-sparkle" aria-hidden="true">✦</span><img src="assets/${celebrationPhoto}" class="result-duo ${score >= 80 ? "duo-celebrate duo-cut-background" : "duo-float"}" alt="Duo mascot celebrating the completed practice" width="112" height="112"/><span class="result-sparkle" aria-hidden="true">✦</span></div><div class="eyebrow">ALL MISSIONS COMPLETED · 🏆</div><h1 id="results-heading">${tier}</h1><p>${messages[tier]}</p>
      <div class="result-metrics"><div class="result-metric"><div class="metric-number">${session.totalXp}</div><div class="metric-label">XP earned / ${maxXp()}</div></div><div class="result-metric"><div class="metric-number">${score}%</div><div class="metric-label">Practice score</div></div><div class="result-metric"><div class="metric-number">${session.bestDecisionStreak}</div><div class="metric-label">Best decision streak</div></div></div>
    </section>
    <section class="results-panel"><h2>Competency snapshot</h2><p>How well did you apply ethical AI judgment in each simulated context?</p>
      ${scenarios.map((scenario, i) => {
        const xp = session.answers.filter((a) => a.levelIndex === i).reduce((acc, a) => acc + a.xp, 0);
        const percent = pct(xp, DECISIONS_PER_LEVEL * MAX_XP_PER_DECISION);
        return `<div class="performance-row"><span>${scenario.icon} ${scenario.name}</span><div class="result-bar"><span style="width:${percent}%"></span></div><strong>${percent}%</strong></div>`;
      }).join("")}
      <h2 style="font-size:17px;margin-top:24px">Achievements unlocked</h2><div class="badges">${achievementList().map((a) => `<span class="achievement">${a.icon} ${a.label}</span>`).join("")}</div>
      <div class="reflection-callout"><strong>Remember:</strong> This is a formative practice score, not a validated proficiency credential. A formal assessment should use new cases and independent scoring. ${stats.dailyStreak ? `You've also practiced on ${stats.dailyStreak} consecutive day${stats.dailyStreak > 1 ? "s" : ""}.` : ""}</div>
      <div class="result-actions"><button type="button" class="btn-primary" data-action="replay">↻ &nbsp; Practice again</button><button type="button" class="btn-secondary" data-action="home">Back to home</button></div>
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
  if (!window.confirm("Reset your saved best score, streak, and current quest?")) return;
  store = freshStore();
  persist();
  render(); scrollUp();
});

render();
