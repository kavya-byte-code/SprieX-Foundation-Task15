"use strict";

/* ---------- Data ---------- */
const BENEFITS = ["Health insurance", "Flexible working hours", "Learning budget", "Paid leave and holidays"];

const JOBS = [
  { id: 1, title: "Frontend Developer", company: "NovaStack Technologies", location: "Bengaluru", type: "Full-time", level: "Mid", category: "Engineering", mode: "Hybrid", min: 8, max: 14, posted: 1, skills: ["React", "JavaScript", "CSS"],
    summary: "Build fast, accessible interfaces for a product used by thousands of small businesses every day.",
    duties: ["Build responsive UI components with React", "Work with designers to turn mockups into polished pages", "Write clean, tested and reusable code"],
    reqs: ["2+ years of JavaScript experience", "Strong HTML and CSS fundamentals", "Experience with Git and code reviews"] },
  { id: 2, title: "UI/UX Designer", company: "PixelCraft Studio", location: "Hyderabad", type: "Full-time", level: "Mid", category: "Design", mode: "On-site", min: 6, max: 12, posted: 3, skills: ["Figma", "Prototyping", "User Research"],
    summary: "Design clear, friendly experiences for mobile and web products across several client projects.",
    duties: ["Create wireframes, flows and high-fidelity designs", "Run usability tests and summarise findings", "Maintain the studio design system"],
    reqs: ["Portfolio showing 3+ shipped projects", "Proficiency in Figma", "Good communication with developers"] },
  { id: 3, title: "Data Analyst", company: "Insightly Analytics", location: "Pune", type: "Full-time", level: "Entry", category: "Data", mode: "Hybrid", min: 4, max: 7, posted: 0, skills: ["SQL", "Power BI", "Excel"],
    summary: "Turn raw business data into dashboards and insights that help teams make better decisions.",
    duties: ["Clean and analyse data using SQL and Excel", "Build Power BI dashboards for clients", "Present findings to non-technical teams"],
    reqs: ["Bachelor's degree in any quantitative field", "Working knowledge of SQL", "Curiosity and attention to detail"] },
  { id: 4, title: "Backend Engineer (Node.js)", company: "CloudNest Systems", location: "Remote (India)", type: "Full-time", level: "Senior", category: "Engineering", mode: "Remote", min: 18, max: 30, posted: 5, skills: ["Node.js", "MongoDB", "AWS"],
    summary: "Own the design and scaling of APIs that power a fast-growing logistics platform.",
    duties: ["Design and maintain REST APIs", "Improve performance and reliability of services", "Mentor junior engineers and review code"],
    reqs: ["5+ years of backend experience", "Strong knowledge of Node.js and databases", "Experience deploying on AWS or similar"] },
  { id: 5, title: "Digital Marketing Executive", company: "BrightPath Media", location: "Vijayawada", type: "Full-time", level: "Entry", category: "Marketing", mode: "On-site", min: 3, max: 5, posted: 2, skills: ["SEO", "Social Media", "Analytics"],
    summary: "Plan and run online campaigns that bring new customers to local and regional brands.",
    duties: ["Run social media and search campaigns", "Track results in Google Analytics", "Coordinate with the content team"],
    reqs: ["Basic knowledge of SEO and social platforms", "Good written English", "Willingness to learn quickly"] },
  { id: 6, title: "Web Development Intern", company: "GreenLeaf Labs", location: "Visakhapatnam", type: "Internship", level: "Entry", category: "Engineering", mode: "Hybrid", min: 2, max: 3, label: "₹15k–25k / month", posted: 1, skills: ["HTML", "CSS", "JavaScript"],
    summary: "A 3-month internship for students who want hands-on experience building real websites.",
    duties: ["Build web pages from design files", "Fix bugs and improve existing features", "Learn Git workflows with a mentor"],
    reqs: ["Basics of HTML, CSS and JavaScript", "Currently studying or recently graduated", "Eagerness to learn and ask questions"] },
  { id: 7, title: "Product Manager", company: "Orbit Commerce", location: "Mumbai", type: "Full-time", level: "Senior", category: "Product", mode: "Hybrid", min: 24, max: 38, posted: 6, skills: ["Roadmaps", "Analytics", "Stakeholders"],
    summary: "Lead the roadmap for the checkout experience of a leading online marketplace.",
    duties: ["Define product vision and priorities", "Work with engineering and design to ship features", "Use data to measure and improve results"],
    reqs: ["5+ years in product management", "Track record of shipping consumer products", "Excellent communication skills"] },
  { id: 8, title: "HR Recruiter", company: "TalentBridge Consulting", location: "Chennai", type: "Full-time", level: "Entry", category: "Human Resources", mode: "On-site", min: 3, max: 5, posted: 4, skills: ["Sourcing", "Interviewing", "Communication"],
    summary: "Help growing companies find the right people by managing the hiring process end to end.",
    duties: ["Source candidates from job portals and networks", "Screen resumes and schedule interviews", "Keep candidates updated through the process"],
    reqs: ["Strong interpersonal skills", "Basic understanding of recruitment", "Comfortable making phone calls"] },
  { id: 9, title: "Content Writer", company: "Inkwell Media", location: "Remote (India)", type: "Part-time", level: "Entry", category: "Marketing", mode: "Remote", min: 2, max: 4, posted: 7, skills: ["Writing", "SEO", "Editing"],
    summary: "Write clear, engaging articles and blog posts for technology and education clients.",
    duties: ["Research and write 8–10 articles a month", "Edit content for clarity and accuracy", "Follow SEO and brand guidelines"],
    reqs: ["Excellent English writing skills", "Ability to meet deadlines", "Samples of previous writing"] },
  { id: 10, title: "DevOps Engineer", company: "Stackline Cloud", location: "Hyderabad", type: "Full-time", level: "Senior", category: "Engineering", mode: "Hybrid", min: 16, max: 28, posted: 2, skills: ["Docker", "CI/CD", "Kubernetes"],
    summary: "Build and maintain the delivery pipelines and cloud infrastructure behind our products.",
    duties: ["Automate builds, tests and deployments", "Monitor systems and respond to incidents", "Improve security and cost efficiency"],
    reqs: ["4+ years in DevOps or SRE roles", "Hands-on experience with Docker and Kubernetes", "Scripting skills in Bash or Python"] },
  { id: 11, title: "Customer Support Associate", company: "HelpHive Services", location: "Chennai", type: "Contract", level: "Entry", category: "Operations", mode: "On-site", min: 2, max: 4, posted: 9, skills: ["Communication", "CRM", "Problem Solving"],
    summary: "Be the friendly first point of contact for customers using our software.",
    duties: ["Answer customer queries by chat and email", "Log issues in the CRM tool", "Escalate technical problems to the right team"],
    reqs: ["Clear and polite communication", "Basic computer skills", "Comfortable working in shifts"] },
  { id: 12, title: "Business Analyst", company: "FinEdge Solutions", location: "Bengaluru", type: "Full-time", level: "Mid", category: "Data", mode: "Hybrid", min: 9, max: 15, posted: 3, skills: ["Requirements", "SQL", "Documentation"],
    summary: "Bridge business and technology teams on financial software projects.",
    duties: ["Gather and document business requirements", "Write user stories and acceptance criteria", "Support testing and user training"],
    reqs: ["2–4 years as a business analyst", "Good understanding of SQL and data", "Strong documentation skills"] }
];

const TYPES = ["Full-time", "Part-time", "Internship", "Contract"];
const LEVELS = [["Entry", "Entry level (0–2 years)"], ["Mid", "Mid level (2–5 years)"], ["Senior", "Senior (5+ years)"]];
const PAGE_SIZE = 6;

/* ---------- Helpers ---------- */
const $ = (sel) => document.querySelector(sel);

const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const initials = (name) => name.split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
const hue = (name) => [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
const salaryText = (j) => j.label || `₹${j.min}–${j.max} LPA`;
const postedText = (d) => (d === 0 ? "Posted today" : d === 1 ? "Posted 1 day ago" : `Posted ${d} days ago`);

const storage = {
  read(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch (e) { return []; } },
  write(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* storage unavailable */ } }
};

/* ---------- State ---------- */
const saved = new Set(storage.read("cs_saved"));
const applied = new Set(storage.read("cs_applied"));
const state = { q: "", loc: "", types: new Set(), levels: new Set(), category: "", minSalary: 0, remote: false, sort: "newest", savedOnly: false, shown: PAGE_SIZE };

/* ---------- Elements ---------- */
const el = {
  list: $("#jobList"), count: $("#resultCount"), empty: $("#emptyState"), more: $("#loadMore"),
  keyword: $("#keyword"), location: $("#location"), category: $("#category"), salary: $("#salary"),
  salaryOut: $("#salaryOut"), remote: $("#remoteOnly"), sort: $("#sort"), savedToggle: $("#savedToggle"),
  savedCount: $("#savedCount"), filters: $("#filters"), overlay: $("#overlay"),
  dialog: $("#jobDialog"), dialogBody: $("#dialogBody"), toast: $("#toast")
};

/* ---------- Filtering ---------- */
function getResults() {
  const words = state.q.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const list = JOBS.filter((j) => {
    const haystack = [j.title, j.company, j.category, j.type, j.location, ...j.skills].join(" ").toLowerCase();
    if (!words.every((w) => haystack.includes(w))) return false;
    if (state.loc && j.location !== state.loc) return false;
    if (state.types.size && !state.types.has(j.type)) return false;
    if (state.levels.size && !state.levels.has(j.level)) return false;
    if (state.category && j.category !== state.category) return false;
    if (j.max < state.minSalary) return false;
    if (state.remote && j.mode !== "Remote") return false;
    if (state.savedOnly && !saved.has(j.id)) return false;
    return true;
  });
  const sorters = {
    newest: (a, b) => a.posted - b.posted,
    salary: (a, b) => b.max - a.max,
    title: (a, b) => a.title.localeCompare(b.title)
  };
  return list.sort(sorters[state.sort]);
}

/* ---------- Rendering ---------- */
const bookmarkIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z"/></svg>';

function cardHTML(j) {
  const isSaved = saved.has(j.id);
  return `
    <article class="job-card">
      <div class="logo" style="--h:${hue(j.company)}" aria-hidden="true">${esc(initials(j.company))}</div>
      <div class="job-main">
        <div class="job-top">
          <h3><button type="button" class="title-link" data-action="open" data-id="${j.id}">${esc(j.title)}</button></h3>
          ${j.posted <= 2 ? '<span class="badge-new">New</span>' : ""}
        </div>
        <p class="company">${esc(j.company)}</p>
        <ul class="meta">
          <li>${esc(j.location)}</li>
          <li>${esc(j.type)}</li>
          <li>${esc(j.mode)}</li>
          <li class="salary">${esc(salaryText(j))}</li>
        </ul>
        <ul class="skills">${j.skills.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      </div>
      <div class="job-side">
        <button type="button" class="save-btn" data-action="save" data-id="${j.id}" aria-pressed="${isSaved}" aria-label="${isSaved ? "Remove" : "Save"} ${esc(j.title)}">${bookmarkIcon}</button>
        <span class="posted">${postedText(j.posted)}</span>
        <button type="button" class="btn btn-outline" data-action="open" data-id="${j.id}">${applied.has(j.id) ? "Applied · View" : "View details"}</button>
      </div>
    </article>`;
}

function render() {
  const results = getResults();
  const visible = results.slice(0, state.shown);
  el.list.innerHTML = visible.map(cardHTML).join("");
  el.count.innerHTML = `${results.length} ${results.length === 1 ? "job" : "jobs"} found` +
    (results.length ? ` <span>· showing ${visible.length}</span>` : "");
  el.empty.hidden = results.length > 0;
  el.more.hidden = results.length <= state.shown;
  el.savedCount.textContent = saved.size;
  el.savedToggle.setAttribute("aria-pressed", state.savedOnly);
  el.salaryOut.textContent = state.minSalary ? `₹${state.minSalary} LPA+` : "Any";
}

function update() { state.shown = PAGE_SIZE; render(); }

/* ---------- Job details dialog ---------- */
function bulletList(items) { return `<ul class="bullets">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`; }

function openJob(id) {
  const j = JOBS.find((x) => x.id === id);
  if (!j) return;
  const isSaved = saved.has(id);
  el.dialogBody.innerHTML = `
    <div class="dlg-head">
      <div class="logo" style="--h:${hue(j.company)}" aria-hidden="true">${esc(initials(j.company))}</div>
      <div class="dlg-title">
        <h2 id="dlgTitle">${esc(j.title)}</h2>
        <p class="company">${esc(j.company)} · ${esc(j.location)}</p>
      </div>
      <button type="button" class="icon-btn" data-action="close" aria-label="Close job details">&times;</button>
    </div>
    <div class="dlg-body">
      <dl class="facts">
        <div><dt>Salary</dt><dd>${esc(salaryText(j))}</dd></div>
        <div><dt>Job type</dt><dd>${esc(j.type)}</dd></div>
        <div><dt>Work mode</dt><dd>${esc(j.mode)}</dd></div>
        <div><dt>Experience</dt><dd>${esc(j.level)} level</dd></div>
      </dl>
      <section><h3>About the role</h3><p>${esc(j.summary)}</p></section>
      <section><h3>Responsibilities</h3>${bulletList(j.duties)}</section>
      <section><h3>Requirements</h3>${bulletList(j.reqs)}</section>
      <section><h3>Benefits</h3>${bulletList(BENEFITS)}</section>
      <section><h3>Skills</h3><ul class="skills">${j.skills.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></section>
    </div>
    <div class="dlg-foot">
      <button type="button" class="btn btn-outline" data-action="save-dialog" data-id="${id}">${isSaved ? "Saved" : "Save job"}</button>
      ${applied.has(id)
        ? '<button type="button" class="btn btn-primary" disabled>Applied</button>'
        : `<button type="button" class="btn btn-primary" data-action="apply" data-id="${id}">Apply now</button>`}
    </div>`;
  if (!el.dialog.open) { el.dialog.showModal(); document.body.classList.add("lock"); }
  el.dialog.scrollTop = 0;
}

function openApplyForm(id) {
  const j = JOBS.find((x) => x.id === id);
  el.dialogBody.innerHTML = `
    <div class="dlg-head">
      <div class="dlg-title">
        <h2 id="dlgTitle">Apply for ${esc(j.title)}</h2>
        <p class="company">${esc(j.company)}</p>
      </div>
      <button type="button" class="icon-btn" data-action="close" aria-label="Close application form">&times;</button>
    </div>
    <form class="dlg-body form" id="applyForm" novalidate>
      <div class="row"><label for="fName">Full name</label><input id="fName" name="name" type="text" autocomplete="name"><span class="error" data-for="name"></span></div>
      <div class="row"><label for="fEmail">Email address</label><input id="fEmail" name="email" type="email" autocomplete="email"><span class="error" data-for="email"></span></div>
      <div class="row"><label for="fPhone">Mobile number</label><input id="fPhone" name="phone" type="tel" inputmode="numeric" maxlength="10" placeholder="10-digit number" autocomplete="tel"><span class="error" data-for="phone"></span></div>
      <div class="row"><label for="fNote">Why are you a good fit? (optional)</label><textarea id="fNote" name="note" rows="4" maxlength="400"></textarea></div>
      <div class="dlg-foot" style="margin: 0 -24px -20px;">
        <button type="button" class="btn btn-outline" data-action="back" data-id="${id}">Back to details</button>
        <button type="submit" class="btn btn-primary">Submit application</button>
      </div>
    </form>`;
  el.dialog.scrollTop = 0;
  $("#fName").focus();
  $("#applyForm").addEventListener("submit", (e) => submitApplication(e, id));
}

function submitApplication(e, id) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  const rules = {
    name: [data.name.trim().length >= 3, "Enter your full name (at least 3 characters)."],
    email: [/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim()), "Enter a valid email address, like name@example.com."],
    phone: [/^[6-9]\d{9}$/.test(data.phone.trim()), "Enter a valid 10-digit mobile number."]
  };
  let firstBad = null;
  Object.entries(rules).forEach(([field, [ok, msg]]) => {
    const input = form.elements[field];
    form.querySelector(`[data-for="${field}"]`).textContent = ok ? "" : msg;
    input.classList.toggle("invalid", !ok);
    input.setAttribute("aria-invalid", String(!ok));
    if (!ok && !firstBad) firstBad = input;
  });
  if (firstBad) { firstBad.focus(); return; }
  applied.add(id);
  storage.write("cs_applied", [...applied]);
  const j = JOBS.find((x) => x.id === id);
  showToast(`Application sent for ${j.title}.`);
  openJob(id);
  render();
}

function closeDialog() { if (el.dialog.open) el.dialog.close(); }

/* ---------- Actions ---------- */
function toggleSave(id) {
  const j = JOBS.find((x) => x.id === id);
  if (saved.has(id)) { saved.delete(id); showToast(`Removed ${j.title} from saved jobs.`); }
  else { saved.add(id); showToast(`Saved ${j.title}.`); }
  storage.write("cs_saved", [...saved]);
  render();
}

let toastTimer;
function showToast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.toast.classList.remove("show"), 2600);
}

function clearFilters() {
  Object.assign(state, { q: "", loc: "", category: "", minSalary: 0, remote: false, savedOnly: false, sort: "newest" });
  state.types.clear();
  state.levels.clear();
  el.keyword.value = ""; el.location.value = ""; el.category.value = "";
  el.salary.value = 0; el.remote.checked = false; el.sort.value = "newest";
  document.querySelectorAll("#typeFilters input, #levelFilters input").forEach((c) => (c.checked = false));
  update();
}

function toggleDrawer(open) {
  el.filters.classList.toggle("open", open);
  el.overlay.classList.toggle("show", open);
}

/* ---------- Setup ---------- */
function buildFilters() {
  [...new Set(JOBS.map((j) => j.location))].sort().forEach((l) => el.location.add(new Option(l, l)));
  [...new Set(JOBS.map((j) => j.category))].sort().forEach((c) => el.category.add(new Option(c, c)));

  const checkbox = (group, value, text) =>
    `<label><input type="checkbox" data-group="${group}" value="${esc(value)}"> ${esc(text)}</label>`;
  $("#typeFilters").innerHTML = TYPES.map((t) => checkbox("types", t, t)).join("");
  $("#levelFilters").innerHTML = LEVELS.map(([v, t]) => checkbox("levels", v, t)).join("");

  $("#statJobs").textContent = JOBS.length;
  $("#statCompanies").textContent = new Set(JOBS.map((j) => j.company)).size;
  $("#statRemote").textContent = JOBS.filter((j) => j.mode === "Remote").length;
}

function bindEvents() {
  el.keyword.addEventListener("input", () => { state.q = el.keyword.value; update(); });
  el.location.addEventListener("change", () => { state.loc = el.location.value; update(); });
  el.category.addEventListener("change", () => { state.category = el.category.value; update(); });
  el.salary.addEventListener("input", () => { state.minSalary = Number(el.salary.value); update(); });
  el.remote.addEventListener("change", () => { state.remote = el.remote.checked; update(); });
  el.sort.addEventListener("change", () => { state.sort = el.sort.value; update(); });

  $("#searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    state.q = el.keyword.value;
    state.loc = el.location.value;
    update();
    $("#jobs").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll("[data-quick]").forEach((b) =>
    b.addEventListener("click", () => {
      el.keyword.value = b.dataset.quick;
      state.q = b.dataset.quick;
      update();
      $("#jobs").scrollIntoView({ behavior: "smooth" });
    }));

  document.querySelector(".filters").addEventListener("change", (e) => {
    const g = e.target.dataset.group;
    if (!g) return;
    e.target.checked ? state[g].add(e.target.value) : state[g].delete(e.target.value);
    update();
  });

  el.savedToggle.addEventListener("click", () => { state.savedOnly = !state.savedOnly; update(); });
  $("#navSaved").addEventListener("click", () => {
    state.savedOnly = true; update();
    $("#jobs").scrollIntoView({ behavior: "smooth" });
  });
  el.more.addEventListener("click", () => { state.shown += PAGE_SIZE; render(); });
  $("#clearBtn").addEventListener("click", clearFilters);
  $("#emptyClear").addEventListener("click", clearFilters);
  $("#openFilters").addEventListener("click", () => toggleDrawer(true));
  $("#closeFilters").addEventListener("click", () => toggleDrawer(false));
  $("#applyFilters").addEventListener("click", () => toggleDrawer(false));
  el.overlay.addEventListener("click", () => toggleDrawer(false));

  el.list.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (btn.dataset.action === "open") openJob(id);
    if (btn.dataset.action === "save") toggleSave(id);
  });

  el.dialog.addEventListener("click", (e) => {
    if (e.target === el.dialog) return closeDialog();
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    switch (btn.dataset.action) {
      case "close": closeDialog(); break;
      case "apply": openApplyForm(id); break;
      case "back": openJob(id); break;
      case "save-dialog": toggleSave(id); openJob(id); break;
    }
  });
  el.dialog.addEventListener("close", () => document.body.classList.remove("lock"));
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleDrawer(false); });
  window.addEventListener("resize", () => { if (window.innerWidth >= 900) toggleDrawer(false); });
}

buildFilters();
bindEvents();
render();