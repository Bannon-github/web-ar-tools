#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const masterplanPath = path.join(process.cwd(), 'planning', 'masterplan.yaml');
const outPath = process.env.GITHUB_OUTPUT;

function setOutput(key, value) {
  if (!outPath) return;
  fs.appendFileSync(outPath, `${key}=${value}\n`);
}

function slugify(input) {
  return String(input || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 48) || 'task';
}

if (!fs.existsSync(masterplanPath)) {
  setOutput('task_id', '');
  process.exit(0);
}

const text = fs.readFileSync(masterplanPath, 'utf8');
const lines = text.split(/\r?\n/);

let currentTask = null;
const tasks = [];

for (const line of lines) {
  const idMatch = line.match(/^\s*- id: (TASK-\d+)/);
  if (idMatch) {
    if (currentTask) tasks.push(currentTask);
    currentTask = { id: idMatch[1], title: '', package: 'repo' };
    continue;
  }

  if (currentTask) {
    const titleMatch = line.match(/^\s*title: (.+)$/);
    if (titleMatch && !currentTask.title) currentTask.title = titleMatch[1].trim();

    const packageMatch = line.match(/^\s*package: (.+)$/);
    if (packageMatch) currentTask.package = packageMatch[1].trim();
  }
}
if (currentTask) tasks.push(currentTask);

if (tasks.length === 0) {
  setOutput('task_id', '');
  process.exit(0);
}

const next = tasks[0];
setOutput('task_id', next.id);
setOutput('title', next.title || 'Untitled task');
setOutput('package', next.package || 'repo');
setOutput('slug', slugify(next.title));
