/**
 * nav.js — shared navigation component
 * Include this script in every page, then call:
 *   renderNav({ current: 'home' | 'articles' | 'about' })
 */

function renderNav(opts = {}) {
  const { current = '' } = opts;
  const root = document.querySelector('.site-nav');
  if (!root) return;

  // Detect depth to build correct relative paths
  const depth = (window.location.pathname.match(/\//g) || []).length - 1;
  const base = depth <= 1 ? './' : '../'.repeat(depth - 1);

  root.innerHTML = `
    <a class="logo" href="${base}index.html">
      claude<span>articles</span>
    </a>
    <nav class="nav-links">
      <a class="nav-link ${current === 'home' ? 'active' : ''}" href="${base}index.html">Home</a>
      <a class="nav-link ${current === 'articles' ? 'active' : ''}" href="${base}index.html#articles">Articles</a>
      <a class="nav-link" href="https://github.com/username/username.github.io" target="_blank" rel="noopener">GitHub ↗</a>
    </nav>
  `;
}

// Auto-render if the element exists on load
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.site-nav')) {
    // Infer current page from path
    const path = window.location.pathname;
    const current = path === '/' || path.endsWith('index.html') && path.split('/').length <= 2
      ? 'home' : 'articles';
    renderNav({ current });
  }
});
