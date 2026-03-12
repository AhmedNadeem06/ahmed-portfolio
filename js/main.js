/* ============================================
   Ahmed Portfolio — main.js
   ============================================ */

// ---- Custom Cursor ----
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursorDot');

document.addEventListener('mousemove', e => {
  cursor.style.left = (e.clientX - 9) + 'px';
  cursor.style.top  = (e.clientY - 9) + 'px';
  dot.style.left    = e.clientX + 'px';
  dot.style.top     = e.clientY + 'px';
});

document.querySelectorAll('a, button, input').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.6)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// ---- Boot Sequence ----
setTimeout(() => {
  document.getElementById('boot').classList.add('hidden');
  setTimeout(() => {
    document.getElementById('boot').style.display = 'none';
    document.getElementById('main').classList.add('visible');
    initSkillBars();
    renderProjects();
  }, 800);
}, 2800);

// ============================================
// SKILLS
// Edit name, level (0-100), and label below
// ============================================
const skills = [
  { name: 'Python',          level: 85, label: 'ADVANCED'   },
  { name: 'SQL',             level: 85, label: 'ADVANCED'   },
  { name: 'Power BI',        level: 80, label: 'ADVANCED'   },
  { name: 'JavaScript',      level: 78, label: 'PROFICIENT' },
  { name: 'Excel / Power Query', level: 80, label: 'ADVANCED' },
  { name: 'React',           level: 72, label: 'PROFICIENT' },
  { name: 'HTML / CSS',      level: 75, label: 'PROFICIENT' },
  { name: 'TypeScript',      level: 65, label: 'PROFICIENT' },
  { name: 'PyTorch',         level: 60, label: 'LEARNING'   },
  { name: 'Git',             level: 75, label: 'PROFICIENT' },
];

function initSkillBars() {
  const grid = document.getElementById('skillsGrid');

  skills.forEach((skill, i) => {
    const el = document.createElement('div');
    el.className = 'skill-item';
    el.style.animationDelay = (i * 0.06) + 's';
    el.innerHTML = `
      <div class="skill-name">${skill.name}</div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-width="${skill.level}"></div>
      </div>
      <div class="skill-level">${skill.label} — ${skill.level}%</div>
    `;
    grid.appendChild(el);
  });

  // Animate bars in after a short delay
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 300);
}

// ============================================
// PROJECTS
// Edit name, stack, desc, demo, and repo below
// ============================================
const projects = [
  {
    name:  'EV ADOPTION FORECASTING',
    stack: 'SQL · Python · Power BI · Public APIs',
    desc:  '// Analytics platform evaluating EV adoption trends in Ontario. SQL data warehouse integrating EV registration + charging infrastructure data, with Python forecasting models projecting 3-5 year growth.',
    demo:  '#',
    repo:  '#',
  },
  {
    name:  'VEHICLE BRAND ANALYTICS',
    stack: 'SQL · Python · Power BI · Excel',
    desc:  '// End-to-end analytics pipeline identifying the most prevalent car brands in Ontario. Python ETL pipeline, SQL data modeling, and interactive Power BI dashboards with market share and YoY growth views.',
    demo:  '#',
    repo:  '#',
  },
  {
    name:  'DATA CLEANING PIPELINE',
    stack: 'Excel · Power Query · ETL',
    desc:  '// Repeatable Power Query ETL pipeline transforming messy transaction data into analysis-ready tables. Automated type casting, deduplication, and standardization with one-click refresh for future updates.',
    demo:  '#',
    repo:  '#',
  },
];

function renderProjects() {
  const grid = document.getElementById('projectsGrid');

  projects.forEach((project, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-index">0${i + 1}</div>
      <div class="project-name">${project.name}</div>
      <div class="project-stack">${project.stack}</div>
      <div class="project-desc">${project.desc}</div>
      <div class="project-links">
        <a href="${project.demo}" class="project-link">▸ live demo</a>
        <a href="${project.repo}" class="project-link">▸ view repo</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ============================================
// TERMINAL EASTER EGG
// Add your own commands below!
// ============================================
const responses = {
  'hello':        '> Hello! Nice to meet you.',
  'hi':           '> Hi there! 👋',
  'help':         '> Commands: hello, skills, projects, contact, hire',
  'skills':       '> React, JavaScript, CSS, HTML5, TypeScript, Git',
  'projects':     '> Scroll up to view my 3 projects!',
  'contact':      '> Drop me an email at you@email.com',
  'hire':         '> Great choice. Let\'s talk — you@email.com',
  'sudo hire me': '> Permission granted. Sending offer letter...',
};

const fakeInput = document.getElementById('fakeInput');

fakeInput.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;

  const val = fakeInput.value.trim().toLowerCase();
  const res = responses[val] || `> command not found: ${val}. Try 'help'.`;

  const line = document.createElement('div');
  line.className = 'contact-line';
  line.style.cssText = 'color: var(--green-dim); font-size: 12px; margin-top: 6px;';
  line.textContent = res;

  fakeInput.parentElement.parentElement.insertBefore(line, fakeInput.parentElement);
  fakeInput.value = '';
});
