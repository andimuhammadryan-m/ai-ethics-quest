// Optional local check. Run with: node test-smoke.js
// Requires Node.js, but the website itself does not.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const folder = __dirname;
const elements = {};
for (const id of ["app", "reset-progress", "header-xp", "header-streak", "sidebar-best", "journey-count", "journey-track"]) {
  elements[id] = { innerHTML: "", textContent: "", addEventListener() {} };
}

const saved = new Map();
const document = {
  getElementById: (id) => elements[id],
  addEventListener() {},
  activeElement: { tagName: "BODY" },
};
const context = vm.createContext({
  document,
  localStorage: {
    getItem: (key) => saved.get(key) || null,
    setItem: (key, value) => saved.set(key, value),
  },
  window: { scrollTo() {}, matchMedia: () => ({ matches: true }), confirm: () => true },
  Date,
});
vm.runInContext(fs.readFileSync(path.join(folder, "app.js"), "utf8"), context);
const call = (source) => vm.runInContext(source, context);
const screen = () => elements.app.innerHTML;

assert.match(screen(), /What would/);
assert.match(screen(), /duo-welcome-clean\.png/);
assert.doesNotMatch(screen(), /art-orbit|duo-cut-background|floating-xp/);

call('startNew()');
assert.match(screen(), /A suspicious source/);
call('chooseOption(0)');
assert.match(screen(), /Good call!/);
assert.match(screen(), /duo-cheering-clean\.png/);
call('continueGame()');
assert.match(screen(), /article anywhere/);
call('chooseOption(0)');
call('continueGame()');
assert.match(screen(), /survey spreadsheet/i);

for (let remaining = 0; remaining < 4; remaining++) {
  call('chooseOption(0)');
  call('continueGame()');
}
assert.match(screen(), /Nice work!/);
assert.match(screen(), /450/);
assert.equal(call('store.session.totalXp'), 450);
assert.equal(call('store.stats.completedRuns'), 1);

call('startNew()');
call('chooseOption(2)');
assert.match(screen(), /take another look/);
assert.match(screen(), /duo-welcome-clean\.png/);
call('continueGame()');
assert.match(screen(), /teammate realizes the article/i);

for (const filename of ["duo-welcome-clean.png", "duo-cheering-clean.png", "duo-closeup.png"]) {
  assert.ok(fs.existsSync(path.join(folder, "assets", filename)), `${filename} must exist`);
}

console.log("Passed: page copy, transparent mascot references, all 6 decisions, XP, results, and recovery branch.");
