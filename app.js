'use strict';

const translatable = [...document.querySelectorAll('[data-zh]')];
const englishContent = new Map(translatable.map(element => [element, element.innerHTML]));
const languageButton = document.getElementById('language-toggle');
let language = 'en';

function setLanguage(nextLanguage) {
  language = nextLanguage === 'zh' ? 'zh' : 'en';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  translatable.forEach(element => {
    element.innerHTML = language === 'zh' ? element.dataset.zh : englishContent.get(element);
  });
  languageButton.textContent = language === 'zh' ? 'EN' : '中文';
  languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : 'Switch to Chinese');
  languageButton.title = languageButton.getAttribute('aria-label');
  try { localStorage.setItem('chengyan-homepage-language', language); } catch (_) { /* Page works without storage. */ }
}
languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
try { if (localStorage.getItem('chengyan-homepage-language') === 'zh') setLanguage('zh'); } catch (_) { /* Default to English. */ }

const menuButton = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const navLinks = [...navigation.querySelectorAll('a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
let scrollQueued = false;
function updateActiveSection() {
  let current = sections[0];
  sections.forEach(section => { if (section.getBoundingClientRect().top <= 155) current = section; });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) current = sections[sections.length - 1];
  navLinks.forEach(link => {
    const active = link.hash === `#${current.id}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
  scrollQueued = false;
}
window.addEventListener('scroll', () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateActiveSection); } }, {passive: true});
updateActiveSection();

const citations = {
  gtasr: `@inproceedings{deng2026gtasr,
  title     = {Joint Geometric and Trajectory Consistency Learning for One-Step Real-World Super-Resolution},
  author    = {Deng, Chengyan and Chen, Zhangquan and Yu, Li and Zhang, Kai and Zhou, Xue and Zhang, Wang},
  booktitle = {Proceedings of the 43rd International Conference on Machine Learning},
  series    = {Proceedings of Machine Learning Research},
  volume    = {306},
  pages     = {23891--23916},
  year      = {2026},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v306/deng26e.html}
}`,
  ihmambasr: `@article{deng2026ihmambasr,
  title   = {{IHMambaSR}: An Importance-Guided Hierarchical Mamba with Dynamic Prompt for Single Image Super-Resolution},
  author  = {Deng, Chengyan and Zhang, Kai and Yang, Lieqiang and Zhang, Wang and Yu, Li},
  journal = {Pattern Recognition},
  volume  = {175},
  pages   = {113057},
  year    = {2026},
  doi     = {10.1016/j.patcog.2026.113057}
}`,
  op4ksr: `@misc{deng2026op4ksr,
  title         = {{OP4KSR}: One-Step Patch-Free 4K Super-Resolution with Periodic Artifact Suppression},
  author        = {Deng, Chengyan and Yu, Pengbin and Chen, Zhentao and Shen, Wei and Zhang, Kai and Li, Meng and Yuan, Lunxi and Zhou, Xue and Yu, Li},
  year          = {2026},
  eprint        = {2605.13457},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CV},
  url           = {https://arxiv.org/abs/2605.13457}
}`
};
const citationDialog = document.getElementById('citation-dialog');
const citationText = document.getElementById('citation-text');
const copyStatus = document.getElementById('copy-status');
document.querySelectorAll('[data-citation]').forEach(button => button.addEventListener('click', () => {
  citationText.textContent = citations[button.dataset.citation];
  copyStatus.textContent = '';
  citationDialog.showModal();
}));
document.getElementById('copy-citation').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(citationText.textContent);
    copyStatus.textContent = language === 'zh' ? '已复制到剪贴板' : 'Copied to clipboard';
  } catch (_) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citationText);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = language === 'zh' ? '已选中引用，请按 Ctrl+C / ⌘C 复制。' : 'Citation selected. Press Ctrl+C / ⌘C to copy.';
  }
});

const figureDialog = document.getElementById('figure-dialog');
document.querySelectorAll('[data-figure]').forEach(button => button.addEventListener('click', () => {
  document.getElementById('figure-title').textContent = button.dataset.caption;
  document.getElementById('figure-image').src = button.dataset.figure;
  document.getElementById('figure-image').alt = button.querySelector('img').alt;
  figureDialog.showModal();
}));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
});
